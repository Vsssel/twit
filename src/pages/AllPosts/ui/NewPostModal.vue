<template>
    <div class="d-flex flex-column align-items-center">
        <i class="bi bi-user"></i>
        <div class="form w-100 p-3">
          <label for="title" class="form-label">Title: </label>
          <input v-model="values.title" class="form-control" type="text" id="title">
          <label for="body" class="form-label">Content: </label>
          <textarea v-model="values.body" class="form-control" type="text" id="title" />
        </div>
        <button class="btn btn-primary" @click="makeAPost">Post</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { postNewPost, getPosts } from '../api';
import { posts } from '../values';
import { userId } from '../../../shared/values';

const makeAPost = async() => {
    const res = await postNewPost({title: values.value.title ?? '', body: values.value.body ?? '' , userId: userId.value})
    if(res){
        posts.value = await getPosts()
    }
} 

const values = ref(
    {
        title: null,
        body: null
    }
)
</script>