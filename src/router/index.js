import Home from "./Home";
import About, {Culture, History, Jump} from "./About";
import User from "./User";
import Login from "./Login";
import Detail from "./Detail";
import React from "react";
const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component: About,
    routes:[
      {
        path:'/about',
        exact:true,
        component:History
      },
      {
        path:'/about/culture',
        component:Culture
      },
      {
        path:'/about/history',
        component:History
      },
      {
        path:'/about/jump',
        component:Jump
      }
    ]
  },
  {
    path:'/detail',
    component: Detail
  },
  {
    path:'/user/:username',
    component: User
  },
  {
    path:'/login',
    component: Login
  }
]

export default routes
