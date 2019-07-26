<template lang="pug">
  section
    h1.mechant QUESTION POUR UN MECHANT
    div.schedule-size
      h3.prog BRAVO TU AS TERMINE LE QUIZZ
      h3.prog.programation PROGRAMMATION
      p.horaire.date Vendredi 7 juin 2019
      SheduleParagraph(:answer-number="1") 20:00  Le fantôme de l'opéra (Rupert Julian) 1925
      SheduleParagraph(:answer-number="2") 22:00  L'homme qui rit (Jonathan Demme) 1928
      p.horaire.date Samedi 8 juin 2019
      SheduleParagraph(:answer-number="3") 15:30  Dracula (Tod Browning) 1931
      SheduleParagraph(:answer-number="4") 17:30  Frankenstein (James Whale) 1931
      SheduleParagraph(:answer-number="5") 20:00  Docteur Jekyll et Mister Hyde (Rouben Mamoulian) 1931
      SheduleParagraph(:answer-number="6") 22:30  La momie (Karl Freund) 1932
      p.horaire.date  Dimanche 9 juin 2019
      SheduleParagraph(:answer-number="7") 15:30  Le chat noir (Edgar G. Ulmer) 1934
      SheduleParagraph(:answer-number="8") 17:30  Le corbeau (Lew Landers) 1935
      SheduleParagraph(:answer-number="9") 20:00  Le loup garou (M.?ight Shyamalan)1941
      SheduleParagraph(:answer-number="10") 22:00  Psychose (Alphred Hitchcock)1960
      p.adresse.pad AU CINEMA-CAFE VIDEODROME-2
      p.adresse 49 Cours Julien - 13006 Marseille
      p.adresse 04 91 42 75 41

      
</template>

<style lang="sass">

.schedule
  background-color: #000

.schedule-size
  width: 25vw
  margin-left: 50vw

  +mobile
    width: 80vw
    margin-left: 10vw

  +tablet
    width: 60vw
    margin-left: 20vw
</style>

<script>
import SheduleParagraph from "@/elements/schedule-paragraph";

export default {
  name: "Schedule",
  components: {
    SheduleParagraph
  },
  computed: {
    pastAnswers() {
      return this.$store.getters.pastAnswers;
    }
  }
};
</script>
