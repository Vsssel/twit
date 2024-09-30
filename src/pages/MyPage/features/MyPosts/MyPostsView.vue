<template>
    <div class="d-flex flex-column align-items-center">
      <div class="w-100" v-if="loader">
        <LoaderView v-for="num in [1, 2, 3, 4, 5, 6, 7]" class="m-2"/>
      </div>
      <div v-for="post in posts" class="w-100 p-2">
          <PostCard
            :show-comments="false"
            :post="post"
          >
          </PostCard>
      </div>
  </div>
</template>
<script setup lang="ts">
import PostCard from '../../../../shared/ui/PostCard.vue'
import { ref, onMounted } from 'vue'
import { UserPostResponse } from '../../api/types'
import { getUserPosts } from '../../api/getUserPosts'
import { userId } from '../../../../shared/values'
import LoaderView from '../../../../shared/components/LoaderView.vue'

const posts = ref<UserPostResponse | null>(null)
const loader = ref<boolean>(true)

onMounted(async() => {
    try{
        posts.value = await getUserPosts({ id: userId.value})
    }finally{
        loader.value = false
    }
})
</script>