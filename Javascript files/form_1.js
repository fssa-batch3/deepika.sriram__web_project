function enter(e) {
    e.preventDefault();
    // hear i collect value from signUp form
    let f_name = document.getElementById("first_name").value.trim();
    l_name = document.getElementById("last_name").value.trim();
    mobile = document.getElementById("mobile_number").value.trim();
    email_id = document.getElementById("user_email").value.trim();
    create_password = document.getElementById("pass_1").value.trim();
    confirm_password = document.getElementById("pass_2").value.trim();
    uuid = uuidv4();
    user_role = {};
    doctor = document.getElementById("doctor").checked;
    patient = document.getElementById("patient").checked;

    function userRole(role, name) {
        if (role == true) {
            return user_role[name] = true;
        }
        if (role != true) {
            return user_role[name] = false;
        }
    }

    userRole(doctor, "doctor")
    userRole(patient, "patient")

    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let user_detail = JSON.parse(localStorage.getItem('user_detail')) || [];

    // hear we give some condition for signup to restict same unique id
    let exist = user_detail.some(data =>
        data.f_name.trim().toLowerCase() == f_name.toLowerCase() ||
        data.l_name.trim().toLowerCase() === l_name.toLowerCase() ||
        data.mobile.trim().toLowerCase() === mobile.toLowerCase() ||
        data.email_id.trim().toLowerCase() == email_id.toLowerCase() ||
        data.create_password.trim().toLowerCase() == create_password.toLowerCase() ||
        data.confirm_password.trim().toLowerCase() == confirm_password.toLowerCase()
    );

    // if condition fail
    if (!exist) {

        if (create_password === confirm_password) {
            user_detail.push({ f_name, l_name, mobile, email_id, create_password, confirm_password, user_role, uuid });

            localStorage.setItem('user_detail', JSON.stringify(user_detail));

            document.querySelector('form').reset();
            alert('Account created Successfully✅');

            location.href = "./login.html"
        }
        else{
            alert("create password and confirm password doesn't match ❎");
        }


    }
    // if condition pass
    else {
        alert('Sorry the User already Exist!! \n Try with different Phone number or email ');
        document.querySelector('form').reset();
    }

}

// for sign in()
function signIn(e) {
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let user_detail = JSON.parse(localStorage.getItem('user_detail')) || [];

    let exist = user_detail.length &&
        JSON.parse(localStorage.getItem('user_detail')).some(data => data.email_id.toLowerCase() == email.toLowerCase()
            && data.confirm_password == password);
    if (!exist) {
        alert("User details didn't match ❌");
        // location.href = "../pages/homepage/home page.html"
    }
    else {
        localStorage.setItem("uniqueUser", JSON.stringify(email));
        alert("Your login in is successful ✅");
        location.href = "../../homepage/home page.html"
    }

}


