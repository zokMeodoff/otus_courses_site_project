<template>
  <div class="body">
    <div class="vertical-spacer" />
    <Title />
    <section class="content-block">
      <div class="content-block__column background_grey">
        <div class="content-block__header" id="courses">
          Популярные курсы
        </div>
        <Courses v-bind:courses="courses" />
      </div>
      <div class="content-block__row">
        <div class="content-block__header" id="rewiews">
          Отзывы
        </div>
        <Review v-bind:reviews="reviews" />
      </div>
      <div class="content-block__row background_grey ">
        <div class="content-block__header" id="feedback">
          Напишите нам
        </div>
        <Feedback @add:feedback="addFeedback" />
      </div>
    </section>
    <div class="vertical-spacer" />
  </div>
</template>

<script>
import Title from "./Title.vue";
import Courses from "./Courses.vue";
import Review from "./Review.vue";
import Feedback from "./Feedback.vue";

import JSImg from "../images/js.png";
import PythonImg from "../images/python.png";
import CppImg from "../images/cpp.png";
import User1Img from "../images/chii.png";
import User2Img from "../images/totoro.png";
import User3Img from "../images/kotobus.png";

export default {
  name: "home",
  components: {
    Courses,
    Title,
    Review,
    Feedback
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "Разработчик JavaScript",
          img: JSImg,
          description: "Полный курс по JavaScript для web-разработчиков, которые хотят вывести свои навыки программирования на новый профессиональный уровень",
          date: "27 ноября",
          duration: "5",
          url: "/courses/js-developer.html"
        },
        {
          id: 2,
          name: "Web-разработчик на Python",
          img: PythonImg,
          description: "Курс предназначен для подготовки специалиста, который сможет не только решать рядовые задачи бекенд-разработки, но и сделать с нуля современную фронтенд часть",
          date: "29 ноября",
          duration: "5",
          url: "/courses/web-python-developer.html"
        },
        {
          id: 3,
          name: "Разработчик C++",
          img: CppImg,
          description: "Курс предназначен для подготовки специалиста, который сможет не только решать рядовые задачи бекенд-разработки, но и сделать с нуля современную фронтенд часть",
          date: "27 декабря",
          duration: "5",
          url: "/courses/cpp-developer.html"
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Котёнок Чии",
          img: User1Img,
          text: "Замечательные курсы!"
        },
        {
          id: 2,
          author: "Тоторо",
          img: User2Img,
          text: "Остался доволен!",
        },
        {
          id: 3,
          author: "Котобус",
          img: User3Img,
          text: "Мне очень понравилось!",
        }
      ],
    };
  },
  methods: {
    addFeedback(feedback) {
    }
  }
};
</script>

<style lang="css">
.body {
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
}
.content-block {
  flex-flow: column;
  margin-bottom: 40px;
}
.content-block__column {
  flex-flow: column wrap;
  flex-grow: 1;
}
.content-block__row {
  flex-direction: row;
  flex-grow: 1;
}
.content-block__header {
  padding: 10px;
  width: 100%;
  flex-grow: 1;
  font-size: 30px;
  font-weight: bold;
}
.background_grey {
  background-color: #f5f5f5;
}
.vertical-spacer {
  height: 68px;
}
</style>
