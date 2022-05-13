
<script lang="ts" src="./Sidebar.ts" />

<template>
    <div class='sidebar' :class="{ 'sidebar--open': open }">
      <div class='sidebar__content'>
          <div class="information">
            <img src="@/assets/logo.png" class="information__logo">
            <div class="information__data">
              <h5 class="information__name">Vue Jira Clone</h5>
              <p class="information__description">Software Project</p>
            </div>
          </div>

          <ul class="menu">
            <li v-for="link in menu" :key="link.to">
              <router-link :to="link.to" v-slot="{ isActive }">
                <div class="menu__item" :class="isActive ? 'menu__item--active' : 'menu__item--normal'">
                  <a>
                      {{link.title}}
                  </a>
                </div>
              </router-link>
            </li>
          </ul>

          <div class="divider"></div>

      </div>
    </div>
    <AppResize
    @change-status='toggle'/>
</template>

<style scoped lang='scss'>
 @import "./Sidebar.scss";
</style>
