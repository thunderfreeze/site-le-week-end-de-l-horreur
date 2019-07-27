<template lang="pug">
  section.answer-container
  
    p.bonne-reponse La bonne réponse était

    h1.question-answer-title-1.question-answer-title.fade-in(v-if="answer_number == 1") LE FANTOME DE L'OPERA

    h1.question-answer-title-2.question-answer-title.fade-in(v-if="answer_number == 2") L’HOMME QUI RIT

    h1.question-answer-title-3.question-answer-title.fade-in(v-if="answer_number == 3") DRACULA

    h1.question-answer-title-4.question-answer-title.fade-in(v-if="answer_number == 4") FRANKENSTEIN

    h1.question-answer-title-5.question-answer-title.fade-in(v-if="answer_number == 5") Dr JEKYLL & Mr HYDE

    h1.question-answer-title-6.question-answer-title.fade-in(v-if="answer_number == 6") LA MOMIE

    h1.question-answer-title-7.question-answer-title.fade-in(v-if="answer_number == 7") LE CHAT NOIR

    h1.question-answer-title-8.question-answer-title.fade-in(v-if="answer_number == 8") LE CORBEAU

    h1.question-answer-title-9.question-answer-title.fade-in(v-if="answer_number == 9") LE LOUP GAROU

    h1.question-answer-title-10.question-answer-title.fade-in(v-if="answer_number == 10") PSYCHOSE


    figure.figure(v-if="answer_number == 1")
      router-link.figure-link(:to="{path: '/question/2'}")
      img.figure-image(src="static/images/fantome.jpg")

    figure.figure(v-if="answer_number == 2")
      router-link.figure-link(:to="{path: '/question/3'}")
      img.figure-image(src="static/images/L'homme-qui-rit.jpg")

    figure.figure(v-if="answer_number == 3")
      router-link.figure-link(:to="{path: '/question/4'}")
      img.figure-image(src="static/images/dracula.jpg")

    figure.figure(v-if="answer_number == 4")
      router-link.figure-link(:to="{path: '/question/5'}")
      img.figure-image(src="static/images/frankenstein.jpg")

    figure.figure(v-if="answer_number == 5")
      router-link.figure-link(:to="{path: '/question/6'}")
      img.figure-image(src="static/images/Dr-Jekyl-&-Mr-Hyde.jpg")

    figure.figure(v-if="answer_number == 6")
      router-link.figure-link(:to="{path: '/question/7'}")
      img.figure-image(src="static/images/momie.jpg")

    figure.figure(v-if="answer_number == 7")
      router-link.figure-link(:to="{path: '/question/8'}")
      img.figure-image(src="static/images/chat.jpg")

    figure.figure(v-if="answer_number == 8")
      router-link.figure-link(:to="{path: '/question/9'}")
      img.figure-image(src="static/images/corbeau.jpg")

    figure.figure(v-if="answer_number == 9")
      router-link.figure-link(:to="{path: '/question/10'}")
      img.figure-image(src="static/images/Le-Loup.jpg")

    figure.figure(v-if="answer_number == 10")
      router-link.figure-link(:to="{name: 'Schedule'}")
      img.figure-image(src="static/images/Psychose.jpg")

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
.diff
  padding-top: 2vh

.figure
  position: relative
  display: flex
  // border: 3px solid blue
  animation-duration: 1.25s
  animation-name: slidein
  animation-timing-function: cubic-bezier(0.1, 0.14, 0.4, 1.53)

.figure-image
  position: relative
  height: 40vh
  width: auto
  // transition: filter 1s ease

.figure-link
  position: absolute
  z-index: 1
  top: 0
  right: 0
  bottom: 0
  left: 0
  transition: box-shadow .5s ease


.figure-link:hover
  box-shadow: 0 0 50px #FFF

  // & + .figure-image
  //   filter: grayscale(1)

.answer-container
  // background-color: blue
  padding: 4rem 0 4rem 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.bold
  font-family: "Montserrat-Bold"

.diffusion
  font-family: "Montserrat-Medium"
  font-size: .75rem
  animation-duration: .5s
  animation-delay: 1.25s
  animation-name: fade
  opacity: 0
  animation-fill-mode: forwards

  +from($tablet)
    font-size: 1.25rem

@keyframes fade
  from
    opacity: 0
  to
    opacity: 1

.bonne-reponse
  padding-bottom: 2vh
  font-family: "Montserrat-Medium"
  animation-duration: .5s
  animation-delay: 1s
  font-size: .75rem
  animation-name: fade
  opacity: 0
  animation-fill-mode: forwards

  +from($tablet)
    font-size: 1.25rem

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
