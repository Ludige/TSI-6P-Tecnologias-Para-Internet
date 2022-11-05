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
    methods:{

    }
})
</script>

<style scoped>
  input{
    background-color: rgb(242, 243, 242);
    border: 1.5px solid #747474;
    height: 35px;
    width: 60vh;
    padding-left: 10px;
    border-radius: 10px;
  }
</style>