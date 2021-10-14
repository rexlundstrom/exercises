const marks = [90, 85, 30];

const calculateGrade = marks => {
    let sumOfMarks = 0;
    for (const mark of marks) {
        sumOfMarks += mark;
    }
    let averageGrade = sumOfMarks / marks.length;
    if (averageGrade < 60) return 'F';
    else if (averageGrade < 70) return 'D';
    else if (averageGrade < 80) return 'C';
    else if (averageGrade < 90) return 'B';
    else if (averageGrade <= 100) return 'A';
    else if (averageGrade > 100) return 'A+';

}

console.log(calculateGrade(marks));