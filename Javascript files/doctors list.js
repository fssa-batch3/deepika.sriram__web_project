const doc = parseInt(
    new URLSearchParams(window.location.search).get("hospital-id")
);

const doctors = JSON.parse(localStorage.getItem("doctor_detail"));
const hospital_list = JSON.parse(localStorage.getItem("hospital_detail"));

for (let i = 0; i < hospital_list.length; i++) {
    const particular_hospital = hospital_list[i]
    if (doc === parseInt(particular_hospital.hospital_id)) {
        const section = `
        <section id="hospital_detail">
          <img src="${particular_hospital.image_link}" alt="logo of${particular_hospital.hospital_name}" style="border-right:1px solid black"> 
          <div style="margin-left:30px">
            <div>
              <h2>${particular_hospital.hospital_name}</h2>  
            </div>
            <div class="details">
              <div>
                <p><i class="fa-solid fa-location-dot"></i>   ${particular_hospital.address + ", " + particular_hospital.locality + ", " + particular_hospital.area + ", " + particular_hospital.city + " - " + particular_hospital.pincode}</p>  
              </div>
              <div>
                <p><i class="fa-solid fa-phone"></i>   ${particular_hospital.contact_number}</p>
                <p><i class="fa-solid fa-envelope"></i>   ${particular_hospital.email_address}</p>  
              </div> 
            </div> 
          </div>
        </section>
      `

        document.querySelector("main").insertAdjacentHTML("afterbegin", section)
    }
}
for (let j = 0; j < doctors.length; j++) {
    const doctor = doctors[j];
    if (doc === parseInt(doctor.Hospital_id)) {
        const card = `
        <div class="card">
          <div>
            <img src="${doctor.Doctor_image}";
          </div>
          <div>
            <h3 style="font-size:20px">${doctor.Doctor_name}</h3> 
            <p>${doctor.Departments}</p>   
          </div> 
          <div>
            <a href="../other pages/detail page.html?hospital-id=${doctor.Hospital_id}&doctor-id=${doctor.uuid}">
              <button type="button">View doctor</button>    
            </a>    
          </div> 
        </div>
      `

        document.querySelector("article").insertAdjacentHTML("beforeend", card)
    }
}

const back = document.getElementById("back");
back.addEventListener('click', function () {
    window.history.back()
})