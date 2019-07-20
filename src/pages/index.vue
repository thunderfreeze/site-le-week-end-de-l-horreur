<template lang="pug">
  section.page-container
    h1.title QUESTION POUR UN MECHANT
    p.place Au café-cinéma Videodrome 2 de Marseille se tiendra 
    p.place du 7 au 9 juin prochains, la première édition du week-end de l'horreur
    p.but Pour découvrir la programmation, répond correctement à ce Quizz
    .container-cta
      p.blood POURMECHANT
      router-link.commencer(:to="{name: 'Question'}") COMMENCER
</template>

<style lang="sass">
.home
  background-color: #000

.page-container
  position: relative
  height: 840px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around

.container-cta
  position: relative
  margin-top: 86px

.blood
  font-family: "bloodlust"
  top: 10px
  font-size: 97px
  position: absolute
  color: red

.title
  padding-top: 134px
  padding-bottom: 43px
  margin: 0 auto
  font-family: "bloodlust"
  font-size: 100px

.place
  font-family: "Montserrat-Medium"

.but
  padding-top: 166.83px
  font-weight: 900
  font-family: "Montserrat-Bold"

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
  letter-spacing: 9px
  font-family: "Montserrat-Bold"
</style>

<script>
export default {
  name: "Home"
};
</script>
