import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, children: [
        {path: 'menuOne', component: MenuOneComponent},
        {path: 'menuTwo', component: MenuTwoComponent},
    ]},
]

export const routing = RouterModule.forChild(routes);