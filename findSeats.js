var i = 0,finished = false;

while((i < seats.length) && ! finished){
    if(seats[i] && seats[i + 1] && seats[i +2]){
        //...
        var accept = confirm("Seat " + (i + 1) + "through " + (i + 3) + " are availabe. Accept?");

        if(accept)
            finished = true;
        else{
            //....
        }
    }
    i++ ;
}
