// code your solution here
function saturdayFun(activity = 'roller-skate') {
    const myString =  `This Saturday, I want to ${activity}!`;
    return myString;

}

function mondayWork(activity = 'go to the office') {
    const anotherString = `This Monday, I will ${activity}.`;
    return anotherString;

}

function wrapAdjective( param1 = '*') {
    const innerFunction = function( param2 = 'special') {
        return `You are ${param1}${param2}${param1}!`;
    }
    return innerFunction;

}
wrapAdjective(`${param1} ${param2}`);




