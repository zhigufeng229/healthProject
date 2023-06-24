<template>
    <v-container>
      <div class="pt-5">
        <span class="display-1 font-weight-bold">发现创作者</span>
      </div>
      <div class="pt-9">
        <v-tabs id="app-bar-tabs" background-color="transparent">
          <v-tab class="ml-0 subtitle-1" @click="tuijian">推荐</v-tab>
          <!-- <v-tab class="ml-9 subtitle-1" @click="renqi">人气</v-tab> -->
        </v-tabs>
      </div>
      <v-row class="mb-6 mt-6">
        <v-col cols="12" class="hidden-md-and-up">
          <template>
            <v-card class="mx-auto">
              <v-list>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>
                      <div>
                        <v-list-item class="py-0">
                          <v-list-item-avatar>
                            <v-img :src="link.icon"></v-img>
                          </v-list-item-avatar>
                          {{ link.text }}
                        </v-list-item>
                      </div>
                    </v-list-item-title>
                  </template>
                  <v-list-item v-for="(link, i) in links" :key="link.pk">
                    <div style="width:100%;">
                      <v-card class="mt-4" @click="fetchCat(link.text, true, i)">
                        <v-list-item class="py-0">
                          <v-list-item-avatar>
                            <v-img :src="link.icon"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-title
                            v-text="link.text"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-card>
                    </div>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </template>
        </v-col>
        <v-col cols="12" md="3" class="hidden-sm-and-down">
          <div v-for="link in links" :key="link.pk">
            <v-card class=" mt-4" @click="fetchCat(link.text, true)">
              <v-list-item class="py-0">
                <v-list-item-avatar>
                  <v-img :src="link.icon"></v-img>
                </v-list-item-avatar>
                {{ link.text }}
              </v-list-item>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="9">
          <div>
            <v-row>
              <v-col
                v-for="article in articles"
                :key="article.pk"
                cols="12"
                md="6"
                class="mt-1"
              >
                <div>
                  <v-card
                    height="346"
                    class="mx-auto"
                    @click="fetchDet(article.pk)"
                  >
                    <v-img :src="article.fields.cover_image" height="194"></v-img>
                    <v-list-item>
                      <v-list-item-avatar
                        @click="
                          $router.push(`/creater/${article.fields.name[0]}`)
                        "
                      >
                        <v-img
                          class="elevation-6"
                          :src="article.fields.name[1]"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">{{
                          article.fields.title
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          article.fields.name[0]
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-btn color="primary">{{ article.fields.category }}</v-btn>
                    </v-list-item>
  
                    <v-card-text
                      >{{ replace(article.fields.content.slice(0, 42)) + "..." }}
                    </v-card-text>
                  </v-card>
                </div>
              </v-col>
            </v-row>
            <!-- <div>
              <v-btn v-if="articles.length !== 0" color="primary" @click="more"
                >查看更多</v-btn
              >
            </div> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default{
    
}

</script>