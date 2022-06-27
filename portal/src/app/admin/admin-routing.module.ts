import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UnknownComponent} from "./unknown/unknown.component";
import {LogoutGuard} from "./logout.guard";
import {DashComponent} from "./dash/dash.component";
import {ProductComponent} from "./product/product.component";
import {UserComponent} from "./user/user.component";
import {PasswordComponent} from "./password/password.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ContainerComponent} from "./container/container.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {LicenseComponent} from "./license/license.component";
import {LicenseDetailComponent} from "./license-detail/license-detail.component";
import {LicenseEditComponent} from "./license-edit/license-edit.component";
import {TermComponent} from "./term/term.component";
import {TermDetailComponent} from "./term-detail/term-detail.component";
import {TermEditComponent} from "./term-edit/term-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {breadcrumb: "后台"},
    children: [
      //{path: '', component: WelcomeComponent, data: {breadcrumb: "欢迎"}},
      {path: '', component: DashComponent, data: {breadcrumb: "控制台"}},
      {path: 'dash', component: DashComponent, data: {breadcrumb: "控制台"}},

      {
        path: 'product', component: ContainerComponent, data: {breadcrumb: "产品"}, children: [
          {path: '', component: ProductComponent, data: {breadcrumb: "产品"}},
          {path: 'detail/:id', component: ProductDetailComponent, data: {breadcrumb: "详情"}},
          {path: 'edit/:id', component: ProductEditComponent, data: {breadcrumb: "编辑"}},
          {path: 'create', component: ProductEditComponent, data: {breadcrumb: "创建"}},
        ]
      },

      {
        path: 'term', component: ContainerComponent, data: {breadcrumb: "期限"}, children: [
          {path: '', component: TermComponent, data: {breadcrumb: "期限"}},
          {path: 'detail/:id', component: TermDetailComponent, data: {breadcrumb: "详情"}},
          {path: 'edit/:id', component: TermEditComponent, data: {breadcrumb: "编辑"}},
          {path: 'create', component: TermEditComponent, data: {breadcrumb: "创建"}},
        ]
      },

      {
        path: 'license', component: ContainerComponent, data: {breadcrumb: "证书"}, children: [
          {path: '', component: LicenseComponent, data: {breadcrumb: "证书"}},
          {path: 'detail/:id', component: LicenseDetailComponent, data: {breadcrumb: "详情"}},
          {path: 'edit/:id', component: LicenseEditComponent, data: {breadcrumb: "编辑"}},
          {path: 'create', component: LicenseEditComponent, data: {breadcrumb: "创建"}},
        ]
      },


      {
        path: 'user', component: ContainerComponent, data: {breadcrumb: "用户"}, children: [
          {path: '', component: UserComponent, data: {breadcrumb: "用户"}},
          {path: 'detail/:id', component: UserDetailComponent, data: {breadcrumb: "详情"}},
        ]
      },

      {
        path: 'logout',
        canActivate: [LogoutGuard],
        //redirectTo: 'login'
      },

      {path: '**', component: UnknownComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
