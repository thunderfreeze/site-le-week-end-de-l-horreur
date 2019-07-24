<template lang="pug">
  section.page-container
    h1.title QUESTION POUR UN MECHANT
    p Au café-cinéma Videodrome 2 de Marseille se tiendra 
    p.place du 7 au 9 juin prochains, la première édition du week-end de l'horreur
    p.but Pour découvrir la programmation, répond correctement à ce Quizz
    .container-cta
      p.blood POURMECHANT
      router-link.commencer(:to="{path: '/question/1'}") COMMENCER
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

.title
  padding-top: 134px
  padding-bottom: 43px
  margin: 0 auto
  font-family: "bloodlust"

.but
  padding-top: 166.83px
  font-family: "Montserrat-Bold"
</style>

<script>
export default {
  name: "Home"
};
</script>
