document
  .querySelector("form")
  .addEventListener("submit", function bookAppointment(e) {
    e.preventDefault();
    // collecting value from appointment form
    let patient_name = document.getElementById("patient_name").value.trim();
    let patient_age = document.getElementById("patient_age").value.trim();
    let patient_gender = {};

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;

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

    let consultationMethod = {};

    let inPersonConsult = document.getElementById("in_person").checked;
    let direct2home = document.getElementById("direct_to_home").checked;
    let videoConsult = document.getElementById("video_consultation").checked;

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

    let address = document.getElementById("address").value;
    let healthIssues = document.getElementById("health_issues").value.split(",");
    let doctorName = document.getElementById("doctor_name").value;
    let dateOfBooking = document.getElementById("bookDate").value;
    let timeOfBooking = document.getElementById("bookTime").value;
    let dateOfConsultation = document.getElementById("consultDate").value;
    let patient_mobile_number = document.getElementById("mobile_number").value;
    let patient_email_address = document.getElementById("email_address").value;
    let addDescription = document.getElementById("add_description").value;
    let appointment_id = uuidv4();

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
