// ClientApp/index.ts
import Vue from "vue";
import AppHelloComponent from "./components/AppHello";

new Vue({
    el: "#app-root",
    template: '<AppHelloComponent />',
    //render: h => h(AppHelloComponent),
    components: {
        AppHelloComponent
    }
});
