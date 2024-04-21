// Function to calculate marks based on right and wrong answers
export const calculateMarks = (rightAnswers, wrongAnswers) => {
  const totalMarks = 100; // Total marks
  const numberOfQuestions = 10; // Total number of questions

  // Calculate marks for each question
  const marksPerQuestion = totalMarks / numberOfQuestions;

  // Calculate marks for right and wrong answers
  const marksForRightAnswers = rightAnswers * marksPerQuestion;
  const marksForWrongAnswers = -wrongAnswers * (marksPerQuestion / 2); // Deduct half marks for each wrong answer

  // Calculate total obtained marks
  const totalObtainedMarks = Math.max(0, marksForRightAnswers + marksForWrongAnswers); // Ensure total marks are non-negative

  return totalObtainedMarks;
};
