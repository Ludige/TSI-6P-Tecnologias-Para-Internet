<template>
    <div id="AppBarBackground">
        <p>Pet🐕Shop</p>

        <div>
            <input
        placeholder=" Pesquisar..."
        v-model="pesquisar"
        @change="search"
        >

        <button @click="toCart">🛒</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            pesquisar:"",
        }
    },
    methods:{
        toCart(){
            //TODO Redirecionar para outra tela
        },
        search(){
            //TODO implementar a busca de produtos
        }
    }
}
</script>

<style>
    #AppBarBackground{
        background-color: #119e8b;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input{
        border-radius: 10px;
        height: 35px;
        width: 80vh;
        margin-right: 25px;
        padding-left: 10px;
    }

    p{
        font-size: 40px;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 20px;
        margin-top: 0px;
        height: auto;
    }

    button{
        background-color: #119e8b;
        margin-right: 20px;
        font-size: 25px;
    }
</style>