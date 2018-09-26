import { NgModule } from "@angular/core";

import {FormsModule} from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

import { PagesComponent } from "./pages.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficodonaComponent } from '../components/allgraphics/graficodona/graficodona.component';

// importación de modulo para realizar graficas
import { ChartsModule } from 'ng2-charts';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficodonaComponent,
        AcountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficodonaComponent,
        AcountSettingsComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})
export class PagesModule{}