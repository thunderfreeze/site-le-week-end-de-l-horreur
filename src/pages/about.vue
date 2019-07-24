<template lang="pug">
  section.section
    div.about-size
      h1.pour-un-mechant QUESTION POUR UN MECHANT
      h1.videodrome VIDEODROME-2
      h3.diffusion Diffusion cinématographique alternative
      p.place2 Videodrome 2 est avant tout un projet né de la volonté de rencontrer, d'échanger et d'experimenter.Projet porté par la SCOP DCA (Diffusion Cinématographique Alternative) et l'association Solaris en charge de al coordination de programmation, il souhaite offrir un lieu unique et polyvalent dédié a la diffusion cinématographique et la cinéphilie.
      p.place2 Situé au coeur de Marseille au 49 cours Julien, il reunit une salle de cinéma de 49 places accueillant 6 projections hebdomadaires non commerciales, un vidéoclub au catalogue locatif de plus de 5400 films, de la rareté aux classiques en provenance des 4 coins du monde et un bistrot ou café-cinéma
      p.place2 Du 7 au 9 juin prochain, se deroulera au Vidéodrome-2, al premeire édition de week-end de l'horreur. Pour découvrir la programmation et les horaires des films, un mini-quizz est organisé. Répondez correctement!
      .container-cta
        p.blood(v-if="pastAnswers.length == 0") POURMECHANT
        router-link.commencer(v-if="pastAnswers.length == 0" :to="{path: '/question/1'}") COMMENCER
      a.reprendre(v-if="pastAnswers.length > 0 && pastAnswers.length != 10" href="" @click.prevent="resume") REPRENDRE
</template>

<style lang="sass">
.about-size
  width: 50%

.about
  background-color: #000

.videodrome
  color: #FFF
  margin-bottom: 0
  font-family: "Montserrat-Bold"
  font-size: 0.75rem

  +tablet
    font-size: 1.75rem

.pour-un-mechant
  padding-top: 5rem
  font-size: 80px
  font-family: "bloodlust"

.diffusion
  font-family: "Montserrat-Medium"

  +mobile
    font-size: 0.5rem

.place2
  padding-bottom: 30px
  text-align: left
  font-family: "Montserrat-Medium"
</style>

<script>
export default {
  name: "About",
  computed: {
    pastAnswers() {
      return this.$store.getters.pastAnswers;
    }
  },
  methods: {
    resume() {
      this.$router.go(-1);
    }
  }
};
</script>
