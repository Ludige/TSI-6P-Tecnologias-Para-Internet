<template>
    <body>
        <component-app-bar></component-app-bar>
        <div id="body">
            <form>
                <input type="text" v-model="user" placeholder="User">
                <input type="password" v-model="password" placeholder="Password" id="senha">
            </form>
            
            <div id="sbLogin"></div>
            <button @click="toHome">Login</button>
        </div>
    </body>
</template>

<script>
import ComponentAppBar from '../components/ComponentAppBar.vue'
import router from "../routes/router";

export default{
    name: 'LoginScreen',
    components: { ComponentAppBar},
    methods:{
        toHome(){
            if(this.user.match("admin") && this.password.match("admin")){
                router.push({ name: "home"});
            }
        },
    },
    data(){
        return{
            user:"",
            password:"",
        }
    }
}
</script>

<style scoped>
    body{
        background-image: url("../assets/logo.jpeg");
        height: 100%;
    }
    button{
        border: 1.5px solid black;
        width: 100px;
        height: 30px;
        border-radius: 7px;
        background-color: rgb(206, 228, 7);
        color: black;
        margin-left: 23vw;
        cursor: pointer;
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
    input{
        background-color: white;
        border: 1.5px solid;
        height: 35px;
        width: 60vh;
        padding-left: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
      }
</style>