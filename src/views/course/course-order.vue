<template>
    <tableLayout
      :columns="columns"
      :get="getData"
      :select-item="selectItem"
      ref="layout"
    >

    </tableLayout>
  </template>
        
    <script lang="ts">
  import { useRouter } from "vue-router";
  import { defineComponent, ref } from "vue";
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
        { title: "头像", dataIndex: "user.avatar" },
        { title: "sku", dataIndex: "course.sku.icon" },
        { title: "用户id", dataIndex: "user.id" },
      ];
  

      // 筛选
      const selectItem = ref([
        { title: "课程ID", key: "course_id", type: "number", itemWidth: "290px" },
      ]);

     

    onMounted(() => {
        const router = useRouter()
    console.log(router.currentRoute.value.query)
    console.log(router.currentRoute.value.params)
       });
  
      // 规则
      const rules = {
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],
      };



  
      return {
        columns,
        getData,
        selectItem,
  
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
    