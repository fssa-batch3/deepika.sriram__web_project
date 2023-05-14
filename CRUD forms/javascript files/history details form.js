const p_f_name = document.getElementById("patient_first_name");
const p_l_name = document.getElementById("patient_last_name");
const p_age = document.getElementById("patient_age");
const p_gender = document.getElementById("gender");


const consult_method = document.getElementById("consultation_method");

const p_address = document.getElementById("address");
const p_healthIssues = document.getElementById("health_issues");
const p_d_name = document.getElementById("doctor_name");


const p_d_c = document.getElementById("consultDate");
const p_mobile = document.getElementById("mobile_number");


const appointmentId = new URLSearchParams(window.location.search).get(
  "appointment-id"
);
const appointmentList = JSON.parse(localStorage.getItem("appointments"));
const appointmentData = appointmentList.find(
  (detail) => detail.appointment_id === appointmentId
);

if (appointmentData) {
  p_f_name.value = appointmentData.patient_first_name;
  p_l_name.value = appointmentData.patient_last_name;
  p_age.value = appointmentData.patient_age;

  p_gender.value = appointmentData.patient_gender;

  

  p_address.value = appointmentData.address;
  p_healthIssues.value = appointmentData.healthIssues;
  p_d_name.value = appointmentData.doctorName;
  
  p_d_c.value = appointmentData.dateOfConsultation;
  p_mobile.value = appointmentData.patient_mobile_number;
  

  document.getElementById("update_appointment").onclick =
    function updateAppointment(event) {
      event.preventDefault();
      const update_patient_first_name = p_f_name.value;
      const update_patient_last_name = p_l_name.value;
      const update_patient_age = p_age.value;

      const update_patient_gender = p_gender.value;

      const timeStamp = new Date();
      const date = timeStamp.toLocaleDateString('en-US');
      const time = timeStamp.toLocaleTimeString('en-US');

      const update_address = p_address.value;
      const update_healthIssues = p_healthIssues.value.split(",");
      const update_doctor_name = p_d_name.value;
      const update_consult_date = p_d_c.value;
      const update_mobile = p_mobile.value;
    

      // updating details

      appointmentData.patient_first_name = update_patient_first_name;
      appointmentData.patient_last_name = update_patient_last_name;
      appointmentData.patient_age = update_patient_age;

      appointmentData.patient_gender = update_patient_gender;

      

      appointmentData.address = update_address;
      appointmentData.healthIssues = update_healthIssues;
      appointmentData.doctorName = update_doctor_name;

      appointmentData.dateOfBooking = date;
      appointmentData.timeOfBooking = time;

      appointmentData.dateOfConsultation = update_consult_date;
      appointmentData.patient_mobile_number = update_mobile;

      
      localStorage.setItem("appointments", JSON.stringify(appointmentList));
      alert("Updated and resended appointment successfully!!✅");
      document.querySelector("form").reset();
      window.location.href = "../../../../index.html";
      document
        .getElementById("update_appointment")
        .setAttribute("disabled", true);
    };
}

document
  .getElementById("delete_appointmentHistory")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const appointmentIndex = appointmentList.findIndex(
      (detail) => detail.appointment_id === appointmentId
    );

    if (appointmentIndex > -1) {
      appointmentList.splice(appointmentIndex, 1);
      localStorage.setItem("appointments", JSON.stringify(appointmentList));
      alert("appointment history deleted successfully");
      document.querySelector("form").reset();
      window.location.href = "../../../../index.html";
    }
  });

document.querySelector('#back').addEventListener('click' , function(){
  window.history.back();
})
