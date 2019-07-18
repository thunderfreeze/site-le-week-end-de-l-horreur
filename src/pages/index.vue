<template lang="pug">
  section
    div.accueil
      h1 QUESTION POUR UN MECHANT
      p.place Au café-cinéma Videodrome 2 de Marseille se tiendra 
      p du 7 au 9 juin prochains, la première édition du week-end de l'horreur
      p.but Pour découvrir la programmation, répond correctement à ce Quizz
      button.commencer COMMENCER
    nav.menu
      ul
        li
          router-link(:to="{name: 'About'}") A propos
        li
          router-link(:to="{name: 'Schedule'}") Horaires
</template>

<script>
export default {
  name: "Home"
};
</script>
