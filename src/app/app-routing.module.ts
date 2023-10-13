import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DrapDropPrimengComponent } from './drap-drop-primeng/drap-drop-primeng.component';

const routes: Routes = [
  {path: 'drag-without-library', component:DragDropComponent},
  {path:'drag-drop-primeng', component: DrapDropPrimengComponent},
  {path:'', redirectTo: 'drag-without-library', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
