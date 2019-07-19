<template lang="pug">
  section
    div.accueil
      h1.title QUESTION POUR UN MECHANT
      p.place Au café-cinéma Videodrome 2 de Marseille se tiendra 
      p.place du 7 au 9 juin prochains, la première édition du week-end de l'horreur
      p.but Pour découvrir la programmation, répond correctement à ce Quizz
      router-link.commencer(:to="{name: 'Question'}") COMMENCER
</template>

<style lang="sass">
.home
  background-color: #000

.accueil
  width: 60%
  margin-left: 20%

.title
  padding-top: 174px
  padding-bottom: 43px
  font-family: "bloodlust"

.place

  font-family: "Montserrat-Medium"

.but
  padding-top: 200px
  font-weight: 900
  font-family: "Montserrat-Bold"

.commencer
  margin-left: auto
  margin-top: 140px
  margin-right: auto
  display: block
  font-size: 48px
  background-color: #E00000
  color: #FFF
  width: 470px
  border-radius: 25px
  border-color: red
  padding-top: 10px
  padding-bottom: 10px
  letter-spacing: 9px
  font-family: "Montserrat-Bold"
</style>

<script>
export default {
  name: "Home"
};
</script>
