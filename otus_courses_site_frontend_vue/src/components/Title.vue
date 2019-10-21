<template>
  <div class="title">
    <div class="title__description">
      <h1>Авторские онлайн‑курсы для профессионалов</h1>
      <h2>Цифровые навыки от ведущих экспертов</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "title",
};
</script>

<style lang="css">
.title {
    margin-top: 10px;
    flex-flow: wrap;
    justify-content: flex-start;
    background-image: url("../images/title.png");
}
.title__description {
    text-align: center;
    font-size: 25px;
    color: #ffffff;
}
</style>
