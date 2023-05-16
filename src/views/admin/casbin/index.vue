<template>
  <el-card>
    <div class="cls-search">
      <div class="cls-search-form">
        <el-form :inline="true" :model="searchForm">
          <el-form-item label="路径">
            <el-input v-model="searchForm.path" placeholder="路径" />
          </el-form-item>
          <el-form-item label="所属角色">
            <el-select v-model="searchForm.roleIDs" clearable placeholder="请选择">
              <el-option v-for="item in dictInfo.role" :key="item.ID" :label="`${item.value}`" :value="item.key" />
            </el-select>
          </el-form-item>
          <el-form-item label="请求">
            <el-select v-model="searchForm.method" clearable placeholder="请选择">
              <el-option v-for="item in dictInfo.method" :key="item.ID" :label="`${item.value}`" :value="item.key" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="cls-search-btn">
        <el-button type="primary" icon="search" @click="getTableData">
          查询
        </el-button>
        <el-button icon="refresh" @click="searchReset">
          重置
        </el-button>
      </div>
    </div>
  </el-card>

  <el-card class="cls-casbin-card">
    <div class="cls-add-casbin-btn">
      <el-button type="primary" icon="Plus" @click="addCasbin()">
        新增权限
      </el-button>
    </div>
    <el-table :data="tableData" border row-key="ID">
      <el-table-column align="left" label="ID" min-width="30" prop="ID" />
      <el-table-column align="left" label="所属角色" min-width="70" prop="roleIDs" />

      <el-table-column align="left" label="method" min-width="70" prop="method" />
      <el-table-column align="left" label="path" min-width="180" prop="path" />
      <el-table-column align="left" label="简介" show-overflow-tooltip min-width="200" prop="desc" />

      <el-table-column align="left" fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" link icon="edit" @click="editCasbin(scope.row)">
            编辑
          </el-button>
          <el-button type="primary" link icon="delete" @click="deleteCasbin(scope.row.ID)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cls-pagination">
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
          <el-option v-for="item in dictInfo.method" :key="item.ID" :label="`${item.value}`" :value="item.key" />
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
      <div class="cls-dialog-footer">
        <el-button @click="closeDialog">
          取 消
        </el-button>
        <el-button type="primary" @click="submitDialog">
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts"  name="menus">
import { ref, reactive } from 'vue'
import { getRoleCasbinList, updateRoleCasbin, addRoleCasbin, deleteRoleCasbin } from '@/api/casbin'

import { useDictStore } from '@/pinia/modules/dict'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

//搜索
const searchForm = ref({
  path: '',
  roleIDs: '',
  method: ''
})

const initSearchForm = () => {
  searchForm.value = {
    path: '',
    roleIDs: '',
    method: ''
  }
}

const searchReset = () => {
  initSearchForm()
  getTableData()
}

const dictStore = useDictStore()
const { dictInfo } = storeToRefs(dictStore)

interface Casbin {
  ID: number;
  roleIDs: string;
  path: string;
  desc: string;
}

const tableData = ref<Casbin[]>([])
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
  const res: any = await getRoleCasbinList(data)
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
  ID: 0,
  path: '',
  desc: '',
  roleIDs: '',
  method: ''
})

const rules = reactive({
  path: [{ required: true, message: '必填', trigger: 'blur' }],
  desc: [{ required: true, message: '必填', trigger: 'blur' }],
  roleIDs: [{ required: true, message: '必填', trigger: 'blur' }],
  method: [{ required: true, message: '必填', trigger: 'blur' }]
})

const initForm = () => {
  form.value = {
    ID: 0,
    path: '',
    desc: '',
    roleIDs: '',
    method: ''
  }
}

const addCasbin = () => {
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
    ID: data.ID,
    path: data.path,
    desc: data.desc,
    roleIDs: data.roleIDs,
    method: data.method
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

const deleteCasbin = async (id) => {
  const res: any = await deleteRoleCasbin({ ID: id })
  if (res.code === 0) {
    ElMessage({ type: 'success', message: '删除权限成功' })
  }
  getTableData()
}

const submitDialog = async () => {
  if (isEdit.value) {
    const res: any = await updateRoleCasbin(form.value)
    if (res.code === 0) {
      ElMessage({ type: 'success', message: '更新权限成功' })
    }
  } else {
    const data = {
      path: form.value.path,
      desc: form.value.desc,
      roleIDs: form.value.roleIDs,
      method: form.value.method
    }
    const res: any = await addRoleCasbin(data)
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
.cls-add-casbin-btn {
  margin-bottom: 20px;
}

.cls-search {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cls-search-form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .cls-search-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}


.cls-casbin-card {
  margin-top: 14px;
}


.cls-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

}
</style>