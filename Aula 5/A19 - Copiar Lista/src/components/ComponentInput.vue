<template>
    <div>
      <input v-model="campo">
      <button @click="add()" id="btn">+</button>
      <button @click="clear(lista)" id="btn">Clear</button>

      <ol>
        Livros:
        <li v-for="item in lista" :key="item">
          {{ item }}
        </li>
      </ol>

      <button @click="copy()" id="btn2">COPY</button>
      <button @click="clear(lista2)" id="btn2">CLEAR 2</button>

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
      clear(lista){
        if(lista.length > 0){
          lista.splice(0);
        }
      },
      copy(){
        if(this.lista.length > 0){
          this.lista.forEach((element)=>{
            this.lista2.push(element);
          });
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
    width: 6vw;
    height: 5vh;
    background-color: greenyellow;
    margin-left: 10px;
    border-radius: 50px;
  }
  #btn2{
    width: 6vw;
    height: 4vh;
    background-color: cornflowerblue;
    margin-left: 25px;
    border-radius: 10px;
  }
</style>