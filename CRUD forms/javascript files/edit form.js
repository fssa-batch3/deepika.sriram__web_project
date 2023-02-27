let unique = document.getElementById("uuid").value;
localStorage.setItem('unique_id_hosp',unique);

hospital_detail = JSON.parse(localStorage.getItem('hospital_detail'));
unique_2=localStorage.getItem('unique_id');
for(i=0;i<hospital_detail.length;i++){
    if(data.unique_2 == data.hospital_detail[i]["uuid"]){
        document.getElementById("hosp_name").value = hospital_detail[i]["hospital_name"];
    }
}