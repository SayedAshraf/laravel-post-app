require("./bootstrap");

window.Vue = require("vue");
import Appheader from "./components/AppHeader.vue";

const app = new Vue({
    el: "#app",
    components: {
        Appheader
    }
});
