import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'cub-admin/dist/style.css';
import 'virtual:uno.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import { setupCubAdmin } from 'cub-admin';
import Layout from './layout/index.vue';
import App from './App.vue';
import router from './router';

setupCubAdmin({
  layout: Layout,
  router,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app');
