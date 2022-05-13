import { ref } from 'vue'
import AppResize from '../AppResize/AppResize.vue'

export default {
  name: 'Sidebar',
  components: {
    AppResize
  },
  setup () {
    const open = ref(true)
    const menu = [
      {
        to: { name: 'board' },
        title: 'Kanban Board'
      },
      {
        to: { name: 'settings' },
        title: 'Project Settings'
      }
    ]
    const toggle = (status: boolean) => {
      open.value = status
    }

    return {
      open,
      toggle,
      menu
    }
  }
}
