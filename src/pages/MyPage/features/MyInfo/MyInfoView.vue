<template>
    <div class="d-flex flex-column align-items-center">
        <LoaderView v-if="loader"></LoaderView>
        <div v-else class="card p-2 m-4 w-100">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>{{ 'Full Name' }}</td>
                        <td>{{ user?.data?.name }}</td>
                    </tr>
                    <tr>
                        <td>{{ 'Phone' }}</td>
                        <td>{{ user?.data?.phone }}</td>
                    </tr>
                    <tr>
                        <td>{{ 'Email' }}</td>
                        <td>{{ user?.data?.email }}</td>
                    </tr>
                    <tr>
                        <td>{{ 'Address' }}</td>
                        <td>{{ `${user?.data?.address.city}, ${user?.data?.address.street}, ${user?.data?.address.suite} [${user?.data?.address.zipcode}]`  }}</td>
                    </tr>
                    <tr>
                        <td>{{ 'Website' }}</td>
                        <td>{{ user?.data?.website }}</td>
                    </tr>
                    <tr>
                        <td>{{ 'Work place' }}</td>
                        <td>{{ user?.data?.company.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserGetResponse } from '../../api/types';
import { getUser } from '../../api/getUser';
import { userId } from '../../../../shared/values';
import LoaderView from '../../../../shared/components/LoaderView.vue';

const user = ref<UserGetResponse>()
const loader = ref<boolean>(true)

onMounted(async() => {
    try{
        user.value = await getUser({userId: userId.value})
    }finally{
        loader.value = false
    }
})
</script>