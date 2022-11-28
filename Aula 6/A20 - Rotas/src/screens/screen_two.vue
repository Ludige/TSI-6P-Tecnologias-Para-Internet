<template>    
    <div id="body">
        <button @click="toHome">Voltar</button>
        <button @click="toOne">Tela 1</button>
        <button @click="toThree">Tela 3</button>
    </div>
</template>

<script>
import router from "../routes/router";

export default{
    name: 'ScreenThree',
    methods:{
        toHome(){
            router.push({ name: "ScreenHome"});
        },
        toOne(){
            router.push({ name: "ScreenOne"});
        },
        toThree(){
            router.push({ name: "ScreenThree"});
        },
    }
}
</script>

<style scoped>
    button{
        border: 1.5px solid #747474;
        width: 100px;
        height: 30px;
        border-radius: 7px;
        background-color: rgb(17, 158, 201);
        color: white;
        margin-left: 23vw;
    }
    button:hover{
        cursor: pointer;
    }
    div{
        background-color: gold;
    }
</style>