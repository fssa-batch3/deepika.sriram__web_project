<h1> My project </h1>
This project is about doctor appointment booking website to book appointment with doctors.
The following are my wireframe, problem statement, userflow etc.
Wireframe:https://drive.google.com/file/d/1M8BX5Vc8cSGDFNPyk7VW1ZT6jlXG6OQB/view?usp=sharing
Userflow:https://drive.google.com/file/d/1PGCRRS1S6ls64qG4lZUgW-ePol0s916c/view?usp=sharing
problem statement : https://drive.google.com/file/d/1EKy_ycvJJjS5QxdueMZUpxC11XHqg28U/view?usp=sharing


1.User CRUD features:(✅)
### Registration of user's detail.
- Scenario: creating an account in my website.
    - Steps:
    
       1. Navigate to signup (register) page.
       2. Enter required details in the form.
       3. Click on submit button
    
    - Expected Result:
    
        1. It will redirected to login page by showing "registered successfully" in an alert box
        2. If you already registered and if you try to register again by mistake, it will show "user already exists" in an alert box
    


### Login of user
   - Scenario:user is to login.
   - Steps:
   
       1. Navigate to login page
       2. Enter registered email address and created password
       3. click on login button
   
   - Expected Result:
   
       1. It will redirect to homepage of the website
    

### View profile (read)
   - Scenario: Users can see their profile in profile page
   - Steps: 
   
      1. In the home page, you can see profile avatar on top right of the page.
      2. A dropdown will appear, on that click profile option
   
   - Expected result
   
      1. You can see ur profile which some of the  data is pre-filled.
   



### Edit profile
   - Scenario:User wants to edit their profile.
   - Steps:
   
       1. Click on edit profile option in that profile page
       2. It will move to edit profile page
       3. The user can edit their details 
       4. press on "update profile" 
   
   Expected result
   
       1. the profile  of the user will be updated by showing "updated successfully" in an alert box
   

### Delete profile
   - Scenario: User wants to delete their profile (nearly same as deleting their account).
   - Steps:
   
       1. Click on delete profile 
   
   - Expected result:
   
       1. The user's details will be deleted by showing "deleted account/details successfully" in an alert box
       2. It will redirect to home page 
   

2.Hospital features:(✅)
### View hospital list
   - Scenarios:Users wants to view hospital list 
     - Steps:
     
       1. In home page, click on hospital option, a dropdown will appear
       2. In that dropdown, click on "all" option
     
     - Expected result:
     
       1. They can see list of hospitals
     

3.Doctor features:(✅)
### View doctors list
   - Scenarios:Users want to see list of doctors of hospitals which they chose.
     - Steps:
     
       1. chose any of the hsopitals what you want
     
     - Expected result:
     
       1. They can see list of doctors of particular hospital
     

4.Appointment features:(❎).


<!-- 2.Hospital CRUD features:
    Uploading of hospital details
    Read hospital list
    read hospital details
    Update/Edit details 
    Delete  details. 

3.Doctor CRUD features:
    Creating doctor's details.
    read doctor's list
    Read details
    Update/edit details
    Delete details. -->

<!-- 4. Appointment CRUD features:
    Create appointment
    Read appointment in history page
    Update appointment in history page
    Delete history of that particular appointment -->