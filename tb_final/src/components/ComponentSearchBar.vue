<template>
    <div>
            <input
        placeholder=" Pesquisar..."
        v-model="pesquisar"
        @change="search"
        >
        <button id="searchButton" @click="search"><font-awesome-icon icon="phone" id="lupa"/></button>
    </div>

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
        margin-right: 20px
        width: 5vh;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-color: black;
        cursor: pointer;
    }
    lupa{
        color: aqua,
    }

</style>