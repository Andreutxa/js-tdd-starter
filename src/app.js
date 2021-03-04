export class App {

  fizzBuzz (number) {

      if ( typeof number !== 'number') {
        return 'The parameter should be a number!';
      }

      if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
      } else if (number % 5 === 0) {
        return 'Buzz';
      } else if (number % 3 === 0) {
        return 'Fizz';
      } else {
        return number;
      }
    

  }

}