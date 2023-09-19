import { Plus } from '@element-plus/icons-vue';

export const dynamicTestRoutes = [
  {
    path: '/',
    component: 'CubLayout',
    meta: {
      title: 'cache测试',
      icon: Plus,
    },
    children: [
      {
        path: '/dynamic',
        component: '/dynamic.vue',
        meta: {
          title: '动态路由注册与卸载',
        },
      },
    ],
  },
];

export const dynamicRoutes = [
  {
    path: '/',
    component: 'CubLayout',
    meta: {
      title: 'cache测试',
      icon: Plus,
    },
    children: [
      {
        path: '/dynamic-test',
        component: '/dynamic-test.vue',
        meta: {
          title: '这是动态的',
        },
      },
    ],
  },
];
