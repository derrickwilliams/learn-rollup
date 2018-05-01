import collectionListItem from './collection-list-item';
import collectionListHeader from './collection-list-header';
import collectionListSubheader from './collection-list-subheader';

const collectionListController = [function collectionListController() {
    const $ctrl = this;
    console.log('items', this);
}];

const collectionList = {
    bindings: {
        listHeader: '<',
        listSubheader: '<',
        listItems: '<'
    },
    template: `
        <div class="collection-list">
            <collection-list-header header="$ctrl.listHeader"></collection-list-header>
            <collection-list-subheader subheader="$ctrl.listSubheader"></collection-list-subheader>
            <div class="collection-list-items">
                <collection-list-item ng-repeat="item in $ctrl.listItems" item="item"></collection-list-item>
            </div>
        </div>
    `,
    controller: collectionListController
};

export {
    collectionList,
    collectionListItem,
    collectionListHeader,
    collectionListSubheader
};