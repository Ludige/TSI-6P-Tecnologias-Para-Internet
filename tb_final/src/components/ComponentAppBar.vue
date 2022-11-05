<template>
    <div id="AppBarBackground">
        <div id="logo" @click="toHome">
            <p>🐾</p>
        </div>
        
        <div id="sizedBox"></div>
        <div id="input">
            <component-search-bar/>
        </div>
        <div id="pfp">
            <button @click="toPerfil" id="pfpButton">
                <img v-bind:src="imagem" id="profilePicture">
            </button>
        </div>
    </div>
</template>

<script>
import ComponentSearchBar from './ComponentSearchBar.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components: { ComponentSearchBar },
    data() {
        return{
            pesquisar:"",
            imagem: "https://www.forestcom.com.br/wp-content/uploads/2018/09/blank-profile-picture-973460_640.png",
        }
    },
    methods:{
        toCart(){
            //TODO Redirecionar para outra tela
        },
        toHome(){
            
        },
        search(){
            //TODO implementar a busca de produtos
        }
    }
})
</script>

<style scoped>
    #AppBarBackground{
        background-color: black;
        height: 10vh;
        display: flex;
        align-items: center;
    }
    #logo{
        width: auto;
    }
    #sizedBox{
        width: 55vw;
    }
    #input{
        width: 35vw;
        height: 4vh;
        align-self: center;
    }
    #profilePicture{
        width: auto;
        height: 4vh;
        margin-top: 5px;
        border-radius: 20px;
    }
    #pfpButton{
        margin-right: 2vh;
        width: auto;
        height: auto;
        border-radius: 20px;
        background-color: transparent;
    }
    p{
        font-size: 40px;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 20px;
        margin-top: 0px;
        height: auto;
    }

</style>