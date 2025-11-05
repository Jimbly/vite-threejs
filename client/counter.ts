import { helper, type TestType } from '../common/commonfile';

export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0;
  let foo: TestType = {
    n: 1,
    s: 's',
  };
  const setCounter = (count: number): void => {
    counter = count;
    foo.n = helper(foo.n);
    element.innerHTML = `count was ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
