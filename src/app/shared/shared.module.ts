import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadCrumbsComponent } from "./bread-crumbs/bread-crumbs.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";





@NgModule({
    imports:[
        RouterModule,
        CommonModule //para poder usar *ngFor *ngIf etc.
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadCrumbsComponent, 
        NoPageFoundComponent,

    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadCrumbsComponent,
        NoPageFoundComponent,

    ]

})
export class SharedModule{}