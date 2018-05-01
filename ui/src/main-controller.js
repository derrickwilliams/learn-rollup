export default [
    '$scope',
    function mainController($scope) {
        const $ctrl = this;

        $ctrl.listItems = [
            { label: 'Credit Card', value: 100.00 },
            { label: 'Credit Card', value: 200.00 },
            { label: 'Cash', value: 300.00 },
        ];
        $ctrl.listHeader = {
            text: '$900.00',
            subtext: 'Partially Paid'
        };
        $ctrl.listSubheader = {
            label: 'Collected from Client',
            value: 200.00
        };
    }
];