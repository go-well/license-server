import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzButtonModule} from "ng-zorro-antd/button";
import {PageEditorComponent} from './page-editor/page-editor.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {RouterModule} from "@angular/router";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {PageListComponent} from './page-list/page-list.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MinuteToDatePipe} from './minute-to-date.pipe';
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {NzModalModule} from "ng-zorro-antd/modal";
import {DateStringPipe} from './date-string.pipe';
import {NzRadioModule} from "ng-zorro-antd/radio";
import { FromNowPipe } from './from-now.pipe';
import { MinuteFormatPipe } from './minute-format.pipe';
import { HtmlDirective } from './html.directive';
import { CommonBarComponent } from './common-bar/common-bar.component';


@NgModule({
  declarations: [
    PageEditorComponent,
    PageListComponent,
    DateStringPipe,
    ToolbarComponent,
    MinuteToDatePipe,
    FromNowPipe,
    MinuteFormatPipe,
    HtmlDirective,
    CommonBarComponent,
  ],
    exports: [
        PageEditorComponent,
        PageListComponent,
        ToolbarComponent,
        DateStringPipe,
        MinuteToDatePipe,
        FromNowPipe,
        MinuteFormatPipe,
        HtmlDirective,
        CommonBarComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    NzTabsModule,
    NzButtonModule,
    NzIconModule,
    RouterModule,
    NzSpaceModule,
    NzInputModule,
    NzTimePickerModule,
    NzModalModule,
    NzRadioModule,
  ],
  providers: []
})
export class HelperModule {
}
