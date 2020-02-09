import { Component } from "@angular/core";
import { HttpModule } from "@angular/http";
import { getMaxListeners } from "cluster";
import { MainService } from "./main.service";

@Component({
    selector:"app-main",
    templateUrl:"./main.component.html"
})

export class MainComponent{
    emp=[];
    constructor(private mainservice: MainService){}
    ngOnInit(){
        this.mainservice.getEmployees()
    .subscribe(responseEmp => this.emp=responseEmp);
}
}