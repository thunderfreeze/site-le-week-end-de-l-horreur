<template lang="pug">
  section
    div.about
      h2 QUESTION POUR UN MECHANT
      h3 PROGRAMMATION
      p Vendredi 7 juin 2019
      p 20:00  Le fantôme de l'opéra (Rupert Julian) 1925
      p 22:00  L'homme qui rit (Jonathan Demme) 1928
      p Samedi 8 juin 2019
      p 15:30  Dracula (Tod Browning) 1931
      p 17:30  Frankenstein (James Whale) 1931
      p 20:00  Docteur Jekyll et Mister Hyde (Rouben Mamoulian) 1931
      p 22:30 La momie (Karl Freund) 1932
      p Dimanche 9 juin 2019
      p 15:30 Le chat noir (Edgar G. Ulmer) 1934

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
