import { Test } from './app';
import { App } from './app';

describe('App tests', () => {
  const test = new App();

  it('should say hello and name', () => {
    expect(test.getName('Jon Snow')).toEqual('Hello Jon Snow');
  });
});
