<template lang="pug">
  section.wrapper
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

    section
      router-view


    p.score Ton score: 08/10

    nav.menu
      ul
        li
          router-link(:to="{name: 'About'}") A propos
        li
          router-link(:to="{name: 'Schedule'}") Horaires
</template>

<style lang="sass">
@import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"
@import "fonts/_all.sass"

body
  font-family: "DK-Magical-Brush"

.debug
  position: fixed
  top: 0
  left: 0

h1
  color: #E00000
  text-align: center
  font-size: 55px
  margin-bottom: 70px

h2
  text-align: center
  font-size: 40px
  color: #E00000

h3
  text-align: center
  color: #FFF
  font-size: 30px
  padding-bottom: 80px
  margin-top: 0

p
  text-align: center
  font-size: 23px
  color: #FFF
  margin: 0

.score
  padding-left: 1300px
  display: inline-block
  vertical-align: middle

nav.menu ul li
  display: inline

nav.menu
  position: absolute
  bottom: 35px
  left: 55px

a
  color: #AEAEAE
  font-size: 25px
  font-weight: 300
  text-decoration: none
  padding-left: 50px
  display: inline-block
  vertical-align: middle

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
