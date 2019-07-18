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
</template>

<style lang="sass">
@import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"

body
  background-image: url('1-page-accueil.jpg')
  background-color: #000

.debug
  position: fixed
  top: 0
  left: 0


.schedule
  width: 50%
  margin-left: 25%

h1
  color: #E00000
  text-align: center
  font-size: 55px
  margin-bottom: 70px

h2
  text-align: center
  font-size: 40px
  color: #E00000
  padding-top: 110px

h3
  text-align: center
  color: #FFF
  font-size: 30px
  padding-bottom: 80px
  margin-top: 0

h3.prog
  padding-top: 80px
  padding-bottom: 0px
  margin-bottom: 0

h1.videodrome
  color: #FFF
  margin-bottom: 0

p
  text-align: center
  font-size: 23px
  color: #FFF
  margin: 0


p.place2
  padding-bottom: 30px
  text-align: left
  font-size: 21px



p.score
  padding-left: 1300px
  display: inline-block
  vertical-align: middle

p.horaire
  text-align: left
  width: 70%
  padding-left: 20%

p.date
  padding-top: 40px


nav.menu ul li
  display: inline

nav.menu
  padding-top: 140px

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
