import { App } from './app';

describe('App tests', () => {
  
  const app = new App();

  it ('Should print Fizz', () => {
    const response = app.fizzBuzz(3);
    expect(response).toEqual('Fizz')
  })

  it ('Should print Buzz', () => {
    const response = app.fizzBuzz(5);
    expect(response).toBe('Buzz')
  })

  it ('Should print FizzBuzz', () => {
    const response = app.fizzBuzz(15);
    expect(response).toBe('FizzBuzz')
  })

  it ('Should print the number 2', () => {
    const response = app.fizzBuzz(2);
    expect(response).toBe(2)
  })

  it ('Should print => The parameter should be a number!', () => {
    const response = app.fizzBuzz('apple');
    expect(response).toBe('The parameter should be a number!')
  })

  it ('Should print => The parameter should be a number!', () => {
    const response = app.fizzBuzz(true);
    expect(response).toBe('The parameter should be a number!')
  })

  it ('Should not print the number 7', () => {
    const response = app.fizzBuzz(3);
    expect(response).not.toBe(3)
  })

  it ('Should not print Fizz', () => {
    const response = app.fizzBuzz(17);
    expect(response).not.toBe('Fizz')
  })

  it ('Should not print Buzz', () => {
    const response = app.fizzBuzz(12);
    expect(response).not.toBe('Buzz')
  })


}) 