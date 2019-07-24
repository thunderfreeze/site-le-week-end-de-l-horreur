<template lang="pug">
  p.horaire 
    slot(v-if="pastAnswers.includes(answerNumber)")
    span(v-else) trouve la bonne reponse
</template>

<script>
export default {
  name: "ScheduleParagraph",
  props: ["answer-number"],
  computed: {
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
