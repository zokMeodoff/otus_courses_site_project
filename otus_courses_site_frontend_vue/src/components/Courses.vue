<template>
  <div class="courses-container">
    <div class="course-card" v-for="course in courses" :key="course.id">
      <h1 class="course-card__header">{{ course.name }}</h1>
      <img class="course-card__image" v-bind:src="course.img"/>
      <div class="course-card__description">
        {{ course.description }}
        <p class="course-card__date">C {{ course.date }} &nbsp; {{ course.duration }} месяцев</p>
        <a class="course-card__link" v-bind:href="course.url">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courses",
  props: {
    courses: Array
  }
};
</script>

<style lang="css">
.courses-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.course-card {
  max-width: 400px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  background-color: #ffffff;
}
.course-card__date {
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;
}
.course-card__image {
  max-width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.course-card__link {
  margin-top: 10px;
  padding: 10px 150px;
  background-clip: border-box;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  background-color: #6a5acd;
  cursor: pointer;
}
</style>
