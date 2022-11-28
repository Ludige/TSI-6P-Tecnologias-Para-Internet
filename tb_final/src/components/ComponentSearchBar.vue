<template>
    <body>
            <input
        placeholder=" Pesquisar..."
        v-model="pesquisar"
        @change="search"
        >
        <button id="searchButton" @click="search"><img v-bind:src="logo" id="logo"></button>
    </body>

</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return{
            pesquisar:"",
            logo: "https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png",
        }
    },
    methods:{
        search(){
            //TODO implementar a busca de produtos
        }
    }
})
</script>

<style  scoped>
    input{
        height: 35px;
        width: 60vh;
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    #searchButton{
        background-color: white;
        margin-right: 20px;
        width: 5vh;
        height: 5vh;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-color: black;
        cursor: pointer;
    }
    #logo{
        width: 3vh;
        height: 3vh;
    }
</style>