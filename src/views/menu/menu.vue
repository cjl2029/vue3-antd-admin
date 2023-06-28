<template>
  <a-space align="center" style="margin-bottom: 16px">
    CheckStrictly:
    <a-switch v-model:checked="rowSelection.checkStrictly"></a-switch>
  </a-space>
  <a-table :columns="columns" :data-source="data"  />
</template>
<script>
import { defineComponent, ref } from 'vue';
const columns = [
  {
  title: '名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'icon',
  dataIndex: 'icon',
  key: 'icon',
  width: '12%',
}, {
  title: 'redirect',
  dataIndex: 'redirect',
  width: '10%',
  key: 'redirect',
}
, {
  title: 'path',
  dataIndex: 'path',
  width: '30%',
  key: 'path',
}
, {
  title: 'key',
  dataIndex: 'key',
  width: '10%',
  key: 'key',
}
, {
  title: 'component',
  dataIndex: 'component',
  width: '10%',
  key: 'component',
}
];
const data = [];
export default defineComponent({
  setup() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
</script>