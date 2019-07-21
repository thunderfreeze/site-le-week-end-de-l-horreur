<template lang="pug">
  section.main-container
    

    router-view

    p.score Ton score: 08/10

    nav.menu
      ul
        li
          router-link(:to="{name: 'About'}") A propos
        li
          router-link(:to="{name: 'Schedule'}") Horaires

    nav.debug
      ul
        li
          router-link(:to="{name: 'Home'}") Home
        li
          router-link(:to="{name: 'About'}") About
        li
          router-link(:to="{name: 'Schedule'}") Schedule
        li
          router-link(:to="{name: 'Question'}") Question
        li
          router-link(:to="{name: 'Answer'}") Answer


</template>

<style lang="sass">
@import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"
@import "fonts/_all.sass"


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

.debug
  position: fixed
  top: 0
  left: 0

.picture
  height: 487px
  width: 355px
  display: block
  margin: auto

a
  color: #AEAEAE
  font-size: 25px
  font-weight: 300
  text-decoration: none
  padding-left: 50px
  display: inline-block
  vertical-align: middle
  font-family: "Montserrat-Light"

h1
  color: #E00000
  text-align: center
  font-size: 2rem
  margin-bottom: 70px

  +from($tablet)
    font-size: 3.25rem



h2
  text-align: center
  font-size: 1.25rem
  color: #E00000

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

.score
  position: absolute
  bottom: 0
  right: 50px
  height: 65px

.menu ul li
  display: inline

.menu
  position: absolute
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
      some_const: SOME_CONST
    };
  }
};
</script>
