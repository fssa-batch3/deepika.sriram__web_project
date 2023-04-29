document
  .querySelector("form")
  .addEventListener("submit", function bookAppointment(e) {
    e.preventDefault();
    // collecting value from appointment form
    const patient_name = document.getElementById("patient_name").value.trim();
    const patient_age = document.getElementById("patient_age").value.trim();
    const patient_gender = {};

    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const others = document.getElementById("others").checked;

    function gender(gender, name) {
      if (gender === true) {
        return (patient_gender[name] = true);
      }
      if (gender !== true) {
        return (patient_gender[name] = false);
      }
    }

    gender(male, "male");
    gender(female, "female");
    gender(others, "others");

    const consultationMethod = {};

    const inPersonConsult = document.getElementById("in_person").checked;
    const direct2home = document.getElementById("direct_to_home").checked;
    const videoConsult = document.getElementById("video_consultation").checked;

    function methodOfConsultation(method, name) {
      if (method === true) {
        return (consultationMethod[name] = true);
      }
      if (method !== true) {
        return (consultationMethod[name] = false);
      }
    }

    methodOfConsultation(inPersonConsult, "inPerson");
    methodOfConsultation(direct2home, "homeConsultation");
    methodOfConsultation(videoConsult, "videoConsultation");

    const address = document.getElementById("address").value;
    const healthIssues = document
      .getElementById("health_issues")
      .value.split(",");
    const doctorName = document.getElementById("doctor_name").value;
    const dateOfBooking = document.getElementById("bookDate").value;
    const timeOfBooking = document.getElementById("bookTime").value;
    const dateOfConsultation = document.getElementById("consultDate").value;
    const patient_mobile_number =
      document.getElementById("mobile_number").value;
    const patient_email_address =
      document.getElementById("email_address").value;
    const addDescription = document.getElementById("add_description").value;
    const appointment_id = uuidv4();

    const Appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    Appointments.push({
      patient_name,
      patient_age,
      patient_gender,
      consultationMethod,
      address,
      healthIssues,
      doctorName,
      dateOfBooking,
      timeOfBooking,
      dateOfConsultation,
      patient_mobile_number,
      patient_email_address,
      addDescription,
      appointment_id,
    });
    localStorage.setItem("appointments", JSON.stringify(Appointments));
    localStorage.setItem("unique_appointment", appointment_id);

    document.querySelector("form").reset();
    alert(
      "Appointment form submitted successfully!! ✅ \n Check in history for seeing past appointments.."
    );
    window.location.href = "../../../index.html";
  });
