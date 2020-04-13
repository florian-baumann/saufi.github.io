<template>
    <div class="PiccoSelect container">
        <b-card title="Picco" class=" text-center">
        
        <b-form-group label="Wähle ein Spiel aus"> <!--Liste aller spiele zum auswählen -->
            <b-form-radio-group v-model="selected" :options="names" value-field="id" text-field="title" stacked></b-form-radio-group>
        </b-form-group>
        <!--<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
                  

        <!-- Navigations Buttons -->
        <router-link :to="{path: 'new'}">
            <b-button variant="primary" class="float-left">Neues erstellen</b-button>
        </router-link>
        <router-link :to="{name:'GameName',params: { selected } }" ><!--name aus router def-->
            <b-button variant="success" class="float-right">Weiter</b-button>
        </router-link>

        </b-card>
    </div>
</template>

<script>
import axios from 'axios'     //TODO :kann eig auch in main.js stehen geht aber nicht

export default {
  name: 'picco',
  props: {

  },
  mounted() {
    axios 
      .get('http://localhost:8081/names')
      .then(response => (this.names = response.data)) //ohne .data ges request
      // eslint-disable-next-line no-console
      .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
  },
  data() {
    return {
        selected: 0,
        names: [], //gefüllt durch http request; wenn names:null fehler!
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>

