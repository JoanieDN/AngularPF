import {BaseEntity} from './baseEntity.model';


export class Car  {

    public anio : number;
    public color: string;
    public marca: string;
    public modelo:string;

   constructor (
    anio : number,
    color: string,
     marca: string,
    modelo:string){
        this.anio = anio;
        this.color  = color;
        this.marca = marca;
        this.modelo = modelo;

    }



    
}