<script setup>
import { ref } from "vue";

const products = ref(null);

async function getFetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  products.value = data;
}

getFetchProducts();
</script>

<template>
  <div class="product">
    <h1 class="product__title">Products</h1>
    <div class="product__cards container">
      <RouterLink 
       :to="'/card-single/' + item.id"
        class="product__card"
        v-for="item in products"
        :key="item.id"
      >
        <img class="product__card-img" :src="item.image" alt="" />
        <h3 class="product__card-title">{{ item.title }}</h3>
      </RouterLink>
    </div>
  </div>
</template>
