const collectionListHeader = {
    bindings: {
        header: '<'
    },
    template: `
        <div class="collection-list-header">
            <h1 class="collection-list-header-text">{{$ctrl.header.text}}</h1>
            <p class="collection-list-header-subtext">{{$ctrl.header.subtext}}</p>
        </div>
    `
};

export default collectionListHeader;