import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form-anime', loadChildren: './anime/form-anime/form-anime.module#FormAnimePageModule' },
  { path: 'list-anime', loadChildren: './anime/list-anime/list-anime.module#ListAnimePageModule' },
  { path: 'view-anime', loadChildren: './anime/view-anime/view-anime.module#ViewAnimePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
