const course = {
    english: prompt ("Enter your English grade"),
    french: prompt ("Enter your French grade"),
    mathematics: prompt ("Enter your Maths grade"),
    physics: prompt ("Enter your Physics grade"),
    chemistry: prompt ("Enter your Chemistry grade"),
    biology: prompt ("Enter your Biology grade"),
    workshop: prompt ("Enter your Workshop grade"),
    technicalDrawing: prompt ("Enter your Technical Drawing grade"),
    humanities: prompt ("Enter your Humanities grade"),
}

const courseUnit = {
    english: 2,
    french: 1,
    mathematics: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}

const grade = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
}

let totalUnits = 21;

let englishUnit = course.english; 

if (course.english === "A") {
    englishUnit = courseUnit.english * grade.A;
}
else if (course.english === "B") {
    englishUnit = courseUnit.english * grade.B;
}
else if (course.english === "C") {
    englishUnit = courseUnit.english * grade.C;
}
else if (course.english === "D") {
    englishUnit = courseUnit.english * grade.D;
}
else if (course.english === "E") {
    englishUnit = courseUnit.english * grade.E;
}
else {
    englishUnit = courseUnit.english * grade.F;
}


let frenchUnit = course.french; 

if (course.french === "A") {
    frenchUnit = courseUnit.french * grade.A;
}
else if (course.french === "B") {
    frenchUnit = courseUnit.french * grade.B;
}
else if (course.french === "C") {
    frenchUnit = courseUnit.french * grade.C;
}
else if (course.french === "D") {
    frenchUnit = courseUnit.french * grade.D;
}
else if (course.french === "E") {
    frenchUnit = courseUnit.french * grade.E;
}
else {
    frenchUnit = courseUnit.french * grade.F;
}


let mathematicsUnit = course.mathematics; 

if (course.mathematics === "A") {
    mathematicsUnit = courseUnit.mathematics * grade.A;
}
else if (course.mathematics === "B") {
    mathematicsUnit = courseUnit.mathematics * grade.B;
}
else if (course.mathematics === "C") {
    mathematicsUnit = courseUnit.mathematics * grade.C;
}
else if (course.mathematics === "D") {
    mathematicsUnit = courseUnit.mathematics * grade.D;
}
else if (course.mathematics === "E") {
    mathematicsUnit = courseUnit.mathematics * grade.E;
}
else {
    mathematicsUnit = courseUnit.mathematics * grade.F;
}


let physicsUnit = course.physics; 

if (course.physics === "A") {
    physicsUnit = courseUnit.physics * grade.A;
}
else if (course.physics === "B") {
    physicsUnit = courseUnit.physics * grade.B;
}
else if (course.physics === "C") {
    physicsUnit = courseUnit.physics * grade.C;
}
else if (course.physics === "D") {
    physicsUnit = courseUnit.physics * grade.D;
}
else if (course.physics === "E") {
    physicsUnit = courseUnit.physics * grade.E;
}
else {
    physicsUnit = courseUnit.physics * grade.F;
}


let chemistryUnit = course.chemistry; 

if (course.chemistry === "A") {
    chemistryUnit = courseUnit.chemistry * grade.A;
}
else if (course.chemistry === "B") {
    chemistryUnit = courseUnit.chemistry * grade.B;
}
else if (course.chemistry === "C") {
    chemistryUnit = courseUnit.chemistry * grade.C;
}
else if (course.chemistry === "D") {
    chemistryUnit = courseUnit.chemistry * grade.D;
}
else if (course.chemistry === "E") {
    chemistryUnit = courseUnit.chemistry * grade.E;
}
else {
    chemistryUnit = courseUnit.chemistry * grade.F;
}


let biologyUnit = course.biology; 

if (course.biology === "A") {
    biologyUnit = courseUnit.biology * grade.A;
}
else if (course.biology === "B") {
    biologyUnit = courseUnit.biology * grade.B;
}
else if (course.biology === "C") {
    biologyUnit = courseUnit.biology * grade.C;
}
else if (course.biology === "D") {
    biologyUnit = courseUnit.biology * grade.D;
}
else if (course.biology === "E") {
    biologyUnit = courseUnit.biology * grade.E;
}
else {
    biologyUnit = courseUnit.biology * grade.F;
}


let workshopUnit = course.workshop; 

if (course.workshop === "A") {
    workshopUnit = courseUnit.workshop * grade.A;
}
else if (course.workshop === "B") {
    workshopUnit = courseUnit.workshop * grade.B;
}
else if (course.workshop === "C") {
    workshopUnit = courseUnit.workshop * grade.C;
}
else if (course.workshop === "D") {
    workshopUnit = courseUnit.workshop * grade.D;
}
else if (course.workshop === "E") {
    workshopUnit = courseUnit.workshop * grade.E;
}
else {
    workshopUnit = courseUnit.workshop * grade.F;
}


let technicalDrawingUnit = course.technicalDrawing; 

if (course.technicalDrawing === "A") {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.A;
}
else if (course.technicalDrawing === "B") {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.B;
}
else if (course.technicalDrawing === "C") {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.C;
}
else if (course.technicalDrawing === "D") {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.D;
}
else if (course.technicalDrawing === "E") {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.E;
}
else {
    technicalDrawingUnit = courseUnit.technicalDrawing * grade.F;
}


let humanitiesUnit = course.humanities; 

if (course.humanities === "A") {
    humanitiesUnit = courseUnit.humanities * grade.A;
}
else if (course.humanities === "B") {
    humanitiesUnit = courseUnit.humanities * grade.B;
}
else if (course.humanities === "C") {
    humanitiesUnit = courseUnit.humanities * grade.C;
}
else if (course.humanities === "D") {
    humanitiesUnit = courseUnit.humanities * grade.D;
}
else if (course.humanities === "E") {
    humanitiesUnit = courseUnit.humanities * grade.E;
}
else {
    humanitiesUnit = courseUnit.humanities * grade.F;
}

const totalPoints = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

const GPA = totalPoints / totalUnits;

document.write(GPA);