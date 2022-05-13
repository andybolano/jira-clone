<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="sizeIco"
    :height="sizeIco"
    :fill="fillIcon"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :xlink:href="getResourceUrl(nameIco)"></use>
  </svg>

</template>
<script>
import { ref } from 'vue'
export default {
  name: 'SvgIcon',
  props: {
    name: String,
    size: Number,
    fill: String
  },
  setup (props) {
    const nameIco = ref(props.name)
    const sizeIco = ref(props.size)
    const fillIcon = `${ref(props.fill)}`

    const getResourceUrl = (source) => {
      return require(`../../assets/icons/${source}.svg`)
    }

    return {
      getResourceUrl,
      nameIco,
      sizeIco,
      fillIcon
    }
  }
}
</script>
