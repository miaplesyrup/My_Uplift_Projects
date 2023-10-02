

Introduction

MedXpress is a customer service app that efficiently facilitates the acquisition of prescribed medicines, tailored especially to the elderly, PWDs, and other patients who value their time and need a hassle-free option to get their medicines.

With the MedXpress app, physicians can conveniently access patient data and send digital prescriptions to the pharmacy. The pharmacy then prepares the medication and promptly notifies patients to collect their medicines, eliminating the need for patients to spend time and effort traveling to and from the doctor's clinic and pharmacy.


Database and API design

#| Action |      URL	                            |  HTTP Verb |   CRUD    |   Description
1| Create |/patientData/uploadPatientData           |   POST	 | Create    | Uploads patient data
2|	Read  |/patientData                             |   GET	     |  Read	 | Gets all patient data
3| Create |/userData/register                       |   POST     | Create	 | Creates new user
4|	Read  |/userData                                |   GET	     |  Read	 | Gets all user data
5| Create |/prescriptionData/uploadPrescriptionData |   POST	 | Create    | Uploads prescription data
6| Read	  |/prescriptionData                        |   GET	     |  Read	 | Gets all prescription  data
7| Update |/prescriptionData/updateStatus/:id       |  PATCH	 | Update	 | Updates the status of prescriptions from pending, ready, to completed
8| Update |/prescriptionData/archivePrescription/:id|  PATCH	 | Update	 |  Stores the completed prescriptions to the database


