<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page(v-if="answer_number == 1") 01/10
    h2.page(v-if="answer_number == 2") 02/10
    h2.page(v-if="answer_number == 3") 03/10
    h2.page(v-if="answer_number == 4") 04/10
    h2.page(v-if="answer_number == 5") 05/10
    h2.page(v-if="answer_number == 6") 06/10
    h2.page(v-if="answer_number == 7") 07/10
    h2.page(v-if="answer_number == 8") 08/10
    h2.page(v-if="answer_number == 9") 09/10
    h2.page(v-if="answer_number == 10") 10/10
    p.bonne-reponse La bonne réponse était

    h1.answer-title-1.answer-title(v-if="answer_number == 1") LE FANTOME DE L'OPERA

    h1.answer-title-2.answer-title(v-if="answer_number == 2") L’HOMME QUI RIT

    h1.answer-title-3.answer-title(v-if="answer_number == 3") DRACULA

    h1.answer-title-4.answer-title(v-if="answer_number == 4") FRANKENSTEIN

    h1.answer-title-5.answer-title(v-if="answer_number == 5") Dr JEKYL & Mr HIDE

    h1.answer-title-6.answer-title(v-if="answer_number == 6") LA MOMIE

    h1.answer-title-7.answer-title(v-if="answer_number == 7") LE CHAT NOIR

    h1.answer-title-8.answer-title(v-if="answer_number == 8") LE CORBEAU

    h1.answer-title-9.answer-title(v-if="answer_number == 9") LE LOUP GAROU

    h1.answer-title-10.answer-title(v-if="answer_number == 10") PSYCHOSE



    router-link.picture(v-if="answer_number == 1")(:to="{path: '/question/2'}")
      img(src="static/images/fantome.jpg")

    router-link.picture(v-if="answer_number == 2")(:to="{path: '/question/3'}")
      img.picture(src="static/images/L'homme-qui-rit.jpg")

    router-link.picture(v-if="answer_number == 3")(:to="{path: '/question/4'}")
      img.picture(src="static/images/dracula.jpg")

    router-link.picture(v-if="answer_number == 4")(:to="{path: '/question/5'}")
      img.picture(src="static/images/frankenstein.jpg")

    router-link.picture(v-if="answer_number == 5")(:to="{path: '/question/6'}")
      img.picture(src="static/images/Dr-Jekyl-&-Mr-Hyde.jpg")

    router-link.picture(v-if="answer_number == 6")(:to="{path: '/question/7'}")
      img.picture(src="static/images/momie.jpg")

    router-link.picture(v-if="answer_number == 7")(:to="{path: '/question/8'}")
      img.picture(src="static/images/chat.jpg")

    router-link.picture(v-if="answer_number == 8")(:to="{path: '/question/9'}")
      img.picture(src="static/images/corbeau.jpg")

    router-link.picture(v-if="answer_number == 9")(:to="{path: '/question/10'}")
      img.picture(src="static/images/Le-Loup.jpg")

    router-link.picture(v-if="answer_number == 10")(:to="{name: 'Schedule'}")
      img.picture(src="static/images/Psychose.jpg")

    p.diff.diffusion(v-if="answer_number == 1") Diffusé a 20:00
    p.diffusion(v-if="answer_number == 1") Le vendredi 7 juin 2019
    p.diffusion(v-if="answer_number == 1") Au café-cinéma Videodrome-2 à Marseille   

    p.diff.diffusion(v-if="answer_number == 2") Diffusé à 22:00  
    p.diffusion(v-if="answer_number == 2") Le vendredi 7 juin 2019
    p.diffusion(v-if="answer_number == 2") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 3") Diffusé à 15:30
    p.diffusion(v-if="answer_number == 3") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 3") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 4") Diffusé à 17:30
    p.diffusion(v-if="answer_number == 4") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 4") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 5") Diffusé à 20:00
    p.diffusion(v-if="answer_number == 5") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 5") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 6") Diffusé à 22:30
    p.diffusion(v-if="answer_number == 6") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 6") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 7") Diffusé à 15:30
    p.diffusion(v-if="answer_number == 7") Le dimanche 9 juin 2019
    p.diffusion(v-if="answer_number == 7") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 8") Diffusé à 17:30
    p.diffusion(v-if="answer_number == 8") Le dimanche 9? 2019
    p.diffusion(v-if="answer_number == 8") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 9") Diffusé à 20:00 
    p.diffusion(v-if="answer_number == 9") Le dimanche 9 juin 2019 
    p.diffusion(v-if="answer_number == 9") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 10") Diffusé à 22:00 
    p.diffusion(v-if="answer_number == 10") Le dimanche 9 juin 2019 
    p.diffusion(v-if="answer_number == 10") Au café-cinéma Videodrome-2 à Marseille 
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

//<TITRE>//
.answer-title
  text-align: center
  padding-top: 20px
  font-size: 70px

.answer-title-1
  color: #F1C53E
  font-family: "AvenirNextCondensed-HeavyItalic-10"

.answer-title-2
  color: #EDEAE3
  font-family: "AvenirNextCondensed-DemiBold-03"
  text-shadow: 5px 0 50px #FC270E

.answer-title-3
  color: #E42232
  font-family: "American-Captain"
  text-shadow: 0 0 50px #EBD860

.answer-title-4
  color: #DD481C
  font-family: "manolete"

.answer-title-5
  color: #D4C95A
  font-family: "slimlines"

.answer-title-6
  color: #FCCC37
  font-family: "Melting-Letter"

.answer-title-7
  color: #EBE9CE
  font-family: "ALYSHEN"

.answer-title-8
  color: #FAEC27
  font-family: "DK-Magical-Brush"

.answer-title-9
  color: #E2C148
  font-family: "Melting-Letter"

.answer-title-10
  color: #FBD800
  font-family: "Compacta"
//</TITRE>//
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
