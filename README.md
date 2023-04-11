<h1> My project </h1>
This project is about doctor appointment booking website to book appointment with doctors.
The following are my wireframe, problem statement, userflow etc.
Wireframe:https://drive.google.com/file/d/1M8BX5Vc8cSGDFNPyk7VW1ZT6jlXG6OQB/view?usp=sharing
Userflow:https://drive.google.com/file/d/1PGCRRS1S6ls64qG4lZUgW-ePol0s916c/view?usp=sharing
problem statement : https://drive.google.com/file/d/1EKy_ycvJJjS5QxdueMZUpxC11XHqg28U/view?usp=sharing


1.User CRUD features:(completed✅)
### Registration of user's detail.
- Scenario: creating an account in my website.
    - Steps:
    
       1. go to signup option at the top right of the home page
       2. If there is no sign up option , go to login option at the same top right of home page.
       3. login page will appear. to register as new member click on new member link.
       4. Sign up page will appear. type the requirements and click on submit.
    
    - Expected Result:
    
        1. It will redirected to login page by showing "registered successfully" in an alert box
        2. If you already registered and if you try to register again by mistake, it will show "user already exists" in an alert box.
    


### Login of user
   - Scenario:user is to login.
   - Steps:
   
       1. Go to login option on the top right of the home page.
       2. Enter registered email address and created password if you are already registered.
       3. click on login button
   
   - Expected Result:
       1. An alert box with text ("logged in successfully") will display.
       2. It will redirect to homepage of the website
    

### View profile (read)
   - Scenario: Users can see their profile in profile page
   - Steps: 
   
      1. In the home page, you can see profile avatar on top right of the page.
      2. by hovering on profile avatar,a dropdown will appear, on that click profile option
   
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
   
       1. Click on delete profile in the profile page
   
   - Expected result:
   
       1. The user's details will be deleted by showing "deleted account/details successfully" in an alert box
       2. It will redirect to home page 
   

2.Hospital features:(completed ✅)
### View hospital list
   - Scenarios:Users wants to view hospital list 
     - Steps:
     
       1. In home page, click on hospital option, a dropdown will appear
       2. In that dropdown, click on "all" option
     
     - Expected result:
     
       1. They can see list of hospitals
     

3.Doctor features:(completed ✅)
### View doctors list
   - Scenarios:Users want to see list of doctors of hospitals which they chose.
     - Steps:
     
       1. chose any of the hospitals what you want
     
     - Expected result:
     
       1. They can see list of doctors of particular hospital
     

4.Appointment features:(completed ✅)
### Book appointment
   - Scenario: Users want to book appointment with doctor whom they chose.
     - Steps:
     1. choose any doctor you want to book appointment with.
     2. The appointment form will appear.
     3. Enter the requirements in the form and click on Book appointment
   - Expected result:
     1. An alert box with text "Appointment booked successfully!! you can see past appointments in history" will appear.
     2. It will redirect to home page

### View past appointments in history page
   - Scenario - 1: User wants to check the history of appointment list.
     - Steps:
     1. In home page click on profile avatar , a dropdown will appear.
     2. In that dropdown , click on history.
   - Expected result:
     1. You can see list of past appointments in history page.
   - Scenario - 2: User wants to see details of particular appointment.
     - Steps:
     1. Click on view history button in the particular appointment.
   - Expected result:
     1. You can see the details of the appointment.

### Edit appointment 
   - Scenario: User wants to edit their appointment as if they sent any details by mistake instead of something.
     - Steps:
     1. Edit the fields which you want to edit.
     2. Click on update and resend form.
   - Expected result:
     1. An alert box with text "updated and resent successfully" will appear.
     2. It will redirect to homepage.

### Delete appointment
   - Senario: User wants to delete the particular appointment.
     - Steps:
     1. Click on profile avatar on homepage and click the history option in the dropdown
     2. It will redirect to history page.
     3. Click on the appointment you want to delete.
     4. It will redirect to appointment details.
     5. Click on delete appointment button.
   - Expected result:
     1. An alert box with text "deleted appointment successfully" will appear
     2. It will redirect to home page.


2.Hospital CRUD features(completed ✅):
    Uploading of hospital details
    Read hospital list
    read hospital details
    Update/Edit details 
    Delete  details. 

3.Doctor CRUD features(completed ✅):
    Creating doctor's details.
    read doctor's list
    Read details
    Update/edit details
    Delete details.

4. Appointment CRUD features (completed ✅):
    Create appointment
    Read appointment in history page
    Update appointment in history page
    Delete history of that particular appointment.