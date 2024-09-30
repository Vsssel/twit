<template>
    <div>
        <LoaderView v-if="loader" v-for="num in [1, 2, 3, 4, 5, 6, 7]" class="m-2"/>
        <div v-else class="card p-2 m-2" v-for="album in albums">
            <h4 class="card-title">{{ album.title }}</h4>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserAlbumsResponse } from '../../api/types';
import { getUserAlbums } from '../../api';
import { userId } from '../../../../shared/values';
import LoaderView from '../../../../shared/components/LoaderView.vue';

const albums = ref<UserAlbumsResponse | null>(null)
const loader = ref<boolean>(true)

onMounted(async() => {
    try{
        albums.value = await getUserAlbums({userId: userId.value})
    }finally{
        loader.value = false
    }
})
</script>