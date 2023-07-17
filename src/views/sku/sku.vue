<template>
  <tableLayout
    :columns="columns"
    :get="getData"
    :select-item="selectItem"
    :add="addData"
    :edit="editData"
    :editData="editGetData"
    :del="delData"
    :formItem="formItem"
    :rules="rules"
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
  upload,
} from "@/api/sku";
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
      { title: "icon", slots: { customRender: 'icon' } },
      { title: "价格", dataIndex: "price" },
      { title: "市场价", dataIndex: "market_price" },
      { title: "描述", dataIndex: "desc" },
      { title: "详情", dataIndex: "detail" },
    ];

    // 表单
    const formItem = [
      { title: "名称", key: "name", type: "input" },
      { title: "icon", key: "icon", type: "upload", upload: upload },
      { title: "价格", key: "price", type: "number" },
      { title: "市场价格", key: "market_price", type: "number" },
      { title: "描述", key: "desc", type: "input" },
      { title: "详情", key: "detail", type: "input" },
    ];

    // 筛选
    const selectItem = ref([
      { title: "姓名", key: "name-like", type: "input", itemWidth: "290px" },
    ]);

    // 规则
    const rules = {
      name: [{ required: true, message: "请输入姓名", trigger: "change" }],
      icon: [{ required: true, message: "请输入icon", trigger: "change" }],
      price: [
        {
          required: true,
          message: "请输入价格",
          trigger: "change",
          type: "number",
        },
      ],
      market_price: [
        {
          required: true,
          message: "请输入市场价",
          trigger: "change",
          type: "number",
        },
      ],
      desc: [{ required: true, message: "请输入描述", trigger: "change" }],
      detail: [{ required: true, message: "请输入详情", trigger: "change" }],
    };

    return {
      columns,
      getData,
      addData,
      editData,
      editGetData,
      delData,
      selectItem,
      formItem,
      rules,
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
  