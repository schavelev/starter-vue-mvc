// ClientApp/components/Hello.ts
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: '#hello-template',
    props: ['name', 'initialEnthusiasm']
})
export default class HelloComponent extends Vue {
    enthusiasm!: number;
    initialEnthusiasm!: number;

    data() {
        return {
            enthusiasm: this.initialEnthusiasm
        }
    };

    // methods:
    increment() { this.enthusiasm++; };
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    };

    // computed:
    get exclamationMarks() {
        return Array(this.enthusiasm + 1).join('!');
    }
};