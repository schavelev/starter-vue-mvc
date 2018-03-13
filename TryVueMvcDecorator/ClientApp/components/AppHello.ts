// ClientApp/components/AppHello.ts
import Vue from "vue";
import Component from "vue-class-component";
import HelloComponent from "./Hello";

@Component({
    template: '#app-hello-template',
    components: {
        HelloComponent
    }
})
export default class AppHelloComponent extends Vue {
    data() {
        return {
            name: "World"
        }
    }
};