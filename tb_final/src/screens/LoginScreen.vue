<template>
    <div>
        <component-app-bar></component-app-bar>
        <component-input :nome="'User'"></component-input>
    </div>
</template>

<script>
import ComponentAppBar from '../components/ComponentAppBar.vue'
import ComponentInput from '../components/ComponentInput.vue'
export default{
    name: 'LoginScreen',
    components: { ComponentInput, ComponentAppBar},
}
</script>

<style scoped>

</style>