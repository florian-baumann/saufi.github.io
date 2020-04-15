<template>
    <!--https://codepen.io/oddvalue/pen/dpBGpj to do liste link-->
    <!-- https://aligoren.com/passing-data-to-a-router-link-in-vue-js/ props über router-link verschicken-->


    <div class="gamename container">
      <b-card title="Picco" class="text-center">
      <b-card-text>
        Füge Spieler hinzu <br>
        <!-- Game ausgewählt: {{selected}}   {{gameid}}     -->
      </b-card-text>
      

      <!-- Liste aller usernames-->
      <ul class="list-group">
        <!--task nur zum schicken an new-item component-->
        <new-item v-for="(name, index) in names" @remove="removeName(index)" @complete="addName(task)" :task="name" :key="index"> </new-item>      
      </ul>


      <!-- Username adden Textfeld mit Button-->
      <div class="add my-3">
        <div class="input-group ">
            <input type="text" class="form-control" placeholder="Name" v-model="newName" @keyup.enter="addName">
          <div class="input-group-append">
            <b-button class="float-right" @click="addName()">+</b-button> <!-- v-on und @ das gleiche-->
          </div>
        </div>
      </div>
  

      <!-- Buttons weiter/zurück-->
      <router-link :to="{path: 'gameselect'}">
        <b-button variant="secondary" class="float-left">Zurück</b-button>
      </router-link>
      <router-link :to="{name: 'Game', params: { gameid, names }}">
        <b-button variant="success" class="float-right">Weiter</b-button>
      </router-link>
      </b-card>  
    </div>
</template>


<script>
  import NewItem from './new-item.vue'

  export default {
    name: 'GameName',
    components: {
      NewItem
    },
    props: ['selected'],
    data: function() {
      return {
        newName: '', 
        gameid: this.selected,
        names: [ //hier liegen dann alle namen drin
          "tom"
        ]
      }
    },
    methods: {
      addName: function () {
        if (this.newName) {
          this.names.push(this.newName);
          this.newName = '';
        }
      },
      removeName(index) {
        this.names.splice(index, 1);
      }
    }
  }
</script>


<style>

</style>