import { ref } from 'vue'
import SvgIcon from '@/app/ui-components/SvgIcon.vue'
export default {
  name: 'Resize',
  emits: ['changeStatus'],
  components: {
    SvgIcon
  },
  setup (props:any, context:any) {
    const isOpen = ref(true)

    const toggle = () => {
      isOpen.value = !isOpen.value
      context.emit('changeStatus', isOpen.value)
    }

    return {
      isOpen,
      toggle
    }
  }
}
