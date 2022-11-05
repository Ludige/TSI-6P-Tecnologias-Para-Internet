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
    <span  id="desc">{{desc}}</span>
  </div>

  <div id="priceLabel">
    <span id="price">R$ {{price}}</span>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return{
          nome:"Product Name",
          desc:"Base Description",
          price: 0.0,
          imagem: "https://pbs.twimg.com/profile_images/1322683103672999937/roddaWWi_400x400.jpg",
          }
    },
    methods:{
      toProduct(){
          //TODO Redirecionar para outra tela
      },
    }
}
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