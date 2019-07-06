export class Cellphone{

    brand: string;
    color: string;
    memoryBuiltIn: number;
    memoryExpansionAvaliable: boolean; 
    CPU: string;
    RAMSize: number;
    currentCellPhoneNumber: number;

    constructor(brand, color, memoryBuiltIn, memoryExpansionAvaliable, CPU, RAMSize, currentCellOhoneNumber){
        this.brand=brand;
        this.color=color;
        this.memoryBuiltIn=memoryBuiltIn;
        this.memoryExpansionAvaliable=memoryExpansionAvaliable;
        this.CPU=CPU;
        this.RAMSize = RAMSize;
        this.currentCellPhoneNumber=currentCellOhoneNumber;
    }

    call(num: number){
        console.log(this.currentCellPhoneNumber+" is calling to "+num);
    }

    text(num: number, msg: string){
        console.log(this.currentCellPhoneNumber+" is texting "+num+" with message of: "+msg);
    }

}