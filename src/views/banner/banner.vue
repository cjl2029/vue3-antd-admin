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
  <template v-slot:url="item">
    <a-avatar :src=item.value.text.url shape="square" :size="64"></a-avatar>
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
} from "@/api/banner";
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
      { title: "url", slots: { customRender: 'url' } },
    ];

    // 表单
    const formItem = [
      { title: "名称", key: "name", type: "input" },
      { title: "图片", key: "url", type: "upload" },
  
    ];

    // 筛选
    const selectItem = ref([
      { title: "姓名", key: "name-like", type: "input", itemWidth: "290px" },
    ]);

    // 规则
    const rules = {
      name: [{ required: true, message: "请输入姓名", trigger: "change" }],
      icon: [{ required: true, message: "请上传图片", trigger: "change" }],

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
  