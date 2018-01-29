//Array (Every, Some, Filter)
var evenNumbers = new Array(0,2,4,6,8,9,10,12);
var allEvenEvery = evenNumbers.every(evenNumbersCheck, evenNumbers);//Array every
var allEvenSome = evenNumbers.some(evenNumbersCheck, evenNumbers);//Array some
var allEvenFilter = evenNumbers.filter(evenNumbersCheck, evenNumbers);//Array filter

function evenNumbersCheck(value, index, array)
{
    return (value % 2 ) == 0;
}


///Array forEach
var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
sportsArray.forEach(offerSport);

function offerSport(value, index, array)
{
    var sportList = document.getElementById("sportsList");
    var bullet = document.createElement("li");
    bullet.innerText = value;
    sportList.appendChild(bullet);
}

sportsArray.sort().forEach(offerSport); //caso queira organizar o array antes


//Array map
var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);

function roundOff(value, index, array)
{
    return Math.round(value);
}

var number = [1, 2, 3, 4, 5, 6, 7, 8];
var squares = number.map(squareNumber, number);

function squareNumber(value, index, array)
{
    return (value * value);
}