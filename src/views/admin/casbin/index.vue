<template>
  <el-card class="search-card">
    <el-form :inline="true" :model="searchForm">
      <el-form-item label="路径">
        <el-input v-model="searchForm.path" placeholder="路径" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="searchForm.desc" placeholder="描述" />
      </el-form-item>
      <el-form-item label="所属角色">
        <el-select v-model="searchForm.roleIDs" clearable placeholder="请选择">
          <el-option v-for="item in roleIDs" :key="item.ID" :label="`${item.value}`" :value="item.key" />
        </el-select>
      </el-form-item>
      <el-form-item label="请求">
        <el-select v-model="searchForm.method" clearable placeholder="请选择">
          <el-option v-for="item in methods" :key="item.ID" :label="`${item.value}`" :value="item.key" />
        </el-select>
      </el-form-item>
      <div class="btn-search-casbin">
        <el-button type="primary" icon="search" @click="getTableData">查询</el-button>
        <el-button icon="refresh" @click="searchReset">重置</el-button>
      </div>
    </el-form>

  </el-card>
  <el-card class="casbin-card">
    <div class="btn-add-casbin">
      <el-button type="primary" icon="Plus" @click="addCasbin('0')">新增权限</el-button>
    </div>
    <el-table :data="tableData" border row-key="ID">
      <el-table-column align="left" label="ID" min-width="30" prop="ID" />
      <el-table-column align="left" label="所属角色" min-width="70" prop="roleIDs" />

      <el-table-column align="left" label="method" min-width="70" prop="method" />
      <el-table-column align="left" label="path" min-width="180" prop="path" />
      <el-table-column align="left" label="简介" show-overflow-tooltip min-width="200" prop="desc" />

      <el-table-column align="left" fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" link icon="edit" @click="editCasbin(scope.row)">编辑</el-button>
          <el-button type="primary" link icon="delete" @click="deleteCasbin(scope.row.ID)">删除</el-button>
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
      <el-form-item label="所属角色" prop="roleIDs" style="width:40%">
        <el-input v-model="form.roleIDs" placeholder="0,1" />
      </el-form-item>
      <el-form-item label="method" style="width:40%">
        <el-select v-model="form.method" clearable placeholder="请选择">
          <el-option v-for="item in methods" :key="item.ID" :label="`${item.value}`" :value="item.key" />
        </el-select>
      </el-form-item>
      <el-form-item label="path" prop="path" style="width:85%">
        <el-input v-model="form.path" placeholder="/v1/add/casbin" />
      </el-form-item>
      <el-form-item label="desc" prop="desc" style="width:85%">
        <el-input v-model="form.desc" placeholder="简介" />
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
import { getCasbinList, updateRoleCasbin, addRoleCasbin } from '@/api/casbin'

import { useDictStore } from '@/pinia/modules/dict';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus'

//搜索
const searchForm = ref({
  path: '',
  desc: '',
  roleIDs: '',
  method: '',
})

const initSearchForm = () => {
  searchForm.value = {
    path: '',
    desc: '',
    roleIDs: '',
    method: '',
  }
}

const searchReset = () => {
  initSearchForm()
}


const dictStore = useDictStore()
const { roleIDs, methods } = storeToRefs(dictStore)




const tableData = ref([])

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
  const data = {
    page: page.value,
    pageSize: pageSize.value,
    ...searchForm.value
  }
  const res: any = await getCasbinList(data)
  if (res.code === 0) {
    tableData.value = res.data.list
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

const form = ref({
  path: '',
  desc: '',
  roleIDs: '',
  method: '',

})

const rules = reactive({
  path: [{ required: true, message: '必填', trigger: 'blur' }],
  desc: [{ required: true, message: '必填', trigger: 'blur' }],
  roleIDs: [{ required: true, message: '必填', trigger: 'blur' }],
  method: [{ required: true, message: '必填', trigger: 'blur' }],
})

const initForm = () => {
  form.value = {
    path: '',
    desc: '',
    roleIDs: '',
    method: '',
  }
}

const addCasbin = (id) => {
  initForm()
  dialogVisible.value = true
  dialogTitle.value = '新增权限'
  isEdit.value = false
}

const editCasbin = (data) => {
  dialogVisible.value = true
  dialogTitle.value = '编辑权限'
  isEdit.value = true
  form.value = {
    path: data.path,
    desc: data.desc,
    roleIDs: data.roleIDs,
    method: data.method,
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

const deleteCasbin = (id) => {
  ElMessage({ type: 'error', message: '删除暂时不可用' })
}

const submitDialog = async () => {
  if (isEdit.value) {
    const res: any = await updateRoleCasbin(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '更新权限成功' })
    }
  } else {
    const res: any = await addRoleCasbin(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '添加权限成功' })
    }
  }
  getTableData()
  initForm()
  dialogVisible.value = false
}



</script>

<style lang="scss" scoped>
.btn-add-casbin {
  margin-bottom: 20px;
}

.search-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.casbin-card {
  margin-top: 14px;
}

.btn-search-casbin {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

}
</style>