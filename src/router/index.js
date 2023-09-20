import { createRouter, createWebHashHistory } from 'vue-router';
import { registerRoutes } from 'cub-admin';
import routes from './routes';
import { cacheTestRoutes } from './modules/cache';
import { dynamicTestRoutes } from './modules/dynamic';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

let register = false;
router.beforeEach(async (to) => {
  if (!register) {
    await registerRoutes({
      routes: [...cacheTestRoutes, ...dynamicTestRoutes],
      viewsPath: '/src/views',
      modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
    });
    register = true;
    return to.fullPath;
  }
  return true;
});
