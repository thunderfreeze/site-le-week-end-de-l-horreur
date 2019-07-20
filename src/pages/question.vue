<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page 01/10
    h1.question-title QUI DORT DANS UN OPERA POUR PECHO?
    p.reponse Les rats d'Opéra
    p.reponse Le fantôme de l'Opéra
    p.reponse La danseuse étoilée
</template>

<style lang="sass">
body
  background-color: #C7002F

.question-pour-un-mechant
  position: absolute
  left: 34px
  top: 34px
  color: white
  font-size: 40px
  font-family: "Bloodlust"

.page
  position: absolute
  right: 42px
  top: 34px
  color: white
  font-size: 40px
  font-family: "Bloodlust"

.reponse
  font-size: 30px
  font-family: "Montserrat-Bold"
  padding-bottom: 20px
  color: #E9D4AE

.question-title
  text-align: center
  padding-top: 405px
  padding-bottom: 50px
  font-size: 70px
  color: #F1C53E
  font-family: "AvenirNextCondensed-HeavyItalic-10"
</style>

<script>
export default {
  name: "Question"
};
</script>
