var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// title
console.log("Financial Analysis")
console.log("------------------")


// 1. total months -  create a variable for the no. of months
var monthsNo = finances.length;
console.log("Total Months:  " + monthsNo); //86




// 2. The net total amount of Profit/Losses over the entire period.
  // create a variable for the sum of the finances and initialize it
var financesSum = 0 ;
var currentMonth ;
var currentProfit ;
var nextMonth ;
var nextProfit ;
var profitLoss ;
var profitLossSum = 0;
var profitLossAverage ;
var greatestIncrease = 0;
var greatestIncreaseDate ;
var greatestDecrease = 0;
var greatestDecreaseDate ;


for (i = 0; i < monthsNo; i++ ) {
  currentMonth = finances[i]; // current month is each index of the finances array
  currentProfit = currentMonth[1]; // current profit is index '1' of each current-month item
  // console.log(currentProfit);  - to test if the array has worked
  financesSum += currentProfit; // all the currentProfit values added incrementally



// 3. Average changes in profits/losses over the period
    // each item subtracting the item before it 
    if (i === 85) { continue; }
    nextMonth = finances[i+1];
    // console.log(nextMonth) - to test if the new array has worked
    nextProfit = nextMonth[1];
    profitLoss = nextProfit - currentProfit;
    profitLossSum += profitLoss;

// 4. The greatest increase and decrease in Profit/Losses (date and amount) over the entire period.
  // need a var for greatest increase & decrease
  // greatest increase = nextProfit - current profit if greater than the last iteration and the opposite for the decrease
  // if profitLoss > greatest increase then change value, else continue
    if (profitLoss > greatestIncrease) {
    greatestIncrease = profitLoss;
    greatestIncreaseDate = nextMonth[0]; // Find the corresponding month for the increase and decrease
    }
    else if (profitLoss < greatestDecrease) {
    greatestDecrease = profitLoss; 
    greatestDecreaseDate = nextMonth[0];
    }   
    else {continue;}

  }
  // finding the average of this new array - total / no.of items
  profitLossAverage = profitLossSum / (monthsNo -1);
  
  
console.log("Total:   $" + financesSum); // $38382578
console.log("Average Change:   $" + profitLossAverage.toFixed(2));
console.log("Greatest Increase in Profits/Losses:   " + greatestIncreaseDate + " ($" + greatestIncrease + ")");
console.log("Greatest Decrease in Profits/Losses:   " + greatestDecreaseDate + " ($" + greatestDecrease + ")");
