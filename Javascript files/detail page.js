const hsp = new URLSearchParams(window.location.search).get('hospital-id');
const a = JSON.parse(localStorage.getItem("doctor_detail"));
const back = `
    <a href="../other pages/doctor's list.html?hospital-id=${hsp}" style="text-decoration: none; color:#1b3c74" id="back">
        <i class="fa fa-angle-double-left"></i>
        <b>Back</b>
    </a>
`
document.querySelector("#header").insertAdjacentHTML('afterend', back);


const dctr = new URLSearchParams(window.location.search).get('doctor-id');

for (let i = 0; i < a.length; i++) {
    const b = a[i];
    if (dctr === b.uuid) {
        const doctorCard = renderCard(b);

        document.querySelector("main").insertAdjacentHTML('beforeend', doctorCard)
    }
}

function renderTime(time) {
    for (let i = 0; i < 2; i++) {
        return `
            <span>
                from ${time.starting_time} to ${time.ending_time}
            </span>
        `;
    }
}

function workingDays(day) {
    return `
        <span>${day}
    `;
}

function renderCard(b) {
    let departmentString = "";
    const departmentArray = b.Departments;
    departmentString += departmentArray.join(", ");

    let qualificationString = "";
    const qualificationArray = b.Qualifications;
    qualificationString += qualificationArray.join(", ");

    let timeString = "";
    const timeArray = b.Availabilities;
    const timeCount = timeArray.length;

    for (let i = 0; i < timeCount; i++) {
      timeString += renderTime(timeArray[i]);
    }

    let dayString = [];
    const dayObj = b.Working_days;

    // eslint-disable-next-line no-restricted-syntax
    for (const key in dayObj) {
      if (dayObj[key] === true) {
        dayString.push(workingDays(key));
      }
    }

    const card = `
        <section class="doctor_detail">
            <img src = "${b.Doctor_image}" alt="image of ${b.Doctor_name}">
            <div style="margin-left:5%;">
                <div>
                    <h2>${b.Doctor_name}</h2>
                </div>
                <div style="display:flex;">
                    <div>
                        <p>${qualificationString}</p>
                        <p><b>${b.Experience.experience_duration}</b> ${b.Experience.experience_type} experience overall</p>
                        <p>${departmentString}</p>
                    </div>
                    <div style="margin-left:5%">
                        <p><i class="fa-solid fa-clock"></i> : ${timeString}</p>
                        <p><i class="fa-solid fa-calendar-days"></i> : ${dayString}</p>
                        <a href="../patient/appointment-form.html?doctor-id=${dctr}" style="text-decoration:none">
                            <button type="button">Book Appointment</button>
                        </a>
                        <span style="margin-left:10px">
                            <button type="button">View Reviews</button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    `

    return card;
}
