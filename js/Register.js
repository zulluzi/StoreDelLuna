document.getElementById('registerBtn').addEventListener('click', function(){
    if (!document.getElementById('Username').value){
        alert("Username Cannot Be Empty");
    } else if (!document.getElementById('Password').value){
        alert("Password Cannot Be Empty");
    } else if (document.getElementById('Password').value != document.getElementById('ConfirmationPassword').value){
        alert("Password & Confirm Password Not Matching");
    } else if (!document.getElementById('FullName').value){
        alert("Fullname Cannot Be Empty");
    } else if(!document.getElementById('selectGender').value){
        alert("Gender Cannot Be Empty");
    } else if(!document.getElementById('Email').value){
        alert("Email Cannot Be Empty");
    } else if(!(document.getElementById('Email').value).includes("@") || !(document.getElementById('Email').value).endsWith(".com")){
        alert("Email Is Not Valid");
    } else if(document.getElementById('Age').value < 18){
        alert("Minimum Age 18 Years");
    } else if (!document.getElementById('checkbox').checked){
        alert("You Must Agree To The Terms And Conditions To Continue")
    } else {
        alert("Success");
    }
});