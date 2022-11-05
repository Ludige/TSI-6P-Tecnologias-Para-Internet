<template>
                <input
                placeholder=" Pesquisar..."
                v-model="pesquisar"
                @change="search"
                >
                <button id="searchButton" @click="search">🔎</button>

</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return{
            pesquisar:"",
        }
    },
    methods:{
        search(){
            //TODO implementar a busca de produtos
        }
    }
})
</script>

<style>
    input{
        height: 35px;
        width: 60vh;
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    #searchButton{
        font-size: 10px;
        background-color: white;
        margin-right: 20px;
        height: 35px;
        width: 5vh;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-color: black;
    }

</style>