<script setup>
import { ref } from "vue";

const category = ref(null);

async function getFetchCategoryProducts() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  category.value = data;
}

getFetchCategoryProducts();
</script>

<template>
    <h2 class="category__title">Category</h2>
  <div class="category container">

    <div class="category__info" v-for="item in category" :key="item">
      <RouterLink class="category__info-link" :to="'/category-single/' + item">
        {{ item }}
      </RouterLink>
    </div>
  </div>
</template>
