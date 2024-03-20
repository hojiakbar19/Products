<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const categoryProduct = ref(null);
const route = useRoute()
// console.log(route);

async function getFetchCategorySingleProducts(category) {
  const res = await fetch("https://fakestoreapi.com/products/category/" + category);
  const data = await res.json();
  categoryProduct.value = data;
}
const category = route.params.category

getFetchCategorySingleProducts(route.params.category)

</script>

<template>
  <!-- <h1>{{categoryProduct}}</h1> -->
   <div class="product__category-cards container">
    
    <h3 class="product__category">category: {{ category }}</h3>
   
    <div class="product__category-card" v-for="item in categoryProduct" :key="item.id">
        <img class="product__category-card-image" :src="item.image" alt="">
        <div class="product__category-card-info">
        <h3 class="product__category-card-title">{{ item.title }}</h3>
        <p class="product__category-card-price">price: ${{ item.price }}</p>
        <p class="product__category-card-desc">Product description: {{ item.description }}</p>
        </div>
    </div>
   </div>
</template>

