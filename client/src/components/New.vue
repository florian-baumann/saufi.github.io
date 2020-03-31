<template>
    <div class="gamename container">
      <b-card title="Picco" class="text-center">
      <b-card-text>
        Add  Card <br>
      </b-card-text>
      

      <!-- Liste aller elements
      -->
      <ul class="list-group">
        <!--task nur zum schicken an name-item component-->
        <new-item v-for="(element, index) in elements" @remove="removeElement(index)" @complete="addElement(task)" :task="element" :key="index"> </new-item>      
      </ul>


      <!-- Elemets adden Textfeld mit Button-->
      <div class="add my-3">
        <div class="input-group ">
            <input type="text" class="form-control" placeholder="Element" v-model="newElement" @keyup.enter="addElement">
          <div class="input-group-append">
            <b-button class="float-right" @click="addElement()">+</b-button> <!-- v-on und @ das gleiche-->
          </div>
        </div>
      </div>
  

      <!-- Buttons weiter/zurück-->
      <router-link :to="{path: 'gameselect'}">
        <b-button variant="secondary" class="float-left">Zurück</b-button>
      </router-link>
      <router-link :to="{path: 'gameselect'}" @click="sendit(elements)">
        <b-button variant="success" class="float-right">Speichern</b-button>
      </router-link>
      </b-card>  
    </div>
</template>

<script>
    import axios from 'axios'     //TODO :kann eig auch in main.js stehen geht aber nicht
    import NewItem from './new-item.vue'

    export default {
        name: 'New',
        components: {
            NewItem
        },
    props: ['selected'],
        data() {
            return {
                newElement:"",
                title: "",
                elements: [
                    "hallo",
                    "blaba"
                ],
            }
        },
        methods: {
            addElement: function () {
                if (this.newElement) {
                    this.elements.push(this.newElement);
                this.newElement = '';
                }
            },
            removeElement(index) {
                this.elements.splice(index, 1);
            },
            sendit(arr) {
                axios.post(
                    'http://localhost:8081/new',
                    {arr}
                )
                .catch(function(error) {
                    // eslint-disable-next-line no-console
                    console.log(error);
                })
            }
        },
    }

</script>

<style >

</style>