import { TrueFalse } from "./interface";

export class formBase implements TrueFalse {
    title: string = ' Pages ';
    message = 'Error';
    isError = false;
    isLoading: boolean = false;
    isSuccess: boolean = false;
    toggle=undefined;

    constructor(
        title: string, toggel?: boolean){
        this.title = title;
        this.toggle=toggel;
        this.isError = false;
        this.message = '';
    }

    falseAll(): void {
        this.isError = this.isLoading = this.isSuccess = false;
    }

    trueLoading():void {
        this.isError = this.isSuccess = false;
        this.isLoading = true;
    }

    trueSuccess(message: string):void {
        this.isError = this.isLoading = false;
        this.isSuccess = true;
        this.message=message;
    }

    trueError(message:string):void {
        this.message=message;
        this.isSuccess = this.isLoading = false;
        this.isError = true;
    }

    timelate(){
        setTimeout(function () {
            this.falseAll();
          }.bind(this), 3000);
    }

}
