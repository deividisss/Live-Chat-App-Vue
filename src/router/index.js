import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";

Vue.use(Router);
import Chat from "@/components/Chat";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true
    }
  ]
});
