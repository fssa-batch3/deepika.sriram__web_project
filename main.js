const hospitalDetails = JSON.parse(localStorage.getItem('hospital_detail'));
if(!hospitalDetails){
  localStorage.setItem('hospital_detail' , JSON.stringify(
    [
      {
        address: "No.43, Lakshmi talkies road",
        city: "Chennai",
        contact_number: "1 800-572-1111",
        email_address: "bilroth@gmail.com",
        hosp_license_no: "",
        hospital_id: 1,
        hospital_name: "Bilroth hospital",
        image_link: "https://iili.io/HrYVYBt.jpg",
        license_img: "",
        locality: "Shenoy nagar",
        pincode: "600030",
        state: "Tamil Nadu",
        uuid: "2ad66111-1826-4c7d-907c-9d2a356ef514"
      },
      {
        address: "21/22,Greams lane(opposite to thousand lights police station)",
        city: "Chennai",
        contact_number: "1 800-572-1111",
        email_address: "infochennai@apollohospitals.com",
        hosp_license_no: "",
        hospital_id: 2,
        hospital_name: "Apollo hospital",
        image_link: "https://iili.io/HrYVaEX.png",
        license_img: "",
        locality: "Greams road",
        pincode: "600006",
        state: "Tamil Nadu",
        uuid: "152c0929-bc27-4ac2-a783-300a095238f7"
      },
      {
        address: "No. 52, 1st Main Rd",
        city: "Chennai",
        contact_number: "9865567098",
        email_address: "fortis@gmail.com",
        hosp_license_no: "",
        hospital_id: 3,
        hospital_name: "Fortis malar hospital",
        image_link: "https://iili.io/HrYVRhN.png",
        license_img: "",
        locality: "Gandhi nagar, Adyar",
        pincode: "600020",
        state: "Tamil Nadu",
        uuid: "995c3789-f4a2-40b6-9da0-6e4a88a05e78"
      },
      {
        address: "No.434, N S K Salai",
        city: "Chennai",
        contact_number: "9865567098",
        email_address: "vijaya@gmail.com",
        hosp_license_no: "",
        hospital_id: 4,
        hospital_name: "Vijaya hospital",
        image_link: "https://iili.io/HrYV5QI.png",
        license_img: "",
        locality: "Vadapalani",
        pincode: "600026",
        state: "Tamil Nadu",
        uuid: "8ba7b85a-3cb9-4f4d-9e41-080391a08c19"
      },
      {
        address: "154/9, Opposite IIM-B",
        city: "Bengaluru",
        contact_number: "1 800-572-1111",
        email_address: "fortisblore@gmail.com",
        hosp_license_no: "",
        hospital_id: 5,
        hospital_name: "Fortis hospital",
        image_link: "https://iili.io/HrYVRhN.png",
        license_img: "",
        locality: "Bannerghatta Road",
        pincode: "560076",
        state: "Karnataka",
        uuid: "3bf7c9bf-be92-4f1c-adba-92cc19e8d7c9"
      },
      {
        address: "154/11,",
        city: "Bengaluru",
        contact_number: "",
        email_address: "infoblore@apollohospitals.com",
        hosp_license_no: "",
        hospital_id: 6,
        hospital_name: "Apollo hospitals",
        image_link: "https://iili.io/HrYVaEX.png",
        license_img: "",
        locality: "Bannerghatta Main road",
        pincode: "560076",
        state: "Tamil Nadu",
        uuid: "79bd3c90-40ef-4659-8ea0-2c258f534b75"
      }
      
    ]
  ))
}

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
        reason:"",
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
        status: "rejected",
        reason:"commited with another appointment",
        timeOfBooking: "9:43:49 AM",
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
        status: "accepted",
        reason:"",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0F8Ba.jpg",
        Doctor_name: "Dr.Kalaivani Ramalingam",
        Experience: {
          experience_duration: "26",
          experience_type: "years"
        },
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Apollo hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
        created_date: "5/13/2023",
        created_time: "3:16:26 PM",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0fftt.jpg",
        Doctor_name: "Dr.Meera Raghavan",
        
        
        Doctor_gender: "Female",
        University_of_doctor: " PGI Chandigarh, JIPMER and Manchester, UK.",
        Doctor_hospital_name: "Apollo hospital",
        Experience: {
          experience_duration: "19",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
        created_date: "5/13/2023",
        created_time: "3:39:26 PM",
        doctor_email_address: "meera002@gmail.com",
        doctor_mobile_number: "+91 61279 18397",
        modified_date: "5/13/2023",
        modified_time: "3:42:18 PM",
        password: "Asdf***123",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0CIUJ.jpg",
        Doctor_name: "Dr.Alpha Khakhar",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Apollo hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,17,3],
        Doctor_image: "https://iili.io/HU0aJLb.jpg",
        Doctor_name: "Dr.Lakshmi Devarajan",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Bilroth hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU01clf.jpg",
        Doctor_name: "Dr.Rajini",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Bilroth hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,3],
        Doctor_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        Doctor_name: "Dr.Divya Yuvakesavan",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Bilroth hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0Gi9R.jpg",
        Doctor_name: "Dr.Nithya ramamorthy",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis malar hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0M1Hv.jpg",
        Doctor_name: "Dr.Thenmozhi",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis malar hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,3],
        Doctor_image: "https://iili.io/HU0MDbV.jpg",
        Doctor_name: "Dr.Premalatha balachandran",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis malar hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,17],
        Doctor_image: "https://iili.io/HU0X2NR.jpg",
        Doctor_name: "Dr.Bhuvaneshwari",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Vijaya hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,17],
        Doctor_image: "https://iili.io/HU0XpX2.jpg",
        Doctor_name: "Dr.Devi priya",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Vijaya hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,17],
        Doctor_image: "https://iili.io/HU0Vvrg.jpg",
        Doctor_name: "Dr.Thilagavathy",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Vijaya hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,17],
        Doctor_image: "https://iili.io/HU0jktR.jpg",
        Doctor_name: "Dr.Swarna Das",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Apollo hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,18],
        Doctor_image: "https://iili.io/HU0Nu29.jpg",
        Doctor_name: "Ms.Sugami ramesh",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Apollo hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,5],
        Doctor_image: "https://iili.io/HU0g7sa.jpg",
        Doctor_name: "Dr.Shalini shetty",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Apollo hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
        created_date: "5/13/2023",
        created_time: "6:17:26 PM",
        doctor_email_address: "shalinishty015@gmail.com",
        doctor_mobile_number: "+91 99346 60537",
        modified_date: "5/13/2023",
        modified_time: "6:19:18 PM",
        password: "Shlnshty***123",
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
        Department_id:[0,1],
        Doctor_image: "https://iili.io/HU0gzJV.jpg",
        Doctor_name: "Dr.Sheela chakravarthy",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,1],
        Doctor_image: "https://iili.io/HU0rYT7.jpg",
        Doctor_name: "Dr.Shalini joshi",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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
        Department_id:[0,14],
        Doctor_image: "https://iili.io/HU0rZ6G.jpg",
        Doctor_name: "Dr.Niti Raizada",
        
        
        Doctor_gender: "Female",
        University_of_doctor: "",
        Doctor_hospital_name: "Fortis hospital",
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
        Medical_license_img:"",
        mrc_number:"",
        year_of_registration:"",
        name_of_the_council:"",
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

const admin = JSON.parse(localStorage.getItem('Admin'));
if(!admin){
  localStorage.setItem('Admin' , JSON.stringify(
    {
      name:"Deepika Sriram",
      mobile_number:"9876543210",
      email_address:"admin@gmail.com",
      password:"Admin***2005"
    }
  ))
}

const patient_review = JSON.parse(localStorage.getItem('patient_reviews'));
if(!patient_review){
  localStorage.setItem('patient_review' , JSON.stringify(
    [
      {
        created_at:"5/26/2023 , 1:50:00 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"vaishnavisriram76@gmail.com",
        created_for:"Dr.Kalaivani Ramalingam",
        doctor_id:"2d17c05c-8fac-4159-af3b-8c8acb1f33c7",
        review_msg:"Dr. Kalai is very professional and treats every patient with care and patience. She was recommended to me and she sure is a life saver! She is a brilliant doctor who is non-judgemental and just lovely to visit." 
      },
      {
        created_at:"5/24/2023 , 10:30:00 AM",
        modified_at:"",
        created_by:"Ramya Sathyanarayan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Kalaivani Ramalingam",
        doctor_id:"2d17c05c-8fac-4159-af3b-8c8acb1f33c7",
        review_msg:"Very friendly. Speaking in Hindi to my mother boosted her a lot.Before taking medicines Patient gets confidence of getting well from the doctor itself . That is more important according to me . And this happened with my mother also with the doctor." 
      },
      {
        created_at:"5/22/2023 , 12:30:49 PM",
        modified_at:"",
        created_by:"Shruthi Lakshminarayanan",
        user_id:"shruthinarayanan@gmail.com",
        created_for:"Dr.Kalaivani Ramalingam",
        doctor_id:"2d17c05c-8fac-4159-af3b-8c8acb1f33c7",
        review_msg:"Dr behavior is well . Explain about the deases properly.so I satisfied with her treatment.but I don't satisfied the her secretary's behaviour." 
      },
      {
        created_at:"4/27/2023 , 1:55:00 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"vaishnavisriram76@gmail.com",
        created_for:"Dr.Meera Raghavan",
        doctor_id:"aee049b7-1043-404e-a848-901a6d30996c",
        review_msg:"Affordable fees. She prescribes only the necessary tests and medicines and diagnoses well. She also speaks in a kind manner and listens to our queries and answers them patiently." 
      },
      {
        created_at:"5/18/2023 , 2:50:18 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayan@gmail.com",
        created_for:"Dr.Meera Raghavan",
        doctor_id:"aee049b7-1043-404e-a848-901a6d30996c",
        review_msg:"Good,nice,open and friendly doctor.gace good details about the problem and diagnostics.details were very clear." 
      },
      {
        created_at:"3/12/2023 , 4:30:12 PM",
        modified_at:"",
        created_by:"Shruthi Lakshminarayanan",
        user_id:"shruthinarayanan@gmail.com",
        created_for:"Dr.Meera Raghavan",
        doctor_id:"aee049b7-1043-404e-a848-901a6d30996c",
        review_msg:" Dr friendly speaking with patients" 
      },
      {
        created_at:"5/12/2023 , 5:30:12 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Alpha Khakhar",
        doctor_id:"921a89e5-97d3-4e45-98fb-64b5dd4815f7",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam" 
      },
      {
        created_at:"5/12,2023 , 7:00:12 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"deepika.sriram@fssa.freshworks.com",
        created_for:"Dr.Alpha Khakhar",
        doctor_id:"921a89e5-97d3-4e45-98fb-64b5dd4815f7",
        review_msg:"I had been to hospital and it was for gynaecology related. Doctor was good in consulting me. I am satisfied with the explanation and treatment given by the doctor. Tablets were prescribed by the doctor and course is not completed. Blood test was done and It was normal. There was no waiting time in the hospital when we went." 
      },
      {
        created_at:"5/31/2023 , 9:30:12 AM",
        modified_at:"",
        created_by:"Shruthi Lakshminarayanan",
        user_id:"shruthinarayanan@gmail.com",
        created_for:"Dr.Lakshmi Devarajan",
        doctor_id:"f415762e-5687-43ed-acf2-d2e762fa7821",
        review_msg:"Not money minded. Prescribes only which is needed." 
      },
      {
        created_at:"5/29/2023 , 8:20:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayan",
        user_id:"ramyasathyanarayan@gmail.com",
        created_for:"Dr.Lakshmi Devarajan",
        doctor_id:"f415762e-5687-43ed-acf2-d2e762fa7821",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/25/2023 , 4:17:59 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"deepika.sriram@fssa.freshworks.com",
        created_for:"Dr.Lakshmi Devarajan",
        doctor_id:"f415762e-5687-43ed-acf2-d2e762fa7821",
        review_msg:"Not money minded. Prescribes only which is needed." 
      },
      {
        created_at:"5/28/2023 , 7:20:09 PM",
        modified_at:"",
        created_by:"Uma Narasimhan",
        user_id:"usimhan@gmail.com",
        created_for:"Dr.Rajini",
        doctor_id:"417e0b71-af81-4a54-9182-22292cbff291",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/31/2023 , 1:30:34 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"deepika.sriram@fssa.freshworks.com",
        created_for:"Dr.Rajini",
        doctor_id:"417e0b71-af81-4a54-9182-22292cbff291",
        review_msg:"Not money minded. Prescribes only which is needed." 
      },
      {
        created_at:"5/9/2023 , 10:30:55 AM",
        modified_at:"",
        created_by:"Vaishnavi Sriram",
        user_id:"vaishnavisriram76@gmail.com",
        created_for:"Dr.Divya Yuvakesavan",
        doctor_id:"cd96c616-8af5-45af-9f39-56aed40fbc43",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam" 
      },
      {
        created_at:"5/17/2023 , 9:30:12 AM",
        modified_at:"",
        created_by:"Shruthi Lakshminarayanan",
        user_id:"shruthinarayanan@gmail.com",
        created_for:"Dr.Divya Yuvakesavan",
        doctor_id:"cd96c616-8af5-45af-9f39-56aed40fbc43",
        review_msg:"I had been to hospital and it was for gynaecology related. Doctor was good in consulting me. I am satisfied with the explanation and treatment given by the doctor. Tablets were prescribed by the doctor and course is not completed. Blood test was done and It was normal. There was no waiting time in the hospital when we went." 
      },
      {
        created_at:"5/16/2023 , 10:15:45 PM",
        modified_at:"",
        created_by:"Deepika Sriram",
        user_id:"deepika.sriram@fssa.freshworks.com",
        created_for:"Dr.Divya Yuvakesavan",
        doctor_id:"cd96c616-8af5-45af-9f39-56aed40fbc43",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Nithya ramamorthy",
        doctor_id:"fca9c853-72a0-4e3f-a8a3-89644ec510d4",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam" 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Shruthi Lakshminarayanan",
        user_id:"shruthinarayanan@gmail.com",
        created_for:"Dr.Nithya ramamorthy",
        doctor_id:"fca9c853-72a0-4e3f-a8a3-89644ec510d4",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam"  
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Thenmozhi",
        doctor_id:"ca75ff1f-a7b9-4168-83e7-be6942ba2292",
        review_msg:"I had been to hospital and it was for gynaecology related. Doctor was good in consulting me. I am satisfied with the explanation and treatment given by the doctor. Tablets were prescribed by the doctor and course is not completed. Blood test was done and It was normal. There was no waiting time in the hospital when we went." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Premalatha balachandran",
        doctor_id:"3b00a604-23e0-4401-8927-75d6d164aad6",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Bhuvaneshwari",
        doctor_id:"a20e96b1-06f5-4ee7-87fe-459e928f9832",
        review_msg:"Not money minded. Prescribes only which is needed." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Devi priya",
        doctor_id:"af83bb57-3ed0-4a12-9238-1498e2b3a540",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam" 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Thilagavathy",
        doctor_id:"7f191918-1831-40e6-9c25-08efa9650f59",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Swarna Das",
        doctor_id:"f1cb5c06-edf8-4f6b-9b58-ecb1b517c9bb",
        review_msg:"My mummy's treatment was done by her! And I personally wanna Thank her so much She is a kind doctor... Everything was explained so properly and my mummy is getting better day by day only because of you mam" 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Ms.Sugami ramesh",
        doctor_id:"846810a5-4699-4185-ba8f-c5a86bbf10bb",
        review_msg:"She is good decision maker when patient in critical. She is caring about the patient." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Shalini shetty",
        doctor_id:"427423c7-1339-4b59-8b57-27e6a26450f6",
        review_msg:"I have visited Dr. Shalini for my eye checkup as I used to have stress on my eyes while in front of computer. She was friendly and explained me the problem in detail. She has suggested me the eye drops and breaks between my working hours. Basically change in my lifestyle. I am satisfied after consulting her. Thankyou dr. Shalini:)" 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Sheela chakravarthy",
        doctor_id:"63a3b8a7-584e-4861-8d21-5c4500d0fe37",
        review_msg:"She is my favorite doctor visited multiple times for different issues. She is very friendly and removes our worry for any illness with humor sense. More than therapy, i like this humor therapy. Highly recommended and your patience is very important. She is highly professional and doesn't encourage any shortcut to visit her. Strictly on appointment and in order." 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Shalini joshi",
        doctor_id:"98790358-74ed-4d01-bd94-ba8c63536845",
        review_msg:"I feel very fortunate to meet such a good doctor these days . I strongly recommend doctor Shalini Joshi. efficiency in the treatment is the key factor and I found the following excellent qualities in doctor Shalini Joshi" 
      },
      {
        created_at:"5/12/2023 , 02:30:13 PM",
        modified_at:"",
        created_by:"Ramya Sathyanarayanan",
        user_id:"ramyasathyanarayanan@gmail.com",
        created_for:"Dr.Niti Raizada",
        doctor_id:"dd82f6fc-2daa-4926-9996-0b2e99c9023f",
        review_msg:"I had consulted doctor Niti for expert opinion on my husband’s health. She was very kind and friendly .. speaking to her gave me hope and I was relieved after my interaction with her .. she made me feel comfortable with the treatment and gave solutions for our problems..When it comes to diseases like cancer , each and every word doctor says has an impact .very positive in her explanations and made it sound easier to fight this.. That’s my takeaway !!I would recommend this doctor." 
      }
    ]
  ))
}



const specialistsList = JSON.parse(localStorage.getItem('list_of_specialist'));
if(!specialistsList){
  localStorage.setItem('list_of_specialist' , JSON.stringify(
    [
      {
        specialty:"General medicine",
        specialty_id:1
      },
      {
        specialty:"Pediatrics",
        specialty_id:2
      },
      {
        specialty:"Obstetrics and gynecology",
        specialty_id:3
      },
      {
        specialty:"Orthopaedics",
        specialty_id:4
      },
      {
        specialty:"Ophthalmology",
        specialty_id:5
      },
      {
        specialty:"ENT",
        specialty_id:6
      },
      {
        specialty:"Dermatology",
        specialty_id:7
      },
      {
        specialty:"Psychiatry",
        specialty_id:8
      },
      {
        specialty:"Cardiology",
        specialty_id:9
      },
      {
        specialty:"Neurology",
        specialty_id:10
      },
      {
        specialty:"Nephrology",
        specialty_id:11
      },
      {
        specialty:"Pulmonology",
        specialty_id:12
      },
      {
        specialty:"Gastroenterology",
        specialty_id:13
      },
      {
        specialty:"Oncology",
        specialty_id:14
      },
      {
        specialty:"Urology",
        specialty_id:15
      },
      {
        specialty:"Allergy and immunology",
        specialty_id:16
      },
      {
        specialty:"General physician",
        specialty_id:17
      },
      {
        specialty:"Psychology",
        specialty_id:18
      }
    ]
  ))
}