import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ToptenComponent } from './topten/topten.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'topten', component: ToptenComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: 'home' ,   component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  export const routingComponents = [
    HomeComponent,
    GalleryComponent,
    ToptenComponent,
    ContactComponent  ];
