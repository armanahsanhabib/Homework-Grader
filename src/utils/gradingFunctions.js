// Function to calculate the grade based on marks
export const calculateGrade = (marks) => {
    if (marks >= 90) {
      return "A+";
    } else if (marks >= 85) {
      return "A";
    } else if (marks >= 80) {
      return "A-";
    } else if (marks >= 75) {
      return "B+";
    } else if (marks >= 70) {
      return "B";
    } else if (marks >= 65) {
      return "B-";
    } else if (marks >= 60) {
      return "C+";
    } else if (marks >= 55) {
      return "C";
    } else if (marks >= 50) {
      return "C-";
    } else if (marks >= 45) {
      return "D+";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "F";
    }
  };
  
  // Function to calculate CGPA based on subject grades
  export const calculateCGPA = (math, science, english, history, geography) => {
    const gradePoints = {
        "A+": 4.0,
        A: 4.0,
        "A-": 3.7,
        "B+": 3.3,
        B: 3.0,
        "B-": 2.7,
        "C+": 2.3,
        C: 2.0,
        "C-": 1.7,
        "D+": 1.3,
        D: 1.0,
        F: 0,
      };
    
      // Check if any subject is failed
      if (
        calculateGrade(math) === "F" ||
        calculateGrade(science) === "F" ||
        calculateGrade(english) === "F" ||
        calculateGrade(history) === "F" ||
        calculateGrade(geography) === "F"
      ) {
        return "0.00";
      }
    
      // Calculate total grade points
      const totalGradePoints =
        gradePoints[calculateGrade(math)] +
        gradePoints[calculateGrade(science)] +
        gradePoints[calculateGrade(english)] +
        gradePoints[calculateGrade(history)] +
        gradePoints[calculateGrade(geography)];
    
      // Calculate CGPA
      const averageCGPA = totalGradePoints / 5;
      return averageCGPA.toFixed(2);
  };
  