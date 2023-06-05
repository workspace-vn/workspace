import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';

import { JobLayoutComponent } from './job-layout/job-layout.component';
import { SharedModule } from '../../@shared/shared.module';
import { JobTableComponentsModule } from './table-components/job-table-components.module';

@NgModule({
	declarations: [JobLayoutComponent],
	imports: [CommonModule, JobsRoutingModule, SharedModule, JobTableComponentsModule]
})
export class JobsModule {}
