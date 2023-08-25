<template>
  <div>
    <div class="mx-4" v-loading="loading">
      <Editor v-model="content" :api-key="apiKey" :init="init" />
      <div class="mt-4 text-center"><el-button @click="save">保存</el-button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Editor from '@tinymce/tinymce-vue'

export default defineComponent({
  name: 'richText',
  components: {
    Editor,
  },
  emits: ['update:value', 'change'],
  props: {
    value: {
      type: String,
      required: false
    },
  },
  setup(props,context) {

    let content = ref()
    const apiKey = 'xxx'
    const example_image_upload_handler = () => {

    }
    if (props.value) {
      content.value = props.value
    }

    watch(props, (data) => {
      content.value = data.value
    })


    let loading = ref(true)
    const afterInit = () => {
      loading.value = false
    }

    const init = {
      language: 'zh_CN',
      plugins: 'lists link image table code help wordcount',
      init_instance_callback: afterInit,
      toolbar: [
        // 数组写法
        'undo redo | formatselect | bold italic underline strikethrough | fontsizeselect | hr bullist numlist outdent indent blockquote subscript superscript | alignleft | aligncenter | alignright | image media | selectall codesample fullscreen preview searchreplace',
        'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'
      ],
      // images_upload_url: 'https://mock.apifox.cn/m1/2700315-0-default/uploadTiny',
      // images_upload_base_path: '/demo',
      images_upload_handler: example_image_upload_handler
    }
    

    const save = ()=>{
      console.log(props.value)
    }

    return {init,apiKey,loading,content,save}


  },
})
</script>
