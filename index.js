
//function for validating form of index.html
function formValidate() {

    //getting value of name
    var name = document.forms["myform"]["fName"].value;
    name = String(name).trim();

    //getting value of address and 
    var address = document.forms["myform"]["address"].value;
    address = String(address).trim();

    //getting value of phone number and regex for phone number
    var phnum = document.forms["myform"]["phnum"].value;
    var permissiblephnum = /^[0-9]+$/;

    //getting value of email id and regex for email id
    var emailId = document.forms["myform"]["email"].value;
    var permissibleEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    //for validating name
    if (name == "") {
        alert("name cant be blank");
        return false;
    }

    if (/^[0-9]/g.test(String(name))) {
        alert("Name cannot contain numbers");
        return false;
    }

    //for validating address
    if (address == "") {
        alert("Address cannot be blank");
        return false;
    }

    //for validating phone number
    if (phnum.trim() == "" || (!phnum.match(permissiblephnum)) || (phnum.length != 10)) {
        alert("Enter a valid phone number");
        return false;
    }

    //for validating email id
    if(emailId.trim()=="" || !emailId.match(permissibleEmail)){
        alert("Enter a valid email id");
        return false;
    }
    
    //using localstorage function to transfer data to delivered.html
    const user = {
        user_name : name,
        user_address : address,
        user_phnum : phnum,
        user_emailId : emailId
    }
    window.localStorage.setItem('user', JSON.stringify(user));

    return true;

}

//function  for validating form of welcome.html
function validityCheck() {
    var payment = document.getElementById("payment").value;
    var terms1 = document.getElementById("terms");

    //to get size of pizza using name and for loop for iterating upto the number of radio options
    var typeOfPizza = document.getElementsByName("pizzaType");
    var valid1 = false;
    var valid1_value = "";

    for (var i = 0; i < typeOfPizza.length; i++) {
        if (typeOfPizza[i].checked) {
            valid1_value = typeOfPizza[i].value;
            valid1 = true;
            break;
        }
    }

    //to get size of pizza using name and for loop for iterating upto the number of radio options
    var sizeOfPizza = document.getElementsByName("pizzaSize");
    var valid2 = false;
    var valid2_value = "";
    for (var j = 0; j < sizeOfPizza.length; j++) {
        if (sizeOfPizza[j].checked) {
            valid2_value = sizeOfPizza[j].value;
            valid2 = true;
            break;
        }
    }

    //to get crustType of pizza using name and for loop for iterating upto the number of radio options
    var crustType = document.getElementsByName("crust");
    var valid3 = false;
    var valid3_value = "";
    for (var k = 0; k < crustType.length; k++) {
        if (crustType[k].checked) {
            valid3_value = crustType[k].value;
            valid3 = true;
            break;
        }
    }

    //to get coupons and validating coupons 
    var coupons = document.getElementsByName("coupons");
    coupons = String(coupons).trim();
    if (coupcode != "" && !/^PIZDIS/i.test(coupcode)){
        alert("coupon doesnot exist");
        return false;
    }

    //validation check for payment option
    if (payment == "") {
        alert("Please choose a payment option!");
        return false;
    }

    //validation check for pizza type
    if (!valid1) {
        alert("Please choose what type pof pizza you want!");
        return false;
    }

    //validation check for size of pizza
    if (!valid2) {
        alert("Please choose the size of your pizza!")
        return false;
    }

    //validation check for crust type
    if (!valid3) {
        alert("PLease choose the crust type of your pizza!")
        return false;
    }

    //validation check for terms and conditions
    if (!terms1.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        //form.terms.focus();
        return false;
    }
    
    //using localstorage function to transfer data to delivered.html
    const user1 = {
        user1_payment : payment,
        user1_typeOfPizza : valid1_value,
        user1_sizeOfPizza : valid2_value,
        user1_crustType : valid3_value
    }
    window.localStorage.setItem('user1', JSON.stringify(user1));

    return true;
    
}



