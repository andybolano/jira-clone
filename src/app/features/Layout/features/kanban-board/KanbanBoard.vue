<template>

  <h1>Kanban board</h1>

  <div class="board">
      <StatusList v-for="state in status"
      :key="state"
      :itemState="state"/>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue'
import StatusList from './components/StatusList/StatusList.vue'
import State from '@/app/shared/interfaces/state.interface'

export default {
  name: 'KanbanBoard',
  components: {
    StatusList
  },
  setup () {
    const status: State[] = ref(
      [
        {
          id: 0,
          name: 'BACKLOG'
        },
        {
          id: 1,
          name: 'SELECTED FOR DEVELOPMENT'
        },
        {
          id: 2,
          name: 'IN PROGRESS'
        },
        {
          id: 3,
          name: 'DONE'
        }
      ]
    )

    return {
      status
    }
  }
}

</script>

<style lang="scss" scoped>

  .board{
    display: flex;
    height: 100%;
  }

</style>
