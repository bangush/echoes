import angular from 'angular';
import AppCore from '../../core';
import { SearchFilterPanelComponent } from './search-filter-panel.component';

export * from './search-filter-panel.component';

export default angular.module('search-filter-panel', [
  AppCore,
  'LocalStorageModule'
])
.component(SearchFilterPanelComponent.selector, SearchFilterPanelComponent)
.name;