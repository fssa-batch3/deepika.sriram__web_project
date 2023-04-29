const { origin } = window.location;
const about = `${origin}/pages/other pages/other pages/about us.html`;
const image = `${origin}/assets/images/gws.png`;
const login = `${origin}/pages/other pages/other pages/login.html`;
const signup = `${origin}/pages/other pages/other pages/sign up page.html`;
const profile = `${origin}/pages/other pages/patient/patient profile page.html`;
const appointment_history = `${origin}/pages/other pages/patient/history.html`;
const hospitals = `${origin}/pages/other pages/patient/list of hospital page.html`;
const menu = `${origin}/pages/other pages/other pages/menu.html`;
const femaleAvatar = `${origin}/assets/images/female_Avatar-removebg-preview.png`;
const maleAvatar = `${origin}/assets/images/male_Avatar-removebg-preview.png`;
const otherAvatar = `${origin}/assets/images/profile avatar.png`;
const index = `${origin}/index.html`;

const heading_1 = `

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
`;

const heading_2 = `
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
`;
// eslint-disable-next-line no-unused-vars
function indexPage() {
  const unique = JSON.parse(localStorage.getItem("uniqueUser"));
  const header = document.getElementById("header");

  const maleImage = `<img id="avatar" class="profile" src="${maleAvatar}">`;
  const femaleImage = `<img id="avatar" class="profile" src="${femaleAvatar}">`;
  const otherImage = `<img id="avatar" class="profile" src="${otherAvatar}"></i>`;
  const user_detail = JSON.parse(localStorage.getItem("user_detail"));

  const profileForm = document.querySelector("#profile");

  const searchPart = document.querySelector("#searchBar");
  const searchBar = `
        <div>
            <input type="text" id="city" placeholder="enter the city" />
            <a id="search">
                <i class="fa fa-search"></i>
            </a>
            
        </div>
    `;
  // let searchField = document.querySelector('#searchField');

  if (user_detail) {
    const user = user_detail.find((detail) => detail.email_id === unique);
    if (!unique) {
      header.innerHTML = heading_1;
    } else {
      header.innerHTML = heading_2;
      if (user) {
        if (user.user_gender.male === true) {
          document
            .querySelector("#image")
            .insertAdjacentHTML("beforeend", maleImage);
          if (profileForm) {
            maleImage.id = "profileImage";
            profileForm.insertAdjacentHTML("afterbegin", maleImage);
          }
        }
        if (user.user_gender.female === true) {
          document
            .querySelector("#image")
            .insertAdjacentHTML("beforeend", femaleImage);
          if (profileForm) {
            femaleImage.id = "profileImage";
            profileForm.insertAdjacentHTML("afterbegin", femaleImage);
          }
        }
        if (user.user_gender.others === true) {
          document
            .querySelector("#image")
            .insertAdjacentHTML("beforeend", otherImage);
          if (profileForm) {
            otherImage.id = "profileImage";
            profileForm.insertAdjacentHTML("afterbegin", otherImage);
          }
        }
        if (searchPart) {
          searchPart.insertAdjacentHTML("beforeend", searchBar);
        }
        document.getElementById("signout").onclick = function logOut(event) {
          event.preventDefault();

          alert("logged out successfully");
          document.querySelector("#city").remove();
          document.querySelector("#search").remove();
          header.innerHTML = heading_1;
          localStorage.removeItem("uniqueUser");
        };
      }
    }
  } else {
    header.innerHTML = heading_1;
  }
}
