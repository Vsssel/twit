<template>
    <div class="d-flex flex-column align-items-center p-5">
        <div class="w-50">
            <LoaderView class="m-2" v-if="loader"></LoaderView>
            <!-- Check if post and comments are not null before rendering PostCard -->
            <PostCard 
                v-if="post && comments"
                :show-comments="true"
                :post="post[0]"
                :comments="comments"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getSinglePost, getSinglePostComments } from './api';
import { SinglePostResourse, SinglePostCommentsResource, SinglePostCommentsRequest } from './api/types';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LoaderView from '../../shared/components/LoaderView.vue';
import PostCard from '../../shared/ui/PostCard.vue';

const route = useRoute();

const id = route.params.id;
const loader = ref<boolean>(true);
const post = ref<SinglePostResourse | null>(null);
const comments = ref<SinglePostCommentsResource | null>(null)

const request: SinglePostCommentsRequest = {
    id: Number(id)
};

onMounted(async () => {
    try {
        post.value = await getSinglePost(request);
        comments.value = await getSinglePostComments(request);
    } finally {
        loader.value = false;
    }
});
</script>
