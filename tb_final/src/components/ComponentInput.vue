<template>
    <div>
      <p>{{nome}}:</p>
      <input
      
      v-model="campo"
      @change="search"
      >
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props:{
      nome:{
        type: String,
      }
    },
    data() {
        return{
          campo:"",
        }
    },
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
</style>