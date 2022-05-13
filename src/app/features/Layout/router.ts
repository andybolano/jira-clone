import Layout from './Layout.vue'

export default {
  path: '/project',
  name: 'layout',
  component: Layout,
  children: [
    {
      path: 'board',
      name: 'board',
      component: () => import(/* webpackChunkName: "KanbanBoard" */ './features/kanban-board/KanbanBoard.vue')
    },
    {
      path: 'settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "KanbanBoard" */ './features/project-settings/ProjectSettings.vue')
    },
    {
      path: '',
      redirect: { name: 'board' }
    }
  ]
}
