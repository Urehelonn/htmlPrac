import { Cellphone } from "./cellphone";

let cellphones: Cellphone[] = [
    new Cellphone("Xiaomi", "Black", 128, true, "Qualcomm Snapdragon 845", (6 * 1024), 7094351123),
    new Cellphone("Huawei", "Blue", 128, true, "Qualcomm Snapdragon 845", (6 * 1024), 9032013234),
    new Cellphone("Samsung", "Silver", 64, false, "Qualcomm Snapdragon 845", (4 * 1024), 8472050431),
    new Cellphone("Apple", "White", 16, false, "Qualcomm Snapdragon 845", (6 * 1024), 94053995821),
];

cellphones[0].call(cellphones[2].currentCellPhoneNumber);
cellphones[3].text(cellphones[3].currentCellPhoneNumber, "Let's have some KFC.");

cellphones.forEach((phone)=>{
    console.log(phone);
});