const userName = document.getElementById("name");
const userAge = document.getElementById("age");

const gender_1 = document.getElementById("male");
const gender_2 = document.getElementById("female");
const gender_3 = document.getElementById("others");

const mobileNumber = document.getElementById("mobile_number");
const emailId = document.getElementById("user_email");

const unique_id = JSON.parse(localStorage.getItem("uniqueUser"));
const user_detail = JSON.parse(localStorage.getItem("user_detail"));

const user = user_detail.find(detail =>
    detail.email_id === unique_id
);
if (user) {
    userName.value = user.f_name;
    userAge.value = user.age;
    mobileNumber.value = user.mobile;
    emailId.value = user.email_id;
    gender_1.checked = user.user_gender.male;
    gender_2.checked = user.user_gender.female;
    gender_3.checked = user.user_gender.others;

    document.getElementById("updateUser").onclick = function (event) {
        event.preventDefault();

        update_user();
    }

    function update_user() {
        let uName = userName.value;
        uAge = userAge.value;
        uNumber = mobileNumber.value;
        uEmail = emailId.value;

        let u_gender_1 = gender_1.checked;
        let u_gender_2 = gender_2.checked;
        let u_gender_3 = gender_3.checked;

        user.f_name = uName;
        user.age = uAge;
        user.mobile = uNumber;
        user.email_id = uEmail;
        user.user_gender.male = u_gender_1;
        user.user_gender.female = u_gender_2;
        user.user_gender.others = u_gender_3;

        localStorage.setItem('user_detail', JSON.stringify(user_detail));
        alert('updated successfully');
        document.querySelector("form").reset();
        document.getElementById("updateUser").setAttribute('disabled' , true);

    }
}

document.getElementById("deleteUser").addEventListener('click' , (event) =>{
    event.preventDefault();

    const unique_id = JSON.parse(localStorage.getItem("uniqueUser"));
    const user_detail = JSON.parse(localStorage.getItem("user_detail"));

    const userIndex = user_detail.findIndex(detail =>
        detail.email_id === unique_id
    );

    if (userIndex > -1) {
        user_detail.splice(userIndex, 1);
        localStorage.setItem('user_detail', JSON.stringify(user_detail));
        alert("account deleted successfully");
        document.querySelector('form').reset();
        location.href="../../../index.html"

    }
});

// function profile_data(e){
//     return e.email_id == unique_id;
// }
// user = user_detail.find(profile_data);


