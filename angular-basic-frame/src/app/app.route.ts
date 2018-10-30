import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading, PreloadAllModules, PreloadingStrategy} from '@angular/router';


export const Routers: Routes = [
    {path: "", redirectTo: "Login", pathMatch: "full"},
    {path: "Home", loadChildren: "./home/home.module#HomeModule"},
    {path: "Login", loadChildren: "./login/login.module#LoginModule"},
    {path: "**", redirectTo: "Login"},
];

export const Routing = RouterModule.forRoot(Routers, {
    preloadingStrategy: NoPreloading, //PreloadAllModules
    // useHash: true,
})