function getGrade() {
    
    switch (true) {
        case (studentScore >= 90):
        return "Grade A";
        case (studentScore >= 75):
        return "Grade B";
        case (studentScore >= 50):
        return "Grade C";
        default:
        return "Fail";
    }
}

// declare and initialize variable
let studentScore = 82;
// call function and print result
console.log(getGrade());