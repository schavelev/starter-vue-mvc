// ClientApp/components/AppHello.ts
import Vue from "vue";
import HelloComponent from "./Hello";

export default Vue.extend({
    template:'#app-hello-template',
    data() {
        return {
            name: "World"
        }
    },
    components: {
        HelloComponent
    }
});