<template>
<body>
  <router-view></router-view>
    
  <component-app-bar/>
    <div id="produtos">
      <component-produto id="prod1" class="prod"
      :nome="'Ração Gato'"
      :desc="'Vegano'"
      :price="120.00"
      :imagem="'https://cf.shopee.com.br/file/defa71d3788fb8c98226d0e77021e915'"
      />
      <component-produto id="prod2" class="prod"
      :nome="'Shampoo Cachorro'"
      :desc="'Pelos limpos, macios, brilhantes e macios'"
      :price="25.00"
      :imagem="'https://images.tcdn.com.br/img/img_prod/996845/shampoo_para_cao_cachorro_gato_pelos_claros_500ml_pet_oferta_3225_1_d69d78a929c3181801c43c518be5e01b.jpg'"
      />
      <component-produto id="prod6" class="prod"
      :nome="'Bola Hamster grande'"
      :desc="'Bola para brincadeira hamster'"
      :price="20.00"
      :imagem="'https://cf.shopee.com.br/file/1eb5efc7534255fc3bc93cea43a679d9'"
      />
    </div>
    <div id="produtos">
      <component-produto id="prod4" class="prod"
      :nome="'Ração Carne para Cachorro'"
      :desc="'Ração de carne para cachorros'"
      :price="27.00"
      :imagem="'https://imagens.mfrural.com.br/mfrural-produtos-us/206768-326310-1769360-racao-para-cachorro-adulto-carne.jpg'"
      />
      <component-produto id="prod5" class="prod"
      :nome="'Arranhador de Gato'"
      :desc="'Brinquedo arranhador gato'"
      :price="85.00"
      :imagem="'https://io.convertiez.com.br/m/abana/shop/products/images/343/medium/arranhador-para-gato-bigben-sao-pet_1206.jpg'"
      />
      <component-produto id="prod3" class="prod"
      :nome="'Escova Pet'"
      :desc="'Escova para animais pequenos'"
      :price="121.00"
      :imagem="'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSq2OxZqBKMe30QVWDPyN438A38e5se_jqE_gIEY1ATCiYIRCkqg9PP3m_VWmTy8L8XJDboobqZbjvrfk_bvcHB-6gc6E_PqlgaJYyxEAKZa-bg_8VDetFC&usqp=CAE'"
      />
    </div>
</body>
</template>

<script>
import ComponentAppBar from '../components/ComponentAppBar.vue'
import ComponentProduto from '../components/ComponentProduto.vue'

export default {
  name: 'PetShop',
  components: { ComponentAppBar, ComponentProduto},
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        border: 0;
    }
    .prod{
      margin-top: 3vw;
      margin-left: 10vw;
    }
    #produtos{
      display: flex;
    }
    body{
      background-image: url("../assets/logo.jpeg");
      height: 100vh;
  }
</style>