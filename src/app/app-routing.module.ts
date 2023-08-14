import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModsHomeComponent } from './mods/mods-home/mods-home.component';


const routes: Routes = [
  {path:'mods',loadChildren:()=> import('./mods/mods.module').then(m => m.ModsModule) },
  {path:'collections', loadChildren:() => import('./collections/collections.module').then(m => m.CollectionsModule) },
  {path: 'element', loadChildren: () => import('./elements/elements.module').then(m=> m.ElementsModule) },
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: '**', redirectTo:'/not-found', pathMatch:'full'},
{path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
