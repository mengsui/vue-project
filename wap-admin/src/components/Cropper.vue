<template>
  <div class="content">
    <cube-upload
      ref="upload"
      v-model="files"
      :action="action"
      @files-added="addedHandler"
      @file-error="errHandler">
      <div class="clear-fix">
        <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
        <cube-upload-btn :multiple="false">
          <div>
            <i>＋</i>
          </div>
        </cube-upload-btn>
      </div>
    </cube-upload>

  </div>
</template>
<script>
export default {
  name: 'cropper',
  data() {
    return {
      action: './',
      files: []
    }
  },
  methods: {
    addedHandler() {
      const file = this.files[0]
      file && this.$refs.upload.removeFile(file)
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: 'warn',
        txt: 'Upload fail',
        time: 1000
      }).show()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/cropper.scss';
</style>
