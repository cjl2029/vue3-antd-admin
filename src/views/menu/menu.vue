<template>
  <tableLayout 
    :columns="columns"
    :formItem="formItem"
    :rules="rules"
    :options="options"
    :get="getData"
    :add="addData"
    :editData="editGetData"
    :edit="editData"
    :del="delData"
    @editOpen="editOpen"
    @addOpen="addOpen"
    @editSuccess="editSuccess"
    @addSuccess="addSuccess"
    ref="layout" 
  >

  <template v-slot:custom="data">
      <a-input v-model:value="data.formData[data.key]" />
    </template>

  </tableLayout>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { getData, addData, editGetData, editData, delData,options } from '@/api/menu'
import tableLayout from '@/components/tableLayout/tableLayout.vue'
export default defineComponent({
  name: 'el_table',
  components: {
    tableLayout
  },
  setup () {
    
     // 列表
     const columns = [ 
      {  title: '名称', dataIndex: 'name' },
      { title: 'icon', dataIndex: 'icon' }, 
      { title: 'key', dataIndex: 'key' },
      { title: 'path', dataIndex: 'path' }, 
      { title: 'redirect', dataIndex: 'redirect' },
      { title: 'component', dataIndex: 'component' },
    ]
    
    // 表单
    const formItem = [
      { title: '名称', key: 'name', type: 'input' }, 
      { title: 'icon', key: 'icon', type: 'input' },
      { title: 'key', key: 'key', type: 'input' }, 
      { title: '路径', key: 'path', type: 'input' },
      { title: '跳转', key: 'redirect', type: 'input' },
      { title: '组件', key: 'component', type: 'input' },
      { title: '父级', key: 'pid', type: 'select', options: [], optionKey: 'parent' },
  
    ]

    // 规则
    const rules = {
      name: [{required: true, message: '请输入姓名', trigger: 'change',type:'string'}],
      icon: [{required: false, message: '请输入图标', trigger: 'change',type:'string'}],
      key: [{required: true, message: '请输入key', trigger: 'change',type:'string'}],
      path: [{required: true, message: '请输入路径', trigger: 'change',type:'string'}],
      component: [{required: true, message: '请选输入组件', trigger: 'change'}],
      pid: [{required: true,message: '请选择层级'}]

    }

    // 事件钩子
    const editOpen = (data: any) => {
      console.log('编辑弹框打开，并但会编辑数据')
      console.log(data)
    }

    const addOpen = () => {
      console.log('添加弹框打开，无数据')
    }

    const editSuccess = () => {
      console.log('编辑提交成功，无数据')
    }

    const addSuccess = () => {
      console.log('添加提交成功，无数据')
    }

    return { columns, formItem, getData, addData, editGetData, editData, delData, rules, 
    editOpen, addOpen, editSuccess, addSuccess,options }
    
  }
})
</script>
<style lang="scss" scoped>
pre {
  background-color: #f6f6f6;
  padding: 10px;
  margin: 10px;
  display: block;
}
</style>
