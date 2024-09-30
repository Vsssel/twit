<template>
    <div class="d-flex flex-column align-items-center">
        <div class="card w-75 d-flex flex-row m-4 p-3 justify-content-between">
            <a href="#" :class="[show === 'info' ? 'text-primary' : 'text-secondary','text-decoration-none fw-bolder']" active-class="text-primary" @click="show = 'info'">My Info</a>
            <a href="#" :class="[show === 'posts' ? 'text-primary' : 'text-secondary','text-decoration-none fw-bolder']" active-class="text-primary" @click="show = 'posts'">My Posts</a>
            <a href="#" :class="[show === 'albums' ? 'text-primary' : 'text-secondary','text-decoration-none fw-bolder']" active-class="text-primary" @click="show = 'albums'">My Albums</a>
            <a href="#" :class="[show === 'todos' ? 'text-primary' : 'text-secondary','text-decoration-none fw-bolder']" active-class="text-primary" @click="show = 'todos'">My Todos</a>
        </div>
        <div class="w-75">
            <MyInfoView v-if="show === 'info'" />
            <MyPostsView v-if="show === 'posts'"/>
            <MyAlbumsView v-if="show === 'albums'"/>
            <MyTodosView v-if="show === 'todos'"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserGetResponse } from './api/types';
import { getUser } from './api/getUser';
import { userId } from '../../shared/values';
import MyInfoView from './features/MyInfo/MyInfoView.vue';
import MyPostsView from './features/MyPosts/MyPostsView.vue';
import MyAlbumsView from './features/MyAlbums/MyAlbumsView.vue';
import MyTodosView from './features/MyTodos/MyTodosView.vue';

const user = ref<UserGetResponse>()
const show = ref('info')

onMounted(async() => {
    user.value = await getUser({userId: userId.value})
})
</script>