console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(userNum){
    if(userNum < 0)
    {
        console.log("changing this to positive for you");
        userNum *= -1;
    }
    for(let counter = 0; counter <= userNum; counter++ )
    {
    
        if(counter % 2 != 0)
        {
            console.log(counter);
        }
        
        
    }
}

printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {

    let above16 = `Congrats ${userName}, you can drive!`;
    let below16 = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16)
    {
        
        console.log(below16);
    }
    if (age > 16)
    {
        console.log(above16);
    }
} 

checkAge("Nax", 18);

//Exercise 3

function gridCheck (coordinate1, coordinate2){
    

    if(coordinate1 < 0 && coordinate2 < 0)
    {
        console.log("You are in the 4th position");
    }

    else if(coordinate1 < 0 && coordinate2 > 0)
    {
        console.log("You are in the first position");
    }
 
    else if(coordinate1 > 0 && coordinate2 < 0)
    {
        console.log("You are in the 3rd position");
    }
    else if(coordinate1 > 0 && coordinate2 > 0)
    {
        console.log("You are in the 2nd position");
    }

}

gridCheck(4,-3);

//Exercise 4

function triagleCheck (side1, side2, side3)
{
   if(side1 == side2 && side1 + side2 > side3)
    {
        console.log("is a triangle");    
    }
    
    else if(side1 == side3 && side1 + side3 > side2)
    {
        console.log("is a triangle");
    }
    else if(side2 == side3 && side2 + side3 > side1)
    {
        console.log("is a triangle");
    }
    else{
        console.log("is not a triangle");
    }
}

triagleCheck(1,1,2);

//Exercise 5

function cellPhonePlan(planLimit, day, usage)
{
    let month = 30;

    let actualAverageUsage = usage/day;

    let averageUsage = planLimit/month;

    let timeLeft = month - day;

    let dataRemaining = planLimit - usage;

    let exceedBy = (month * actualAverageUsage) - planLimit;

    let underBy = ((month * actualAverageUsage) - planLimit) * -1;

    let increaseBy = dataRemaining/timeLeft;

    let slowUsage = (planLimit - usage) / timeLeft;

    console.log(`You have ${day} days used, with ${timeLeft} days remaining.`);
    console.log(`Your Average daily use: ${actualAverageUsage} GB's of data per Day.`);

    if((actualAverageUsage * month) > planLimit) 
    {
        console.log(`You are EXCEEDING your average daily use of ${averageUsage} Gb's per day. `);
        console.log(`Continuing this usage, you will exceed your plan's ${planLimit} Gb's limit by ${exceedBy}Gb's.`);
        console.log(`To stay below your data plan, use no more than ${slowUsage} Gb's per day.`);
    }
    else if((actualAverageUsage * month) < planLimit)
    {
        console.log(`As a reminder, your plan allows you up to ${averageUsage} Gb's of data per day.`);
        console.log(`You will lose ${underBy} Gb's of data by the end of the month if you do not use it.`)
        console.log(`You can increase your daily usage by ${increaseBy} Gb's.`)

    }
    else{
        console.log(`You are right on track to hit your plan of ${planLimit} Gb's of data allowed in your plan.`)
    }
    
}
    
cellPhonePlan(20, 21, 3);
