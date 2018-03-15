// ClientApp/components/DemoGrid.ts
import Vue from "vue";

interface DemoGridProps {
    rows: Array<any>;
    columns: Array<string>;
    filterKey: string;
}

interface DemoGridData {
    sortKey: string;
    sortOrders: { [index: string]: number };
}

export default Vue.extend({
    template:'#demo-grid-template',
    props: ['rows', 'columns', 'filterKey'],
    data: function () {
        var data = {
            sortKey: '',
            sortOrders: {}
        } as DemoGridData;

        (this.$props as DemoGridProps).columns.forEach(function (key) {
            data.sortOrders[key] = 1
        })
        return data;
    },
    computed: {
        filteredData: function () {
            var thisData = (this.$data as DemoGridData);
            var thisProps = (this.$props as DemoGridProps);

            var sortKey = thisData.sortKey;
            var filterKey = thisProps.filterKey && thisProps.filterKey.toLowerCase();
            var order = thisData.sortOrders[sortKey] || 1;
            var rows = thisProps.rows;
            if (filterKey) {
                rows = rows.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                rows = rows.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return rows;
        }
    },
    filters: {
        capitalize: function (str: string) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function (key: string) {
            var thisData = (this.$data as DemoGridData);
            thisData.sortKey = key
            thisData.sortOrders[key] = thisData.sortOrders[key] * -1
        }
    }
});