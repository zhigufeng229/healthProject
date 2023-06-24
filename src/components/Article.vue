<template>
    <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <div class="pt-5">
          <span class="display-1 font-weight-bold">发表文章</span>
          <div class="pt-9">
            <span style="color:#365A89;">标题</span>
            <v-form ref="form" class="pt-0">
              <v-text-field required v-model="article.title"></v-text-field>
            </v-form>
            <span style="color:#365A89;">内容</span><br />
            <div class="pt-5">
              <vue-editor
                useCustomImageHandler
                @imageAdded="AddImage"
                v-model="article.content"
              ></vue-editor>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <span style="color:#365A89;">封面图</span>
        </div>
        <v-avatar @click="upload" class="my-5 pr-2" size="72" style="cursor:pointer;">
          <img :src="article.cover_image" />
        </v-avatar>
        <input
          type="file"
          id="upload"
          ref="upload"
          @change="changeimg"
          accept=".jpg, .jpeg, .png"
          style="display:none;"
        />
        <div class="pb-9">
          <v-btn color="primary" @click="save">
            发表文章
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { VueEditor } from "vue2-editor";
export default{
    data(){
        return{
            article: {
              title:'',
              content:'',
              image:null,
        
      },
      cover_image: require("@/assets/bar/other.jpg"),
      category: "Foo"
        }
    },
  methods: {
    async save(){
      let that = this
      console.log(that.article.title);
      console.log(that.article.content);

      if(that.article.title==null){
        that.$message.error("标题不能为空！");
        
      }else if(that.article.content==null){
        that.$message.error("内容不能为空！");

      }else{
        const {data:res} = await that.$http.post("createArticle",this.article);
        if(res=="success"){
          this.$message.success("发表成功!");
          
        }else{
          this.$message.error("发表失败!");
        }
      }
    },
    changeimg(){

    },
    AddImage(){

    },
  
    upload(){

    },
    click(){

    }
  }
};
</script>
<style>

</style>