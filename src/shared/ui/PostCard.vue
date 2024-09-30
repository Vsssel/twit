<template>
    <div class="card w-100 p-4">
        <h4 class="">{{ props.post.title }}</h4>
        <p class="">{{ props.post.body }} </p>
        <div class="d-flex">
            <i style="color: red; cursor: pointer;" :class="['pl-2 pr-2', liked === 'true' ? 'bi bi-heart-fill' : 'bi bi-heart']" @click="setLike"/>
            <RouterLink v-if="!comments" :to="`/post/${props.post.id}`" style="color: black; padding-left: 10px; margin-bottom: 2px;">
                <i class="bi bi-chat" style="padding-left: 10px; cursor: pointer;" @click="toggleComments"></i>
            </RouterLink>
        </div>
        <div v-if="show">
            <div v-for="comment in comments" class="p-3">
                <p class="card-title fw-bold">
                    {{ comment.email }}
                </p>
                <p class="card-text">
                    {{ comment.body }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'


const props = defineProps<{
    showComments: boolean,
    post: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    comments?: {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }[]
}>()

const liked = ref(localStorage.getItem(props.post.id.toString()))
const show = ref<boolean>(props.showComments)

const toggleComments = () => {
    show.value = !show.value
}

const setLike = () => {
    liked.value = (!(liked.value === 'true')).toString()
    localStorage.setItem(props.post.id.toString(), liked.value.toString())
}
</script>