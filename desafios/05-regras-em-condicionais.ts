const maxValuePassedTheSchoolYear = 7
const currentGradeStudent = 10

const limitNumberAbsensesToFailSchool = 100
const currentStudentNumberAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  if (currentGradeStudent < maxValuePassedTheSchoolYear) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  }

  if(currentStudentNumberAbsenses > limitNumberAbsensesToFailSchool) {
    return { error: true, message: 'Student was not approved because of his absenses'}
  }

  return { error: false, message: 'Student was approved :)'}
}

console.log(checkIfStudentPassedTheSchoolYear())