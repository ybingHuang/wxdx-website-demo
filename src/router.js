import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'about/who',
          name: 'we',
          component: () => import('./views/about/we.vue')
        },
        {
          path: 'about/mayo',
          name: 'mayo',
          component: () => import('./views/about/mayo.vue')
        },
        {
          path: 'about/incident',
          name: 'incidents',
          component: () => import('./views/about/incidents.vue')
        },
        {
          path: 'about/team',
          name: 'mt',
          component: () => import('./views/about/mt.vue')
        },
        {
          path: 'newsActivity/news',
          name: 'news',
          component: () => import('./views/news/news.vue')
        },
        {
          path: 'newsActivity/news/',
          name: 'newsDetail',
          component: () => import('./views/news/news-detail.vue'),
          children: [
            {
              path: '1',
              name: 'news-1',
              component: () => import('./views/news//detail/news-1.vue')
            },
            {
              path: '2',
              name: 'news-2',
              component: () => import('./views/news//detail/news-2.vue')
            },
            {
              path: '3',
              name: 'news-3',
              component: () => import('./views/news//detail/news-3.vue')
            },
            {
              path: '4',
              name: 'news-4',
              component: () => import('./views/news//detail/news-4.vue')
            },
            {
              path: '5',
              name: 'news-5',
              component: () => import('./views/news//detail/news-5.vue')
            }
          ]
        },
        {
          path: 'newsActivity/activity',
          name: 'activity',
          component: () => import('./views/news/activity.vue')
        },
        {
          path: 'newsActivity/activity/:id',
          name: 'activityDetail',
          component: () => import('./views/news/activity-detail.vue')
        },
        {
          path: 'join/concept',
          name: 'concept',
          component: () => import('./views/join/concept.vue')
        },
        {
          path: 'join/position',
          name: 'positions',
          component: () => import('./views/join/positions.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
      if (to.fullPath.includes('newsActivity/activity/') && from.fullPath.includes('newsActivity/activity/')){
          return;
      }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
