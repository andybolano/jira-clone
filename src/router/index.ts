import { createRouter, createWebHashHistory } from 'vue-router'
import layoutModule from '@/app/features/Layout'

const routes = [
  {
    path: '/',
    redirect: '/project'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.addRoute(layoutModule)

export default router
