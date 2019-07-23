<template lang="pug">
  section.main-container
    router-view

    p.score Ton score: {{score}}/10

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
  &.home
    .score
      display: none

body
  &.about
    .about-link
      color: #FFF

body
  &.schedule
    .schedule-link
      color: #FFF

body
  &.schedule
    .score
      display: none

body
  &.about
    .score
      display: none

    .main-container
      display: inherit

.debug
  position: fixed
  top: 0
  left: 0

.picture
  height: 487px
  width: 355px
  display: block
  margin: auto
  padding: 0
  transition: box-shadow .5s ease

.picture:hover

  box-shadow: 0 0 50px #FFF

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
  computed: {
    score() {
      return this.$store.getters.score;
    }
  }
};
</script>
