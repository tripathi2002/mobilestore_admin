import { Dialog } from "@angular/cdk/dialog";

export class Main {
    title:string;
    listTemp:string = '';
    constructor(title?: string, listTemp?:any){
        this.title = title || "List";
        this.listTemp = listTemp;
    }
}
