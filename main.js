function moreThan5(num) {
  return 5<num;
}

function topScore(score,topScore) {
  return score>topScore;
}

function isInDanger(grade) {
  return 60<=grade && grade<=71;
}

function isCoasting(num) {
  return 71<num && 83>=num;
}

function isSucceeding(grade) {
  return grade>=84 && grade<=92;
}

function isFailing(grade) {
  return grade<60;
}

function isAcing(grade) {
  return grade>92;
}

function isStudent() {

}

function isTeacher() {

}

function isAdmin() {

}

function isElementary() {

}

function notAnElementarySchoolAdministrator() {

}

function isMiddleSchoolTeacher() {

}

function differentPeople() {

}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}