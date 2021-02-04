//Part 1
function myUpdateFunction(event) {
    console.log("Hello")
}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction);

//Part 2
function addFunction(event) {
    let number1 = parseInt($("#field1").val());
    let number2 = parseInt($("#field2").val());
    let number3 = number1 + number2;
    $("#field3").val(number3);
}

let formButton2 = $("#button2");
formButton2.on("click", addFunction);

//Part 3
function hideFunction(event) {
    if($("#paragraphToHide").is(":visible")){
        $("#paragraphToHide").hide(10);
    }else {
        $("#paragraphToHide").show(10);
    }
}

let formButton3 = $("#button3");
formButton3.on("click", hideFunction);

//Part 4
function numberChecker(event) {
    let formField = $("#phoneField").val();
    let regularExpression = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if(regularExpression.test(formField)) {
        console.log("Ok")
    } else{
        console.log("Bad")
    }
}

let formButton4 = $("#button4");
formButton4.on("click", numberChecker);

//Part 5

function jsonFormer(event) {
    let formJsonObject = {};
    let firstNameVal = $("#firstName").val();
    formJsonObject.firstName = firstNameVal;
    let lastNameVal = $("#lastName").val();
    formJsonObject.lastName = lastNameVal;
    let emailVal = $("#email").val();
    formJsonObject.email = emailVal;
    let jsonString = JSON.stringify(formJsonObject)
    console.log(jsonString);
}

let formButton5 = $("#button5");
formButton5.on("click", jsonFormer);