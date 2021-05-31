export class Umbrella{
    colors: Array<string>;
    _id: string;
    brand: string;
    size: number;
    height: number;
    model: string;

    constructor(brand: string, size: number,height:number,model:string,colors:Array<string>){
        this.brand = brand;
        this.size = size;
        this.height = height;
        this.colors = colors;
        this.model = model;
    }
}