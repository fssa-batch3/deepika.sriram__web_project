function bookAppointment(e) {
  e.preventDefault();
  // collecting value from appointment form
  const patient_name = document.getElementById('patient_name').value.trim();
  patient_age = document.getElementById('patient_age').value.trim();
  patient_gender = {};

  male = document.getElementById('male').checked;
  female = document.getElementById('female').checked;
  others = document.getElementById('others').checked;

  function gender(gender, name) {
    if (gender == true) {
      return patient_gender[name] = true;
    }
    if (gender != true) {
      return patient_gender[name] = false;
    }
  }

  gender(male, 'male');
  gender(female, 'female');
  gender(others, 'others');

  consultationMethod = {};

  inPersonConsult = document.getElementById('in_person').checked;
  direct2home = document.getElementById('direct_to_home').checked;
  videoConsult = document.getElementById('video_consultation').checked;

  function methodOfConsultation(method, name) {
    if (method == true) {
      return consultationMethod[name] = true;
    }
    if (method !== true) {
      return consultationMethod[name] = false;
    }
  }

  methodOfConsultation(inPersonConsult, 'inPerson');
  methodOfConsultation(direct2home, 'homeConsultation');
  methodOfConsultation(videoConsult, 'videoConsultation');

  address = document.getElementById('address').value;
  healthIssues = document.getElementById('health_issues').value.split(',');
  doctorName = document.getElementById('doctor_name').value;
  dateOfBooking = document.getElementById('bookDate').value;
  timeOfBooking = document.getElementById('bookTime').value;
  dateOfConsultation = document.getElementById('consultDate').value;
  patient_mobile_number = document.getElementById('mobile_number').value;
  patient_email_address = document.getElementById('email_address').value;
  addDescription = document.getElementById('add_description').value;
  appointment_id = uuidv4();

  // let Doctors = JSON.parse(localStorage.getItem('doctor_detail'));
  // let doctor_id = new URLSearchParams(window.location.search).get('doctor-id');
  // const doctorId = Doctors.find(detail =>
  //     detail.uuid === doctor_id);
  // if (doctorId) {
  //     doctorName.value = doctorId.Doctor_name;
  //     let Appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  //     Appointments.push({ patient_name, patient_age, patient_gender, consultationMethod, address, healthIssues, doctorName, dateOfBooking, timeOfBooking, dateOfConsultation, patient_mobile_number, patient_email_address, addDescription, appointment_id });
  //     localStorage.setItem('appointments', JSON.stringify(Appointments));
  //     localStorage.setItem('unique_appointment', appointment_id);

  //     document.querySelector('form').reset();
  //     location.href = "./appointment confirmation.html";
  // }

  const Appointments = JSON.parse(localStorage.getItem('appointments')) || [];

  Appointments.push({
    patient_name, patient_age, patient_gender, consultationMethod, address, healthIssues, doctorName, dateOfBooking, timeOfBooking, dateOfConsultation, patient_mobile_number, patient_email_address, addDescription, appointment_id,
  });
  localStorage.setItem('appointments', JSON.stringify(Appointments));
  localStorage.setItem('unique_appointment', appointment_id);

  document.querySelector('form').reset();
  alert('Appointment form submitted successfully!! ✅ \n Check in history for seeing past appointments..');
  location.href = '../../../index.html';
}
