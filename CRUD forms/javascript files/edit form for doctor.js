const modal = document.getElementById('modal_bg');

// Get the button that opens the modal
const btn = document.getElementById('add');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  // modal.style.display = "block";
  const a = document.createElement('input');
  a.type = 'time';
  a.id = '2nd_from';
  document.querySelector('div.time').insertAdjacentElement('beforeend', a);

  const b = document.createElement('input');
  b.type = 'time';
  b.id = '2nd_to';
  document.querySelector('div.time').insertAdjacentElement('beforeend', b);
};

// get value from local storage
const form = document.querySelector('.form');
const unique_id = document.getElementById('unique_doctor');

// const findDetails = document.getElementById("find_details");
const doc_name = document.getElementById('doctor_name');
const doc_image = document.getElementById('doctorImage');
const doc_qualification = document.getElementById('qualification');
const docExpDuration = document.getElementById('experience_duration');
const docExpType = document.getElementById('experience_type');
const doc_department = document.getElementById('department');
const docHospId = document.getElementById('hospital_id');

const mon = document.getElementById('Monday');
const tues = document.getElementById('Tuesday');
const wed = document.getElementById('Wednesday');
const thurs = document.getElementById('Thursday');
const fri = document.getElementById('Friday');
const sat = document.getElementById('Saturday');
const sun = document.getElementById('Sunday');

const docTimingFrom = document.getElementById('from');
const docTimingTo = document.getElementById('to');

document.getElementById('find_details').addEventListener('click', (event) => {
  event.preventDefault();
  const uniqueId = unique_id.value;
  const doctor_details = JSON.parse(localStorage.getItem('doctor_detail'));
  const doctor = doctor_details.find((detail) => detail.Doctor_name === uniqueId);

  if (doctor) {
    doc_name.value = doctor.Doctor_name;
    doc_image.value = doctor.Doctor_image;
    doc_qualification.value = doctor.Qualifications;
    docExpDuration.value = doctor.Experience.experience_duration;
    docExpType.value = doctor.Experience.experience_type;
    doc_department.value = doctor.Departments;
    docHospId.value = doctor.Hospital_id;
    // docWorkingDays.checked = doctor.Working_days;
    docTimingFrom.value = doctor.Availabilities.starting_time;
    docTimingTo.value = doctor.Availabilities.ending_time;

    mon.checked = doctor.Working_days.monday;
    tues.checked = doctor.Working_days.tuesday;
    wed.checked = doctor.Working_days.wednesday;
    thurs.checked = doctor.Working_days.thursday;
    fri.checked = doctor.Working_days.friday;
    sat.checked = doctor.Working_days.saturday;
    sun.checked = doctor.Working_days.sunday;

    document.getElementById('update_details').onclick = function (event) {
      event.preventDefault();

      updateDoctor();
    };

    function updateDoctor() {
      const doctorName = doc_name.value;
      doctorImage = doc_image.value;
      doctorQualification = doc_qualification.value.split(',');
      doctorExperienceDuration = docExpDuration.value;
      doctorExperienceType = docExpType.value;
      doctorDepartment = doc_department.value.split(',');
      // doctorWorkingDays = docWorkingDays.checked;
      doctorHospitalId = docHospId.value;
      doctorTimeFrom = docTimingFrom.value;
      doctorTimeTo = docTimingTo.value;

      // working days
      const m_day = mon.checked;
      tue_day = tues.checked;
      wed_day = wed.checked;
      thur_day = thurs.checked;
      fri_day = fri.checked;
      sat_day = sat.checked;
      sun_day = sun.checked;

      // Update doctor deatils in localstorage
      doctor.Doctor_name = doctorName;
      doctor.Doctor_image = doctorImage;
      doctor.Qualifications = doctorQualification;
      doctor.Experience.experience_duration = doctorExperienceDuration;
      doctor.Experience.experience_type = doctorExperienceType;
      doctor.Departments = doctorDepartment;
      doctor.Hospital_id = doctorHospitalId;
      // doctor.Working_days = doctorWorkingDays;
      doctor.Availabilities.starting_time = doctorTimeFrom;
      doctor.Availabilities.ending_time = doctorTimeTo;

      // working days
      doctor.Working_days.monday = m_day;
      doctor.Working_days.tuesday = tue_day;
      doctor.Working_days.wednesday = wed_day;
      doctor.Working_days.thursday = thur_day;
      doctor.Working_days.friday = fri_day;
      doctor.Working_days.saturday = sat_day;
      doctor.Working_days.sunday = sun_day;

      // let department = document.getElementById("additional_department").value;
      const starting_time = document.getElementById('2nd_from').value;
      const ending_time = document.getElementById('2nd_to').value;

      if (starting_time && ending_time) {
        // if(department.value !== ""){
        //     doctor.Departments.push(department);
        // }

        if (starting_time.value !== '' || ending_time.value !== '') {
          doctor.Availabilities.push({ starting_time, ending_time });
        }
      }

      localStorage.setItem('doctor_detail', JSON.stringify(doctor_details));

      alert('Updated successfully!!');

      // document.querySelector("form").reset();
      // document.getElementById("update_details").setAttribute("disabled", true);
      window.reload();
    }
  }
});
//  delete page
document.getElementById('delete_details').addEventListener('click', (event) => {
  event.preventDefault();

  const uniqueId = unique_id.value;
  const doctor_details = JSON.parse(localStorage.getItem('doctor_detail'));
  const doctorIndex = doctor_details.findIndex((detail) => detail.Doctor_name === uniqueId);

  if (doctorIndex > -1) {
    doctor_details.splice(doctorIndex, 1);
    localStorage.setItem('doctor_detail', JSON.stringify(doctor_details));
    alert('Doctor details deleted successfully');
    document.querySelector('form').reset();
  }
});
