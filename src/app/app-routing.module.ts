import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { StudentListComponent } from "./students/student-list.component";


const routes: Routes = [
    { path: "", redirectTo: "/students", pathMatch: "full" },
    { path: "students", component: StudentListComponent },
    // { path: students", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
