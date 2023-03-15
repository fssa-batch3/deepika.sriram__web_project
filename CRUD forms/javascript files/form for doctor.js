function uploadDoctor(e) {
    e.preventDefault();
    // hear i collect value from details form
    let Doctor_name = document.getElementById("doctor_name").value.trim();
    Doctor_image = document.getElementById("doctorImage").value.trim();
    Qualifications = document.getElementById("qualification").value;
    Department = document.getElementById("department").value.trim();
    Hospital_name = document.getElementById("hospital_name").value.trim();
    experience_type = document.getElementById("experience_type").value;
    experience_duration = document.getElementById("experience_duration").value;
    // time_availability = document.getElementById("time_availability").value;
    workingDaysArray = [];
    working_days = document.querySelectorAll("input[type='checkbox']:checked");
    for (i = 0; i < working_days.length; i++) {
        workingDaysArray.push(working_days[i].value)
    }
    Working_days = JSON.stringify(workingDaysArray);
    experienceObj = {experience_duration,experience_type };
    Experience = JSON.stringify(experienceObj);

    starting_time = document.getElementById("from").value;
    ending_time = document.getElementById("to").value;
    button = document.querySelector("button#time");
    timeAvailabilityObj = {starting_time,ending_time};

    // timeAvailabilityArray = [];

    // button.addEventListener('click', function addTime(){
    //     for (i = 0; i < timeAvailabilityArray.length; i++) {
    //         if (timeAvailabilityArray.length = 0) {
    //             timeAvailabilityArray.push({ starting_time, ending_time });
    //             document.getElementById("from").reset();
    //             document.getElementById("to").reset();
    //         }
    //         else if (timeAvailabilityArray[i]["starting_time"] != starting_time.value || timeAvailabilityArray[i]["ending_time"] != ending_time.value) {
    //             timeAvailabilityArray.push({ starting_time, ending_time });
    //             document.getElementById("from").reset();
    //             document.getElementById("to").reset();

    //         }
    //         else {
    //             alert("timing already exists!!");
    //             document.getElementById("from").reset();
    //             document.getElementById("to").reset();
    //         }
    //     }
    // });
    Availability = JSON.stringify(timeAvailabilityObj);
    uuid = uuidv4();


    // here i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let doctor_detail = JSON.parse(localStorage.getItem('doctor_detail')) || [];

    //here I give a variable name for array of objects working days and time availability.



    // hear we give some condition for uploading details to restict same unique id
    let exist = doctor_detail.some(data =>
        data.Doctor_name.trim().toLowerCase() == Doctor_name.toLowerCase() ||
        data.Doctor_image.trim().toLowerCase() == Doctor_image.toLowerCase()
    );

    // if condition fail
    if (!exist) {

        Experience = JSON.stringify(experienceObj);
        doctor_detail.push({ Doctor_name, Doctor_image, Qualifications, Experience, Department, Hospital_name, Working_days, Availability, uuid });

        localStorage.setItem("unique_id", uuid);
        localStorage.setItem('doctor_detail', JSON.stringify(doctor_detail));

        document.querySelector('form').reset();
        alert('Detail submitted Successfully✅');


    }
    // if condition pass
    else {
        alert('doctor detail already exist!!');
        document.querySelector('form').reset();
    }
}