import {NgModule} from '@angular/core';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';

import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTransferModule} from 'ng-zorro-antd/transfer';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzListModule} from "ng-zorro-antd/list";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";

import {AdminComponent} from "./admin.component";

import {UnknownComponent} from "./unknown/unknown.component";
import {DashComponent} from "./dash/dash.component";
import {ProductComponent} from "./product/product.component";
import {UserComponent} from "./user/user.component";
import {PasswordComponent} from "./password/password.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ContainerComponent} from "./container/container.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {HelperModule} from "../helper/helper.module";
import {TermComponent} from "./term/term.component";
import {TermEditComponent} from "./term-edit/term-edit.component";
import {TermDetailComponent} from "./term-detail/term-detail.component";
import {LicenseComponent} from "./license/license.component";
import {LicenseEditComponent} from "./license-edit/license-edit.component";
import {LicenseDetailComponent} from "./license-detail/license-detail.component";

@NgModule({
  declarations: [
    AdminComponent,
    ContainerComponent,
    UnknownComponent,
    DashComponent,
    ProductComponent, ProductDetailComponent, ProductEditComponent,
    TermComponent, TermEditComponent, TermDetailComponent,
    LicenseComponent, LicenseEditComponent, LicenseDetailComponent,
    UserComponent, UserDetailComponent,
    PasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzDrawerModule,
    NzSelectModule,
    NzSpaceModule,
    NzInputNumberModule,
    NzStatisticModule,
    NzTabsModule,
    NzCollapseModule,
    NzTransferModule,
    NzRadioModule,
    NzProgressModule,
    NzCardModule,
    NzUploadModule,
    NzDropDownModule,
    NzTimePickerModule,
    NzDatePickerModule,
    DragDropModule,
    NzBreadCrumbModule,
    NzListModule,
    NzPaginationModule,
    NzEmptyModule,
    NzPopoverModule,
    HelperModule,
  ],
  bootstrap: [AdminComponent],
  providers: []
})
export class AdminModule {
}
