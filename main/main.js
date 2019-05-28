module.exports = function main(inputs) {
   var distance,parkTime,price,price1;
   distance=inputs.distance;
   parkTime=inputs.parkTime;
   if(distance<2)
	   price1=6+0.25*parkTime;
   else if(distance<=8)
   {
	   price1=6+0.25*parkTime+0.8*(distance-2);
   }
   else 
   {
	   price1=6+0.25*parkTime+0.8*6+1.2*(distance-8);
   }
   price=Math.round(price1);
    return price;
};
