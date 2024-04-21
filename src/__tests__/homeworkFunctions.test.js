/* eslint-disable no-undef */
import { calculateMarks } from '../utils/homewrokFunctions';

// Test case for calculating marks with all right answers
test('calculateMarks with all right answers', () => {
  const rightAnswers = 10; // All 10 answers are correct
  const wrongAnswers = 0; // No wrong answers
  const expectedMarks = 100; // Expected total marks

  const result = calculateMarks(rightAnswers, wrongAnswers);
  expect(result).toBe(expectedMarks);
});

// Test case for calculating marks with all wrong answers
test('calculateMarks with all wrong answers', () => {
  const rightAnswers = 0; // No right answers
  const wrongAnswers = 10; // All 10 answers are incorrect
  const expectedMarks = 0; // Expected total marks

  const result = calculateMarks(rightAnswers, wrongAnswers);
  expect(result).toBe(expectedMarks);
});

// Test case for calculating marks with a mix of right and wrong answers (half-half)
test('calculateMarks with a mix of right and wrong answers (half-half)', () => {
  const rightAnswers = 5; // 5 right answers
  const wrongAnswers = 5; // 5 wrong answers
  const expectedMarks = 25; // Expected total marks

  const result = calculateMarks(rightAnswers, wrongAnswers);
  expect(result).toBe(expectedMarks);
});

// Test case for calculating marks with more right answers than wrong answers
test('calculateMarks with more right answers than wrong answers', () => {
  const rightAnswers = 8; // 8 right answers
  const wrongAnswers = 2; // 2 wrong answers
  const expectedMarks = 70; // Expected total marks

  const result = calculateMarks(rightAnswers, wrongAnswers);
  expect(result).toBe(expectedMarks);
});

// Test case for calculating marks with more wrong answers than right answers
test('calculateMarks with more wrong answers than right answers', () => {
  const rightAnswers = 2; // 2 right answers
  const wrongAnswers = 8; // 8 wrong answers
  const expectedMarks = 0; // Expected total marks

  const result = calculateMarks(rightAnswers, wrongAnswers);
  expect(result).toBe(expectedMarks);
});
