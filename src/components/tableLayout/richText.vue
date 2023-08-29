<template>
  <div>
    <div class="mx-4">
      <Editor v-model="content" :api-key="apiKey" :init="init" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { uploadImageProcess } from '@/api/upload'

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
    const apiKey = '8bypuio1h8o9otvl9herk86a069ny4dq6u18o1iitlruo034'
    const image_upload_handler = (blobInfo:any, progress:any) => new Promise((resolve,reject) => {
        const onUploadProgress = (e:any) => {
            progress(e.loaded / e.total * 100)
         }
         const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        uploadImageProcess(formData,onUploadProgress).then(res => {
          resolve(res.data.url)
        }).catch(e => {
          reject('Image upload failed')
          console.log(e)
        })
    })
    if (props.value) {
      content.value = props.value
    }

    watch(props, (data) => {
      content.value = data.value
    })
    watch(content,(data) => {
      context.emit('update:value', data)
    })



    const afterInit = () => {

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
      images_upload_handler: image_upload_handler
    }
    


    return {init,apiKey,content}


  },
})
</script>
