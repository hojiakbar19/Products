<script setup>
import { ref } from 'vue';


const pages = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/category',
    name: 'Category',
  },
]

const menuToggler = ref(false)
</script>


<template>
  <nav class="nav">
    <div class="container">
      <RouterLink class="nav__logo" to="/">Shop</RouterLink>
      <div class="nav__menu" :class="{'active': menuToggler}">
        <ul class="nav__menu-list" >
          <li class="nav__menu-item" v-for="item in pages" :key="item.name"> 
            <RouterLink class="nav__menu-link" :to="item.path" @click="menuToggler = false">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
     
      <div class="nav__burger" @click="menuToggler = !menuToggler">
        <span class="nav__burger-line"></span>
      </div>
    </div>
  </nav>
</template>


