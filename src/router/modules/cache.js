import { Plus } from '@element-plus/icons-vue';

export const cacheTestRoutes = [
  {
    path: '/cache',
    component: 'CubLayout',
    meta: {
      title: 'cache测试',
      icon: Plus,
    },
    children: [
      {
        path: '1',
        component: '/cache-test1.vue',
        meta: {
          title: 'cache测试1',
          badge: {
            value: 'NEW',
          },
        },
      },
      {
        path: '',
        meta: { title: 'cache测试' },
        children: [
          {
            path: '2',
            component: '/cache-test2.vue',
            meta: {
              title: 'cache测试2',
            },
          },
          {
            path: '',
            meta: { title: 'cache测试' },
            children: [
              {
                path: '3',
                component: '/cache-test3.vue',
                meta: {
                  title: 'cache测试3',
                },
              },
              {
                path: '4',
                component: '/cache-test4.vue',
                meta: {
                  title: '无缓存',
                  noCache: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
