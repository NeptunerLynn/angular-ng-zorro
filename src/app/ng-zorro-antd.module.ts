import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzFormModule,
    NzCardModule,
    NzAlertModule,
    NzDividerModule,
    NzTagModule,
    NzInputModule
  ],
})
export class NgZorroAntdModule {};
