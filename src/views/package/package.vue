<template>
    <tableLayout
      :columns="columns"
      :get="getData"
      :add="addData"
      :edit="editData"
      :editData="editGetData"
      :del="delData"
      :formItem="formItem"
      :rules="rules"
      :options="options"
      ref="layout"
    >
    <template v-slot:icon="item">
      <a-avatar :src=item.value.text.icon shape="square" :size="64"></a-avatar>
        </template>
    </tableLayout>
  </template>
  
        
    <script lang="ts">
  import { useRouter } from "vue-router";
  import { defineComponent, ref } from "vue";
  import {
    getData,
    addData,
    editData,
    editGetData,
    delData,
    options,
  } from "@/api/package";
  import tableLayout from "@/components/tableLayout/tableLayout.vue";
  export default defineComponent({
    name: "el_sku",
    components: {
      tableLayout,
    },
    setup() {
      // 列表
      const columns = [
        { title: "序号", dataIndex: "id" },
        { title: "名称", dataIndex: "name" },
        { title: "价格", dataIndex: "price" },
        { title: "市场价", dataIndex: "market_price" },
        { title: "课时", dataIndex: "amount" },
      ];
  
      // 表单
      const formItem = [
        { title: "名称", key: "name", type: "input" },
        { title: "icon", key: "icon", type: "upload" },
        { title: "价格", key: "price", type: "number" },
        { title: "市场价格", key: "market_price", type: "number"},
        { title: "类型", key: "type", type: "select",options: [], optionKey: 'type'},
        { title: "课时", key: "amount", type: "number" },
        { title: "描述", key: "desc", type: "input" },
        { title: "详情", key: "detail", type: "richText", itemWidth: 'calc(100% - 20px)', labelCol: 3 },
  
      ];
  

      // 规则
      const rules = {
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],
        icon: [{ required: true, message: "请输入icon", trigger: "change" }],
        price: [{ required: true, message: "请输入价格", trigger: "change" ,type:'number'}],
        type: [{ required: true, message: "请输选择", trigger: "change" ,type:'number'}],
        market_price: [{ required: true, message: "请输入市场价", trigger: "change" ,type:'number'}],
        desc: [{ required: true, message: "请输入icon", trigger: "change" }],
        amount: [{ required: true, message: "请输入课时", trigger: "change" ,type:'number'}],
       
      };
  
      return {
        columns,
        getData,
        addData,
        editData,
        editGetData,
        delData,
        formItem,
        rules,
        options,
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
    