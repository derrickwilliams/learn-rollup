import mainController from './main-controller';
import './components/collection-list/collection-list.scss';
import {
    collectionList,
    collectionListItem,
    collectionListHeader,
    collectionListSubheader   
} from './components/collection-list';

angular.module('learnRollup', [])
    .controller('mainController', mainController)
    .component('collectionList', collectionList)
    .component('collectionListItem', collectionListItem)
    .component('collectionListHeader', collectionListHeader)
    .component('collectionListSubheader', collectionListSubheader);