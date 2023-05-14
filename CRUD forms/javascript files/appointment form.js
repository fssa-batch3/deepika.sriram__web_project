const back = document.getElementById("back");
back.addEventListener('click' , function(){
  window.history.back()
})


function bookAppointment(e) {
    e.preventDefault();
    // collecting value from appointment form
    const patient_first_name = document.getElementById("patient_first_name").value.trim();
    const patient_last_name = document.getElementById("patient_last_name").value.trim();
    const patient_age = document.getElementById("patient_age").value.trim();
    const patient_gender = document.getElementById("gender").value;
    const method_of_consultation = document.getElementById("consultation_method").value;
    const address = document.getElementById("address").value;
    const healthIssues = document
      .getElementById("health_issues")
      .value.split(",");
    const doctorName = document.getElementById("doctor_name").value;
    const dateandtime = new Date();

    const dateOfBooking = dateandtime.toLocaleDateString('en-US');
    const timeOfBooking = dateandtime.toLocaleTimeString('en-US');
    const dateOfConsultation = document.getElementById("consultDate").value;
    const patient_mobile_number =
      document.getElementById("mobile_number").value;
    const appointment_id = uuidv4();

    const status = "On process"

    const Appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    Appointments.push({
      patient_first_name,
      patient_last_name,
      patient_age,
      patient_gender,
      method_of_consultation,
      address,
      healthIssues,
      doctorName,
      dateOfBooking,
      timeOfBooking,
      dateOfConsultation,
      patient_mobile_number,
      status,
      appointment_id,
    });
    localStorage.setItem("appointments", JSON.stringify(Appointments));
    localStorage.setItem("unique_appointment", appointment_id);

    document.querySelector("form").reset();
    alert(
      "Appointment form submitted successfully!! ✅ \n Check in history for seeing past appointments.."
    );
    window.location.href = "../../../index.html";
  };
