<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page 01/10
    p.bonne-reponse La bonne réponse était
    h1.fantome LE FANTOME DE L'OPERA
    img.picture(src="static/images/fantome.jpg")
    p.diff.diffusion Diffusé a 20:00
    p.diffusion Le vendredi 7 juin 2019
    p.diffusion Au café-cinéma Videodrome-2 à Marseille   
</template>

<style lang="sass">
.question-pour-un-mechant
  position: absolute
  left: 34px
  top: 34px
  color: white
  font-size: 40px
  font-family: "Bloodlust"

.diff
  padding-top: 50px

.diffusion
  font-family: "Montserrat-Medium"
  font-size: 25px

.page
  position: absolute
  right: 42px
  top: 34px
  color: white
  font-size: 40px
  font-family: "Bloodlust"

.bonne-reponse
  padding-top: 62px
  font-family: "Montserrat-Medium"

.fantome
  font-family: "Montserrat-Bold"
  color: #F1C53E
</style>
<script>
export default {
  name: "Answer"
};
</script>
