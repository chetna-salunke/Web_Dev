
let vehicle= (prompt("enter the mode of vehicle"))
let Distance = parseInt(prompt("enter Distance of traveling"))

if(vehicle=="car" || vehicle=="Car")
{
    let total =Distance *25
    document.write("Dear customer you've choosen your vehicle as- " +vehicle+ "so you're total distance of traveeling is " +Distance+ "And you're total fare is " +total+ " Rs")
}
else if(vehicle=="Bike" || vehicle=="bike")
    {
        let total =Distance *15
        document.write("Dear customer you've choosen your vehicle as -" +vehicle+ "so you're total distance of traveeling is " +Distance+ "And you're total fare is " +total+ " Rs")
    }
else if(vehicle=="Auto" || vehicle=="auto")
        {
            let total =Distance *9
            document.write("Dear customer you've choosen your vehicle as- " +vehicle+ "so you're total distance of traveeling is " +Distance+ "And you're total fare is " +total+ " Rs")
        } 
else{
    document.write("please enter valid mode of transport")
}           

