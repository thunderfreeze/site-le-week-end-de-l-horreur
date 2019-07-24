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

    h1.question-answer-title-1.question-answer-title(v-if="answer_number == 1") LE FANTOME DE L'OPERA

    h1.question-answer-title-2.question-answer-title(v-if="answer_number == 2") L’HOMME QUI RIT

    h1.question-answer-title-3.question-answer-title(v-if="answer_number == 3") DRACULA

    h1.question-answer-title-4.question-answer-title(v-if="answer_number == 4") FRANKENSTEIN

    h1.question-answer-title-5.question-answer-title(v-if="answer_number == 5") Dr JEKYLL & Mr HYDE

    h1.question-answer-title-6.question-answer-title(v-if="answer_number == 6") LA MOMIE

    h1.question-answer-title-7.question-answer-title(v-if="answer_number == 7") LE CHAT NOIR

    h1.question-answer-title-8.question-answer-title(v-if="answer_number == 8") LE CORBEAU

    h1.question-answer-title-9.question-answer-title(v-if="answer_number == 9") LE LOUP GAROU

    h1.question-answer-title-10.question-answer-title(v-if="answer_number == 10") PSYCHOSE



    router-link(v-if="answer_number == 1")(:to="{path: '/question/2'}")
      img.picture(src="static/images/fantome.jpg")

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

    p.diff.diffusion(v-if="answer_number == 1") Diffusé a <span class="bold">20:00</span>
    p.diffusion(v-if="answer_number == 1") Le vendredi 7 juin 2019
    p.diffusion(v-if="answer_number == 1") Au café-cinéma Videodrome-2 à Marseille   

    p.diff.diffusion(v-if="answer_number == 2") Diffusé à <span class="bold">22:00 </span> 
    p.diffusion(v-if="answer_number == 2") Le vendredi 7 juin 2019
    p.diffusion(v-if="answer_number == 2") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 3") Diffusé à <span class="bold">15:30</span>
    p.diffusion(v-if="answer_number == 3") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 3") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 4") Diffusé à <span class="bold">17:30</span>
    p.diffusion(v-if="answer_number == 4") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 4") Au café-cinéma Videodrome-2 à Marseille  

    p.diff.diffusion(v-if="answer_number == 5") <span class="bold">Diffusé à 20:00 </span>
    p.diffusion(v-if="answer_number == 5") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 5") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 6") Diffusé à <span class="bold">22:30</span>
    p.diffusion(v-if="answer_number == 6") Le samedi 8 juin 2019
    p.diffusion(v-if="answer_number == 6") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 7") Diffusé à <span class="bold">15:30</span>
    p.diffusion(v-if="answer_number == 7") Le dimanche 9 juin 2019
    p.diffusion(v-if="answer_number == 7") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 8") Diffusé à <span class="bold">17:30</span>
    p.diffusion(v-if="answer_number == 8") Le dimanche 9? 2019
    p.diffusion(v-if="answer_number == 8") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 9") Diffusé à <span class="bold">20:00</span>
    p.diffusion(v-if="answer_number == 9") Le dimanche 9 juin 2019 
    p.diffusion(v-if="answer_number == 9") Au café-cinéma Videodrome-2 à Marseille 

    p.diff.diffusion(v-if="answer_number == 10") Diffusé à <span class="bold">22:00</span>
    p.diffusion(v-if="answer_number == 10") Le dimanche 9 juin 2019 
    p.diffusion(v-if="answer_number == 10") Au café-cinéma Videodrome-2 à Marseille 
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

.bold
  font-family: "Montserrat-Bold"

.diffusion
  font-family: "Montserrat-Medium"
  font-size: 25px
  animation-duration: .5s
  animation-delay: 1.25s
  animation-name: fade
  opacity: 0
  animation-fill-mode: forwards

@keyframes fade
  from
    opacity: 0
  to
    opacity: 1

.page
  position: absolute
  right: 42px
  top: 34px
  color: white
  font-size: 40px
  font-family: "Bloodlust"

.bonne-reponse
  padding-top: 62px
  padding-bottom: 50px
  font-family: "Montserrat-Medium"
  animation-duration: .5s
  animation-delay: 1s
  animation-name: fade
  opacity: 0
  animation-fill-mode: forwards

.picture
  height: 487px
  width: 355px
  display: block
  margin: auto
  padding: 0
  transition: box-shadow .5s ease
  animation-duration: 1.25s
  animation-name: slidein
  animation-timing-function: cubic-bezier(0.1, 0.14, 0.4, 1.53)

@keyframes slidein
  from
    transform: scale(0,0)
  to
    transform: scale(1,1)

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
