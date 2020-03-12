function displayFormValues() {
    
    var firstName = document.getElementById("firstname").value;          
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fName = firstName;
    var lName = lastName;
    var em = email;
    var pass = password
    document.getElementById('first-name').textContent = fName;
    document.getElementById('last-name').textContent = lName;
    document.getElementById("e-mail").textContent= em;
    document.getElementById("pass-word").textContent = pass;
    document.getElementById("output").style.visibility = "visible";
     
}