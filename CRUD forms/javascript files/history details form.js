const p_name = document.getElementById("patient_name");
const p_age = document.getElementById("Patient_age");

const pm = document.getElementById("male");
const pf = document.getElementById("female");
const pt = document.getElementById("others");

const method_1 = document.getElementById("inPerson");
const method_2 = document.getElementById("direct2home");
const method_3 = document.getElementById("videoConsultation");

const p_address = document.getElementById("address");
const p_healthIssues = document.getElementById("health_issues");
const p_d_name = document.getElementById("doctorName");
const p_d_book = document.getElementById("dateOfBooking");
const p_t_book = document.getElementById("timeOfBooking");
const p_d_c = document.getElementById("dateOfConsultation");
const p_mobile = document.getElementById("mobile_number");
const p_email = document.getElementById("email_address");
const p_addDscrptn = document.getElementById("addDescription");

const appointmentId = new URLSearchParams(window.location.search).get(
  "appointment-id"
);
const appointmentList = JSON.parse(localStorage.getItem("appointments"));
const appointmentData = appointmentList.find(
  (detail) => detail.appointment_id === appointmentId
);

if (appointmentData) {
  p_name.value = appointmentData.patient_name;
  p_age.value = appointmentData.patient_age;

  pm.checked = appointmentData.patient_gender.male;
  pf.checked = appointmentData.patient_gender.female;
  pt.checked = appointmentData.patient_gender.others;

  method_1.checked = appointmentData.consultationMethod.inPerson;
  method_2.checked = appointmentData.consultationMethod.homeConsultation;
  method_3.checked = appointmentData.consultationMethod.videoConsultation;

  p_address.value = appointmentData.address;
  p_healthIssues.value = appointmentData.healthIssues;
  p_d_name.value = appointmentData.doctorName;
  p_d_book.value = appointmentData.dateOfBooking;
  p_t_book.value = appointmentData.timeOfBooking;
  p_d_c.value = appointmentData.dateOfConsultation;
  p_mobile.value = appointmentData.patient_mobile_number;
  p_email.value = appointmentData.patient_email_address;
  p_addDscrptn.value = appointmentData.addDescription;

  function updateAppointment() {
    const update_patient_name = p_name.value;
    const update_patient_age = p_age.value;

    const update_gender1 = pm.checked;
    const update_gender2 = pf.checked;
    const update_gender3 = pt.checked;

    const update_method1 = method_1.checked;
    const update_method2 = method_2.checked;
    const update_method3 = method_3.checked;

    const update_address = p_address.value;
    const update_healthIssues = p_healthIssues.value.split(",");
    const update_doctor_name = p_d_name.value;
    const update_book_date = p_d_book.value;
    const update_book_time = p_t_book.value;
    const update_consult_date = p_d_c.value;
    const update_mobile = p_mobile.value;
    const update_email = p_email.value;
    const update_dscrptn = p_addDscrptn.value;

    // updating details

    appointmentData.patient_name = update_patient_name;
    appointmentData.patient_age = update_patient_age;

    appointmentData.patient_gender.male = update_gender1;
    appointmentData.patient_gender.female = update_gender2;
    appointmentData.patient_gender.others = update_gender3;

    appointmentData.consultationMethod.inPerson = update_method1;
    appointmentData.consultationMethod.homeConsultation = update_method2;
    appointmentData.consultationMethod.videoConsultation = update_method3;

    appointmentData.address = update_address;
    appointmentData.healthIssues = update_healthIssues;
    appointmentData.doctorName = update_doctor_name;
    appointmentData.dateOfBooking = update_book_date;
    appointmentData.timeOfBooking = update_book_time;
    appointmentData.dateOfConsultation = update_consult_date;
    appointmentData.patient_mobile_number = update_mobile;
    appointmentData.patient_email_address = update_email;
    appointmentData.addDescription = update_dscrptn;

    localStorage.setItem("appointments", JSON.stringify(appointmentList));
    alert("Updated and resended appointment successfully!!✅");
    document.querySelector("form").reset();
    location.href = "../../../../index.html";
    document
      .getElementById("update_appointment")
      .setAttribute("disabled", true);
  }

  document.getElementById("update_appointment").onclick = function (event) {
    event.preventDefault();

    updateAppointment();
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
