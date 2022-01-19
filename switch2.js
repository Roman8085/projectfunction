var x = 2;
var a = 3;
switch (x) {
    case 1:
        console.log("Fan1");
        break;

    case 2:
        console.log("Fan2");
        func1(a);
        

    case 3:
        console.log("Fan3");
        break;

    default:
        console.log("Invalid Switch Pressed")
        break;
}

function func1(argument) {

    switch (a) {
        case 1:
            console.log("light");
            break;

        case 2:
            console.log("light2");
            break;
        case 3:
            console.log("light3");
            break;

        case 4:
            console.log("light4");
            break;

        default:
            break;
    }
}