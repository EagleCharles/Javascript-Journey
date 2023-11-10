const english = prompt ("Enter you grade in English");
const englishGrade = enterCorrectGrade(english);

const french = prompt ("Enter you grade in French");
const frenchGrade = enterCorrectGrade(french);

const maths = prompt ("Enter you grade in Maths");
const mathsGrade = enterCorrectGrade(maths);

const physics = prompt ("Enter you grade in Physics");
const physicsGrade = enterCorrectGrade(physics);

const chemistry = prompt ("Enter you grade in Chemistry");
const chemistryGrade = enterCorrectGrade(chemistry);

const biology = prompt ("Enter you grade in Biology");
const biologyGrade = enterCorrectGrade(biology);

const workshop = prompt ("Enter you grade in Workshop");
const workshopGrade = enterCorrectGrade(workshop);

const technicalDrawing = prompt ("Enter you grade in technicalDrawing");
const technicalDrawingGrade = enterCorrectGrade(technicalDrawing);

const humanities = prompt ("Enter you grade in humanities");
const humanitiesGrade = enterCorrectGrade(humanities);



const courseUnit = {
    english: 2,
    french: 1,
    maths: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}

let totalUnits = 21;

const englishUnit = computeStudentScore(englishGrade, courseUnit.english);
const frenchUnit = computeStudentScore(frenchGrade, courseUnit.french);
const mathematicsUnit = computeStudentScore(mathsGrade, courseUnit.maths);
const physicsUnit = computeStudentScore(physicsGrade, courseUnit.physics);
const chemistryUnit = computeStudentScore(chemistryGrade, courseUnit.chemistry);
const biologyUnit = computeStudentScore(biologyGrade, courseUnit.biology);
const workshopUnit = computeStudentScore(workshopGrade, courseUnit.workshop);
const technicalDrawingUnit = computeStudentScore(technicalDrawingGrade, courseUnit.technicalDrawing);
const humanitiesUnit = computeStudentScore(humanitiesGrade, courseUnit.humanities);

function computeStudentScore(grade, units) {
    if (grade === 'A') {
        score = 5 * units;
    }
    else if (grade === 'B') {
        score = 4 * units;
    }
    else if (grade === 'C') {
        score = 3 * units;
    }
    else if (grade === 'D') {
        score = 2 * units;
    }
    else if (grade === 'E') {
        score = 1 * units;
    }
    else {
        score = 0;
    }

    return score;
}

function enterCorrectGrade(gradeChecker) {
    while ((gradeChecker !== 'A') && (gradeChecker !== 'B') && (gradeChecker !== 'C') && (gradeChecker !== 'D') && (gradeChecker !== 'E') && (gradeChecker !== 'F')) {
        gradeChecker = prompt("Incorrect grade value. please re-enter your appropriate grade (Can only be A, B, C, D, E or F)");
    }

    return gradeChecker;
}


const totalPoints = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

const GPA = totalPoints / totalUnits;

document.write(GPA);