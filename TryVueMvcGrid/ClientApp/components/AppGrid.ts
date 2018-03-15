// ClientApp/components/AppGrid.ts
import Vue from "vue";
import DemoGrid from "./DemoGrid";

export default Vue.extend({
    template:'#app-grid-template',
    components: {
        DemoGrid
    },
    data() {
        return {
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridRows: [
                { name: 'Chuck Norris', power: Infinity },
                { name: 'Bruce Lee', power: 9000 },
                { name: 'Jackie Chan', power: 7000 },
                { name: 'Jet Li', power: 8000 }
            ]
        }
    }
});