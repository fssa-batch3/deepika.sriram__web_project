const hospitalDetails = JSON.parse(localStorage.getItem("hospital_detail"));
if (!hospitalDetails) {
  localStorage.setItem(
    "hospital_detail",
    JSON.stringify([
      {
        address: "No.43, Lakshmi talkies road",
        area: "Shenoy nagar",
        city: "Chennai",
        contact_number: "9865567098",
        email_address: "bilroth@gmail.com",
        hospital_name: "Bilroth hospital",
        hospital_id: 1,
        image_link:
          "../../../assets/images/Billroth_Hospitals__Shenoy_Nagar_logo.jpg",
        link_file: "../other pages/doctor's list.html",
        locality: "",
        pincode: "600030",
        uuid: "2ad66111-1826-4c7d-907c-9d2a356ef514",
      },
      {
        address:
          "21/22,Greams lane(opposite to thousand lights police station)",
        area: "",
        city: "Chennai",
        contact_number: "1 800-572-1111",
        email_address: "infochennai@apollohospitals.com",
        hospital_name: "Apollo hospital",
        hospital_id: 2,
        image_link:
          "../../../assets/images/apollo-gleneagles-hospitals-kolkata-squarelogo-1464594605205.png",
        link_file: "../other pages/doctor's list.html",
        locality: "Greams road",
        pincode: "600006",
        uuid: "152c0929-bc27-4ac2-a783-300a095238f7",
      },
      {
        address: "No. 52, 1st Main Rd",
        area: "Adyar",
        city: "Chennai",
        contact_number: "9865567098",
        email_address: "fortis@gmail.com",
        hospital_name: "Fortis malar hospital",
        hospital_id: 3,
        image_link: "../../../assets/images/fortis logo.png",
        link_file: "../other pages/doctor's list.html",
        locality: "Gandhi nagar",
        pincode: "600020",
        uuid: "995c3789-f4a2-40b6-9da0-6e4a88a05e78",
      },
      {
        address: "No.434",
        area: "Vadapalani",
        city: "Chennai",
        contact_number: "9865567098",
        email_address: "vijaya@gmail.com",
        hospital_name: "Vijaya hospital",
        hospital_id: 4,
        image_link: "../../../assets/images/vijaya.png",
        link_file: "../other pages/doctor's list.html",
        locality: "N S K Salai",
        pincode: "600026",
        uuid: "8ba7b85a-3cb9-4f4d-9e41-080391a08c19",
      },
      {
        address: "154/9, Opposite IIM-B",
        area: "Bannerghatta Road",
        city: "Bengaluru",
        contact_number: "1 800-572-1111",
        email_address: "fortis@gmail.com",
        hospital_name: "Fortis hospital",
        hospital_id: 5,
        image_link: "../../../assets/images/fortis logo.png",
        link_file: "../other pages/doctor's list.html",
        locality: "",
        pincode: "560076",
        uuid: "3bf7c9bf-be92-4f1c-adba-92cc19e8d7c9",
      },
      {
        address: "154/11,",
        area: "Bannerghatta Main road",
        city: "Bengaluru",
        contact_number: "",
        email_address: "infochennai@apollohospitals.com",
        hospital_name: "Apollo hospitals",
        hospital_id: 6,
        image_link:
          "../../../assets/images/apollo-gleneagles-hospitals-kolkata-squarelogo-1464594605205.png",
        link_file: "../other pages/doctor's list.html",
        locality: "",
        pincode: "560076",
        uuid: "79bd3c90-40ef-4659-8ea0-2c258f534b75",
      },
    ])
  );
}

console.log(hospitalDetails);

const appointments = JSON.parse(localStorage.getItem('appointments'));
if (!appointments) {
  localStorage.setItem('appointments', JSON.stringify(
    [
      {
        address: "",
        user_email_id:"deepika.sriram@fssa.freshworks.com",
        appointment_id: "883e3eb9-eb0c-4378-b1bd-4dd0a5817487",
        dateOfBooking: "5/20/2023",
        dateOfConsultation: "5/21/2023, 11:40:00 AM",
        doctorId: "aee049b7-1043-404e-a848-901a6d30996c",
        doctorName: "Dr.Meera Raghavan",
        healthIssues: ["irregular periods"],
        method_of_consultation: "Video consultation",
        patient_age: "18",
        patient_first_name: "Deepika",
        patient_gender: "Female",
        patient_last_name: "Sriram",
        patient_mobile_number: "7397314532",
        status: "consulted",
        timeOfBooking: "9:40:23 AM",
      },
      {
        address: "",
        user_email_id:"deepika.sriram@fssa.freshworks.com",
        appointment_id: "87476f32-abb8-47d4-a5b8-c9ece4edcc36",
        dateOfBooking: "5/20/2023",
        dateOfConsultation: "5/21/2023, 11:40:00 AM",
        doctorId: "aee049b7-1043-404e-a848-901a6d30996c",
        doctorName: "Dr.Meera Raghavan",
        healthIssues: [""],
        method_of_consultation: "In person",
        patient_age: "20",
        patient_first_name: "Sangeetha",
        patient_gender: "Female",
        patient_last_name: "Ramachandran",
        patient_mobile_number: "9445535374",
        status: "REJECTED",
        timeOfBooking: "9:43:49 AM",
      },
      {
        address: "",
        user_email_id:"shruthi5704@gmail.com",
        appointment_id: "89606a18-2812-46cc-bb58-afda4699d3e9",
        dateOfBooking: "5/20/2023",
        dateOfConsultation: "5/22/2023, 11:45:00 AM",
        doctorId: "aee049b7-1043-404e-a848-901a6d30996c",
        doctorName: "Dr.Meera Raghavan",
        healthIssues: [""],
        method_of_consultation: "In person",
        patient_age: "23",
        patient_first_name: "Durga",
        patient_gender: "Female",
        patient_last_name: "Lakshmi",
        patient_mobile_number: "8939094029",
        status: "REJECTED",
        timeOfBooking: "9:45:07 AM"
      },
      {
        address: "",
        user_email_id:"shruthi5704@gmail.com",
        appointment_id: "520bf8f9-7923-40ae-aefc-089a9abd51e8",
        dateOfBooking: "5/20/2023",
        dateOfConsultation: "5/25/2023, 11:50:00 AM",
        doctorId: "aee049b7-1043-404e-a848-901a6d30996c",
        doctorName: "Dr.Meera Raghavan",
        healthIssues: [""],
        method_of_consultation: "In person",
        patient_age: "12",
        patient_first_name: "Saranya",
        patient_gender: "Female",
        patient_last_name: "Ramachandran",
        patient_mobile_number: "9043690851",
        status: "ACCEPTED",
        timeOfBooking: "9:46:45 AM"
      },
      {
        address: "",
        user_email_id:"deepika.sriram@fssa.freshworks.com",
        appointment_id: "62b0738e-3ee3-43d2-9912-30f58c3d2e33",
        dateOfBooking: "5/20/2023",
        dateOfConsultation: "5/23/2023, 10:30:00 AM",
        doctorId: "427423c7-1339-4b59-8b57-27e6a26450f6",
        doctorName: "Dr.Shalini shetty",
        healthIssues: ["eye irritation", " eyepain", " can't see distant objects"],
        method_of_consultation: "In person",
        patient_age: "18",
        patient_first_name: "Deepika",
        patient_gender: "Female",
        patient_last_name: "Sriram",
        patient_mobile_number: "7397314532",
        status: "ACCEPTED",
        timeOfBooking: "9:49:18 AM"
      },
      
    ]
  ))
}

const doctor_detail = JSON.parse(localStorage.getItem('doctor_detail'));
if (!doctor_detail) {
  localStorage.setItem('doctor_detail', JSON.stringify(
    [
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00"
          }
        ],
        Departments: ["Obstetrician"],
        Doctor_image: "https://iili.io/HU0F8Ba.jpg",
        Doctor_name: "Dr.Kalaivani Ramalingam",
        Experience: {
          experience_duration: "26",
          experience_type: "years"
        },
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Hospital_id: 2,
        Qualifications: ["MBBS", " DGO"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "3:16:26 PM",
        doctor_description: "Obstetrician and Gynaecologist with advanced training in Urogynaecology",
        doctor_email_address: "kalaivani001@gmail.com",
        doctor_mobile_number: "+91 64475 66954",
        modified_date: "5/13/2023",
        modified_time: "3:17:18 PM",
        password: "J9lpRtFXVb",
        uuid: "2d17c05c-8fac-4159-af3b-8c8acb1f33c7"
      },
      {
        Availabilities: [
          {
            starting_time: "11:00",
            ending_time: "14:30"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://iili.io/HU0fftt.jpg",
        Doctor_name: "Dr.Meera Raghavan",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "26",
          experience_type: "years"
        },
        Hospital_id: 2,
        Qualifications: ["MBBS", "MD-Obstetrics and gynecology", "DNB-Obstetrics and gynecology", "MRCQG(UK)"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "3:39:26 PM",
        doctor_email_address: "meera002@gmail.com",
        doctor_mobile_number: "+91 61279 18397",
        modified_date: "5/13/2023",
        modified_time: "3:42:18 PM",
        password: "Z5ZJe1NRau",
        uuid: "aee049b7-1043-404e-a848-901a6d30996c"
      },
      {
        Availabilities: [
          {
            starting_time: "12:00",
            ending_time: "14:00"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://iili.io/HU0CIUJ.jpg",
        Doctor_name: "Dr.Alpha Khakhar",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "24",
          experience_type: "years"
        },
        Hospital_id: 2,
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "3:47:26 PM",
        doctor_email_address: "alpa003@gmail.com",
        doctor_mobile_number: "+91 788 708 2985",
        modified_date: "5/13/2023",
        modified_time: "3:17:18 PM",
        password: "fDswD1Aatz",
        uuid: "921a89e5-97d3-4e45-98fb-64b5dd4815f7"
      },
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00"
          },
          {
            starting_time: "18:00",
            ending_time: "20:00"
          }
        ],
        Departments: ["general physician", "gynecologist", "obstetrician"],
        Doctor_image: "https://iili.io/HU0aJLb.jpg",
        Doctor_name: "Dr.Lakshmi Devarajan",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "25",
          experience_type: "years"
        },
        Hospital_id: 1,
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "4:58:26 PM",
        doctor_email_address: "lakshmi004@gmail.com",
        doctor_mobile_number: "+91 788 797 3492",
        modified_date: "5/13/2023",
        modified_time: "5:05:18 PM",
        password: "yobB3KPaqx",
        uuid: "f415762e-5687-43ed-acf2-d2e762fa7821"
      },
      {
        Availabilities: [
          {
            starting_time: "15:00",
            ending_time: "17:00"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://iili.io/HU01clf.jpg",
        Doctor_name: "Dr.Rajini",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "29",
          experience_type: "years"
        },
        Hospital_id: 1,
        Qualifications: ["MBBS", "DGO"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: true
        },
        created_date: "5/13/2023",
        created_time: "5:13:26 PM",
        doctor_email_address: "rajini005@gmail.com",
        doctor_mobile_number: "+91 62982 98455",
        modified_date: "5/13/2023",
        modified_time: "5:15:18 PM",
        password: "c4mmka5ztq",
        uuid: "417e0b71-af81-4a54-9182-22292cbff291"
      },
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "18:00"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        Doctor_name: "Dr.Divya Yuvakesavan",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "12",
          experience_type: "years"
        },
        Hospital_id: 1,
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:22:26 PM",
        doctor_email_address: "divyayuva006@gmail.com",
        doctor_mobile_number: "+91 61279 17374",
        modified_date: "5/13/2023",
        modified_time: "5:23:18 PM",
        password: "G3hOMj2tZ7",
        uuid: "cd96c616-8af5-45af-9f39-56aed40fbc43"
      },
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00"
          },
          {
            starting_time: "15:00",
            ending_time: "16:00"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://iili.io/HU0Gi9R.jpg",
        Doctor_name: "Dr.Nithya ramamorthy",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "26",
          experience_type: "years"
        },
        Hospital_id: 3,
        Qualifications: ["MBBS", "DGO"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:26:26 PM",
        doctor_email_address: "nithyaram007@gmail.com",
        doctor_mobile_number: "+91 88475 89288",
        modified_date: "5/13/2023",
        modified_time: "5:28:18 PM",
        password: "MxtRcCMcbC",
        uuid: "fca9c853-72a0-4e3f-a8a3-89644ec510d4"
      },
      {
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "10:30"
          },
          {
            starting_time: "15:00",
            ending_time: "17:00"
          }
        ],
        Departments: ["gynecologist"],
        Doctor_image: "https://iili.io/HU0M1Hv.jpg",
        Doctor_name: "Dr.Thenmozhi",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "43",
          experience_type: "years"
        },
        Hospital_id: 3,
        Qualifications: ["MBBS", " DGO"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: false,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:31:26 PM",
        doctor_email_address: "thenmozhi008@gmail.com",
        doctor_mobile_number: "+91 66386 37086",
        modified_date: "5/13/2023",
        modified_time: "5:33:18 PM",
        password: "L05Anw8giq",
        uuid: "ca75ff1f-a7b9-4168-83e7-be6942ba2292"
      },
      {
        Availabilities: [
          {
            starting_time: "12:00",
            ending_time: "13:30"
          },
          {
            starting_time: "17:00",
            ending_time: "18:00"
          }
        ],
        Departments: ["Obstetrician", "Gynecologist"],
        Doctor_image: "https://iili.io/HU0MDbV.jpg",
        Doctor_name: "Dr.Premalatha balachandran",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "24",
          experience_type: "years"
        },
        Hospital_id: 3,
        Qualifications: ["MBBS", "DGO", "MRCOG(UK)"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:35:26 PM",
        doctor_email_address: "premalatha009@gmail.com",
        doctor_mobile_number: "+91 74287 51448",
        modified_date: "5/13/2023",
        modified_time: "5:37:18 PM",
        password: "uSthJdJ9Ri",
        uuid: "3b00a604-23e0-4401-8927-75d6d164aad6"
      },
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00"
          }
        ],
        Departments: ["general physician"],
        Doctor_image: "https://iili.io/HU0X2NR.jpg",
        Doctor_name: "Dr.Bhuvaneshwari",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "30",
          experience_type: "years"
        },
        Hospital_id: 4,
        Qualifications: ["MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:41:26 PM",
        doctor_email_address: "bhuvaneshwari010@gmail.com",
        doctor_mobile_number: "+91 61279 63319",
        modified_date: "5/13/2023",
        modified_time: "5:43:18 PM",
        password: "rl4vndBEDa",
        uuid: "a20e96b1-06f5-4ee7-87fe-459e928f9832"
      },
      {
        Availabilities: [
          {
            starting_time: "16:00",
            ending_time: "19:00"
          }
        ],
        Departments: ["general physician"],
        Doctor_image: "https://iili.io/HU0XpX2.jpg",
        Doctor_name: "Dr.Devi priya",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "9",
          experience_type: "years"
        },
        Hospital_id: 4,
        Qualifications: ["MBBS", "DDVL"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:49:26 PM",
        doctor_email_address: "devipriya011@gmail.com",
        doctor_mobile_number: "+91 80796 56908",
        modified_date: "5/13/2023",
        modified_time: "5:51:18 PM",
        password: "AnGgBDkbTU",
        uuid: "af83bb57-3ed0-4a12-9238-1498e2b3a540"
      },
      {
        Availabilities: [
          {
            starting_time: "13:00",
            ending_time: "15:00"
          }
        ],
        Departments: ["general physician"],
        Doctor_image: "https://iili.io/HU0Vvrg.jpg",
        Doctor_name: "Dr.Thilagavathy",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "4",
          experience_type: "years"
        },
        Hospital_id: 4,
        Qualifications: ["MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:56:26 PM",
        doctor_email_address: "thilagavathy012@gmail.com",
        doctor_mobile_number: "+91 80799 14320",
        modified_date: "5/13/2023",
        modified_time: "5:57:18 PM",
        password: "AxtN1ZNMeW",
        uuid: "7f191918-1831-40e6-9c25-08efa9650f59"
      },
      {
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "10:30"
          }
        ],
        Departments: ["general physician"],
        Doctor_image: "https://iili.io/HU0jktR.jpg",
        Doctor_name: "Dr.Swarna Das",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "31",
          experience_type: "years"
        },
        Hospital_id: 6,
        Qualifications: ["MBBS", "MD-General medicine"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "5:58:26 PM",
        doctor_email_address: "swarnadas013@gmail.com",
        doctor_mobile_number: "+91 72473 92151",
        modified_date: "5/13/2023",
        modified_time: "5:59:18 PM",
        password: "zkYQPRQoEN",
        uuid: "f1cb5c06-edf8-4f6b-9b58-ecb1b517c9bb"
      },
      {
        Availabilities: [
          {
            starting_time: "14:30",
            ending_time: "16:00"
          }
        ],
        Departments: ["Clinical psychologist"],
        Doctor_image: "https://iili.io/HU0Nu29.jpg",
        Doctor_name: "Ms.Sugami ramesh",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "39",
          experience_type: "years"
        },
        Hospital_id: 6,
        Qualifications: ["MA-Clinical psychology"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "6:09:26 PM",
        doctor_email_address: "sugami014@gmail.com",
        doctor_mobile_number: "+91 89172 08183",
        modified_date: "5/13/2023",
        modified_time: "6:11:18 PM",
        password: "fQRGyZTPK8",
        uuid: "846810a5-4699-4185-ba8f-c5a86bbf10bb"
      },
      {
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "15:00"
          }
        ],
        Departments: ["Opthalmologist / eye surgeon"],
        Doctor_image: "https://iili.io/HU0g7sa.jpg",
        Doctor_name: "Dr.Shalini shetty",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "30",
          experience_type: "years"
        },
        Hospital_id: 6,
        Qualifications: ["MBBS", "MS-Opthalmology"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "6:17:26 PM",
        doctor_email_address: "shalinishty015@gmail.com",
        doctor_mobile_number: "+91 99346 60537",
        modified_date: "5/13/2023",
        modified_time: "6:19:18 PM",
        password: "NDNP4mxE1z",
        uuid: "427423c7-1339-4b59-8b57-27e6a26450f6"
      },
      {
        Availabilities: [
          {
            starting_time: "09:30",
            ending_time: "13:30"
          }
        ],
        Departments: ["Internal medicine", "general medicine"],
        Doctor_image: "https://iili.io/HU0gzJV.jpg",
        Doctor_name: "Dr.Sheela chakravarthy",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "31",
          experience_type: "years"
        },
        Hospital_id: 5,
        Qualifications: ["MD-General medicine", "MBBS"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "6:43:26 PM",
        doctor_email_address: "sheela016@gmail.com",
        doctor_mobile_number: "+91 61279 83322",
        modified_date: "5/13/2023",
        modified_time: "6:44:18 PM",
        password: "j4dZqExrtG",
        uuid: "63a3b8a7-584e-4861-8d21-5c4500d0fe37"
      },
      {
        Availabilities: [
          {
            starting_time: "09:30",
            ending_time: "13:30"
          }
        ],
        Departments: ["General medicine"],
        Doctor_image: "https://iili.io/HU0rYT7.jpg",
        Doctor_name: "Dr.Shalini joshi",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "19",
          experience_type: "years"
        },
        Hospital_id: 5,
        Qualifications: ["MBBS", "MD-Medicine"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "6:46:26 PM",
        doctor_email_address: "shalinijoshi017@gmail.com",
        doctor_mobile_number: "+91 74482 62827",
        modified_date: "5/13/2023",
        modified_time: "6:47:18 PM",
        password: "0KCbyBHmhc",
        uuid: "98790358-74ed-4d01-bd94-ba8c63536845"
      },
      {
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "13:00"
          }
        ],
        Departments: ["Medical oncologist", "Hematologic oncologist"],
        Doctor_image: "https://iili.io/HU0rZ6G.jpg",
        Doctor_name: "Dr.Niti Raizada",
        Doctor_age: "",
        Doctor_DOB: "",
        Doctor_gender: "",
        University_of_doctor: "",
        Doctor_hospital_name: "",
        Experience: {
          experience_duration: "26",
          experience_type: "years"
        },
        Hospital_id: 5,
        Qualifications: ["MBBS", "MD-General medicine", "DNB-General medicine", "DM-Oncology", "MRCP(UK)"],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false
        },
        created_date: "5/13/2023",
        created_time: "6:52:26 PM",
        doctor_email_address: "nitiraizada018@gmail.com",
        doctor_mobile_number: "+91 65799 76286",
        modified_date: "5/13/2023",
        modified_time: "6:54:18 PM",
        password: "mgcZALGeCn",
        uuid: "dd82f6fc-2daa-4926-9996-0b2e99c9023f"
      }
    ]
  ))
}

const user_detail = JSON.parse(localStorage.getItem('user_detail'));
if(!user_detail){
  localStorage.setItem('user_detail' , JSON.stringify(
    [
      {
        age: "18",
        confirm_password: "DeepikaSRM@2005",
        create_password: "DeepikaSRM@2005",
        created_at: "5/20/2023, 11:53:46 AM",
        email_id: "deepika.sriram@fssa.freshworks.com",
        f_name: "Deepika",
        l_name: "Sriram Rao",
        mobile: "7397314532",
        modified_at: "5/20/2023, 11:55:01 AM",
        user_gender: "Female",
        uuid: "7b909f02-ef5d-4304-86d3-d7037b690765"
      },
      {
        age: "18",
        confirm_password: "Mithra@2004",
        create_password: "Mithra@2004",
        created_at: "5/20/2023, 12:01:40 PM",
        email_id: "shruthi5704@gmail.com",
        f_name: "Shruthi",
        l_name: "Lakshmi Narayanan",
        mobile: "9445535374",
        modified_at: "",
        user_gender: "Female",
        uuid: "de4e4b17-f9d5-4738-921f-a637eaa7f9fc"
      }
    ]
  ))
}

