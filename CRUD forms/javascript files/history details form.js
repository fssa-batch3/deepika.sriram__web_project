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

  consult_method.value = appointmentData.method_of_consultation;

  p_address.value = appointmentData.address;
  p_healthIssues.value = appointmentData.healthIssues;
  p_d_name.value = appointmentData.doctorName;
  
  p_d_c.value = appointmentData.dateOfConsultation;
  p_mobile.value = appointmentData.patient_mobile_number;
  
}


document.querySelector('#back').addEventListener('click' , function(){
  window.history.back();
})
