const data = {
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
}

let ageClassification = data.age;

if ((data.age >= 0) && (data.age <= 7)) {
    ageClassification = ("toddler");
}
else if ((data.age >= 8) && (data.age <= 12)) {
    ageClassification = ("adolesecent");
}
else if ((data.age >= 13) && (data.age <= 19)) {
    ageClassification = ("teenager");
}
else if ((data.age >= 20) && (data.age <= 25)) {
    ageClassification = ("baby adult");
}
else if ((data.age >= 26) && (data.age <= 34)) {
    ageClassification = ("adult");
}
else if ((data.age >= 35) && (data.age <= 55)) {
    ageClassification = ("midlife crisis");
}
else {
    ageClassification = ("ancestor");
}

const userDetails = [data, ageClassification];

console.log(userDetails);