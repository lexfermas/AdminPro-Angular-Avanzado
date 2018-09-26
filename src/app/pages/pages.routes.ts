import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AcountSettingsComponent } from "./acount-settings/acount-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            {path: 'dashboard', component: DashBoardComponent, data: {titulo: 'Dashboard'} },
            {path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBars'} },
            {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas'} },
            {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
            {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
            {path: 'account-settings', component: AcountSettingsComponent, data: {titulo: 'Ajustes de tema'} },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 

        ]
    }
    
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );