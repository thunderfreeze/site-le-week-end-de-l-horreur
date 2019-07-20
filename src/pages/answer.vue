<template lang="pug">
  section
    h2.question-pour-un-mechant QUESTION POUR UN MECHANT
    h2.page 01/10
    p.bonne-reponse La bonne réponse était
    h1.fantome LE FANTOME DE L'OPERA
</template>

<style lang="sass">
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

.bonne-reponse
  padding-top: 62px
</style>
<script>
export default {
  name: "Answer"
};
</script>
