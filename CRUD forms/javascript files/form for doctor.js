function uploadDoctor(e) {
    e.preventDefault();
    // hear i collect value from details form
    let Doctor_name = document.getElementById("doctor_name").value.trim();
    Doctor_image = document.getElementById("doctorImage").value.trim();
    Qualifications = document.getElementById("qualification").value.split(",");
    Departments = document.getElementById("department").value.split(",");
    Hospital_id = document.getElementById("hospital_id").value.trim();
    experience_type = document.getElementById("experience_type").value;
    experience_duration = document.getElementById("experience_duration").value;
    // time_availability = document.getElementById("time_availability").value;
    Working_days = {};
    // working_days = document.querySelectorAll("input[type='checkbox']:checked");
    // for (i = 0; i < working_days.length; i++) {
    //     Working_days.push({"day":working_days[i].value,"status":true})
    // }
    // Working_days = JSON.stringify(workingDaysArray);
    Experience = {experience_duration,experience_type };
    // Experience = JSON.stringify(experienceObj);

    monday = document.getElementById("Monday").checked;
    tuesday = document.getElementById("Tuesday").checked;
    wednesday = document.getElementById("Wednesday").checked;
    thursday = document.getElementById("Thursday").checked;
    friday = document.getElementById("Friday").checked;
    saturday = document.getElementById("Saturday").checked;
    sunday = document.getElementById("Sunday").checked;
    // console.log(monday)
    function condition(day, name){
        if(day == true){

           return Working_days[name] = true
        }
        if(day != true){
            return Working_days[name] = false
        }
    }

    condition(monday, "monday")
    condition(tuesday, "tuesday")
    condition(wednesday, "wednesday")
    condition(thursday, "thursday")
    condition(friday, "friday")
    condition(saturday, "saturday")
    condition(sunday, "sunday")

    
    
    console.log(Working_days)

    starting_time = document.getElementById("from").value;
    ending_time = document.getElementById("to").value;
    button = document.querySelector("button#time");
    uuid = uuidv4();


    // here i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let doctor_detail = JSON.parse(localStorage.getItem('doctor_detail')) || [];

    //here I give a variable name for array of objects working days and time availability.



    // hear we give some condition for uploading details to restict same unique id
    let exist = doctor_detail.some(data =>
        data.Doctor_name.trim().toLowerCase() == Doctor_name.toLowerCase()
    );

    // if condition fail
    if (!exist) {
        Availabilities =[];
        Availabilities.push({starting_time,ending_time});

        // Departments = [];
        // Departments.push(department);

        // Experience = JSON.stringify(experienceObj);
        doctor_detail.push({ Doctor_name, Doctor_image, Qualifications, Experience, Departments, Hospital_id, Working_days, Availabilities, uuid });

        localStorage.setItem("unique_id", Doctor_name);
        localStorage.setItem('doctor_detail', JSON.stringify(doctor_detail));

        document.querySelector('form').reset();
        alert('Detail submitted Successfully✅');
         location.href = "./edit form for doctor.html"

    }
    // if condition pass
    else {
        alert('doctor detail already exist!!');
        document.querySelector('form').reset();
    }
}