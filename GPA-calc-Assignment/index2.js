const course = { };

course.english = prompt ("Enter your English grade");
course.french = prompt ("Enter your French grade");
course.mathematics = prompt ("Enter your Maths grade");
course.physics = prompt ("Enter your Physics grade");
course.chemistry = prompt ("Enter your Chemistry grade");
course.biology = prompt ("Enter your Biology grade");
course.workshop = prompt ("Enter your Workshop grade");
course.technicalDrawing = prompt ("Enter your Technical Drawing grade");
course.humanities = prompt ("Enter your Humanities grade");

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

const englishUnit = courseUnit.english * grade[course.english];
const frenchUnit = courseUnit.french * grade[course.french];
const mathematicsUnit = courseUnit.mathematics * grade[course.mathematics];
const physicsUnit = courseUnit.physics * grade[course.physics];
const chemistryUnit = courseUnit.chemistry * grade[course.chemistry];
const biologyUnit = courseUnit.biology * grade[course.biology];
const workshopUnit = courseUnit.workshop * grade[course.workshop];
const technicalDrawingUnit = courseUnit.technicalDrawing * grade[course.technicalDrawing];
const humanitiesUnit = courseUnit.humanities * grade[course.humanities];

const totalPoints = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

const GPA = totalPoints / totalUnits;

document.write(GPA);