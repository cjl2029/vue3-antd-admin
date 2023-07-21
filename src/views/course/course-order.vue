<template>
    <tableLayout
      :columns="columns"
      :get="getData"
      :params="params"
      ref="layout"
    >

    </tableLayout>
  </template>
        
    <script lang="ts">
  import { useRoute } from "vue-router";
  import { defineComponent, ref, onMounted } from "vue";
  import { getData, } from "@/api/order";
  import tableLayout from "@/components/tableLayout/tableLayout.vue";
  export default defineComponent({
    name: "el_table",
    components: {
      tableLayout,
    },
    setup() {
      // 列表
      const columns = [
        { title: "序号", dataIndex: "id" },
        { title: "用户ID", dataIndex: "user.id" },
        { title: "头像", dataIndex: "user.avatar" },
        { title: "sku", dataIndex: "source.title" },
        { title: "用户id", dataIndex: "user.id" },
      ];
  


      // 规则
      const rules = {
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],
      };  
      const params = useRoute().query
      return {
        columns,
        getData,
        params
  
      };
    },
    
  });
  </script>
    <style lang="scss" scoped>
  pre {
    background-color: #f6f6f6;
    padding: 10px;
    margin: 10px;
    display: block;
  }
  </style>
    