import IcOutlineFeaturedPlayList from '~icons/ic/outline-featured-play-list';

export const dynamicTestRoutes = [
  {
    path: '/',
    component: 'CubLayout',
    meta: {
      title: '动态路由测试',
      icon: IcOutlineFeaturedPlayList,
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
  {
    path: 'https://github.com',
    meta: {
      title: 'GitHub',
      badge: {
        value: '外链',
      },
    },
  },
];

export const dynamicRoutes = [
  {
    path: '/',
    component: 'CubLayout',
    meta: {
      title: '动态模块测试',
      icon: IcOutlineFeaturedPlayList,
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
