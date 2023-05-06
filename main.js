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
        address: "227/2, C2",
        area: "Perungudi",
        city: "Chennai",
        contact_number: "",
        email_address: "",
        hospital_name: "Gem hospital",
        hospital_id: 6,
        image_link: "../../../assets/images/gem hospital.png",
        link_file: "../other pages/doctor's list.html",
        locality: "MGR Main road",
        pincode: "600096",
        uuid: "e911e209-0489-4bbd-8b9e-5e31c8c73ba2",
      },
      {
        address: "No.1",
        area: "Porur",
        city: "Chennai",
        contact_number: "1 800-572-1111",
        email_address: "",
        hospital_name: "Ramachandra hospital",
        hospital_id: 7,
        image_link: "../../../assets/images/srm.png",
        link_file: "../other pages/doctor's list.html",
        locality: "Ramachandra nagar",
        pincode: "600116",
        uuid: "d00c82c9-32c7-488f-ae5f-fdf008cd0152",
      },
      {
        address: "9, Air Force Station Rd",
        area: "East Tambaram",
        city: "Chennai",
        contact_number: "098846 00061",
        email_address: "coshospital@gmail.com",
        hospital_name: "COSH hospital",
        hospital_id: 8,
        image_link: "../../../assets/images/cropped-COSH-LOGO.jpg",
        link_file: "../other pages/doctor's list.html",
        locality: "Duraisamy nagar",
        pincode: "600059",
        uuid: "889f2943-6043-48da-859b-a12b927f9412",
      },
      {
        address: "154/11,",
        area: "Bannerghatta Main road",
        city: "Bengaluru",
        contact_number: "",
        email_address: "infochennai@apollohospitals.com",
        hospital_name: "Apollo hospitals",
        hospital_id: 9,
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

const doctorDetails = JSON.parse(localStorage.getItem("doctor_detail"));
if (!doctorDetails) {
  localStorage.setItem(
    "doctor_detail",
    JSON.stringify([
      {
        Doctor_name: "Dr.Kalaivani Ramalingam",
        Doctor_image: "../../../assets/images/dr.kalailvani.jpeg",
        Qualifications: ["MBBS", "DGO"],
        Experience: {
          experience_duration: 25,
          experience_type: "years",
        },
        Departments: ["Obstrtrician"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:30",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 2,
        uuid: "2d17c05c-8fac-4159-af3b-8c8acb1f33c7",
      },
      {
        Doctor_name: "Dr.Meera Raghavan",
        Doctor_image: "../../../assets/images/dr meera.jpeg",
        Qualifications: [
          "MBBS",
          "MD-Obstetrics and gynecology",
          "DNB-Obstetrics and gynecology",
          "MRCQG(UK)",
        ],
        Experience: {
          experience_duration: 26,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "11:00",
            ending_time: "14:30",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 2,
        uuid: "aee049b7-1043-404e-a848-901a6d30996c",
      },
      {
        Doctor_name: "Dr.Alpha Khakhar",
        Doctor_image: "../../../assets/images/dr.alpha.jpeg",
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Experience: {
          experience_duration: 24,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "12:00",
            ending_time: "14:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 2,
        uuid: "921a89e5-97d3-4e45-98fb-64b5dd4815f7",
      },
      {
        Doctor_name: "Dr.Lakshmi devarajan",
        Doctor_image:
          "../../../assets/images/dr-lakshmi-devarajan-general-physician-chennai-e16ae616-38f0-4f72-a250-8a4179383585-transformed.jpeg",
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Experience: {
          experience_duration: 25,
          experience_type: "years",
        },
        Departments: ["general physician", "gynecologist", "obstetrician"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00",
          },
          {
            starting_time: "18:00",
            ending_time: "20:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 1,
        uuid: "f415762e-5687-43ed-acf2-d2e762fa7821",
      },
      {
        Doctor_name: "Dr.Rajini",
        Doctor_image:
          "../../../assets/images/dr-rajini-specialist-chennai-f8fef08b-a529-4c5e-a1d1-f9f15aef7046-transformed.jpeg",
        Qualifications: ["MBBS", "DGO"],
        Experience: {
          experience_duration: 29,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "15:00",
            ending_time: "17:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: true,
        },
        Hospital_id: 1,
        uuid: "417e0b71-af81-4a54-9182-22292cbff291",
      },
      {
        Doctor_name: "Dr.Divya yuvakesavan",
        Doctor_image:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS"],
        Experience: {
          experience_duration: 12,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "18:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 1,
        uuid: "cd96c616-8af5-45af-9f39-56aed40fbc43",
      },
      {
        Doctor_name: "Dr.Nithya ramamorthy",
        Doctor_image: "../../../assets/images/dr nithya.jpeg",
        Qualifications: ["MBBS", "DGO"],
        Experience: {
          experience_duration: 26,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00",
          },
          {
            starting_time: "15:00",
            ending_time: "16:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 3,
        uuid: "fca9c853-72a0-4e3f-a8a3-89644ec510d4",
      },
      {
        Doctor_name: "Dr.Thenmozhi",
        Doctor_image: "../../../assets/images/dr thenmozhi.jpeg",
        Qualifications: ["MBBS", "DGO"],
        Experience: {
          experience_duration: 43,
          experience_type: "years",
        },
        Departments: ["gynecologist"],
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "10:30",
          },
          {
            starting_time: "15:00",
            ending_time: "17:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: false,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 3,
        uuid: "ca75ff1f-a7b9-4168-83e7-be6942ba2292",
      },
      {
        Doctor_name: "Dr.Premalatha balachandran",
        Doctor_image: "../../../assets/images/dr premalatha.jpeg",
        Qualifications: ["MBBS", "DGO", "MRCOG(UK)"],
        Experience: {
          experience_duration: 24,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "12:00",
            ending_time: "13:30",
          },
          {
            starting_time: "17:00",
            ending_time: "18:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 3,
        uuid: "3b00a604-23e0-4401-8927-75d6d164aad6",
      },
      {
        Doctor_name: "Dr.Bhuvaneshwari",
        Doctor_image: "../../../assets/images/dr bhuvaneshwari.jpeg",
        Qualifications: ["MBBS"],
        Experience: {
          experience_duration: 30,
          experience_type: "years",
        },
        Departments: ["general physician"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 4,
        uuid: "a20e96b1-06f5-4ee7-87fe-459e928f9832",
      },
      {
        Doctor_name: "Dr.Devi priya",
        Doctor_image: "../../../assets/images/dr devi priya.jpeg",
        Qualifications: ["MBBS", "DDVL"],
        Experience: {
          experience_duration: 9,
          experience_type: "years",
        },
        Departments: ["general physician"],
        Availabilities: [
          {
            starting_time: "16:00",
            ending_time: "19:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 4,
        uuid: "af83bb57-3ed0-4a12-9238-1498e2b3a540",
      },
      {
        Doctor_name: "Dr.Thilagavathy",
        Doctor_image: "../../../assets/images/dr thilagavathy.jpeg",
        Qualifications: ["MBBS"],
        Experience: {
          experience_duration: 4,
          experience_type: "years",
        },
        Departments: ["general physician"],
        Availabilities: [
          {
            starting_time: "13:00",
            ending_time: "15:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 4,
        uuid: "7f191918-1831-40e6-9c25-08efa9650f59",
      },
      {
        Doctor_name: "Dr.Divya Arun",
        Doctor_image: "../../../assets/images/dr divya.jpeg",
        Qualifications: ["MS-Obstetrics and gynecology", "MBBS"],
        Experience: {
          experience_duration: 17,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist"],
        Availabilities: [
          {
            starting_time: "08:00",
            ending_time: "15:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 7,
        uuid: "4b6a6699-4e67-43fa-beb4-0e2cda2cb977",
      },
      {
        Doctor_name: "Dr.Dhanalakshmi",
        Doctor_image: "../../../assets/images/dr dhanalakshmi.jpeg",
        Qualifications: ["MD-Obstetrics and gynecology", "MBBS", "DGO"],
        Experience: {
          experience_duration: 29,
          experience_type: "years",
        },
        Departments: ["Obstetrician"],
        Availabilities: [
          {
            starting_time: "08:00",
            ending_time: "14:00",
          },
        ],
        Working_days: {
          monday: false,
          tuesday: false,
          wednesday: true,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        Hospital_id: 7,
        uuid: "7f7d4cf1-8267-422b-ab03-bf1ca8d08b2a",
      },
      {
        Doctor_name: "Dr.Ajantha Sanjeev",
        Doctor_image:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        Qualifications: ["MD-Obstetrics and gynecologist", "MBBS"],
        Experience: {
          experience_duration: 30,
          experience_type: "years",
        },
        Departments: ["Obstetrician", "Gynecologist", "General physician"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "14:00",
          },
          {
            starting_time: "18:00",
            ending_time: "20:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 6,
        uuid: "c4f3cfa1-0362-4da0-9a78-1bb5fc0742ae",
      },
      {
        Doctor_name: "Dr.Swarna Das",
        Doctor_image: "../../../assets/images/Dr.Swarna das.jpeg",
        Qualifications: ["MBBS", "MD-General medicine"],
        Experience: {
          experience_duration: 31,
          experience_type: "years",
        },
        Departments: ["general physician"],
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "10:30",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 9,
        uuid: "f1cb5c06-edf8-4f6b-9b58-ecb1b517c9bb",
      },
      {
        Doctor_name: "Dr.Sachin manjunath",
        Doctor_image:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        Qualifications: ["MBBS"],
        Experience: {
          experience_duration: 5,
          experience_type: "years",
        },
        Departments: ["general physician"],
        Availabilities: [
          {
            starting_time: "19:30",
            ending_time: "20:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 9,
        uuid: "c7278080-c0a2-4428-a9e9-b40a2c25c622",
      },
      {
        Doctor_name: "Ms.Sugami ramesh",
        Doctor_image: "../../../assets/images/Dr.Sugami ramesh.jpeg",
        Qualifications: ["MA-Clinical psychology"],
        Experience: {
          experience_duration: 39,
          experience_type: "years",
        },
        Departments: ["Clinical psychologist"],
        Availabilities: [
          {
            starting_time: "14:30",
            ending_time: "16:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 9,
        uuid: "846810a5-4699-4185-ba8f-c5a86bbf10bb",
      },
      {
        Doctor_name: "Dr.Shalini shetty",
        Doctor_image: "../../../assets/images/Dr.Shalini shetty.jpeg",
        Qualifications: ["MBBS", "MS-Opthalmology"],
        Experience: {
          experience_duration: 30,
          experience_type: "years",
        },
        Departments: ["Opthalmologist / eye surgeon"],
        Availabilities: [
          {
            starting_time: "10:00",
            ending_time: "15:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 9,
        uuid: "427423c7-1339-4b59-8b57-27e6a26450f6",
      },
      {
        Doctor_name: "Dr.Sheela chakravarthy",
        Doctor_image: "../../../assets/images/Dr.Sheela chakravarthy.jpeg",
        Qualifications: ["MD-General medicine", "MBBS"],
        Experience: {
          experience_duration: 31,
          experience_type: "years",
        },
        Departments: ["Internal medicine", "general medicine"],
        Availabilities: [
          {
            starting_time: "09:30",
            ending_time: "13:30",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 5,
        uuid: "63a3b8a7-584e-4861-8d21-5c4500d0fe37",
      },
      {
        Doctor_name: "Dr.Shalini josh",
        Doctor_image: "../../../assets/images/Dr.Shalini joshi.jpeg",
        Qualifications: ["MBBS", "MD-Medicine"],
        Experience: {
          experience_duration: 19,
          experience_type: "years",
        },
        Departments: ["General medicine"],
        Availabilities: [
          {
            starting_time: "09:30",
            ending_time: "13:30",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 5,
        uuid: "98790358-74ed-4d01-bd94-ba8c63536845",
      },
      {
        Doctor_name: "Dr.Niti Raizada",
        Doctor_image: "../../../assets/images/Dr.Nithi raizada.jpeg",
        Qualifications: [
          "MBBS",
          "MD-General medicine",
          "DNB-General medicine",
          "DM-Oncology",
          "MRCP(UK)",
        ],
        Experience: {
          experience_duration: 26,
          experience_type: "years",
        },
        Departments: ["Medical oncologist", "Hematologic oncologist"],
        Availabilities: [
          {
            starting_time: "09:00",
            ending_time: "13:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 5,
        uuid: "dd82f6fc-2daa-4926-9996-0b2e99c9023f",
      },
      {
        Doctor_name: "Dr.Sudhan christudas",
        Doctor_image: "../../../assets/images/Dr.Sudhan christudas.jpeg",
        Qualifications: ["MBBS", "MS-Orthopaedics"],
        Experience: {
          experience_duration: 25,
          experience_type: "years",
        },
        Departments: ["Orthopaedic surgeon"],
        Availabilities: [
          {
            starting_time: "10:30",
            ending_time: "11:30",
          },
          {
            starting_time: "18:00",
            ending_time: "19:00",
          },
        ],
        Working_days: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: false,
        },
        Hospital_id: 8,
        uuid: "918437af-3ef4-4ee1-a7cc-40caa43b3f80",
      },
      {
        Doctor_name: "Dr.Siddhika iyer",
        Doctor_image: "../../../assets/images/Dr.Siddhika iyer.jpeg",
        Qualifications: ["DNB-Psychiatry", "MBBS-Psychiatry"],
        Experience: {
          experience_duration: 15,
          experience_type: "years",
        },
        Departments: ["Psychiatrist"],
        Availabilities: {
          monday: false,
          tuesday: false,
          wednesday: true,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        Hospital_id: 8,
        uuid: "f5c2a0c5-a674-40ea-bb57-4bca29f7aad3",
      },
    ])
  );
}
console.log(doctorDetails);

// const appointmentList = JSON.parse(localStorage.getItem("appointments"));
// if (!appointmentList) {
//   localStorage.setItem(
//     "appointments",
//     JSON.stringify([
//       {
//         addDescription: "",
//         address: "",
//         appointment_id: "0cd4d3f9-c4ea-437b-ae61-2601016b1dbf",
//         consultationMethod: {
//           inPerson: true,
//           homeConsultation: false,
//           videoConsultation: false,
//         },
//         dateOfBooking: "2023-04-01",
//         dateOfConsultation: "2023-04-04",
//         doctorName: "Dr.Premalatha Balachandran",
//         healthIssues: ["irregular periods"],
//         patient_age: "18",
//         patient_email_address: "vaishnavisriram76@gmail.com",
//         patient_gender: {
//           male: false,
//           female: true,
//           others: false,
//         },
//         patient_mobile_number: "7397314532",
//         patient_name: "Vaishnavi",
//         timeOfBooking: "14:45",
//       },
//       {
//         addDescription: "",
//         address: "",
//         appointment_id: "93b5b247-ace2-4195-8603-2aefbcd564bf",
//         consultationMethod: {
//           inPerson: true,
//           homeConsultation: false,
//           videoConsultation: false,
//         },
//         dateOfBooking: "2023-04-01",
//         dateOfConsultation: "2023-04-03",
//         doctorName: "Dr.Premalatha Balachandran",
//         healthIssues: ["stomachache"],
//         patient_age: "14",
//         patient_email_address: "deepika.sriram@fssa.freshworks.com",
//         patient_gender: {
//           male: false,
//           female: true,
//           others: false,
//         },
//         patient_mobile_number: "9940185339",
//         patient_name: "Subhashini",
//         timeOfBooking: "14:59",
//       },
//       {
//         addDescription:
//           "I can't tell the issues in this form..I want to tell you in person",
//         address: "",
//         appointment_id: "b5acced5-cde9-4da4-8997-990715840737",
//         consultationMethod: {
//           inPerson: true,
//           homeConsultation: false,
//           videoConsultation: false,
//         },
//         dateOfBooking: "2023-03-31",
//         dateOfConsultation: "2023-04-03",
//         doctorName: "Dr.Thenmozhi",
//         healthIssues: [],
//         patient_age: "21",
//         patient_email_address: "sangeetha1997@gmail.com",
//         patient_gender: {
//           male: false,
//           female: true,
//           others: false,
//         },
//         patient_mobile_number: "944553574",
//         patient_name: "Sangeetha",
//         timeOfBooking: "15:00",
//       },
//       {
//         addDescription: "",
//         address: "No.06, abcd steet, x-city",
//         appointment_id: "fcb58cab-5b1d-45b4-a3e2-0f08b8b3c194",
//         consultationMethod: {
//           inPerson: false,
//           homeConsultation: true,
//           videoConsultation: false,
//         },
//         dateOfBooking: "2023-03-29",
//         dateOfConsultation: "2023-04-04",
//         doctorName: "Dr.Meera Raghavan",
//         healthIssues: ["giddiness"],
//         patient_age: "80",
//         patient_email_address: "deepika.sriram@fssa.freshworks.com",
//         patient_gender: {
//           male: false,
//           female: true,
//           others: false,
//         },
//         patient_mobile_number: "8939094029",
//         patient_name: "Gowri",
//         timeOfBooking: "15:02",
//       },
//     ])
//   );
// }
