<template>
  <div class="Picco container">
    <b-card title="Picco" class=" text-center">
      <b-card-text>
        With supporting text below ... begrüßungstevet ... as a natural lead-in to additional content.
      </b-card-text>
      <!--<router-link to="home"  tag="b-button" variant="success">Home</router-link>-->
      <router-link :to="{path: 'gameselect'}">
        <b-button id="myButton" variant="success">Start!</b-button>
      </router-link>

    </b-card>
  </div>
</template>

<script>

</script>

<style scoped>
.card {
  margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
</style>