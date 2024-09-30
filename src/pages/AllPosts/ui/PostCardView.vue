<template>
    <div class="card p-4">
        <h5 class="">{{ props.post.title }}</h5>
        <p class="">{{ truncatedBody }} <RouterLink :to="`/post/${props.post.id}`"><a href="#" class="text-decoration-none">read more</a></RouterLink> </p>
        <div class="d-flex align-items-center">
            <i style="color: red;" :class="['pl-2 pr-2', liked === 'true' ? 'bi bi-heart-fill' : 'bi bi-heart']" @click="setLike"/>
            <RouterLink :to="`/post/${props.post.id}`" style="color: black; padding-left: 10px; margin-bottom: 2px;">
                <i class="bi bi-chat"></i>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { PostsResponse } from '../api'

const props = defineProps<{
    post: PostsResponse[0]
}>()

const liked = ref(localStorage.getItem(props.post.id.toString()))

const setLike = () => {
    liked.value = (!(liked.value === 'true')).toString()
    localStorage.setItem(props.post.id.toString(), liked.value.toString())
}

const truncatedBody = computed(() => {
  return props.post.body.split(' ').slice(0, 10).join(' ') + '...'
})
</script>
