<template lang="pug">
  p.horaire 
    slot(v-if="correctAnswers.includes(answerNumber) || pastAnswers.length == 10")
    span(v-else) trouve la bonne reponse
</template>

<script>
export default {
  name: "ScheduleParagraph",
  props: ["answer-number"],
  computed: {
    correctAnswers() {
      return this.$store.getters.correctAnswers;
    },
    pastAnswers() {
      return this.$store.getters.pastAnswers;
    }
  }
};
</script>

<style lang="sass">
.horaire
  text-align: center
  width: 100%
  font-family: "Montserrat-Medium"
  font-size: 18px
  line-height: 30px

  span
    font-family: "BloodLust"
    color: #D10003
    font-size: 28px
</style>
