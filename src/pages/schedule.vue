<template lang="pug">
  section
    div.schedule-size
      h2.mechant QUESTION POUR UN MECHANT
      h3.prog PROGRAMMATION
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
      p 22:00  Psychose (Alphred Hitchcock)1960
      p.adresse.pad AU CINEMA-CAFE VIDEODROME-2
      p.adresse 49 Cours Julien - 13006 Marseille
      p.adresse 04 91 42 75 41
</template>

<style lang="sass">

.schedule
  background-color: #000

.schedule-size
  width: 50%
  margin-left: 25%

.prog
  padding-top: 80px
  padding-bottom: 0px
  margin-bottom: 0

.mechant
  padding-top: 50px

.horaire
  text-align: left
  width: 100%
  padding-left: 25%

.date
  padding-top: 40px
  font-weight: 900

.pad
  padding-top: 50px

.adresse
  font-weight: 900
</style>

<script>
export default {
  name: "Schedule"
};
</script>
