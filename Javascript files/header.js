var origin = window.location.search;
var homepage = origin+"/pages/homepage/home page.html"
var about = origin+"/pages/other pages/other pages/about us.html"
var image = origin+"/assets/images/gws.png"
var login = origin+"/pages/other pages/other pages/login.html"
var signup = origin+"/pages/other pages/other pages/sign up page.html"
var profile = origin+"/pages/other pages/patient/patient profile page.html"
var appointment_history = origin+"/pages/other pages/patient/history.html"
var hospitals = origin+"/pages/other pages/patient/list of hospital page.html"
var index = origin+"/index.html"
var menu = origin+"/pages/other pages/other pages/menu.html"



var heading_1 = `

            <div>
                <img src="${image}" alt="logo of get well soon website">
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
                        <a href="#">Contact us</a>
                        <a href="${about}">About us</a>
                        <a href="${login}">Login</a>
                        <a href="${signup}">Sign up</a>
                    </div>
                </div>
            </div>
`

var heading_2 = `
            <div>
                <img src="${image}" alt="logo of get well soon website">
            </div>
            <div id="hide">
                <ul>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Hospitals</a>
                        <div class="dropdown-content" style="right:25%">
                            <a href="${hospitals}">All</a>
                            <a href="${hospitals}">Central govt health scheme entitiled</a>
                            <a href="${hospitals}">Private insurance entitled</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Specialists</a>
                        <div class="dropdown-content" style="right:15%;">
                            <div>
                                <a href="#">Allergy and immunology</a>
                                <a href="#">Cancer</a>
                                <a href="#">Cardiology</a>
                                <a href="#">Dermatology (skin)</a>
                                <a href="#">Diabetes (blood sugar)</a>
                                <a href="#">Gastroenterology (digestive)</a>
                                <a href="#">Ear, Nose and Throat (ENT)</a>
                                <a href="#">General physician</a>
                                <a href="#">Liver diseases</a>
                            </div>
                            <div>
                                <a href="#">Nephrology (kidney)</a>
                                <a href="#">Neurology (nerves and brain)</a>
                                <a href="#">Opthomology (eyes)</a>
                                <a href="#">Orthology (bones and joints)</a>
                                <a href="#">Paediatrics (children)</a>
                                <a href="#">Pulmonogy (Lungs)</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="${about}">About us</a>
                    </li>
                    <li>
                        <a href="${login}">Login</a>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn"><i class="far fa-user" style="color:white;font-size:150%"></i> </a>
                        <div class="dropdown-content" style="right:0%">
                            <a href="${index}">Sign out <i class="fa fa-sign-out"></i> </a>
                            <a href="${appointment_history}">History <i class="fa fa-history"></i> </a>
                            <a href="${profile}">Profile <i class="fas fa-user"></i> </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="vision-2">
                <a href="${menu}">
                    <i class="fa-solid fa-bars"></i>
                </a>
            </div>
`

function indexPage(){
    let unique = JSON.parse(localStorage.getItem('uniqueUser'));
    let header = document.getElementById("header");
    if(!unique){
        // document.getElementById('header').insertAdjacentHTML("beforeend" , heading_1)
        header.innerHTML = heading_1;
    }
    else{
        // document.getElementById("header").insertAdjacentHTML("beforebegin" , heading_2);
        header.innerHTML = heading_2
    }
    
}