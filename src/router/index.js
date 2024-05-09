import Vue from "vue";
import VueRouter from "vue-router";

// import home from "../view/home";
// import market2 from "../view/market";
// import manageMatters from "../view/manageMatters";
// import mine2 from "../view/mine";

import market from "../view/new/market";
import computingPower from "../view/new/computingPower";
import manageMoneyMatters from "../view/new/manageMoneyMatters";
import BDCF from "../view/new/BDCF";
import mine from "../view/new/mine";


Vue.use(VueRouter);

const routes = [ 
  // { 
  //   path: "/home",
  //   name: "home",
  //   component: home,
  // },
  // {
  //   path: "/market2",
  //   name: "market2",
  //   component: market2,
  // }, {
  //   path: "/manageMatters",
  //   name: "manageMatters",
  //   component: manageMatters,
  // },  {
  //   path: "/mine2",
  //   name: "mine2",
  //   component: mine2,
  // },
  {
    path: "/",
    name: "market",
    component: market,
  },{
    path: "/computingPower",
    name: "computingPower",
    component: computingPower,
  },{
    path: "/manageMoneyMatters",
    name: "manageMoneyMatters",
    component: manageMoneyMatters,
  },{
    path: "/BDCF",
    name: "BDCF",
    component: BDCF,
  },
  {
    path: "/mine",
    name: "mine",
    component: mine,
  },
];


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router; 
