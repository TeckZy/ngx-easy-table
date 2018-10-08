import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AsyncComponent,
  BasicComponent,
  CheckboxDefaultComponent,
  CheckboxesComponent,
  ClickEventComponent,
  CollapsedRowsComponent,
  ColTemplateComponent,
  ColumnWidthComponent,
  CustomFiltersComponent,
  CustomIntableSortComponent,
  CustomizeThemeComponent,
  CustomSortComponent,
  DynamicConfigurationComponent,
  DynamicRowComponent,
  ExportComponent,
  ExportsComponent,
  FilterTemplateComponent,
  FixedWidthComponent,
  GlobalSearchComponent,
  GroupRowsComponent,
  HorizontalScrollComponent,
  LiveUpdateComponent,
  ManyTablesComponent,
  ModalComponent,
  PaginationComponent,
  PaginationRangeComponent,
  PersistStateComponent,
  ResizableComponent,
  RowTemplateComponent,
  SearchComponent,
  SelectCellComponent,
  SelectColComponent,
  SelectRowComponent,
  ServerPaginationComponent,
  ServerSortComponent,
  SortComponent,
  StylesComponent,
  SummaryFooterComponent,
  TemplateComponent,
  ToggleColumnComponent,
} from './demo';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes = [
  { path: '', component: WelcomeComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'server-pagination', component: ServerPaginationComponent },
  { path: 'server-sort', component: ServerSortComponent },
  { path: 'global-search', component: GlobalSearchComponent },
  { path: 'sort', component: SortComponent },
  { path: 'export', component: ExportComponent },
  { path: 'click-event', component: ClickEventComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'live-update', component: LiveUpdateComponent },
  { path: 'select-row', component: SelectRowComponent },
  { path: 'select-col', component: SelectColComponent },
  { path: 'select-cell', component: SelectCellComponent },
  { path: 'row-template', component: RowTemplateComponent },
  { path: 'group-rows', component: GroupRowsComponent },
  { path: 'many-tables', component: ManyTablesComponent },
  { path: 'dynamic-row', component: DynamicRowComponent },
  { path: 'custom-sort', component: CustomSortComponent },
  { path: 'collapsed-rows', component: CollapsedRowsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'checkbox-default', component: CheckboxDefaultComponent },
  { path: 'horizontal-scroll', component: HorizontalScrollComponent },
  { path: 'custom-filters', component: CustomFiltersComponent },
  { path: 'toggle-column', component: ToggleColumnComponent },
  { path: 'dynamic-configuration', component: DynamicConfigurationComponent },
  { path: 'exports', component: ExportsComponent },
  { path: 'resizable', component: ResizableComponent },
  { path: 'column-width', component: ColumnWidthComponent },
  { path: 'fixed-width', component: FixedWidthComponent },
  { path: 'customize-theme', component: CustomizeThemeComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'col-template', component: ColTemplateComponent },
  { path: 'summary-footer', component: SummaryFooterComponent },
  { path: 'filter-template', component: FilterTemplateComponent },
  { path: 'custom-intable-sort', component: CustomIntableSortComponent },
  { path: 'persist-state', component: PersistStateComponent },
  { path: 'pagination-range', component: PaginationRangeComponent },
  { path: 'async', component: AsyncComponent },
  { path: '**', component: BasicComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
