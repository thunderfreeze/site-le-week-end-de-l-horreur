<template lang="pug">
  section
    h2.mechant QUESTION POUR UN MECHANT
    div.schedule-size
      h3.prog BRAVO TU AS TERMINE LE QUIZZ
      h3.prog.programation PROGRAMMATION
      p.horaire.date Vendredi 7 juin 2019
      p.horaire 20:00  Le fantôme de l'opéra (Rupert Julian) 1925
      p.horaire 22:00  L'homme qui rit (Jonathan Demme) 1928
      p.horaire.date Samedi 8 juin 2019
      p.horaire 15:30  Dracula (Tod Browning) 1931
      p.horaire 17:30  Frankenstein (James Whale) 1931
      p.horaire 20:00  Docteur Jekyll et Mister Hyde (Rouben Mamoulian) 1931
      p.horaire 22:30  La momie (Karl Freund) 1932
      p.horaire.date  Dimanche 9 juin 2019
      p.horaire 15:30  Le chat noir (Edgar G. Ulmer) 1934
      p.horaire 17:30  Le corbeau (Lew Landers) 1935
      p.horaire 20:00  Le loup garou (M.?ight Shyamalan)1941
      p.horaire 22:00  Psychose (Alphred Hitchcock)1960
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

.prog
  padding-top: 0
  padding-bottom: 0
  margin-bottom: 0
  font-size: 24px
  font-family: "Montserrat-Bold"

.programation
  padding-top: 12px

.mechant
  padding-top: 95px
  padding-bottom: 26px
  font-family: "Bloodlust"
  font-size: 70px

.horaire
  text-align: center
  width: 100%
  font-family: "Montserrat-Medium"
  font-size: 18px

.date
  padding-top: 40px
  font-family: "Montserrat-Bold"
  font-size: 22px

.pad
  padding-top: 50px

.adresse
  font-family: "Montserrat-Bold"
  font-size: 25px
</style>

<script>
export default {
  name: "Schedule"
};
</script>
