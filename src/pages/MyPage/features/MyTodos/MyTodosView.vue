<template>
    <div>
        <LoaderView v-if="loader" v-for="num in [1, 2, 3, 4, 5, 6, 7]" class="m-2"></LoaderView>
        <div v-else>
            <div v-for="todo in sortedTodos" class="card d-flex flex-row justify-content-between m-2 p-2">
                <p :class="['card-text', todo.completed ? 'text-decoration-line-through text-secondary' : 'text-decoration-none']">{{ todo.title }}</p>
                <i style="cursor: pointer;" :class="todo.completed ? 'bi bi-check-circle-fill text-success fs-4' : 'bi bi-circle text-warning fs-4'" @click="toggleCheck(todo.id)"></i>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { UserTodosResponse } from '../../api/types';
import { getUserTodos } from '../../api';
import { userId } from '../../../../shared/values';
import LoaderView from '../../../../shared/components/LoaderView.vue';

const todos = ref<UserTodosResponse | null>(null)
const loader = ref<boolean>(true)

const toggleCheck = (id: number) => {
    const todo = todos.value?.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed
    }
}

const sortedTodos = computed(() => {
    return todos.value ? todos.value.slice().sort((a, b) => Number(a.completed) - Number(b.completed)) : [];
})

onMounted(async() => {
    try{
        todos.value = await getUserTodos({userId: userId.value})
    }finally{
        loader.value = false
    }
})
</script>