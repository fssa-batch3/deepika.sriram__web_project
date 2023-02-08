const enter = e => {
    // hear i collect value from signUp form
    let user_name = document.getElementById("name").value;
    age= document.getElementById("age").value;
    create_password=document.getElementById("pass_1").value;
    confirm_password=document.getElementById("pass_2").value;

    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let user_detail = JSON.parse(localStorage.getItem('user_detail')) || [];
    // hear we give some condition for signup to restict same unique id
    let exist = user_detail.some(data =>
            data.user_name.toLowerCase() == user_name.toLowerCase() ||
            data.create_password.toLowerCase() == create_password.toLowerCase() ||
            data.confirm_password.toLowerCase() == confirm_password.toLowerCase()
        );
    // if condition fail
    if(!exist){
        user_detail.push({user_name,age,create_password,confirm_password});
        localStorage.setItem('user_detail', JSON.stringify(user_detail));
        document.querySelector('form').reset();
        alert('Account created Successfully');
        location.href = "./login.html";
    }
    // if condition pass
    else{
        alert('Sorry the User already Exist!! \n Try with different Phone number or email');
        document.querySelector('form').reset();
    }
    e.preventDefault();
}

// for sign in()
const signIn = e => {
    let email_id=document.getElementById("email").value;
    let password =document.getElementById("password").value;

    let user_detail = JSON.parse(localStorage.getItem('user_detail')) || [];

    let exist = user_detail.length &&
    JSON.parse(localStorage.getItem('user_detail')).some(data => data.email_id.toLowerCase() == email_id.toLowerCase()
     && data.confirm_password.toLowerCase() == password.toLowerCase());
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        alert("Your login in successful");
        location.href = "/index.html";
    }
    e.preventDefault();
}
