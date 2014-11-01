for (var i = 0; i < seats.length; ++i){
    if(seats[i]){
        selSeat = i;
        document.getElementById("seat" + i).src = "seat_select.png";
        document.getElementById("seat" + i).alt = "Your seat";

        var accept = confirm("Seat " + (i + 1) + " is availabe. Accept?");
                    //confirm函数提示用户回答是或否，返回true/false

        if(!accept){
            selSeat = -1;
            document.getElementById("seat" + i).src = "seat_avail.png";
            document.getElementById("seat" + i).alt = "Avaiable seat";
        }
    }
}
