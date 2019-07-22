<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page(v-if="question_number == 1") 01/10
    h2.page(v-if="question_number == 2") 02/10
    h2.page(v-if="question_number == 3") 03/10
    h2.page(v-if="question_number == 4") 04/10
    h2.page(v-if="question_number == 5") 05/10
    h2.page(v-if="question_number == 6") 06/10
    h2.page(v-if="question_number == 7") 07/10
    h2.page(v-if="question_number == 8") 08/10
    h2.page(v-if="question_number == 9") 09/10
    h2.page(v-if="question_number == 10") 10/10

    h1.question-title-1.question-title(v-if="question_number == 1") QUI DORT DANS UN OPERA POUR PECHO?

    h1.question-title-2.question-title(v-if="question_number == 2") QUI A UN SOURIRE À LA COLGATE ?

    h1.question-title-3.question-title(v-if="question_number == 3") QUI EST LE PLUS GRAND DE TOUS LES VAMPIRES ?

    h1.question-title-4.question-title(v-if="question_number == 4") QUI N'AVAIT PAS D'AMIS ?

    h1.question-title-5.question-title(v-if="question_number == 5") QUI EST CONNU POUR SES DEUX PERSONNALITE ?

    h1.question-title-6.question-title(v-if="question_number == 6") Qui a toujours ses papiers sur lui ?

    h1.question-title-7.question-title(v-if="question_number == 7") Qui est le chat le plus mÉCHANT ?

    h1.question-title-8.question-title(v-if="question_number == 8") Qui est une balance ?

    h1.question-title-9.question-title(v-if="question_number == 9") Qui n’est pas alle Chez l’esthEticienne depuis 3 mois ?

    h1.question-title-10.question-title(v-if="question_number == 10") QUI ADORE REGARDER LES FILLES SOUS LA DOUCHE ?

    router-link.reponse.reponse-1(v-if="question_number == 1" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Les rats d'Opéra
    router-link.reponse.reponse-1(v-if="question_number == 1" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Le fantôme de l'Opéra
    router-link.reponse.reponse-1(v-if="question_number == 1" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") La danseuse étoilée

    router-link.reponse.reponse-2(v-if="question_number == 2" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") l'Homme qui rit
    router-link.reponse.reponse-2(v-if="question_number == 2" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Je préfère Signal
    router-link.reponse.reponse-2(v-if="question_number == 2" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Miley Cirus

    router-link.reponse.reponse-3(v-if="question_number == 3" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Dracula
    router-link.reponse.reponse-3(v-if="question_number == 3" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Edward Collen
    router-link.reponse.reponse-3(v-if="question_number == 3" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Le petit vampire

    router-link.reponse.reponse-4(v-if="question_number == 4" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Remi
    router-link.reponse.reponse-4(v-if="question_number == 4" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Ton ami imaginaire
    router-link.reponse.reponse-4(v-if="question_number == 4" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Frankenstein

    router-link.reponse.reponse-5(v-if="question_number == 5" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Dr Jekyl & Mr Hide  
    router-link.reponse.reponse-5(v-if="question_number == 5" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Dr Jekyl
    router-link.reponse.reponse-5(v-if="question_number == 5" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Mr Hide

    router-link.reponse.reponse-6(v-if="question_number == 6" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Un gendarme   
    router-link.reponse.reponse-6(v-if="question_number == 6" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Ton petit cousin fier d’être majeur
    router-link.reponse.reponse-6(v-if="question_number == 6" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") La momie

    router-link.reponse.reponse-7(v-if="question_number == 7" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Le Chat noir  
    router-link.reponse.reponse-7(v-if="question_number == 7" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Nyan Cat
    router-link.reponse.reponse-7(v-if="question_number == 7" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Je donne ma langue au chat

    router-link.reponse.reponse-8(v-if="question_number == 8" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Je balance pas moi  
    router-link.reponse.reponse-8(v-if="question_number == 8" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") J’y gagne quoi ?
    router-link.reponse.reponse-8(v-if="question_number == 8" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Le corbeau

    router-link.reponse.reponse-9(v-if="question_number == 9" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Mere grand 
    router-link.reponse.reponse-9(v-if="question_number == 9" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Le loup garou
    router-link.reponse.reponse-9(v-if="question_number == 9" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Ta copine

    router-link.reponse.reponse-10(v-if="question_number == 10" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Les chats  
    router-link.reponse.reponse-10(v-if="question_number == 10" :to="{path: '/reponse/' + question_number}" @click.native="correctAnswer") Psychose
    router-link.reponse.reponse-10(v-if="question_number == 10" :to="{path: '/reponse/' + question_number}" @click.native="wrongAnswer") Un voisin Voyeur
</template>

<style lang="sass">
//<BACKGROUND>//

.question-1
  background-color: #C7002F

.question-2
  background-color: #387078

.question-3
  background-color: #2A4031

.question-4
  background-color: #323639

.question-5
  background-color: #241B2A

.question-6
  background-color: #010244

.question-7
  background-color: #131313

.question-8
  background-color: #382532

.question-9
  background-color: #2A397A

.question-10
  background-color: #000000
//</BACKGROUND>//

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
//<REPONSE>//
.reponse
  font-size: 30px
  font-family: "Montserrat-Bold"
  padding-bottom: 20px
  display: block
  text-align: center

.reponse-1
  color: #E9D4AE

.reponse-2
  color: #F0EDE6

.reponse-3
  color: #FFFFFF

.reponse-4
  color: #E7D95C

.reponse-5
  color: #DC2523

.reponse-6
  color: #FBD749

.reponse-7
  color: #738D39

.reponse-8
  color: #AEABD7

.reponse-9
  color: #FFFFFF

.reponse-10
  color: #F02403
//</REPONSE>//


//<TITRE>//
.question-title
  text-align: center
  padding-top: 405px
  padding-bottom: 50px
  font-size: 70px

.question-title-1
  color: #F1C53E
  font-family: "AvenirNextCondensed-HeavyItalic-10"

.question-title-2
  color: #EDEAE3
  font-family: "AvenirNextCondensed-DemiBold-03"
  text-shadow: 5px 0 50px #FC270E

.question-title-3
  color: #E42232
  font-family: "American-Captain"
  text-shadow: 0 0 50px #EBD860

.question-title-4
  color: #DD481C
  font-family: "manolete"

.question-title-5
  color: #D4C95A
  font-family: "slimlines"

.question-title-6
  color: #FCCC37
  font-family: "Melting-Letter"

.question-title-7
  color: #EBE9CE
  font-family: "ALYSHEN"

.question-title-8
  color: #FAEC27
  font-family: "DK-Magical-Brush"

.question-title-9
  color: #E2C148
  font-family: "Melting-Letter"

.question-title-10
  color: #FBD800
  font-family: "Compacta"
//</TITRE>//
</style>

<script>
export default {
  name: "Question",
  props: ["question_number"],
  methods: {
    correctAnswer() {
      this.$store.dispatch("correctAnswer", this.question_number);
    },
    wrongAnswer() {
      this.$store.dispatch("wrongAnswer", this.question_number);
    }
  }
};
</script>
