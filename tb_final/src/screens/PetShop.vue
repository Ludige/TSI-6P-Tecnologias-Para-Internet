<template>
  <div>
    <component-app-bar/>
    <router-view></router-view>

    <div id="produtos">
      <div>
        <component-produto id="prod1" class="prod"
        :nome="'Gatus Felinus'"
        :desc="'Felino miau miau gatinho prrrrrr'"
        :price="120.00"
        :imagem="'https://mega.ibxk.com.br/2020/12/21/21084534378034.jpg?ims=610x'"
        />
        <component-produto id="prod2" class="prod"
        :nome="'Shampoo Cachorro'"
        :desc="'Shampoo de cachorro, pra pelo, deixar limpo shampoo'"
        :price="25.00"
        :imagem="'https://images.tcdn.com.br/img/img_prod/573283/kit_banho_para_cachorro_shampoo_anti_pulgas_e_condicionador_revitalizante_sanol_534936_1_03a9fc2594df7dd9347a5d134a3df489.jpg'"
        />
        <component-produto id="prod3" class="prod"
        :nome="'Cavalo'"
        :desc="'🐎: Juan'"
        :price="1.00"
        :imagem="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YfVAVc5vIYrw7hy0u0_pgTrsxyWuFFTovA&usqp=CAU'"
        />
      </div>
      <div>
        <component-produto id="prod4" class="prod"
        :nome="'Gatus Shampuus'"
        :desc="'Shampoo gato pelo lindo e macio e brilhante e sedoso e macio'"
        :price="27.00"
        :imagem="'https://cf.shopee.com.br/file/511fd62cc18fe3d0c7cc8b01bdb96731'"
        />
        <component-produto id="prod5" class="prod"
        :nome="'Arranhador de Gato'"
        :desc="'Acompanha gato fofo como na imagem, é pra arranhar o brinquedo não o gato'"
        :price="85.00"
        :imagem="'https://cf.shopee.com.br/file/42282becd0bffc7ae0ae27ee9a1bea48'"
        />
        <component-produto id="prod6" class="prod"
        :nome="'Cachorro'"
        :desc="'Você compraria esse cachorro sarnento? mesmo sabendo que ele está cheio de pulgas? compraria?'"
        :price="1020.00"
        :imagem="'https://www.metroworldnews.com.br/resizer/8cxFAWXTGO78KRS94sFGcU0Icyg=/800x0/filters:format(jpg):quality(70):focal(1908x2932:1918x2942)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FBO3NUKNVFD3LMAQPBOO7AOF3Q.jpg'"
        />
        
      </div>
    </div>
  </div>
</template>

<script>
import ComponentAppBar from '../components/ComponentAppBar.vue'
import ComponentProduto from '../components/ComponentProduto.vue'

export default {
  name: 'PetShop',
  components: { ComponentAppBar, ComponentProduto},
}
</script>

<style>
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
</style>