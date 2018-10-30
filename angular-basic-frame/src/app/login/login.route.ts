import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const routes: Routes = [
    {path: "", component: LoginComponent, children: [
        // {path: '', loadChildren: ''},
    ]},
]

export const routing = RouterModule.forChild(routes);