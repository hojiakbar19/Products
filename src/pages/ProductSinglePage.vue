<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const product = ref(null);

const route = useRoute();

async function getFetchSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  product.value = data;
  console.log(data);
}

getFetchSingleProduct(route.params.id);
</script>

<template>
  <div class="product__info container">
    <div class="product__info-card">
      <img class="product__info-image" :src="product.image" alt="" />
      <h3 class="product__info-title">{{ product.title }}</h3>
      <p class="product__info-price">price: ${{ product.price }}</p>
    </div>
    <div class="product__about">
        <p class="product__about-desc">Product description: {{ product.description }}</p>
        <h4 class="product__about-category"> Category: {{ product.category }}</h4>
    </div>
  </div>
</template>
