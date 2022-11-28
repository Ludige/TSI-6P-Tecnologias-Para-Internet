<template>
    <component-app-bar></component-app-bar>
    <div id="body">
        <form>
            <component-input :nome="'Usuario'" v-model="user"/>
            <div id="sbSenha"></div>
            <component-input :nome="'Senha'"  v-model="password"/>
        </form>
        {{user}}
        {{password}}
        
        <div id="sbLogin"></div>
        <button @click="toHome">Login</button>
    </div>
</template>

<script>
import ComponentAppBar from '../components/ComponentAppBar.vue'
import ComponentInput from '../components/ComponentInput.vue'
import router from "../routes/router";

export default{
    name: 'LoginScreen',
    components: { ComponentInput, ComponentAppBar},
    methods:{
        toHome(){
            if(this.user.match("admin") && this.password.match("admin")){
                router.push({ name: "home"});
            }
        },
    },
    data(){
        return{
            user:"admin",
            password:"admin",
        }
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
    #body{
        width: 32vw;
        height: 30vh;
        display: block;
        margin-top: 17vh;
        margin-left: 32vw;
    }
    #sbLogin{
        color: pink;
        height: 4vh;
    }
    #sbSenha{
        height: 2vw;
    }
    button:hover{
        cursor: pointer;
    }
</style>