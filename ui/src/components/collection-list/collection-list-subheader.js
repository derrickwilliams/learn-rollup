const collectionListSubheader = {
    bindings: {
        subheader: '<'
    },
    template: `
        <div class="collection-list-subheader collection-list-flex-header">
            <div class="collection-list-subheader-label">{{$ctrl.subheader.label}}</div>
            <div class="collection-list-subheader-value">{{$ctrl.subheader.value}}</div>
        </div>
    `
};

export default collectionListSubheader;