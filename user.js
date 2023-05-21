class User{
    firstName
    lastName
    email
    mobileNumber
    password

    validateFirstName(firstName){
        const pattern = new RegExp(/[a-z]/)
        return pattern.test(firstName)
    }
    validateLastName(lastName){
        const pattern = new Regexp(/[a-z]/)
        return pattern.test(lastName)
    }
    validatePhoneNumber(phoneNumber){
        const pattern = new Regexp(/[6-9]{1}[0-9]{9}/)
        return pattern.test(phoneNumber)
    }
    validatePassword(password){
        const pattern = new Regexp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
        return pattern.test(password)
    }
    validateEmail(emailAddress){
        const pattern = new Regexp(/[a-z]/)
        return pattern.test(emailAddress)
    }
}

const $firstName = "Deepika"
const $lastName = "Sriram"
const $email = "vaishnavisriram76@gmail.com"
const $phoneNumber = "7397314532"
const $password = "asdfghjklasdfghjkl;"

const user = new User();
if(user.validateFirstName($firstName)){
    console.log("Valid firstname")
}
else{
    console.log("firstnameis not valid")
}
