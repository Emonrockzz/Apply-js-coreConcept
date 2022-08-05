// function  isLeapYear(year){
//     const reminder = year % 4;
//     if(reminder === 0){
//         console.log('your year is a  leap year', year);
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// shot ways 

function  isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}



const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);

const isherYearLeapYear = isLeapYear(1960);
console.log('her year', isherYearLeapYear);