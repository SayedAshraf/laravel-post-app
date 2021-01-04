require("./bootstrap");
window.Vue = require("vue");
import Appheader from "./components/AppHeader.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    components: {
        Appheader
    }
});
