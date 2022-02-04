//no1
function Trafficlight(lampu){
    if (lampu == "red") {
        return "stop"
    }
    else if (lampu == "yellow"){
        return "be carefull"
    }
    else if (lampu == "green"){
        return "go"
    }
}
var lamp = Trafficlight("green");
console.log(lamp);