var origin = window.location.origin;
var homepage = origin + "/pages/homepage/home page.html"
var about = origin + "/pages/other pages/other pages/about us.html"
var image = origin + "/assets/images/gws.png"
var login = origin + "/pages/other pages/other pages/login.html"
var signup = origin + "/pages/other pages/other pages/sign up page.html"
var profile = origin + "/pages/other pages/patient/patient profile page.html"
var appointment_history = origin + "/pages/other pages/patient/history.html"
var hospitals = origin + "/pages/other pages/patient/list of hospital page.html"
var index = origin + "/index.html"
var menu = origin + "/pages/other pages/other pages/menu.html"
var doctor_list = origin + "/pages/other pages/other pages/doctor's list.html"
var femaleAvatar = origin + "/assets/images/female_Avatar-removebg-preview.png"
var maleAvatar = origin + "/assets/images/male_Avatar-removebg-preview.png"
var otherAvatar = origin + "/assets/images/profile avatar.png"
var index = origin + "/index.html";



var heading_1 = `

            <div>
                <img src="${image}" alt="logo of get well soon website" style="width:10%">
            </div>
            <div id="hide">
                <ul>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="${about}" id="anchor">About us</a>
                    </li>
                    <li>
                        <a href="${login}" id="anchor">Login</a>
                    </li>
                    <li>
                        <a href="${signup}" id="anchor">Sign up</a>
                    </li>
                </ul>
            </div>
            <div id="vision">
                <div class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        <i class="fa-solid fa-bars" style="font-size:large"></i>
                    </a>
                    <div class="dropdown-content" style="right:2%">
                        <a href="${about}">About us</a>
                        <a href="${login}">Login</a>
                        <a href="${signup}">Sign up</a>
                    </div>
                </div>
            </div>
`

var heading_2 = `
    <img id="logo" src="${image}" alt="logo of get well soon website" style="width:5%">
        <div style="display:flex;justify-content:flex-end;align-items:center" >
            <div id="hide">
                <ul>
                    <li>
                        <a href="${index}">Home</a>
                    </li>
                    <li>
                        <a href="${hospitals}">Hospitals</a>
                    </li>
                    <li>
                        <a href="#">Specialists</a>
                    </li>
                    <li>
                        <a href="${about}">About us</a>
                    </li>
                    <li>
                        <a href="#contactUs">Contact us</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown" style="width:10%">
                <a id="image" href="javascript:void(0)" class="dropbtn"></a>
                <div class="dropdown-content" style="right:0%">
                    <a id="signout">Sign out <i class="fa fa-sign-out"></i></a>
                    <a href="${appointment_history}">History <i class="fa fa-history"></i> </a>
                    <a href="${profile}">View profile <i class="fas fa-user"></i> </a>
                </div>
            </div>
        </div>


        <div id="vision-2">
            <a href="${menu}">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
`
function indexPage() {
    let unique = JSON.parse(localStorage.getItem('uniqueUser'));
    let header = document.getElementById("header");

    let maleImage = `<img id="avatar" class="profile" src="${maleAvatar}">`;
    let femaleImage = `<img id="avatar" class="profile" src="${femaleAvatar}">`;
    let otherImage = `<img id="avatar" class="profile" src="${otherAvatar}"></i>`;
    const user_detail = JSON.parse(localStorage.getItem("user_detail"));

    const profileForm = document.querySelector('#profile');

    let searchField = document.querySelector('#searchBar');
    let searchBar = `
        <div>
            <input type="text" id="city" placeholder="enter the city" />
            <button type="button" id="search_place">Search</button>
        </div>
    `

    
    

    if (user_detail) {
        const user = user_detail.find(detail =>
            detail.email_id === unique
        );
        if (!unique) {
            header.innerHTML = heading_1;
        }
        else {
            header.innerHTML = heading_2;
            if (user) {
                if (user.user_gender.male === true) {
                    document.querySelector('#image').insertAdjacentHTML('beforeend', maleImage);
                    if (profileForm) {
                        maleImage.id = "profileImage"
                        profileForm.insertAdjacentHTML('afterbegin', maleImage)
                    }
                }
                if (user.user_gender.female === true) {
                    document.querySelector('#image').insertAdjacentHTML('beforeend', femaleImage);
                    if (profileForm) {
                        femaleImage.id = "profileImage"
                        profileForm.insertAdjacentHTML('afterbegin', femaleImage)
                    }
                }
                if (user.user_gender.others === true) {
                    document.querySelector('#image').insertAdjacentHTML('beforeend', otherImage);
                    if (profileForm) {
                        otherImage.id = "profileImage"
                        profileForm.insertAdjacentHTML('afterbegin', otherImage)
                    }
                }
                

            }
            if(searchField){
                searchField.insertAdjacentHTML('beforeend' , searchBar);
            }
            document.getElementById("signout").onclick = function (event) {
                event.preventDefault();

                alert("logged out successfully");
                header.innerHTML = heading_1;
                localStorage.removeItem('uniqueUser');
                searchBar.remove();
            }
        }
    }
    else {
        header.innerHTML = heading_1;
    }
}

