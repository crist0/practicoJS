const coupons = [
  {
    name: "crist0",
    discount: 30,
  },
  {
    name: "platzi",
    discount: 10,
  },
  {
    name: "JS",
    discount: 20,
  },
];

function calculatePriceWithDiscount(price, discount) {
  const pricePercentageWithDiscount = 100 - discount;
  const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;
  return priceWithDiscount;
}

function priceWithDiscount(){
  const inputPrice = document.getElementById("priceInput");
  const valuePrice = inputPrice.value;
  const inputCoupon = document.getElementById("couponInput");
  const valueCoupon = inputCoupon.value;

  const isCouponValueValid = function(coupon){
    return coupon.name === valueCoupon;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon){
    alert("The coupon '"+valueCoupon+" is not valid.");
  }else{
    const discount = userCoupon.discount;
    const priceWithDiscount = calculatePriceWithDiscount(valuePrice,discount);
    const resultP = document.getElementById("priceWithDiscount");
    resultP.innerHTML = "The price with discount are "+priceWithDiscount;
  }

  
}
