<template>
  <div>
    <div class="fileUpload">
      <i class="fa fa-upload" aria-hidden="true"></i>
      <strong>Choose only PNG, JPG, MOV or MP4 format</strong>
      <input @change="upload" accept="image/jpeg,image/png,video/mp4,video/MOV" hidden id="file" type="file">
      <label for="file">Upload File</label>
    </div>
    <div class="filePreview">
      <img v-if="url != null" :src="url" />
      <img v-if="urls.length > 0" v-for="src in urls" :src="src" />

      <!--      <video controls v-if="videoUrl" v-for="src in videoUrl" :src="src"></video>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageVideoUploadComponent",
  data() {
    return {
      url: null,
      urls: [],
      videoUrl: [],
      videoUrls: [],
      banners: [],
      banner: {
        base64: null,
        filename: null,
        filetype: null,
        filesize: null
      }
    }
  },
  props: {
    formatData : {
      type: String,
      default: null
    }
  },
  methods: {
    upload(e) {
      var self = this
      var files = document.getElementById('file').files;

      if (files.length > 0) {
        var filename = files[0].name;
        var filetype = files[0].type;
        var filesize = files[0].size;
      }

      if (this.formatData === 'single') {
        if ((files.length > 0 && (filetype === 'image/jpeg' || filetype === 'image/png'))) {

          const fileSize = files[0].size / 1024 / 1024;
          if (fileSize > 5) {
            alert('File size exceeds 5 MiB');
          }
              // else if(filetype === 'video/MOV' || filetype === 'video/mp4') {
              //   if (fileSize > 20) {
              //     alert('File size exceeds 20 MiB');
              //   }
          // }
          else {
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function () {
              self.banner.base64 = reader.result
              self.banner.filename = filename
              self.banner.filetype = filetype
              self.banner.filesize = filesize
            };

            const showFile = e.target.files[0];
            self.url = URL.createObjectURL(showFile);

            self.banners = []
            self.urls = []
          }
        }

        // if ((files.length > 0 && (filetype === 'video/MOV' || filetype === 'video/mp4'))) {
        //
        // }
      }

      if (this.formatData === 'carousel') {

        if (files.length > 0 && this.urls.length <= 5) {

          if (filetype === 'image/jpeg' || filetype === 'image/png') {

            var Fileread = new FileReader();
            Fileread.readAsDataURL(files[0]);
            Fileread.onload = function () {
              self.banners.push({
                base64: Fileread.result,
                filename: filename,
                filetype: filetype,
                filesize: filesize
              })
            };

            const showFile = e.target.files[0];
            this.urls.push(URL.createObjectURL(showFile));

            self.banner = {
              base64: null,
              filename: null,
              filetype: null,
              filesize: null
            }
            self.url = null
          }
        }
      }
    }
  },
  mounted() {
    window.$('#file').on('change', function () {
      this.value = null;
    });
  }
}
</script>

<style scoped>

.fileUpload {
  border: 1px dashed #dbe3e4;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.fileUpload i {
  display: block;
  font-size: 35px;
  color: #5b7083;
}

.fileUpload strong {
  display: block;
  margin-top: 10px;
  margin-bottom: 8px;
  color: #5b7083;
}

.fileUpload label {
  margin-bottom: 0;
  color: #5b7083;
  cursor: pointer;
  border: 1px solid;
  border-radius: 20px;
  padding: 4px;
  padding-left: 15px;
  padding-right: 15px;
  transition: 300ms;
}

.fileUpload label:hover {
  background: #eff1f3;
  transition: 300ms;
}

.filePreview {
  display: flex;
  margin-top: 15px;
}

.filePreview img {
  width: 100px;
  height: 100px;
  margin-right: 5px;
}

.filePreview video {
  width: 100px;
  height: 100px;
  margin-right: 5px;
}

</style>
