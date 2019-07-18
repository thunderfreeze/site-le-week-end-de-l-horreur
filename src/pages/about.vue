<template lang="pug">
  section
    div.about
      h2 QUESTION POUR UN MECHANT
      h1.videodrome VIDEODROME-2
      h3 Diffusion cinématographique alternative
      p.place2 Videodrome 2 est avant tout un projet né de la volonté de rencontrer, d'échanger et d'experimenter.Projet porté par la SCOP DCA (Diffusion Cinématographique Alternative) et l'association Solaris en charge de al coordination de programmation, il souhaite offrir un lieu unique et polyvalent dédié a la diffusion cinématographique et la cinéphilie.
      p.place2 Situé au coeur de Marseille au 49 cours Julien, il reunit une salle de cinéma de 49 places accueillant 6 projections hebdomadaires non commerciales, un vidéoclub au catalogue locatif de plus de 5400 films, de la rareté aux classiques en provenance des 4 coins du monde et un bistrot ou café-cinéma
      p.place2 Du 7 au 9 juin prochain, se deroulera au Vidéodrome-2, al premeire édition de week-end de l'horreur. Pour découvrir la programmation et les horaires des films, un mini-quizz est organisé. Répondez correctement!
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
  name: "About"
};
</script>
