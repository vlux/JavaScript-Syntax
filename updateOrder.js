function updateOrder(){
    const TAX = 0.0925;
    const DONUTPRICE = 0.50;

    var numCake = parseInt(doucument.getElemetById("cakedonuts").value);
    var numGlazed = parseInt(doucument.getElemetById("glazeddonuts").value);

    if(isNaN(numCake))    //如果返回true，表示数据不是数字
        numCake = 0;
    if(isNaN(numGlazed))
        numGlazed = 0;

    var subTotal = (numCake + numGlazed) * DONUTPRICE;
    var tax = subTotal +TAX;
    var total = subTotal + tax;
    doucument.getElemetById("subtotal").value = "$" + subTotal.toFixed(2);    //四舍五入到小数点后两位
    doucument.getElemetById("tax").value = "$" + tax.toFixed(2);
    doucument.getElemetById("total").value = "$" + total.toFixed(2);

}
