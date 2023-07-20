<template>
  <tableLayout
    :columns="columns"
    :get="getData"
    :select-item="selectItem"
    :add="addData"
    :edit="editData"
    :del="delData"
    :editdata="editGetData"
    :formItem="formItem"
    :rules="rules"
    :options="options"
    ref="layout"
  >
  <template v-slot:booked="item">
    <a :href="'/course/course-order?courseId='+item.value.text.id">{{ item.value.text.booked }}</a>
  </template>
  </tableLayout>
</template>
      
  <script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import { getData, addData, editData, editGetData, delData, options } from "@/api/course";
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
      { title: "名称", dataIndex: "title" },
      { title: "sku", dataIndex: "sku_name" },
      { title: "人数", dataIndex: "size" },
      { title: "预定", dataIndex: "booked" },
      { title: "开始时间", dataIndex: "begin_at" },
      { title: "结束时间", dataIndex: "end_at" },
      { title: "预定人员", slots: {customRender:'booked'} },
    ];

    // 表单
    const formItem = [
      { title: "名称", key: "title", type: "input" },
      { title: 'SKU', key: 'sku_id', type: 'select', options: [], optionKey: 'sku' },
      { title: "人数", key: "size", type: "number" },
      { title: "开始时间", key: "begin_at", type: "dateTimePicker"},
      { title: "结束时间", key: "end_at", type: "dateTimePicker"},
  ];

    // 筛选
    const selectItem = ref([
      { title: "姓名", key: "name-like", type: "input", itemWidth: "290px" },
    ]);

    // 规则
    const rules = {
      name: [{ required: true, message: "请输入姓名", trigger: "change" }],
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
  