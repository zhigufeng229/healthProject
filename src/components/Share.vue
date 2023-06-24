<template>
  <v-container>
<v-row>
  <v-col cols="12">
    <div class="mt-11">
      <span class="display-2 font-weight-bold" style="color:#2B81D6;"
        >健康小伙的分享platform</span
      >
    </div>
    <div class="mt-6">
      <span class="title font-weight-regular">为自己的健康努力</span>
    </div>
    <div class="mt-3">
      <span class="body-1 font-weight-thin"
        >无论你是哪路大神，都可以在这里展示你健康的秘诀，让更多健身小伙学习</span
      >
    </div>
    <div class="mt-6">
      <v-btn color="primary" @click="$router.push('/article')">开始探索🛴</v-btn>
    </div>
  </v-col>
</v-row>
<div class="mt-12" style="text-align:center;">
  <span class="headline font-weight-bold" style="color:#3787D7;"
    >近期文章</span
  >
</div>
</v-container>
</template>
<script>
export default{

}
</script>