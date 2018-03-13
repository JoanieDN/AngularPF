export class RestResponse {

    public responseCode: number;
    public message : string;

    constructor(responseCode: number,
         message : string){
        
            this.responseCode= responseCode;
         this.message = message;

    }

}