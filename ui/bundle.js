(function () {
    'use strict';

    var mainController = ['$scope', function mainController($scope) {
        var $ctrl = this;

        $ctrl.listItems = [{ label: 'Credit Card', value: 100.00 }, { label: 'Credit Card', value: 200.00 }, { label: 'Cash', value: 300.00 }];
        $ctrl.listHeader = {
            text: '$900.00',
            subtext: 'Partially Paid'
        };
        $ctrl.listSubheader = {
            label: 'Collected from Client',
            value: 200.00
        };
    }];

    var collectionListItemController = [function collectionListItemController() {
        var $ctrl = this;
        $ctrl.showIndicator = true;
        $ctrl.showMoreAction = true;
    }];

    var collectionListItem = {
        bindings: {
            item: '<'
        },
        template: ' \n        <div class="collection-list-item">\n            <div class="collection-list-item-label">\n                {{$ctrl.item.label}}\n            </div>\n            <div ng-if="$ctrl.showIndicator">[indicator]</div>\n            <div class="collection-list-item-value">\n                {{$ctrl.item.value}}\n            </div>\n            <div class="collection-list-item-more"\n                ng-if="$ctrl.showMoreAction">\n                \n                >\n            </div>\n        </div>\n    ',
        controller: collectionListItemController
    };

    var collectionListHeader = {
        bindings: {
            header: '<'
        },
        template: '\n        <div class="collection-list-header">\n            <h1 class="collection-list-header-text">{{$ctrl.header.text}}</h1>\n            <p class="collection-list-header-subtext">{{$ctrl.header.subtext}}</p>\n        </div>\n    '
    };

    var collectionListSubheader = {
        bindings: {
            subheader: '<'
        },
        template: '\n        <div class="collection-list-subheader collection-list-flex-header">\n            <div class="collection-list-subheader-label">{{$ctrl.subheader.label}}</div>\n            <div class="collection-list-subheader-value">{{$ctrl.subheader.value}}</div>\n        </div>\n    '
    };

    var collectionListController = [function collectionListController() {
        console.log('items', this);
    }];

    var collectionList = {
        bindings: {
            listHeader: '<',
            listSubheader: '<',
            listItems: '<'
        },
        template: '\n        <div class="collection-list">\n            <collection-list-header header="$ctrl.listHeader"></collection-list-header>\n            <collection-list-subheader subheader="$ctrl.listSubheader"></collection-list-subheader>\n            <div class="collection-list-items">\n                <collection-list-item ng-repeat="item in $ctrl.listItems" item="item"></collection-list-item>\n            </div>\n        </div>\n    ',
        controller: collectionListController
    };

    angular.module('learnRollup', []).controller('mainController', mainController).component('collectionList', collectionList).component('collectionListItem', collectionListItem).component('collectionListHeader', collectionListHeader).component('collectionListSubheader', collectionListSubheader);

}());
