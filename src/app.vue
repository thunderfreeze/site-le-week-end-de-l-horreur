<template lang="pug">
  section.wrapper
    nav
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
// @import "minireset.css/minireset.sass"
@import "utilities/transitions.sass"
body
  background-image: url('1-page-accueil.jpg')
  background-color: #000

.accueil
  width: 60%
  margin-left: 20%

.about
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

h3
  text-align: center
  color: #FFF
  font-size: 30px
  padding-bottom: 80px
  margin-top: 0

h1.videodrome
  color: #FFF
  margin-bottom: 0

p
  text-align: center
  font-size: 23px
  color: #FFF
  margin: 0

p.place
  padding-top: 20px

p.place2
  padding-bottom: 30px
  text-align: left
  font-size: 21px


p.but
  padding-top: 200px
  font-weight: 900

p.score
  padding-left: 1300px
  display: inline-block
  vertical-align: middle

button.commencer
  margin-left: auto
  margin-top: 140px
  margin-right: auto
  display: block
  font-size: 48px
  background-color: #E00000
  color: #FFF
  width: 470px
  border-radius: 10%
  border-color: red
  padding-top: 10px
  padding-bottom: 10px
  letter-spacing: 9px

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
