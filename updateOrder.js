function updateOrder(){
    const TAX = 0.0925;
    const DONUTPRICE = 0.50;

    var numCake = parseInt(document.getElemetById("cakedonuts").value);
    var numGlazed = parseInt(document.getElemetById("glazeddonuts").value);

    if(isNaN(numCake))    //如果返回true，表示数据不是数字（PS：检查例外情况比较合理）
        numCake = 0;
    if(isNaN(numGlazed))
        numGlazed = 0;

    var subTotal = (numCake + numGlazed) * DONUTPRICE;
    var tax = subTotal +TAX;
    var total = subTotal + tax;
    document.getElemetById("subtotal").value = "$" + subTotal.toFixed(2);    //四舍五入到小数点后两位
    document.getElemetById("tax").value = "$" + tax.toFixed(2);
    document.getElemetById("total").value = "$" + total.toFixed(2);

}
