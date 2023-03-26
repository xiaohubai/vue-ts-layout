<template>
  <el-card>
    <div class="btn-add-menu">
      <el-button type="primary" icon="Plus" @click="addMenu('0')">新增根菜单</el-button>
    </div>
    <el-table :data="tableData" :default-sort="{ prop: 'sort', order: 'asc' }" border row-key="ID">
      <el-table-column align="left" label="ID" min-width="100" prop="ID" />
      <el-table-column align="left" label="父节点" min-width="70" prop="parentId" />
      <el-table-column align="left" label="角色权限" min-width="100" prop="roleIDs" />
      <el-table-column align="left" label="排序" min-width="70" prop="sort" />
      <el-table-column align="left" label="标题" min-width="120" prop="title" />
      <el-table-column align="left" label="name" show-overflow-tooltip min-width="160" prop="name" />
      <el-table-column align="left" label="path" show-overflow-tooltip min-width="160" prop="path" />
      <el-table-column align="left" label="图标" min-width="140" prop="icon">
        <template #default="scope">
          <div v-if="scope.row.icon" class="icon-column">
            <el-icon>
              <component :is="scope.row.icon" />
            </el-icon>
            <span>{{ scope.row.icon }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="hidden" min-width="100" prop="hidden" />
      <el-table-column align="left" label="keepAlive" min-width="100" prop="keepAlive" />
      <el-table-column align="left" label="文件路径" min-width="280" prop="component" />
      <el-table-column align="left" fixed="right" label="操作" width="280">
        <template #default="scope">
          <el-button type="primary" link icon="plus" @click="addMenu(scope.row.ID)">添加子菜单</el-button>
          <el-button type="primary" link icon="edit" @click="editMenu(scope.row)">编辑</el-button>
          <el-button type="primary" link icon="delete" @click="deleteMenu(scope.row.ID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination v-model:current-page="page" v-model:page-size="pageSize" :page-sizes="[10, 30, 50, 100]"
        :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange"
        @size-change="handleSizeChange" />
    </div>
  </el-card>
  <el-dialog v-model="dialogVisible" :before-close="handleClose" :title="dialogTitle">
    <el-form v-if="dialogVisible" :model="form" :inline="true" :rules="rules" label-width="120px">
      <el-form-item label="name" prop="name" style="width:50%">
        <el-input v-model="form.name" placeholder="dashboard" />
      </el-form-item>
      <el-form-item label="hidden" style="width:30%">
        <el-select v-model="form.meta.hidden">
          <el-option :value="false" label="否" />
          <el-option :value="true" label="是" />
        </el-select>
      </el-form-item>
      <el-form-item label="path" prop="path" style="width:50%">
        <el-input v-model="form.path" placeholder="/dashboard" />
      </el-form-item>
      <el-form-item label="keepAlive" style="width:30%">
        <el-select v-model="form.meta.keepAlive">
          <el-option :value="true" label="是" />
          <el-option :value="false" label="否" />
        </el-select>
      </el-form-item>
      <el-form-item label="title" prop="meta.title" style="width:50%">
        <el-input v-model="form.meta.title" placeholder="仪表盘" />
      </el-form-item>
      <el-form-item label="sort" prop="meta.sort" style="width:30%">
        <el-input v-model.number="form.meta.sort" placeholder="1" />
      </el-form-item>
      <el-form-item label="icon" prop="meta.icon" style="width:50%">
        <el-input v-model="form.meta.icon" placeholder="odometer" />
      </el-form-item>
      <el-form-item label="roleIDs" prop="roleIDs" style="width:50%">
        <el-input v-model="form.meta.roleIDs" placeholder="0,1" />
      </el-form-item>

      <el-form-item label="parentId" style="width:50%">
        <el-cascader v-model="form.meta.parentId" style="width:100%" :disabled="!isEdit" :options="options"
          :props="{ checkStrictly: true, label: 'title', value: 'ID', disabled: 'disabled', emitPath: false }"
          :show-all-levels="false" filterable />
      </el-form-item>
      <el-form-item label="component" prop="component" style="width:85%">
        <el-input v-model="form.component" placeholder="views/dashboard/index.vue" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="submitDialog">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts"  name="menus">
import { ref, reactive } from 'vue'
import { getRoleMenus, updateRoleMenu, addRoleMenu } from '@/api/menu'
import { useUserStore } from '@/pinia/modules/user';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus'

const userStore = useUserStore()
const { roleId } = storeToRefs(userStore)
const tableData = ref([])
const menuListFormat = (tableData, options, list) => {
  list.forEach(item => {
    let tData = {
      path: item.path,
      name: item.name,
      component: item.component,
      ID: item.meta.ID,
      parentId: item.meta.parentId,
      title: item.meta.title,
      icon: item.meta.icon,
      hidden: item.meta.hidden,
      keepAlive: item.meta.keepAlive,
      sort: item.meta.sort,
      roleIDs: item.meta.roleIDs,
      children: []
    }
    let oData = {
      ID: item.meta.ID,
      title: item.meta.title,
      children: []
    }

    tableData.push(tData)
    options.push(oData)
    if (!item.children) {
      return
    }
    menuListFormat(tData.children, oData.children, item.children)
  })
}
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}


const getTableData = async () => {
  tableData.value = []
  const res: any = await getRoleMenus({ roelID: roleId.value, page: page.value, pageSize: pageSize.value })
  if (res.code === 0) {
    const menuList = res.data.list[0].children
    menuListFormat(tableData.value, options.value[0].children, menuList)
    total.value = res.data.total
    page.value = res.data.page
    pageSize.value = res.data.pageSize
  }
}
getTableData()

// dialog相关
const dialogTitle = ref('')
const isEdit = ref(false)
const dialogVisible = ref(false)

const options = ref([
  {
    ID: '0',
    title: '根菜单',
    children: []
  }
])
const form = ref({
  name: '',
  path: '',
  component: '',
  meta: {
    ID: 0,
    roleIDs: "",
    hidden: false,
    parentId: '',
    title: '',
    icon: '',
    sort: '',
    keepAlive: false,
  }
})

const rules = reactive({
  path: [{ required: true, message: '必填', trigger: 'blur' }],
  name: [{ required: true, message: '必填', trigger: 'blur' }],
  component: [{ required: true, message: '必填', trigger: 'blur' }],
  'meta.title': [{ required: true, message: '必填', trigger: 'blur' }],
  'meta.icon': [{ required: true, message: '必填', trigger: 'blur' }],
  'meta.sort': [{ required: true, message: '必填', trigger: 'blur' }],
})

const initForm = () => {
  form.value = {
    name: '',
    path: '',
    component: '',
    meta: {
      ID: 0,
      roleIDs: '',
      hidden: false,
      parentId: '',
      title: '',
      icon: '',
      sort: '',
      keepAlive: false,
    }
  }
}

const addMenu = (id) => {
  dialogVisible.value = true
  dialogTitle.value = '新增菜单'
  isEdit.value = false
  form.value.meta.parentId = id
}

const editMenu = (data) => {
  dialogVisible.value = true
  dialogTitle.value = '编辑菜单'
  isEdit.value = true
  form.value = {
    name: data.name,
    path: data.path,
    component: data.component,
    meta: {
      ID: data.ID,
      roleIDs: data.roleIDs,
      hidden: data.hidden,
      parentId: data.parentId,
      title: data.title,
      icon: data.icon,
      sort: data.sort,
      keepAlive: data.keepAlive
    }
  }
}


const handleClose = (done) => {
  dialogVisible.value = false
  initForm()
  done()
}

const closeDialog = () => {
  dialogVisible.value = false
  initForm()
}

const deleteMenu = (id) => {
  ElMessage({ type: 'error', message: '删除暂时不可用' })
}

const submitDialog = async () => {
  if (isEdit.value) {
    const res: any = await updateRoleMenu(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '更新菜单成功' })
    }
  } else {
    const res: any = await addRoleMenu(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '添加菜单成功' })
    }
  }
  getTableData()

  initForm()
  dialogVisible.value = false
}



</script>

<style lang="scss" scoped>
.btn-add-menu {
  margin-bottom: 20px;
}

.icon-column {
  display: flex;
  align-items: center;

  .el-icon {
    margin-right: 8px;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

}
</style>