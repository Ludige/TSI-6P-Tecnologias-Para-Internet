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
    name: 'Tela1',
    methods:{
        toHome(){
            router.push({ name: "home"});
        },
        toOne(){
            router.push({ name: "tela2"});
        },
        toThree(){
            router.push({ name: "tela3"});
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
        background-color: burlywood;
    }
</style>