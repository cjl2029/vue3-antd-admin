<template>
    <pre>tableLayout使用详情见使用文档，这其实是另一个小得开源项目。(tip: 文档编写中)</pre>
    <tableLayout 
      :columns="columns"
       :get="getData"
  
      ref="layout" 
    >
    </tableLayout> 
  
  </template>
      
  <script lang="ts">
  import { useRouter } from 'vue-router'
  import { defineComponent, ref } from 'vue'
  import { getData} from '@/api/faceTable'
  import tableLayout from '@/components/tableLayout/tableLayout.vue'
  export default defineComponent({
    name: 'el_table',
    components: {
      tableLayout
    },
    setup () {
      
      // 列表
      const columns = [ 
        { title: '序号', dataIndex: 'id' }, { title: '键名转换', dataIndex: 'user_id' }
      ]
      
  
      return { columns, getData}
      
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
  