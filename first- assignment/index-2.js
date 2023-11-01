const userDetails = {
    firstName: prompt ("Enter your First Name"),
    lastName: prompt ("Enter your Last Name"),
    middleName: prompt ("Enter your Middle Name"),
    dateOfBirth: prompt ("Enter your Date of Birth"),
    maritalStatus: prompt ("Enter your marital status"),
    weight: prompt ("Enter you weight"),
    height: prompt ("enter your height"),
    highestAcademicQualification: prompt ("Enter your Academic Qualification"),
    identificationNumber: prompt ("Enter Identification Number"),
    age: prompt ("Enter your age"),
    // ageClassification: ("No age classification"),
}

if ((userDetails.age >= 0) && (userDetails.age <= 7)) {
    userDetails.ageClassification = ("toddler");
}
else if ((userDetails.age >= 8) && (userDetails.age <= 12)) {
    userDetails.ageClassification = ("adolesecent");
}
else if ((userDetails.age >= 13) && (userDetails.age <= 19)) {
    userDetails.ageClassification = ("teenager");
}
else if ((userDetails.age >= 20) && (userDetails.age <= 25)) {
    userDetails.ageClassification = ("baby adult");
}
else if ((userDetails.age >= 26) && (userDetails.age <= 34)) {
    userDetails.ageClassification = ("adult");
}
else if ((userDetails.age >= 35) && (userDetails.age <= 55)) {
    userDetails.ageClassification = ("midlife crisis");
}
else {
    userDetails.ageClassification = ("ancestor");
}

console.log(userDetails);