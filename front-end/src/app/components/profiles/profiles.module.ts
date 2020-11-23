import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvProfileComponent } from './inv-profile/inv-profile.component';
import { InvProfilePostComponent } from './inv-profile-post/inv-profile-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    InvProfileComponent,
    InvProfilePostComponent
  ],
  imports: [
    CommonModule,
    PipesModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule
  ],
  exports: [
    InvProfileComponent,
    InvProfilePostComponent
  ]
})
export class ProfilesModule { }
