<template>
  <div class="reviews-container">
    <div class="review" v-for="review in reviews" :key="review.id">
      <img class="review__img" v-bind:src="review.img">
      <p class="review__author">{{ review.author }}</p>
      {{ review.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "reviews",
  props: {
    reviews: Array
  }
};
</script>

<style lang="css">
.reviews-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.review {
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.review__author {
  margin-right: 15px;
  padding-bottom: 10px;
  font-size: 20px;
  text-align: center;
}
.review__img {
  height: 90px;
  margin-right: 20px;
  padding-bottom: 10px;
  border-radius: 50%;
}
</style>
