import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import home from '../components/home';
import personaldetail from '../components/personaldetail';
import workexprience from '../components/workexprience';




Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/personaldetail',
      name: 'personaldetail',
      component: personaldetail,
    },
    {
      path: '/workexprience',
      name: 'workexprience',
      component: workexprience,
    },
  ],
});
