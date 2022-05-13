<template>
  <div class="board-list">
    <div class="board-list__status">
      <div class="board-list__title">
        {{state.name}}
      </div>
      <div class="drop-list"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
        >
          <div class="issue-card" draggable="true"
          :id="state.id"
          @dragstart="dragStart($event, state.id)"
          @drag="onDrag($event, state.id)"
          @dragend="dragEnd($event, state.id)"
          >
            <div class="issue-card__issue">
              <p>Texto de prueba</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import State from '@/app/shared/interfaces/state.interface'

export default {
  name: 'StatusList',
  props: {
    itemState: State
  },
  setup (props) {
    let elementDrag = ''
    const state = ref(props.itemState)

    const onDrop = ($event) => {
      console.log('onDrop', $event)
    }

    const dragStart = ($event, id) => {
      $event.target.className = 'issue-card issue-card--empty'
      const node = document.getElementById(id)
      elementDrag = node.cloneNode(true)
      elementDrag.style.width = `${$event.target.clientWidth}px`
      elementDrag.style.height = `${$event.target.clientHeight}px`
      elementDrag.className = 'issue-card issue-card--dragging'
      elementDrag.style.transform = `translate(${$event.pageX}px, ${$event.pageY}px)`
      node.childNodes[0].style.opacity = 0
      document.body.appendChild(elementDrag)
      $event.dataTransfer.setDragImage(elementDrag, 0, 0)

      console.log('dragStart', $event)
    }

    const onDrag = ($event, id) => {
      console.log($event)
      elementDrag.style.transform = `translate(${$event.pageX}px, ${$event.pageY}px)`
    }

    const dragEnd = ($event, id) => {
      const node = document.getElementById(id)
      node.childNodes[0].style.opacity = 1
      $event.target.className = 'issue-card'
      console.log('dragEnd', $event)
      document.body.removeChild(elementDrag)
      elementDrag = ''
    }

    return {
      state,
      onDrop,
      dragStart,
      onDrag,
      dragEnd
    }
  }
}
</script>

<style lang="scss" scoped>

  .board-list{
    margin-right: 0.5rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    border-radius: 0.125rem;
    width: calc(25% - 8px);
    min-height: 400px;
    min-width: 200px;

    &__status{
      margin-right: 0.5rem;
      display: flex;
      height: 100%;
      flex-shrink: 0;
      flex-direction: column;
      border-radius: 0.125rem;
      background-color: var(--gray-light);
      padding-bottom: 20px;
    }

    &__title{
      color:var(--text-primary-color);
      font-size: .8125rem;
      text-transform: uppercase;
      padding-top: 0.75rem;
      padding-bottom: 1;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }

  .drop-list{
    padding: 1rem 0.5rem;
    height: 100%;
  }

  .issue-card{
    width: 100%;
    touch-action: manipulation;
    cursor: -webkit-grab;
    cursor: grab;
    display: flex;
    flex-grow: 1;
    background-color: #FFFFFF;
    box-shadow: #091e4240 0 1px 2px;
    border: 0;
    width: 100%;

    &:hover{
      background-color: #EBECF0;
    }

    &--empty{
      background-color: #EBECF0;
      border: 1px dashed#acacac;
      box-shadow: none;
    }

    &--dragging{
      background-color: #FFFFFF;
      -webkit-box-shadow: 0px 5px 12px -6px rgba(0,0,0,0.8);
      -moz-box-shadow: 0px 5px 12px -6px rgba(0,0,0,0.8);
      box-shadow: 0px 5px 12px -6px rgba(0,0,0,0.8);
      pointer-events: none;
      list-style-type: none;
      position: absolute;
      left: 0;
      top: 0;
      will-change: transform;
      opacity: 1;
      cursor: move;
    }

    &__issue{
      display: flex;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      flex-direction: column;
      border-radius: 0.125rem;
      background-color: transparent;
      transition-property: all;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-duration: .1s;
      flex-grow: 1;
      padding: 10px;

    }
  }

</style>
