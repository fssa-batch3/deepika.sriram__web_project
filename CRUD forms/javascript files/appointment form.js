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

    const doctorId = new URLSearchParams(window.location.search).get('doctor-id');

    const dateOfBooking = dateandtime.toLocaleDateString('en-US');
    const timeOfBooking = dateandtime.toLocaleTimeString('en-US');

    let dateconsult = document.getElementById("consultDate").value;
    const dateConsult_2 = new Date(dateconsult);
    const dateOfConsultation = dateConsult_2.toLocaleString();
    const patient_mobile_number =document.getElementById("mobile_number").value;
    
    const currentDate = new Date();
    const date_of_booking = currentDate.toLocaleDateString('en-US');
    const time_of_booking = currentDate.toLocaleTimeString('en-US');
    // const patient_email_address =
    //   document.getElementById("email_address").value;
    // const addDescription = document.getElementById("add_description").value;
    const appointment_id = uuidv4();

    const status = "On process"

    const user_email_id = JSON.parse(localStorage.getItem('uniqueUser'));
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
      doctorId,
      dateOfBooking,
      timeOfBooking,
      dateOfConsultation,
      patient_mobile_number,
      status,
      user_email_id,
      date_of_booking,
      time_of_booking,
      dateOfConsultation,
      patient_mobile_number,
      // patient_email_address,
      // addDescription,
      appointment_id,
      status
    });
    localStorage.setItem("appointments", JSON.stringify(Appointments));
    localStorage.setItem("unique_appointment", appointment_id);

    document.querySelector("form").reset();
    alert(
      "Appointment form submitted successfully!! ✅ \n Check in history for seeing past appointments.."
    );
    window.location.href = "../../../index.html";
  };
