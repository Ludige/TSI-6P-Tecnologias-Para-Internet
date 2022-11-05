<template>
<div id=produto @click="toProduct">
  <div class="image">
    <img v-bind:src="imagem" class="image">
  </div>
  <div id="info"></div>

  <div id="nomeLabel">
    <span id="nome">{{nome}}</span>
  </div>

  <div id="descLabel">
    <span  id="desc">{{recortar}}</span>
  </div>

  <div id="priceLabel">
    <span id="price">R$ {{price}}</span>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props:{
      nome: {
        type: String,
      },
      desc: {
        type: String,
      },
      price: {
        type: Number,
      },
      imagem: {
        type: String,
      }
    },

    computed: {
      recortar(){
          var output = this.desc;
          if (output.length > 60){
              output = this.desc.substring(0, 60) + '...';
          }
          return output;
      }
    },
    methods:{
      toProduct(){
          //TODO Redirecionar para outra tela
      },
    }
})
</script>

<style>
.image{
  background-color: grey;
  width: 20vw;
  height: 35vh;
}
#nomeLabel{
  background-color: rgb(201, 201, 201);
  width: 20vw;
  height: 4vh;
}
#nome{
  font-size: 20px;
  margin: 2%;
}
#descLabel{
  background-color: rgb(201, 201, 201);
  width: 20vw;
  height: 7vh;
}
#desc{
  font-size: 17px;
  color: rgb(66, 65, 65);
  margin: 5%;
}
#priceLabel{
  background-color: rgb(201, 201, 201);
  width: 20vw;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
#price{
  margin: 10%;
  font-size: 18px;
  color: rgb(0, 87, 4);
}

</style>