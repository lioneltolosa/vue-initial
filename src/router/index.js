import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from '@/views/Game.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: Game
  },
];

const router = new VueRouter({
  routes
});

export default router;
