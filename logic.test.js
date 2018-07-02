import logic from"./logic";

test('should return"fizz" if number cointains 3 or modulo 3 equals to 0', () => {
  const value = logic(13);
  expect(value).toEqual(["fizz"]);
});

test('should return"buzz" if cointains 5 or modulo 5 equals to 0', () => {
  const value = logic(25);
  expect(value).toEqual(["buzz"]);
});

test('should return"fizzbuzz" if modulo 3 and modulo 5 equals to 0', () => {
  const value = logic(15);
  expect(value).toEqual(["fizz buzz"]);
});

test('should return"lucky" id number contains 3 or 5 and modulo of 5 and 3 equals to 0', () => {
    const value = logic(15);
    expect(value).toEqual(["lucky"]);
});

test('should return"fizz fizz" if modulo 3 equals to 0 and number cointains 3 ', () => {
  const value = logic(3);
  expect(value).toEqual(["fizz fizz"]);
});

test('should return "buzz buzz" if modulo 5 equals to 0 and number cointains 5', () => {
  const value = logic(5);
  expect(value).toEqual(["buzz buzz"]);
});

test('should return the same array as on site', () => {
    const value = logic([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    expect(value).toEqual([1, 2,"fizz fizz", 4,"buzz buzz","fizz", 7,8,"fizz","buzz", 11,"fizz","fizz", 14,"lucky","fizz", 17," fizz", 19," buzz"])
})
  