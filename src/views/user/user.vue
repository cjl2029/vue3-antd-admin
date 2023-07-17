<template>
    <tableLayout 
      :columns="columns"
       :get="getData"
       :select-item="selectItem"
       :formItem="formItem"
       :edit="editData"
       :editData="editGetData"
      ref="layout" 
    >
    <template #avatar="item">
      <a-avatar size="large"  :src="item.value.text.avatar"></a-avatar>
    </template>
    </tableLayout> 
  
  </template>
      
  <script lang="ts">
  import { useRouter } from 'vue-router'
  import { defineComponent, ref } from 'vue'
  import { getData,editData,editGetData} from '@/api/user'
  import tableLayout from '@/components/tableLayout/tableLayout.vue'
  export default defineComponent({
    name: 'el_table',
    components: {
      tableLayout
    },
    setup () {
      
      // 列表
      const columns = [ 
        { title: '序号', dataIndex: 'id' }, 
        { title: '名称', dataIndex: 'name' },
        { title: '头像',slots: { customRender: 'avatar' } },
      ]
      // 表单
      const formItem = [ 
      { title: '头像', key: 'avatar', type: 'upload' }
      ]
      //searchFrom
      const selectItem = ref([
      { title: '姓名', key: 'name-like', type: 'input', itemWidth: '290px' },
    ])
      
  
      return { columns, getData, selectItem, formItem,editData,editGetData}
      
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
  