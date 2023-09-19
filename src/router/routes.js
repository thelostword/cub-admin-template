import Layout from '../layout/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'index', name: 'HOME1', component: () => import('../views/index.vue'), meta: { title: '首页', affix: true },
      },
    ],
  },
];

export default routes;
