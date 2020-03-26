<template>
    <div class="game container">
      <b-card title="Picco" class="text-center">
      <b-card-text>
        <div class="txt"> 
          {{text}} <br>
          <!--{{names}} <br> 
          {{this.gameid}} <br> 
          {{elementslist}} <br> 
          {{this.games[this.gameid].elements}}-->
        </div>
      </b-card-text>      

    <router-link :to="{path: 'gameselect'}">
      <b-button variant="danger" class="float-left">Exit</b-button>
    </router-link>

    <b-button v-if="init === true && end === false" @click="back()" variant="secondary" class="float-left">Eins zurück</b-button>


    <router-link v-if="end === false" :to="{path:'game'}">
      <b-button variant="success" class="float-right" @click="next()" >Weiter</b-button>
    </router-link>
    
    </b-card>  
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: 'Game',
  props: ['gameid', 'names'],
  data() {
    return {
      text : "Lets go!",
      counter : 0,
      init: false,
      end: false,

      //name: "tom",     // test für namen var in aufgaben
      gamesobj: {},
      games: [
        {
          "elements": []
        },

      ],

      elementslist: [], //speichert alle elemente die in der Runde zu spielen sind
      elementslistleng: 0,
    
    }
  },


  created() {     //muss , geht auch nicht beforemounted()
    axios 
      .get('http://localhost:8081/games')
      .then(response => (
        this.elementslist = response.data[this.gameid].elements)) //ohne .data ges request
      // eslint-disable-next-line no-console
      .catch(e => {
        this.errors.push(e)
      })
    this.elementslistleng = this.elementslist.length;
  },


  mounted() {
    //this.elementslist = this.elementslist.concat(this.games[this.gameid].elements);     //ursprünglich
    
    
    //this.elementslist = this.games[this.gameid].elements; 
    //this.elementslist = ["aaa", "bbb"],
    
    //this.elementslistleng = this.elementslist.length;     //ursprünglich
  },


  methods: {
    next: function() {
      if(this.init === false) {
            this.elementslistleng = this.elementslist.length;
            this.init = true;
      } else {
        if(this.elementslistleng > this.counter) {
          this.counter ++;
          this.text = this.elementslist[this.counter-1];
          this.init = true;
        } else {
          this.text = "Ende";
          this.end = true;
        }
      }
    },


    back: function() {
      if (this.counter > 0) {
        this.counter--;
        this.text = this.elementslist[this.counter];
      } else {
        this.text = "Hello";
      }
    }

  }
}

</script>


<style>
  .txt {
    height: 100px;
  }
</style>