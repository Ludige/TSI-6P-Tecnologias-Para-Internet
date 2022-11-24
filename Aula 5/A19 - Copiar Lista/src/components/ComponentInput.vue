<template>
    <div>
      <input v-model="campo">
      <button @click="add" id="btn">+</button>

      <ol>
        Estante 1:
        <li v-for="item in lista" :key="item">
          {{ item }}
        </li>
      </ol>

      <button @click="copy" id="btn">+</button>

      <ol>
        Estante 2:
        <li v-for="item in lista2" :key="item">
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
          lista2:[],
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