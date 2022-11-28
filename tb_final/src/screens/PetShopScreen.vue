<template>
<body>
  <router-view></router-view>
    
  <component-app-bar/>
  <div id="produtos">
    <div>
      <component-produto id="prod1" class="prod"
      :nome="'Ração Gato'"
      :desc="'Vegano'"
      :price="120.00"
      :imagem="'https://www.petlove.com.br/images/products/213111/product/Ra%C3%A7%C3%A3o_Golden_Gatos_Adultos_Castrados_Salm%C3%A3o_31022435_1kg.jpg?1627684400'"
      />
      <component-produto id="prod2" class="prod"
      :nome="'Shampoo Cachorro'"
      :desc="'Pelos limpos, macios, brilhantes e macios'"
      :price="25.00"
      :imagem="'https://images.tcdn.com.br/img/img_prod/573283/kit_banho_para_cachorro_shampoo_anti_pulgas_e_condicionador_revitalizante_sanol_534936_1_03a9fc2594df7dd9347a5d134a3df489.jpg'"
      />
      <component-produto id="prod3" class="prod"
      :nome="'Escova Pet'"
      :desc="'Escova para animais pequenos'"
      :price="121.00"
      :imagem="'https://images-americanas.b2w.io/produtos/4193272589/imagens/escova-pet-rasqueadeira-pet-tira-pelos-pra-cachorro-e-gatos/4193272597_1_large.jpg'"
      />
    </div>
    <div>
      <component-produto id="prod4" class="prod"
      :nome="'Ração Carne para Cachorro'"
      :desc="'Ração de carne para cachorros'"
      :price="27.00"
      :imagem="'https://www.petlove.com.br/images/products/256374/product/Ra%C3%A7%C3%A3o_Special_Dog_Premium_Carne_para_C%C3%A3es_Adultos_1777282_main.jpg?1653932948'"
      />
      <component-produto id="prod5" class="prod"
      :nome="'Arranhador de Gato'"
      :desc="'Brinquedo arranhador gato'"
      :price="85.00"
      :imagem="'https://a-static.mlcdn.com.br/800x560/arranhador-sisal-gato-casinha-com-rede-2-brinquedos-bolinhas-miupetz-store/ipetsppbartesanal/c-cr-czbr/505f7c7f88b0f87fce10ca5069ec4b81.jpeg'"
      />
      <component-produto id="prod6" class="prod"
      :nome="'Bola Hamster grande'"
      :desc="'Bola para brincadeira hamster'"
      :price="20.00"
      :imagem="'https://http2.mlstatic.com/D_NQ_NP_806305-MLB50830749935_072022-O.webp'"
      />
      
    </div>
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
      margin-left: 20vw;
    }
    #produtos{
      display: flex;
    }
    body{
      background-image: url("../assets/logo.jpeg");
      height: 100vh;
  }
</style>