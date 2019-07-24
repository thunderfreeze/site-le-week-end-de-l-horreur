<template lang="pug">
  section.main-container
    transition(:name = "transitionName" mode="out-in")
      router-view

    

    p.score(v-if="pastAnswers.length > 0") Ton score: {{score}}/10

    nav.menu
      ul
        li
          router-link.about-link(:to="{name: 'About'}") À propos
        li
          router-link.schedule-link(:to="{name: 'Schedule'}") Horaires

    nav.debug
      ul
        li
          router-link(:to="{name: 'Home'}") Home
        li
          router-link(:to="{name: 'About'}") About
        li
          router-link(:to="{name: 'Schedule'}") Schedule
        li
          router-link(:to="{path: '/question/1'}") Question
        li
          router-link(:to="{path: '/reponse/1'}") Answer

</template>

<style lang="sass">
@import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"
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

.debug
  position: fixed
  top: 0
  left: 0

.reprendre
  display: block
  position: absolute
  font-size: 22px
  background-color: #E00000
  color: #FFF
  width: 171px
  border-radius: 25px
  border-color: red
  padding-top: 10px
  padding-left: 0
  right: 50px
  bottom: 110px
  position: fixed
  text-align: center
  text-decoration: none
  padding-bottom: 10px
  font-family: "Montserrat-Bold"

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
  font-size: 97px
  position: absolute
  color: red

.commencer
  display: block
  position: relative
  font-size: 48px
  background-color: #E00000
  color: #FFF
  width: 470px
  border-radius: 25px
  border-color: red
  padding-top: 10px
  padding-left: 0
  text-align: center
  text-decoration: none
  padding-bottom: 10px
  letter-spacing: 5px
  font-family: "Montserrat-Bold"

a
  color: #AEAEAE
  font-size: 25px
  font-weight: 300
  text-decoration: none
  vertical-align: middle
  font-family: "Montserrat-Light"

.menu ul li
  padding-left: 50px

h1
  color: #E00000
  text-align: center
  font-size: 2.5rem
  margin-bottom: 70px
  line-height: .75

  +from($tablet)
    font-size: 3.25rem



h2
  text-align: center
  font-size: 1.25rem
  color: #E00000

  +from($tablet)
    font-size: 2.25rem

h3
  text-align: center
  color: #FFF
  font-size: 1rem
  padding-bottom: 1em
  margin-top: 0

p
  text-align: center
  font-size: 1rem
  color: #FFF
  margin: 0

.main-container
  position: relative
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  //background-color: yellow

.section
  display: flex
  flex-direction: column
  //background-color: blue
  align-items: center

.score
  position: fixed
  bottom: 0
  right: 50px
  height: 65px
  font-size: 30px
  font-family: "BloodLust"

.menu ul li
  display: inline

.menu
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
      transitionName: "fade"
    };
  },
  computed: {
    score() {
      return this.$store.getters.score;
    },
    pastAnswers() {
      return this.$store.getters.pastAnswers;
    }
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (to.name == "About" && from.name == "Question")
        this.transitionName = "slide-top";
      else this.transitionName = "fade";
    }
  }
};
</script>
