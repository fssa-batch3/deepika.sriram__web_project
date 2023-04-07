const hospitalDetails = JSON.parse(localStorage.getItem('hospital_detail'));
if (!hospitalDetails) {
    localStorage.setItem('hospital_detail', JSON.stringify(
        [
            {
                address
                    :
                    "21/22,Greams lane,Greams road, chennai-600006.(opposite to thousand lights police station",
                alternate
                    :
                    "apollo hospital",
                contact_number
                    :
                    "1 800-572-1111",
                email_address
                    :
                    "apollo@gmail.com",
                hospital_name
                    :
                    "Apollo-hospital",
                image_link
                    :
                    "../../../assets/images/apollo-gleneagles-hospitals-kolkata-squarelogo-1464594605205.png",
                link_file
                    :
                    "../other pages/doctor's list.html",
                uuid
                    :
                    "19f15096-9ff0-4c80-88ef-3e3bb9b9e7c0"
            },
            {
                address
                    :
                    "No.43, Lakshmi talkies road, Shenoy nagar, Chennai-600030",
                alternate
                    :
                    "Bilroth hospital",
                contact_number
                    :
                    "9865567098",
                email_address
                    :
                    "bilroth@gmail.com",
                hospital_name
                    :
                    "Bilroth-hospital",
                image_link
                    :
                    "../../../assets/images/Billroth_Hospitals__Shenoy_Nagar_logo.jpg",
                link_file
                    :
                    "../other pages/doctor's list.html",
                uuid
                    :
                    "94189af1-f8a7-4c09-a46e-ed37c65a2b3a"
            },
            {
                address
                    :
                    "No.434, N.S.K.Salai,Vadapalani,Chennai - 600026.",
                alternate
                    :
                    "logo of vijaya hospital",
                contact_number
                    :
                    "",
                email_address
                    :
                    "vijaya@gmail.com",
                hospital_name
                    :
                    "Vijaya-hospital",
                image_link
                    :
                    "../../../assets/images/vijaya.png",
                link_file
                    :
                    "../other pages/doctor's list.html",
                uuid
                    :
                    "d060e5df-862b-4826-9a4b-98c3e106f638",
            },
            {
                address
                    :
                    "No. 52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai,600020",
                alternate
                    :
                    "logo of fortis malar hospital",
                contact_number
                    :
                    "1 800-572-1111",
                email_address
                    :
                    "fortis@gmail.com",
                hospital_name
                    :
                    "Fortis-malar-hospital",
                image_link
                    :
                    "../../../assets/images/fortis logo.png",
                link_file
                    :
                    "../other pages/doctor's list.html",
                uuid
                    :
                    "2b832168-8e70-42f5-b389-def616853f53",
            }
        ]
    ))
}

console.log(hospitalDetails)

const doctorDetails = JSON.parse(localStorage.getItem('doctor_detail'));
if (!doctorDetails) {
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
                Doctor_image: "../../../assets/images/dr.kalailvani.jpeg",
                Doctor_name: "Dr.Kalaivani Ramalingam",
                Experience: {
                    experience_duration: "25",
                    experience_type: "years"
                },
                Hospital_name: "Apollo-hospital",
                Qualifications: ["MBBS", "DGO"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "bf505193-621d-4219-b0d9-3a6b5cf5f97b"
            },
            {
                Availabilities: [
                    {
                        starting_time: "11:00",
                        ending_time: "14:30"
                    }
                ],
                Departments: ["Obstetrician", "Gynecologist"],
                Doctor_image: "../../../assets/images/dr meera.jpeg",
                Doctor_name: "Dr.Meera Raghavan",
                Experience: {
                    experience_duration: "26",
                    experience_type: "years"
                },
                Hospital_name: "Apollo-hospital",
                Qualifications: ["MBBS", "MD-Obstetrics and gynecology", "DNB-Obstetrics and gynecology", "MRCQG(UK)"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "1dcec7bf-268d-4094-9c17-b7d570aaa1e7"
            },
            {
                Availabilities: [
                    {
                        starting_time: "12:00",
                        ending_time: "14:00"
                    }
                ],
                Departments: ["Obstetrician", "Gynecologist"],
                Doctor_image: "../../../assets/images/dr.alpha.jpeg",
                Doctor_name: "Dr.Alpha khakhar",
                Experience: {
                    experience_duration: "24",
                    experience_type: "years"
                },
                Hospital_name: "Apollo-hospital",
                Qualifications: ["MBBS", "MD-Obstetrics and gynecology"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "783f1dc2-0e8b-4938-b7ba-a76a1a5a8542"
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
                Departments: ["Obstetrician", "Gynecologist", "General physician"],
                Doctor_image: "../../../assets/images/dr-lakshmi-devarajan-general-physician-chennai-e16ae616-38f0-4f72-a250-8a4179383585-transformed.jpeg",
                Doctor_name: "Dr.Lakshmi devarajan",
                Experience: {
                    experience_duration: "50",
                    experience_type: "years"
                },
                Hospital_name: "Bilroth-hospital",
                Qualifications: ["MBBS", "MD-Obstetrics and gynecology"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "dc404ea0-25ac-4ba7-8fa6-388166539e62"
            },
            {
                Availabilities: [
                    {
                        starting_time: "15:00",
                        ending_time: "17:00"
                    }
                ],
                Departments: ["Obstetrician", "Gynecologist"],
                Doctor_image: "../../../assets/images/dr-rajini-specialist-chennai-f8fef08b-a529-4c5e-a1d1-f9f15aef7046-transformed.jpeg",
                Doctor_name: "Dr.Rajini",
                Experience: {
                    experience_duration: "29",
                    experience_type: "years"
                },
                Hospital_name: "Bilroth-hospital",
                Qualifications: ["MBBS", "DGO"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: true
                },
                uuid: "0a0097ee-48f4-4adc-81f5-b6a87e399bfe"
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
                Doctor_name: "Dr.Divya yuvakesavan",
                Experience: {
                    experience_duration: "12",
                    experience_type: "years"
                },
                Hospital_name: "Bilroth-hospital",
                Qualifications: ["MBBS", "MD-Obstetrics and gynecology"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "d46b1a27-ebea-4266-9ec9-68d57453a9e1"
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
                Doctor_image: "../../../assets/images/dr nithya.jpeg",
                Doctor_name: "Dr.Nithya Ramamorthy",
                Experience: {
                    experience_duration: "46",
                    experience_type: "years"
                },
                Hospital_name: "Fortis-malar-hospital",
                Qualifications: ["MBBS", "DGO"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "3376b955-b3b3-49f3-a1ed-949c531e99b8"
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
                Departments: ["Gynecologist"],
                Doctor_image: "../../../assets/images/dr thenmozhi.jpeg",
                Doctor_name: "Dr.Thenmozhi",
                Experience: {
                    experience_duration: "43",
                    experience_type: "years"
                },
                Hospital_name: "Fortis-malar-hospital",
                Qualifications: ["MBBS", "DGO"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: false, friday: true, saturday: true, sunday: false
                },
                uuid: "d60a8682-8953-4ca6-a5d6-471d82473f95"
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
                Doctor_image: "../../../assets/images/dr premalatha.jpeg",
                Doctor_name: "Dr.Premalatha Balachandran",
                Experience: {
                    experience_duration: "24",
                    experience_type: "years"
                },
                Hospital_name: "Fortis-malar-hospital",
                Qualifications: ["MBBS", "DGO", "MRCQG(UK)"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "6b552ea8-57c4-4f85-aa1c-e642d80db72e"
            },
            {
                Availabilities: [
                    {
                        starting_time: "10:00",
                        ending_time: "14:00"
                    }
                ],
                Departments: ["General Physician"],
                Doctor_image: "../../../assets/images/dr thilagavathy.jpeg",
                Doctor_name: "Dr.Bhuvaneshwari ",
                Experience: {
                    experience_duration: "30",
                    experience_type: "years"
                },
                Hospital_name: "Vijaya-hospital",
                Qualifications: ["MBBS"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "e6a7a865-fdc2-4275-8d7f-85f0c64e3b0e"
            },
            {
                Availabilities: [
                    {
                        starting_time: "16:00",
                        ending_time: "19:00"
                    }
                ],
                Departments: ["general physician"],
                Doctor_image: "../../../assets/images/dr devi priya.jpeg",
                Doctor_name: "Dr.Devi priya",
                Experience: {
                    experience_duration: "9",
                    experience_type: "years"
                },
                Hospital_name: "Vijaya-hospital",
                Qualifications: ["MBBS", "DDVL"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "ff9ebd3a-e9a0-4958-a8cd-b08e812a475c"
            },
            {
                Availabilities: [
                    {
                        starting_time: "13:00",
                        ending_time: "15:00"
                    }
                ],
                Departments: ["general physician"],
                Doctor_image: "../../../assets/images/dr bhuvaneshwari.jpeg",
                Doctor_name: "Dr.Thilagavathy",
                Experience: {
                    experience_duration: "4",
                    experience_type: "years"
                },
                Hospital_name: "Vijaya-hospital",
                Qualifications: ["MBBS"],
                Working_days: {
                    monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false
                },
                uuid: "734534af-1002-47f4-a451-bbfb4d6bbda9"
            }
        ]
    ))
}

const appointmentList = JSON.parse(localStorage.getItem('appointments'));
if (!appointmentList) {
    localStorage.setItem('appointments', JSON.stringify(
        [
            {
                addDescription: "",
                address: "",
                appointment_id: "0cd4d3f9-c4ea-437b-ae61-2601016b1dbf",
                consultationMethod: {
                    inPerson: true,
                    homeConsultation: false,
                    videoConsultation: false
                },
                dateOfBooking: "2023-04-01",
                dateOfConsultation: "2023-04-04",
                doctorName: "Dr.Premalatha Balachandran",
                healthIssues: ["irregular periods"],
                patient_age: "18",
                patient_email_address: "vaishnavisriram76@gmail.com",
                patient_gender: {
                    male: false,
                    female: true,
                    others: false
                },
                patient_mobile_number: "7397314532",
                patient_name: "Vaishnavi",
                timeOfBooking: "14:45"
            },
            {
                addDescription: "",
                address: "",
                appointment_id: "93b5b247-ace2-4195-8603-2aefbcd564bf",
                consultationMethod: {
                    inPerson: true,
                    homeConsultation: false,
                    videoConsultation: false
                },
                dateOfBooking: "2023-04-01",
                dateOfConsultation: "2023-04-03",
                doctorName: "Dr.Premalatha Balachandran",
                healthIssues: ["stomachache"],
                patient_age: "14",
                patient_email_address: "deepika.sriram@fssa.freshworks.com",
                patient_gender: {
                    male: false,
                    female: true,
                    others: false
                },
                patient_mobile_number: "9940185339",
                patient_name: "Subhashini",
                timeOfBooking: "14:59"
            },
            {
                addDescription: "I can't tell the issues in this form..I want to tell you in person",
                address: "",
                appointment_id: "b5acced5-cde9-4da4-8997-990715840737",
                consultationMethod: {
                    inPerson: true,
                    homeConsultation: false,
                    videoConsultation: false
                },
                dateOfBooking: "2023-03-31",
                dateOfConsultation: "2023-04-03",
                doctorName: "Dr.Thenmozhi",
                healthIssues: [],
                patient_age: "21",
                patient_email_address: "sangeetha1997@gmail.com",
                patient_gender: {
                    male: false,
                    female: true,
                    others: false
                },
                patient_mobile_number: "944553574",
                patient_name: "Sangeetha",
                timeOfBooking: "15:00"
            },
            {
                addDescription: "",
                address: "No.06, abcd steet, x-city",
                appointment_id: "fcb58cab-5b1d-45b4-a3e2-0f08b8b3c194",
                consultationMethod: {
                    inPerson: false,
                    homeConsultation: true,
                    videoConsultation: false
                },
                dateOfBooking: "2023-03-29",
                dateOfConsultation: "2023-04-04",
                doctorName: "Dr.Meera Raghavan",
                healthIssues: ["giddiness"],
                patient_age: "80",
                patient_email_address: "deepika.sriram@fssa.freshworks.com",
                patient_gender: {
                    male: false,
                    female: true,
                    others: false
                },
                patient_mobile_number: "8939094029",
                patient_name: "Gowri",
                timeOfBooking: "15:02"
            }
        ]
    ))
}