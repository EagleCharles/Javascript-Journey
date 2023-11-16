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

const englishUnit = computeStudentScore("English", courseUnit.english);
const frenchUnit = computeStudentScore("French", courseUnit.french);
const mathematicsUnit = computeStudentScore("Maths", courseUnit.maths);
const physicsUnit = computeStudentScore("Physics", courseUnit.physics);
const chemistryUnit = computeStudentScore("Chemistry", courseUnit.chemistry);
const biologyUnit = computeStudentScore("Biology", courseUnit.biology);
const workshopUnit = computeStudentScore("Workshop", courseUnit.workshop);
const technicalDrawingUnit = computeStudentScore("Technical Drawing", courseUnit.technicalDrawing);
const humanitiesUnit = computeStudentScore("Humanities", courseUnit.humanities);

function computeStudentScore(course, units) {
    let grade = fetchUserGrade(course);

    let score;
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

function fetchUserGrade(course) {
    let promptMessage = "What was your grade in " + course;
    let grade = prompt(promptMessage);

    while (!isValid(grade)) {
        promptMessage = "Incorrect value, Please type in your grade in " + course;
        grade = prompt(promptMessage);
    }
    return grade;
}

function isValid(grade) {
    let validity = grade === 'A' ||
                    grade === 'B' ||
                    grade === 'C' ||
                    grade === 'D' ||
                    grade === 'E' ||
                    grade === 'F';

    return validity;
}

// function enterCorrectGrade(gradeChecker) {
//     while ((gradeChecker !== 'A') && (gradeChecker !== 'B') && (gradeChecker !== 'C') && (gradeChecker !== 'D') && (gradeChecker !== 'E') && (gradeChecker !== 'F')) {
//         gradeChecker = prompt("Incorrect grade value. please re-enter your appropriate grade (Can only be A, B, C, D, E or F)");
//     }

//     return gradeChecker;
// }


const totalPoints = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

const GPA = totalPoints / totalUnits;

document.write(GPA);