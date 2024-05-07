function clr(digit) {
    document.getElementById(digit).style.backgroundColor = 'orange';
}
let value;
value = String(prompt("Enter your value"));
let digit;
let flag = 0;
for (let i = 0; i < value.length; i++) {
    if (value[i] == '1' || value[i] == '2' || value[i] == '3' || value[i] == '4' || value[i] == '5' || value[i] == '6' || value[i] == '7' || value[i] == '8' || value[i] == '9') {
        flag = 1;
    }
    else {
        flag = 0;
        break;
    }
}

if (flag == 0) {
    alert("INVALID INPUT");
}
else {
    for (let i = 0; i < value.length; i++) {
        digit = value[i];
        clr(digit);
    }
}

