import { App } from './app';

describe('App tests', () => {
  const app = new App();

  it('should print fizz', () => {
    const response = app.fizzBuzz(6);
    expect(response).toBe('fizz');
  });

  it('should not print fizz', () => {
    const response = app.fizzBuzz(4);
    expect(response).not.toBe('fizz');
  });

  it('should print buzz', () => {
    const response = app.fizzBuzz(5);
    expect(response).toBe('buzz');
  });

  it('should not print buzz', () => {
    const response = app.fizzBuzz(3);
    expect(response).not.toBe('buzz');
  });

  it('should print fizzbuzz', () => {
    const response = app.fizzBuzz(15);
    expect(response).toBe('fizzbuzz');
  });

  it('should print fizzbuzz', () => {
    const response = app.fizzBuzz(7);
    expect(response).toBe('7');
  });
});

