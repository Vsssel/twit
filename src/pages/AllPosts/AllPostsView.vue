<template>
  <div class="d-flex flex-column align-items-center">
    <!-- <button v-if="!visible" class="btn btn-primary m-3" @click="showModal"><i class="bi bi-plus p-0 m-0"></i>Add post</button>
    <div v-if="visible" class="w-50 card p-3">
      <i class="bi bi-x fs-3 d-flex align-self-end" @click="showModal"></i>
     <NewPostModal/>
    </div> -->
      <div class="w-50" v-if="loader">
        <LoaderView v-for="num in [1, 2, 3, 4, 5, 6, 7]" class="m-2"/>
      </div>
      <div v-for="post in posts" class="w-50 p-2">
          <PostCardView :post="post" />
      </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getPosts } from './api'
import PostCardView from './ui/PostCardView.vue'
import { posts } from './values'
import LoaderView from '../../shared/components/LoaderView.vue'

const visible = ref<boolean>(false)
const loader = ref<boolean>(true)

const showModal = () => {
  visible.value = !visible.value
}
  
onMounted(async () => {
  try{
    posts.value = await getPosts()
  }finally{
    loader.value = false
  }
})
</script>
  