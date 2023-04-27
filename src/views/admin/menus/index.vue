<template>
  <el-card>
    <div class="cls-btn-add-menu">
      <el-button type="primary" icon="Plus" @click="addMenu(1)">
        新增根菜单
      </el-button>
    </div>
    <el-table :data="tableData" :default-sort="{ prop: 'sort', order: 'asc' }" border row-key="ID">
      <el-table-column align="left" label="ID" min-width="100" prop="ID" />
      <el-table-column align="left" label="父节点" min-width="70" prop="parentID" />
      <el-table-column align="left" label="角色权限" min-width="100" prop="roleIDs" />
      <el-table-column align="left" label="标题" min-width="120" prop="title" />
      <el-table-column align="left" label="name" show-overflow-tooltip min-width="120" prop="name" />
      <el-table-column align="left" label="path" show-overflow-tooltip min-width="120" prop="path" />
      <el-table-column align="left" label="重定向" min-width="120" prop="redirect" />
      <el-table-column align="left" label="文件路径" min-width="280" prop="component" />
      <el-table-column align="left" label="图标" min-width="140" prop="icon">
        <template #default="scope: any">
          <div v-if=" scope.row.icon " class="cls-icon-column">
            <el-icon>
              <component :is=" scope.row.icon " />
            </el-icon>
            <span>{{ scope.row.icon }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="hidden" min-width="100" prop="hidden" />
      <el-table-column align="left" label="keepAlive" min-width="100" prop="keepAlive" />
      <el-table-column align="left" label="排序" min-width="70" prop="sort" />

      <el-table-column align="left" fixed="right" label="操作" width="280">
        <template #default=" scope: any ">
          <el-button type="primary" link icon="plus" @click=" addMenu(scope.row.ID) ">
            添加子菜单
          </el-button>
          <el-button type="primary" link icon="edit" @click=" editMenu(scope.row) ">
            编辑
          </el-button>
          <el-button type="primary" link icon="delete" @click=" deleteMenu(scope.row.ID) ">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog v-model=" dialogVisible " :before-close=" handleClose " :title=" dialogTitle ">
    <el-form v-if=" dialogVisible " :model=" form " :inline=" true " :rules=" rules " label-width="120px">
      <el-form-item label="name" prop="name" style="width:50%">
        <el-input v-model=" form.name " placeholder="dashboard" />
      </el-form-item>
      <el-form-item label="hidden" style="width:30%">
        <el-select v-model=" form.hidden ">
          <el-option :value=" false " label="否" />
          <el-option :value=" true " label="是" />
        </el-select>
      </el-form-item>
      <el-form-item label="path" prop="path" style="width:50%">
        <el-input v-model=" form.path " placeholder="/dashboard" />
      </el-form-item>
      <el-form-item label="keepAlive" style="width:30%">
        <el-select v-model=" form.keepAlive ">
          <el-option :value=" true " label="是" />
          <el-option :value=" false " label="否" />
        </el-select>
      </el-form-item>
      <el-form-item label="title" prop="meta.title" style="width:50%">
        <el-input v-model=" form.title " placeholder="仪表盘" />
      </el-form-item>
      <el-form-item label="sort" prop="meta.sort" style="width:30%">
        <el-input v-model.number=" form.sort " placeholder="1" />
      </el-form-item>
      <el-form-item label="icon" prop="meta.icon" style="width:50%">
        <el-input v-model=" form.icon " placeholder="odometer" />
      </el-form-item>
      <el-form-item label="roleIDs" prop="roleIDs" style="width:50%">
        <el-input v-model=" form.roleIDs " placeholder="0,1" />
      </el-form-item>
      <el-form-item label="redirect" prop="redirect" style="width:50%">
        <el-input v-model=" form.redirect " placeholder="父菜单的默认子路由" />
      </el-form-item>
      <el-form-item label="parentID" style="width:50%">
        <el-cascader v-model=" form.parentID " style="width:100%" :disabled=" !isEdit " :options=" options "
                     :props=" { checkStrictly: true, label: 'title', value: 'ID', disabled: 'disabled', emitPath: false } "
                     :show-all-levels=" false " filterable />
      </el-form-item>
      <el-form-item label="component" prop="component" style="width:85%">
        <el-input v-model=" form.component " placeholder="views/dashboard/index.vue" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="cls-dialog-footer">
        <el-button @click=" closeDialogByBtn ">
          取 消
        </el-button>
        <el-button type="primary" @click=" submitDialogbyBtn ">
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts"  name="menus">
import { ref, reactive } from 'vue'
import { getAllMenuList, updateRoleMenu, addRoleMenu, deleteRoleMenu } from '@/api/menu'
import { ElMessage } from 'element-plus'

const tableData = ref([])
const menuListFormat = (tableData, options, list) => {
  list.forEach(item => {
    const tData = {
      path: item.path,
      name: item.name,
      component: item.component,
      ID: item.meta.ID,
      parentID: item.meta.parentID,
      title: item.meta.title,
      icon: item.meta.icon,
      hidden: item.meta.hidden,
      keepAlive: item.meta.keepAlive,
      sort: item.meta.sort,
      roleIDs: item.meta.roleIDs,
      redirect: item.redirect,
      children: []
    }
    const oData = {
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

const getTableData = async () => {
  tableData.value = []
  const res: any = await getAllMenuList()
  if (res.code === 0) {
    const menuList = res.data[0].children
    menuListFormat(tableData.value, options.value[0].children, menuList)
  }
}
getTableData()

// dialog相关
const dialogTitle = ref('')
const isEdit = ref(false)
const dialogVisible = ref(false)

const options = ref([
  {
    ID: 1,
    title: '根菜单',
    children: []
  }
])
const form = ref({
  ID: 0,
  name: '',
  path: '',
  redirect: '',
  component: '',
  roleIDs: '',
  hidden: false,
  parentID: 0,
  title: '',
  icon: '',
  sort: 0,
  keepAlive: false
})

const rules = reactive({
  path: [{ required: true, message: '必填', trigger: 'blur' }],
  name: [{ required: true, message: '必填', trigger: 'blur' }],
  component: [{ required: true, message: '必填', trigger: 'blur' }],
  title: [{ required: true, message: '必填', trigger: 'blur' }],
  icon: [{ required: true, message: '必填', trigger: 'blur' }],
  sort: [{ required: true, message: '必填', trigger: 'blur' }]
})

const init = () => {
  form.value = {
    ID: 0,
    name: '',
    path: '',
    redirect: '',
    component: '',
    roleIDs: '',
    hidden: false,
    parentID: 0,
    title: '',
    icon: '',
    sort: 0,
    keepAlive: false
  }
}
const addMenu = (id) => {
  dialogVisible.value = true
  dialogTitle.value = '新增菜单'
  isEdit.value = false
  form.value.parentID = id
}

const editMenu = (data) => {
  dialogVisible.value = true
  dialogTitle.value = '编辑菜单'
  isEdit.value = true
  form.value = {
    name: data.name,
    path: data.path,
    redirect: data.redirect,
    component: data.component,
    ID: data.ID,
    roleIDs: data.roleIDs,
    hidden: data.hidden,
    parentID: data.parentID,
    title: data.title,
    icon: data.icon,
    sort: data.sort,
    keepAlive: data.keepAlive
  }
}

const deleteMenu = async (id) => {
  const res: any = await deleteRoleMenu({ ID: id })
  if (res.code === 0) {
    ElMessage({ type: 'success', message: '删除菜单成功' })
  } else {
    ElMessage({ type: 'error', message: '删除菜单失败' + res.msg })
  }
  getTableData()
  init()
  window.location.reload()
}

const submitDialogbyBtn = async () => {
  if (isEdit.value) {
    const res: any = await updateRoleMenu(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '更新菜单成功' })
    } else {
      ElMessage({ type: 'error', message: '更新菜单失败' + res.msg })
    }
  } else {
    const data = {
      name: form.value.name,
      path: form.value.path,
      redirect: form.value.redirect,
      component: form.value.component,
      roleIDs: form.value.roleIDs,
      hidden: form.value.hidden,
      parentID: form.value.parentID,
      title: form.value.title,
      icon: form.value.icon,
      sort: form.value.sort,
      keepAlive: form.value.keepAlive
    }
    const res: any = await addRoleMenu(data)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '添加菜单成功' })
    } else {
      ElMessage({ type: 'error', message: '添加菜单失败' + res.msg })
    }
  }
  getTableData()
  init()
  dialogVisible.value = false
  window.location.reload()
}

const handleClose = (done) => {
  dialogVisible.value = false
  init()
  done()
}

const closeDialogByBtn = () => {
  dialogVisible.value = false
  init()
}

</script>

<style lang="scss" scoped>
.cls-btn-add-menu {
  margin-bottom: 20px;
}

.cls-icon-column {
  display: flex;
  align-items: center;

  .el-icon {
    margin-right: 8px;
  }
}

.cls-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

}
</style>