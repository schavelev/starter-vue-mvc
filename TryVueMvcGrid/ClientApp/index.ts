// ClientApp/index.ts
import Vue from "vue";
import AppGrid from "./components/AppGrid";

let vueApp = new Vue({
    el: "#app-root",
    render: h => h(AppGrid),
    components: {
        AppGrid
    }
});

export default vueApp;