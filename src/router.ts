import { createWebHistory, createRouter } from 'vue-router'
import AllPostsView from './pages/AllPosts/AllPostsView.vue'
import SinglePostView from './pages/SinglePost/SinglePostView.vue'
import MyPageView from './pages/MyPage/MyPageView.vue'
import MyAlbumsView from './pages/MyPage/features/MyAlbums/MyAlbumsView.vue'
import MyPostsView from './pages/MyPage/features/MyPosts/MyPostsView.vue'
import MyTodosView from './pages/MyPage/features/MyTodos/MyTodosView.vue'

const routes = [
  { 
    path: '/', 
    component: AllPostsView 
  },
  { 
    path: '/post/:id', 
    component: SinglePostView 
  },
  { 
    path: '/user/:id' , 
    component: MyPageView,
    children: [
      { 
        path: '/albums' ,
        component: MyAlbumsView 
      },
      { 
        path: '/user/posts' , 
        component: MyPostsView 
      },
      { 
        path: '/user/todos' , 
        component: MyTodosView 
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router