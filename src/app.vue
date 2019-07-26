<template lang="pug">
  section.main-container
    transition(:name = "transitionName" mode="out-in")
      router-view


    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page {{questionNumber.padStart(2, '0')}}/10



    p.score(v-if="pastAnswers.length > 0") Ton score: {{score.padStart(2, '0')}}/10

    nav.menu
      ul
        li
          router-link.about-link(:to="{name: 'About'}") À propos
        li
          router-link.schedule-link(:to="{name: 'Schedule'}") Horaires

    //- nav.debug
    //-   ul
    //-     li
    //-       router-link(:to="{name: 'Home'}") Home
    //-     li
    //-       router-link(:to="{name: 'About'}") About
    //-     li
    //-       router-link(:to="{name: 'Schedule'}") Schedule
    //-     li
    //-       router-link(:to="{path: '/question/1'}") Question
    //-     li
    //-       router-link(:to="{path: '/reponse/1'}") Answer

    a.reprendre(v-if="pastAnswers.length > 0 && pastAnswers.length != 10" href="" @click.prevent="resume") REPRENDRE

</template>

<style lang="sass">
@import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"
@import "elements/_all.sass"
@import "fonts/_all.sass"
@import "layout/_all.sass"


html
  font-size: 6vw

  +tablet
    font-size: 3vw

  +desktop
    font-size: 2.5vw

  +widescreen
    font-size: 2vw

  +fullhd
    font-size: 1.5625vw

body
  transition: background-color $duration $duration

  &.home
    .score
      display: none

body
  &.about
    .about-link
      color: #FFF

body
  &.answer
    .fade-in
      animation-duration: .5s
      animation-delay: 1.25s
      animation-name: fade
      opacity: 0
      animation-fill-mode: forwards

body
  &.schedule
    .schedule-link
      color: #FFF

    .main-container
      display: inherit

body
  &.schedule
    .question-pour-un-mechant
      display: none

body
  &.about
    .question-pour-un-mechant
      display: none

body
  &.home
    .page
      display: none

body
  &.schedule
    .page
      display: none

body
  &.about
    .page
      display: none

body
  &.home
    .question-pour-un-mechant
      display: none

body
  &.question
    .reprendre
      display: none

body
  &.answer
    .reprendre
      display: none

body
  &.home
    .reprendre
      display: none

.debug
  position: fixed
  top: 0
  left: 0

.picture:hover
  box-shadow: 0 0 50px #FFF

.container-cta
  position: relative
  margin-top: 86px
  display: flex
  justify-content: center

.blood
  font-family: "bloodlust"
  top: 10px
  font-size: 2.75rem
  position: absolute
  color: red

  +from($tablet)
    font-size: 3.75rem

a
  color: #AEAEAE
  font-size: 25px
  font-weight: 300
  text-decoration: none
  vertical-align: middle
  font-family: "Montserrat-Light"

p
  text-align: center
  font-size: 0.75rem
  color: #FFF
  margin: 0

  +from($tablet)
    font-size: 1rem

.main-container
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  //background-color: yellow

.section
  display: flex
  flex-direction: column
  align-items: center

.score
  position: absolute
  bottom: -2rem
  width: 100%
  font-size: 1rem
  margin:  auto
  font-family: "BloodLust"

  +from($tablet)
    position: fixed
    right: 50px
    height: 65px
    bottom: 0
    width: auto

.menu ul li
  display: inline

.menu ul li
  padding-left: 2.25rem

  +from($tablet)
    padding-left: 2rem


.menu
  position: absolute
  bottom: -30vw
  width: 100%
  height: 65px

  +from($tablet)
    position: fixed
    bottom: 0
    width: 408px
    height: 65px

.active
  color: #FFF
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "fade",
      questionNumber: ""
    };
  },
  computed: {
    score() {
      return this.$store.getters.score.toString();
    },
    pastAnswers() {
      return this.$store.getters.pastAnswers;
    }
  },
  methods: {
    resume() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route(to, from) {
      if (
        (to.name == "About" && from.name == "Question") ||
        (to.name == "Schedule" && from.name == "Question") ||
        (to.name == "About" && from.name == "Answer") ||
        (to.name == "Schedule" && from.name == "Answer")
      )
        this.transitionName = "slide-top";
      else if (
        (to.name == "Question" && from.name == "About") ||
        (to.name == "Question" && from.name == "Schedule") ||
        (to.name == "Answer" && from.name == "About") ||
        (to.name == "Answer" && from.name == "Schedule")
      )
        this.transitionName = "slide-bottom";
      else this.transitionName = "fade";

      console.log(to);

      if (to.params.question_number)
        this.questionNumber = to.params.question_number;
      else if (to.params.answer_number)
        this.questionNumber = to.params.answer_number;
    }
  }
};
</script>
