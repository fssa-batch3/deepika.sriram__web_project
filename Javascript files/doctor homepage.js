const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

const uniqueDoctor = JSON.parse(localStorage.getItem('uniqueDoctor'));
const doctor_detail = JSON.parse(localStorage.getItem('doctor_detail'));
const appointmentList = JSON.parse(localStorage.getItem('appointments'));
const doctor = doctor_detail.find((data_1) => data_1.doctor_email_address === uniqueDoctor);
if (doctor) {
    const idOfDoctor = doctor.uuid;
    console.log(idOfDoctor)
    const doctorAppointment = appointmentList.filter((a) => {
        return a.doctorId === idOfDoctor
    });
    console.log(doctorAppointment)
    let each;
    let fname;
    let lname;
    let time;
    let time2;
    let time3;

    for (let j = 0; j < doctorAppointment.length; j++) {
        each = doctorAppointment[j];
        fname = each.patient_first_name.charAt(0).toUpperCase();
        lname = each.patient_last_name.charAt(0).toUpperCase();

        time = each.dateOfConsultation;
        time2 = new Date(time);
        time3 = time2.getHours() + ":" + time2.getMinutes();



        const appointment = `
            <div class="individual" id="${fname}">
                <div class="avatar" value="${each.appointment_id}">${fname}${lname}</div>
                <div class="name">
                    <div id="name">${each.patient_first_name}  ${each.patient_last_name}</div>
                    <div id="time">${time3}</div>
                </div>
            </div>
        `

        document.querySelector('#appointmentList').insertAdjacentHTML('beforeend', appointment)
    }


    let details = document.querySelectorAll('.individual');



        details.forEach(function (data) {
            data.addEventListener('click', function () {

                let section = document.querySelector('#appointmentDetails');
                section.innerHTML = ""

                // let dtl = document.getElementById(fname).value;
                // console.log(fname)
                let parent = this.closest(".individual");
                // console.log(parent);
                let app_id = parent.querySelector(".avatar").getAttribute("value");
                
                console.log(app_id);
                

                for(let k=0;k<doctorAppointment.length;k++){
                    const d = doctorAppointment[k];
                    const name1 = d.patient_first_name.charAt(0).toUpperCase();
                    const name2 = d.patient_last_name.charAt(0).toUpperCase();

                    time = d.dateOfConsultation;
                    time2 = new Date(d);
                    time3 = time2.getHours() + ":" + time2.getMinutes();

                    
                    if(app_id === d.appointment_id){
                        console.log(name1);
                        console.log(name2);
                        const appointDetails = `
                        <div class="each">
                            <div class="avatar">${name1}${name2}</div>
                            <div>
                                <h2 style="text-align:center">${d.patient_first_name} ${d.patient_last_name}</h2>
                            </div>
                        </div>
                        <div class="each" style="display:flex">
                            <div>Age: ${d.patient_age}</div>
                            <div style="margin-left: 20px;">Gender:${d.patient_gender}</div>
                        </div>
                        <div class="each">
                            <div>Health issues:${d.healthIssues}</div>
                        </div>
                        <div class="each">
                            <div>Method of consultation:</div>
                            <div>${d.method_of_consultation}</div>
                        </div>
                        <div class="each">
                            <div>Date and time of consultation:</div>
                            <div>${d.dateOfConsultation}</div>
                        </div>
                        <div class="each">
                            <div>Mobile number:</div>
                            <div>${d.patient_mobile_number}</div>
                        </div>
                        <div class="each" style="display:flex;justify-content:space-between">
                            <button type="button" id="accept">ACCEPT</button>
                            <button type="button" id="reject">REJECT</button>
                        </div>
                        `
                        section.insertAdjacentHTML('beforeend', appointDetails);
                        
                        document.getElementById('accept').addEventListener('click' , function acceptAppointment(){
                            d.status = "ACCEPTED";
                            localStorage.setItem('appointments' , JSON.stringify(appointmentList))
                            alert('appointment accepted ✅');
                            document.getElementById('reject').setAttribute('disabled' , true)
                            document.getElementById('accept').setAttribute('disabled' , true)
                        })

                        document.getElementById('reject').addEventListener('click' , function rejectAppointment(){
                            d.status = "REJECTED";
                            localStorage.setItem('appointments' , JSON.stringify(appointmentList))
                            alert('appointment rejected ❎');
                            document.getElementById('reject').setAttribute('disabled' , true)
                            document.getElementById('accept').setAttribute('disabled' , true)
                        })
                    }
                }

                
            }
                
        )}
    )
}

const logOut = document.getElementById('logOut');
logOut.addEventListener('click', function () {
    localStorage.removeItem('uniqueDoctor');
    alert('Logged out successfully!! ✅');
    window.location.href = "../../../index.html"
})