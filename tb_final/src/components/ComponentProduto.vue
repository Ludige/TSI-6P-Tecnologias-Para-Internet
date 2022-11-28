<template>
  <div>
    <div class="image">
      <img v-bind:src="imagem" class="image">
    </div>
  
    <div id="info">
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
})
</script>

<style scoped>
.image{
  background-color: grey;
  width: 20vw;
  height: 35vh;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
  border: solid yellow 1px;
}
#info{
  background-color: rgb(0, 0, 0);
  border: solid yellow 1px;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
}
#nomeLabel{
  width: 20vw;
  height: 4vh;
}
#descLabel{
  width: 20vw;
  height: 7vh;
}
#priceLabel{
  width: 20vw;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nome{
  font-size: 20px;
  color: rgb(241, 253, 129);
  margin: 4%;
}
#desc{
  font-size: 17px;
  color: rgb(137, 143, 88);
  margin: 5%;
}
#price{
  margin: 10%;
  font-size: 18px;
  color: rgb(255, 251, 4);
}

</style>