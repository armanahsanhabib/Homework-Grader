/* eslint-disable no-undef */
import { calculateCGPA, calculateGrade } from '../utils/gradingFunctions';

// Test cases for calculateGrade function
describe('calculateGrade function', () => {
  it('should return A+ for marks >= 90', () => {
    expect(calculateGrade(95)).toBe('A+');
    expect(calculateGrade(100)).toBe('A+');
  });

  it('should return A for marks between 85 and 89', () => {
    expect(calculateGrade(87)).toBe('A');
    expect(calculateGrade(89)).toBe('A');
  });

  it('should return A- for marks between 80 and 84', () => {
    expect(calculateGrade(83)).toBe('A-');
    expect(calculateGrade(80)).toBe('A-');
  });

  it('should return B+ for marks between 75 and 79', () => {
    expect(calculateGrade(78)).toBe('B+');
    expect(calculateGrade(75)).toBe('B+');
  });

  it('should return B for marks between 70 and 74', () => {
    expect(calculateGrade(70)).toBe('B');
    expect(calculateGrade(74)).toBe('B');
  });

  it('should return B- for marks between 65 and 69', () => {
    expect(calculateGrade(68)).toBe('B-');
    expect(calculateGrade(65)).toBe('B-');
  });

  it('should return C+ for marks between 60 and 64', () => {
    expect(calculateGrade(64)).toBe('C+');
    expect(calculateGrade(60)).toBe('C+');
  });

  it('should return C for marks between 55 and 59', () => {
    expect(calculateGrade(55)).toBe('C');
    expect(calculateGrade(59)).toBe('C');
  });

  it('should return C- for marks between 50 and 54', () => {
    expect(calculateGrade(54)).toBe('C-');
    expect(calculateGrade(50)).toBe('C-');
  });

  it('should return D+ for marks between 45 and 49', () => {
    expect(calculateGrade(49)).toBe('D+');
    expect(calculateGrade(45)).toBe('D+');
  });

  it('should return D for marks between 40 and 44', () => {
    expect(calculateGrade(40)).toBe('D');
    expect(calculateGrade(44)).toBe('D');
  });

  it('should return F for marks below 40', () => {
    expect(calculateGrade(39)).toBe('F');
    expect(calculateGrade(0)).toBe('F');
  });
});

// Test cases for calculateCGPA function
describe('calculateCGPA function', () => {
  it('should return correct CGPA for valid marks', () => {
    expect(calculateCGPA(90, 85, 80, 75, 70)).toBe('3.60');
    expect(calculateCGPA(95, 90, 85, 80, 75)).toBe('3.80');
  });

  it('should return "0.00" if any subject is failed', () => {
    expect(calculateCGPA(90, 85, 80, 25, 70)).toBe('0.00');
    expect(calculateCGPA(40, 50, 60, 35, 45)).toBe('0.00');
  });

  it('should handle edge case where all subjects are failed', () => {
    expect(calculateCGPA(0, 0, 0, 0, 0)).toBe('0.00');
  });

  it('should handle edge case where all subjects have minimum passing marks', () => {
    expect(calculateCGPA(40, 40, 40, 40, 40)).toBe('1.00');
  });

  it('should handle edge case where all subjects have maximum marks', () => {
    expect(calculateCGPA(100, 100, 100, 100, 100)).toBe('4.00');
  });

  it('should handle edge case where all subjects have same passing marks', () => {
    expect(calculateCGPA(75, 75, 75, 75, 75)).toBe('3.30');
  });

  it('should handle edge case where one subject has maximum marks and others have minimum passing marks', () => {
    expect(calculateCGPA(100, 40, 40, 40, 40)).toBe('1.60');
  });

  it('should handle edge case where one subject has maximum marks and others are failed', () => {
    expect(calculateCGPA(100, 0, 0, 0, 0)).toBe('0.00');
  });

  it('should handle edge case where one subject has minimum passing marks and others are failed', () => {
    expect(calculateCGPA(40, 0, 0, 0, 0)).toBe('0.00');
  });

  it('should handle edge case where one subject has minimum passing marks and others have maximum marks', () => {
    expect(calculateCGPA(40, 100, 100, 100, 100)).toBe('3.40');
  });
});
