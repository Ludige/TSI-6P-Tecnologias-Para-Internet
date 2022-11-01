<template>
  <div>
      <component-app-bar/>
      <component-produto/>
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
</style>