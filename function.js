// sample customer objects
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Function to calculate the refill total.

function calculateRefill (customer){
    const  totalRefill = customer.pricePerRefill*customer.refills;
    return totalRefill;
}

//Function to calculate the total after subscription applied.

function calculateSubscription( totalRefill, hasSubscription ){
const total = totalRefill;

if(hasSubscription) {
const subscriptionDiscount = totalRefill*0.25;
total-= subscriptionDiscount;


}

return total;
}

//function to calculate the total after the coupon applied.

function calculateCoupon (subscriptionTotal, hasCoupon) {
const total = subscriptionTotal;

if(hasCoupon) {
total -= 10;

}
return total
}


//function for final output
function final(total){

    return `Your grand total is $${total}.`;
}


