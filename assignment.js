// kilometerToMeter  
function kilometerToMeter(km) {
    if (km > 0) {
        var meter = km * 1000;
        // One(1) kiloMeter is equal to one thousand(1000) metres.
        return meter;
    }
    else {
        return "Sorry! Distance cannot be negative or a string. Please try agian."
    }
}
var meterResult = kilometerToMeter();
console.log(meterResult);



// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Sorry, You are not allowed to use negative numbers. Please use positive numbers"
    }
    // If anyone put the price of watch/mobile/laptop less than 0, he will be asked for a positive number. Here, || means or. Watch or Mobile or Laptop, if one of those price is less then 0, the "if" will work.
    if (watch >= 0, mobile >= 0, laptop >= 0) {
        var totalPrice = (watch * 50) + (mobile * 100) + (laptop * 500);
        // Watch price is 50, mobile is 100 & laptop is 500. So, I multplied price(50,100,500) with the product quantities.
        return totalPrice;
    }
    else {
        return "Sorry, you can not put text here!"

    }
}
var totalBudget = budgetCalculator();
console.log(totalBudget);




// hotelCost
function hotelCost(day) {
    if (day > 0 && day <= 10) {
        var coast = day * 100;
        // First 10 days hotel rate is 100 per day, so I multiplied the days with 100.
        return coast;
    }
    else if (day > 0 && day <= 20) {
        var coast = (10 * 100) + (day - 10) * 80;
        // I removed first 10 days hotel rate from total days & multiplied remaining days with 80. Finally, added all days hotel coast together.
        return coast;
    }
    else if (day > 0 && day >= 21) {
        var coast = (10 * 100) + (10 * 80) + ((day - 20) * 50);
        // I removed the 20 days hotel rate from total days & multiplied remaining days with 50. Finally, added all days hotel coast together.
        return coast;
    }
    else {
        return "Dear sir, you should put the total days you lived in this hotel."
        // I use this elese section to ask user for the correct day. If anyone put string, blank spaces, negative(-) numbers, they will ask for a date.
    }
}
var totalCoast = hotelCost();
console.log(totalCoast);




// megaFriend
function megaFriend(friendsName) {
    var longestWord = "";

    friendsName.forEach(function (max) {
        if (max.length > longestWord.length) {
            longestWord = max;
        }
    });
    return longestWord;
}
var max = megaFriend(["ApurboBabu", "Abbrity", "Sufal", "Farin", "Prarona", "FarzanaRahman",]);
console.log(max);
