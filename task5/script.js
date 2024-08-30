function validateForm(){
    let userName = document.getElementById("username").value
    if(userName===""){
        alert("username can not be empty")
        return false
    }
    return true
}