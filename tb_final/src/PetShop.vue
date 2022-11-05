<template>
  <div>
    <component-app-bar/>

    <div id="produtos">
      <div>
        <component-produto id="prod1"
        />
        <component-produto id="prod1"/>
        <component-produto id="prod1"/>
      </div>
      <div>
        <component-produto id="prod1"/>
        <component-produto id="prod1"/>
        <component-produto id="prod1"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import ComponentAppBar from './components/ComponentAppBar.vue'
import ComponentProduto from './components/ComponentProduto.vue'
export default {
  components: { ComponentAppBar, ComponentProduto },

}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        border: 0;
    }

    #prod1{
      margin-top: 3vw;
      margin-left: 20vw;
    }
    #produtos{
      display: flex;
    }
</style>