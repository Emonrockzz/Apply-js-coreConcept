function milesToKilometer(miles){
    const kilomitar = miles * 1.609;
    return kilomitar;
}

const myHouse = 4;
const awaykm = milesToKilometer(myHouse);
console.log(awaykm)