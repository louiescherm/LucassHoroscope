//onSubmit():
//Grab the user entered variables
//Dish off to the other methods, then populate the page with the Horoscope

//determineSign(day,month):
//Given a birth day and month, return the user’s sign as a number (use it as a [key] into your Signs array).

//determineHoroscope(sign):
//Given a user’s sign, return the horoscope text

//determineImage(sign):
//Given a user’s sign, return the horoscope image

function onSubmit(){
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    //setting return value of determineSign into a variable
    var sign = determineSign(month,day);
    //writing variable out to page
    document.getElementById("sign").innerHTML=signs[sign];

    //set ito a var and write out to page
    var description = determineImage(sign);
    document.getElementById("description").innerHTML = description;
}

var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

// Whats your name? Whats your sign?
function Hello(){
    var hello = readLine("What's your name? ");
        println( "Hi " + name);
}

function determineSign(month,day){
    if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        return 0;
    }
    if (month == 2 && day >= 19 || month == 3 && day <= 20) {
        return 1;
    }
    if (month == 3 && day >= 21 || month == 4 && day <= 19) {
        return 2;
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        return 3;
    }
    if (month == 5 && day >= 21 || month == 6 && day <= 20) {
        return 4;
    }
    if (month == 6 && day >= 21 || month == 7 && day <= 22) {
        return 5;
    }
    if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        return 6;
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        return 7;
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        return 8;
    }
    if (month == 10 && day >= 23 || month == 11 && day <= 20) {
        return 9;
    }
    if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        return 10;
    }
    if (month == 12 && day >= 22 || month == 1 && day <= 19) {
        return 11;
    }
}

function determineImage(sign){
    if (sign == 0) {
        document.getElementById("image").innerHTML =  "<img src='img/aquarius.jpg'>";
        return "Don't care what others think about them.";
    }
    if (sign == 1){
        document.getElementById("image").innerHTML =  "<img src='img/pisces.jpg'>";
        return "Extremely sensitive and reserved.";
    }
    if (sign == 2){
        document.getElementById("image").innerHTML =  "<img src='img/aries.jpeg'>";
        return "Independent and courageous.";
    }
    if (sign == 3) {
        document.getElementById("image").innerHTML =  "<img src='img/taurus-lover.png'>";
        return "Solid and fight for what they want.";
    }
    if (sign == 4){
        document.getElementById("image").innerHTML =  "<img src='img/gemini.png'>";
        return "Very talkative and are considered social butterflies.";
    }
    if (sign == 5){
        document.getElementById("image").innerHTML =  "<img src='img/cancer.jpg'>";
        return "Enjoys security but also seeks adventure.";
    }
    if (sign == 6) {
        document.getElementById("image").innerHTML =  "<img src='img/leo.jpg'>";
        return "Heart of fire.";
    }
    if (sign == 7){
        document.getElementById("image").innerHTML =  "<img src='img/Virgo.png'>";
        return "Get along well with everyone and are ambitious.";
    }
    if (sign == 8){
        document.getElementById("image").innerHTML =  "<img src='img/libra.jpg'>";
        return "Mind of ice.";
    }
    if (sign == 9) {
        document.getElementById("image").innerHTML =  "<img src='img/scorpio.jpg'>";
        return "Treat others with kindness and loyalty.";
    }
    if (sign == 10){
        document.getElementById("image").innerHTML =  "<img src='img/sagittarius.jpg'>";
        return "Very positive outlook on life.";
    }
    if (sign == 11){
        document.getElementById("image").innerHTML =  "<img src='img/capricorn.jpg'>";
        return "Marked by their ambitious nature.";
    }
}