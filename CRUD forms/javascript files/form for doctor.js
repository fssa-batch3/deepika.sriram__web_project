document
  .querySelector("form")
  .addEventListener("submit", function uploadDoctor(e) {
    e.preventDefault();
    // hear i collect value from details form
    const Doctor_name = document.getElementById("doctor_name").value.trim();
    const Doctor_image = document.getElementById("doctorImage").value.trim();
    const Qualifications = document
      .getElementById("qualification")
      .value.split(",");
    const Departments = document.getElementById("department").value.split(",");
    const Hospital_id = document.getElementById("hospital_id").value;
    const experience_type = document.getElementById("experience_type").value;
    const experience_duration = document.getElementById("experience_duration").value;
    // time_availability = document.getElementById("time_availability").value;
    const Working_days = {};
    // working_days = document.querySelectorAll("input[type='checkbox']:checked");
    // for (i = 0; i < working_days.length; i++) {
    //     Working_days.push({"day":working_days[i].value,"status":true})
    // }
    // Working_days = JSON.stringify(workingDaysArray);
    const Experience = { experience_duration, experience_type };
    // Experience = JSON.stringify(experienceObj);

    const monday = document.getElementById("Monday").checked;
    const tuesday = document.getElementById("Tuesday").checked;
    const wednesday = document.getElementById("Wednesday").checked;
    const thursday = document.getElementById("Thursday").checked;
    const friday = document.getElementById("Friday").checked;
    const saturday = document.getElementById("Saturday").checked;
    const sunday = document.getElementById("Sunday").checked;
    // console.log(monday)

    function condition(day, name) {
      const trueCondition = Working_days[name] = true;
      const falseCondition = Working_days[name] = false; 

      if (day === true) {
        return trueCondition;
      }
      if (day !== true) {
        return falseCondition;
      }
    }

    condition(monday, "monday");
    condition(tuesday, "tuesday");
    condition(wednesday, "wednesday");
    condition(thursday, "thursday");
    condition(friday, "friday");
    condition(saturday, "saturday");
    condition(sunday, "sunday");

    console.log(Working_days);

    const starting_time = document.getElementById("from").value;
    const ending_time = document.getElementById("to").value;
    const uuid = uuidv4();

    // here i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    const doctor_detail =
      JSON.parse(localStorage.getItem("doctor_detail")) || [];

    // here I give a variable name for array of objects working days and time availability.

    // hear we give some condition for uploading details to restict same unique id
    const exist = doctor_detail.some(
      (data) =>
        data.Doctor_name.trim().toLowerCase() === Doctor_name.toLowerCase()
    );

    // if condition fail
    if (!exist) {
      const Availabilities = [];
      Availabilities.push({ starting_time, ending_time });

      // Departments = [];
      // Departments.push(department);

      // Experience = JSON.stringify(experienceObj);
      doctor_detail.push({
        Doctor_name,
        Doctor_image,
        Qualifications,
        Experience,
        Departments,
        Hospital_id,
        Working_days,
        Availabilities,
        uuid,
      });

      localStorage.setItem("unique_id", Doctor_name);
      localStorage.setItem("doctor_detail", JSON.stringify(doctor_detail));

      document.querySelector("form").reset();
      alert("Detail submitted Successfully✅");
      window.location.href = "./edit form for doctor.html";
    }
    // if condition pass
    else {
      alert("doctor detail already exist!!");
      document.querySelector("form").reset();
    }
  });
