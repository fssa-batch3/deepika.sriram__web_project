const { origin } = window.location;
const about = `${origin}/pages/other pages/other pages/about us.html`;
const image = `${origin}/assets/images/logo_for_care_central-removebg-preview.png`;
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
        <img id="logo" src="${image}" alt="logo of carecentral">
        <section class="head">
            <ul>
                <li>
                    <a href="${index}">Home</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#Contact">Contact us</a>
                </li>
                <li>
                    <a href="${signup}">Sign up</a>
                </li>
                <li>
                    <a href="${login}">Login</a>
                </li>
            </ul>
        </section>
`;

const heading_2 = `
<img id="logo" src="${image}" alt="logo of carecentral">
<section class="head">
    <ul>
        <li>
            <a href="${index}">Home</a>
        </li>
        <li>
            <a href="${hospitals}">Hospitals</a>
        </li>
        <li>
            <a href="#">Specialist</a>
        </li>
        <li>
            <a href="${signup}">About Us</a>
        </li>
        <li>
            <a href="#Contact">Contact Us</a>
        </li>
    </ul>
    <div class="dropdown" style="width:10%">
      <a id="image" href="javascript:void(0)" class="dropbtn"></a>
      <div class="dropdown-content">
        <a id="signout">Sign out <i class="fa fa-sign-out"></i></a>
        <a href="${appointment_history}">History <i class="fa fa-history"></i> </a>
        <a href="${profile}">View profile <i class="fas fa-user"></i> </a>
      </div>
    </div>
</section>

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
  const registerButton = `
  <div>
    <a href="/pages/other pages/other pages/sign up page.html">
      <button type="button" id="register">Register</button>
    </a>
  </div>
  `

  const section_1 = document.querySelector("#sec1");
  const searchBar = `
        <div>
            <input type="text" id="city" placeholder="enter the city" />
            <a id="search">
            <i class="fa-solid fa-magnifying-glass" style="color:black;position:relative;right:5%"></i>
            </a>
        </div>
    `;

  // const registerButton = `
  // <div>
  //   <a href="${signup}">
  //     <button type="button" id="register">Register</button>
  //   </a>
  // </div>
  // `
  // let searchField = document.querySelector('#searchField');

  if (user_detail) {
    const user = user_detail.find((detail) => detail.email_id === unique);
    if (!unique) {
      header.innerHTML = heading_1;
      section_1.insertAdjacentHTML("beforeend" , registerButton);
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
        if (section_1) {
          section_1.removeChild(section_1.lastElementChild)
          section_1.insertAdjacentHTML('beforeend', searchBar)
        }
        document.getElementById("signout").onclick = function logOut(event) {
          event.preventDefault();

          alert("logged out successfully");
          document.querySelector("#city").remove();
          document.querySelector("#search").remove();
          section_1.insertAdjacentHTML("beforeend" , registerButton);
          header.innerHTML = heading_1;
          localStorage.removeItem("uniqueUser");
        };
        if (section_1) {
          const hospitalList = JSON.parse(localStorage.getItem("hospital_detail"));

          // let filteredName = place_card.filter(e => e.)
          // console.log(filteredPlaceName);
          // console.log(filteredCategory);
          // console.log(specificplace);

          document.querySelector("#city").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              document.getElementById("search").click();
            }
          });
          document
            .querySelector("#search")
            .addEventListener("click", function searchPlace(e) {
              e.preventDefault();
              const search = document.getElementById("city").value.trim().toLowerCase();
              console.log(search);

              if (search === "" || search === null || search === undefined) {
                alert("invalid search input");
                return;
              }

              const match = [];

              for (let i = 0; i < hospitalList.length; i++) {
                const city = hospitalList[i].city.toLowerCase().trim();
                // eslint-disable-next-line prettier/prettier
                const condition = search.includes(city, 0);
                if (condition) {
                  match.push(hospitalList[i]);
                  // eslint-disable-next-line prettier/prettier, no-undef
                  window.location.href = `${hospitals}?city=${search}`;
                }
              }
              console.log(match);
            });
        }
      }

    }
  } 
    else {
      header.innerHTML = heading_1;
      section_1.insertAdjacentHTML("beforeend" , registerButton);
    }
}

indexPage();
