<template>
  <div class="feedback-container">
    <img src="../images/mail.png"/>
    <form class="feedback-form" @submit.prevent="handleSubmit">
      <label class="feedback-form__label">
        Имя:
        <input class="feedback-form__input" v-model="feedback.author" name="author" />
      </label>
      <label class="feedback-form__label">
        Email:
        <input class="feedback-form__input" v-model="feedback.email" name="email" />
      </label>
      <label class="feedback-form__label">
        Сообщение:
        <textarea
          class="feedback-form__input"
          v-model="feedback.text"
          name="feedback"
          rows="5"
        />
      </label>
      <button class="feedback-form__button">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FeedbackForm",
  data() {
    return {
      feedback: {
        author: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:feedback", this.feedback);
    }
  }
};
</script>

<style lang="css">
.feedback-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.feedback-form {
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  background-color: #ffffff;
}
.feedback-form__label {
  margin-top: 5px;
  margin-bottom: 5px;
}
.feedback-form__input {
  width: 95%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px 0px;
}
.feedback-form__button {
  height: 30px;
  width: auto;
  margin: auto;
  padding: 7px 15px;
  border-style: none;
  border-radius: 2px;
  background-clip: border-box;
  color: #ffffff;
  font-size: 15px;
  background-color: #6a5acd;
  cursor: pointer;
}
</style>
