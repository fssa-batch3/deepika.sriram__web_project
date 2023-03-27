function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    let hospital_name=document.getElementById("hosp_name").value.trim();
    address=document.getElementById("address").value.trim();
    contact_number=document.getElementById("con_no").value.trim();
    alternate = document.getElementById("alt").value.trim();
    link_file=document.getElementById("link_file").value.trim();
    email_address=document.getElementById("hosp_email").value.trim();
    image_link = document.getElementById("img_file").value.trim();
    uuid = uuidv4();
     

    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let hospital_detail = JSON.parse(localStorage.getItem('hospital_detail')) || [];
    

    // hear we give some condition for uploading details to restict same unique id
    let exist = hospital_detail.some(data =>
            data.hospital_name.trim().toLowerCase() == hospital_name.toLowerCase() ||
            // data.address.trim().toLowerCase() === address.toLowerCase() ||
            // data.contact_number.trim().toLowerCase() === contact_number.toLowerCase() ||
            // data.email_address.trim().toLowerCase() == email_address.toLowerCase() ||
            data.image_link.trim().toLowerCase() == image_link.toLowerCase() 
        );

    // if condition fail
    if(!exist){
        
        hospital_detail.push({hospital_name,address,contact_number,alternate,link_file,email_address,image_link,uuid});
        
        localStorage.setItem("unique_id",hospital_name);
        localStorage.setItem('hospital_detail', JSON.stringify(hospital_detail));
       
        document.querySelector('form').reset();
        alert('Detail submitted Successfully✅' );
        location.href="./edit form for hospital.html"

    }
    // if condition pass
    else{
        alert('hospital detail already exist!!');
        document.querySelector('form').reset();
    }

}