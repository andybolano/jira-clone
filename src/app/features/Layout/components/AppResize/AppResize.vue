<script lang="ts" src="./Resize.ts" />

<template>
  <div class='resize-wrap'>
    <div class='resize-wrap__strip'></div>
    <div class='resize-wrap__sizer'>
      <div class="resize-wrap__line">

      </div>
    </div>
    <button class='resize-wrap__btn' @click='toggle'>
        <SvgIcon
          :size='24'
          :name='"chevronRight"'
          />
    </button>
  </div>

</template>

<style lang="scss" scoped>
  @import "./Resize.scss";
</style>
