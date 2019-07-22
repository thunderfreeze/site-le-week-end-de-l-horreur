<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page 01/10
    p.bonne-reponse La bonne réponse était

    h1.fantome(v-if="answer_number == 1") LE FANTOME DE L'OPERA

    img.picture(v-if="answer_number == 1")(src="static/images/fantome.jpg")

    p.diff.diffusion(v-if="answer_number == 1") Diffusé a 20:00
    p.diffusion(v-if="answer_number == 1") Le vendredi 7 juin 2019
    p.diffusion(v-if="answer_number == 1")answer Au café-cinéma Videodrome-2 à Marseille   
</template>

<style lang="sass">

//<BACKGROUND>//

.answer-1
  background-color: #BB3537

.answer-2
  background-color: #387078

.answer-3
  background-color: #2A4031

.answer-4
  background-color: #323639

.answer-5
  background-color: #241B2A

.answer-6
  background-color: #010244

.answer-7
  background-color: #131313

.answer-8
  background-color: #382532

.answer-9
  background-color: #2A397A

.answer-10
  background-color: #000000
//</BACKGROUND>//
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
  name: "Answer",
  props: ["answer_number"]
};
</script>
