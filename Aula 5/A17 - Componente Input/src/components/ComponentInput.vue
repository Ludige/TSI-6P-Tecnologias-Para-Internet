<template>
    <div>
      <input v-model="campo">
      <button @click="add" id="btn">+</button>
      <button @click="remove" id="btn">Clear</button>

      <ol>
        Livros:
        <li v-for="item in lista" :key="item">
          {{ item }}
        </li>
      </ol>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return{
          lista:[],
          campo: "",
        }
    },
    methods:{
      add(){
        if(this.campo != ""){
          this.lista.push(this.campo);
          this.campo = "";
        }
      },
      remove(){
        if(this.lista.length > 0){
          this.lista.splice(0);
        }
      }
    }
})
</script>

<style scoped>
  input{
    background-color: white;
    border: 1.5px solid;
    height: 35px;
    width: 60vh;
    padding-left: 10px;
    border-radius: 10px;
  }
  #btn{
    width: 3vw;
    height: 5vh;
    background-color: greenyellow;
    margin-left: 10px;
    border-radius: 50px;
  }
</style>