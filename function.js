// Define customer objects with relevant properties
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

// Define a function to calculate the refill total based on customer properties

function calculateRefill (customer){
    const  totalRefill = customer.pricePerRefill*customer.refills;
    return totalRefill;
}

// Define a function to calculate the total after a subscription discount is applied

function calculateSubscription( totalRefill, hasSubscription ){
let total = totalRefill;

if(hasSubscription) {
const subscriptionDiscount = totalRefill*0.25;
total-= subscriptionDiscount;


}

return total;
}

// Define a function to calculate the total after a coupon discount is applied

function calculateCoupon (subscriptionTotal, hasCoupon) {
let total = subscriptionTotal;

if(hasCoupon) {
total -= 10;

}
return total
}


// Define a function to format the final output string
function finalOutput(total){
    return `Your grand total is $${total}.`;
}


// Define a function to test the cost calculation for a given customer

function totalForCustomer( customer){
const totalRefill = calculateRefill(customer);
const subscriptionTotal =calculateSubscription(totalRefill, customer.subscription);
const couponTotal = calculateCoupon(subscriptionTotal, customer.coupon);
const finalAmount=couponTotal.toFixed(2);
return finalOutput (finalAmount);


}
// Test the cost calculation for each customer
console.log (totalForCustomer(timmy));
console.log (totalForCustomer(sarah));
console.log (totalForCustomer(rocky));