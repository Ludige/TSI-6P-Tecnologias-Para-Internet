<template>
    <div>aa
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

<style>

</style>