import { createApp } from 'vue'
import App from './screens/PetShop.vue'
// import App2 from './screens/LoginScreen.vue'
import router from './router/index.ts'

// createApp(App2).use(router).mount('#app')
createApp(App).use(router).mount('#app')
