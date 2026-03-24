// Heat Index Classifier using Break + Switch Statements

function hic() {

    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let HeatIndex = num1 + (0.33 * num2) - 4;

    switch (true) {
        case (num1 > 35 && num2 > 69):
            window.alert("Extreme Heat: " + HeatIndex + "°C");
            break;
        case (num1 > 31 && num2 > 59):
            window.alert("Very Hot: " + HeatIndex + "°C");
            break;
        case (num1 > 27 && num2 > 49):
            window.alert("Hot: " + HeatIndex + "°C");
            break;
        case (num1 > 24 && num2 > 39):
            window.alert("Warm: " + HeatIndex + "°C");
            break;
        case (num1 > 19 && num2 > 29):
            window.alert("Cool: " + HeatIndex + "°C");
            break;
        default:
            window.alert("Invalid input");
    }


}