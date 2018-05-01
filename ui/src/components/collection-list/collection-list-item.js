const collectionListItemController = [function collectionListItemController() {
    const $ctrl = this;
    $ctrl.showIndicator = true;
    $ctrl.showMoreAction = true;
}];

const collectionListItem = {
    bindings: {
        item: '<'
    },
    template: ` 
        <div class="collection-list-item">
            <div class="collection-list-item-label">
                {{$ctrl.item.label}}
            </div>
            <div ng-if="$ctrl.showIndicator">[indicator]</div>
            <div class="collection-list-item-value">
                {{$ctrl.item.value}}
            </div>
            <div class="collection-list-item-more"
                ng-if="$ctrl.showMoreAction">
                
                >
            </div>
        </div>
    `,
    controller: collectionListItemController
};

export default collectionListItem;