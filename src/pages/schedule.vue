<template lang="pug">
  section
    div.schedule
      h2 QUESTION POUR UN MECHANT
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
      p AU CINEMA-CAFE VIDEODROME-2
      p 49 Cours Julien - 13006 Marseille
      p 04 91 42 75 41

    nav.menu
      ul
        li
          router-link.active(:to="{name: 'About'}") A propos
        li
          router-link(:to="{name: 'Schedule'}") Horaires
        p.score Ton score: 08/10
</template>

<script>
export default {
  name: "Schedule"
};
</script>
