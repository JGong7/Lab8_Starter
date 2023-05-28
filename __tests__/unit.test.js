// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('A phone number with no hyphens is not allowed ', () => {
    expect(functions.isPhoneNumber('9289289283')).toBe(false);
  });
test('A phone number with length greater than 10 is not allowed ', () => {
    expect(functions.isPhoneNumber('92892892832')).toBe(false);
  });
test('A phone number with parenthesis around its area code is allowed ', () => {
    expect(functions.isPhoneNumber('(928)848-8282')).toBe(true);
  });
test('A phone number with no area code is allowed ', () => {
    expect(functions.isPhoneNumber('848-8282')).toBe(true);
  });
test('An email with no @ is not allowed ', () => {
    expect(functions.isEmail('yugongucsd.edu')).toBe(false);
  });
test('An email with no . is not allowed ', () => {
    expect(functions.isEmail('yugong@ucsdedu')).toBe(false);
  });
test('An email with 3 letter TLD is allowed ', () => {
    expect(functions.isEmail('yugong@ucsd.edu')).toBe(true);
  });
test('An email with 2 letter TLD is allowed ', () => {
    expect(functions.isEmail('yugong@ucsd.co')).toBe(true);
  });
test('A password starting with a @ is not allowed ', () => {
    expect(functions.isStrongPassword('@jeawaksjeij2')).toBe(false);
  });
test('A password with a length of 2 is not allowed ', () => {
    expect(functions.isStrongPassword('ed')).toBe(false);
  });
test('A password with only letters is allowed ', () => {
    expect(functions.isStrongPassword('abcedtefgt')).toBe(true);
  });
test('A password with a underscore is allowed ', () => {
    expect(functions.isStrongPassword('ed_edjskj')).toBe(true);
  });
test('A date with 3 digit year is not allowed', () =>{
    expect(functions.isDate('14/02/203')).toBe(false);
});
test('A date with 3 digit month is not allowed', () =>{
    expect(functions.isDate('14/023/2032')).toBe(false);
});
test('A date with 2 digit month is allowed', () =>{
    expect(functions.isDate('14/10/2032')).toBe(true);
});
test('A date with 4 digit year is allowed', () =>{
    expect(functions.isDate('03/10/2032')).toBe(true);
});
test('A color code with 4 digits is not allowed', () =>{
    expect(functions.isHexColor('#3333')).toBe(false);
});
test('A color code with 2 #s is not allowed', () =>{
    expect(functions.isHexColor('##333')).toBe(false);
});
test('A color code with 3 digits is allowed', () =>{
    expect(functions.isHexColor('#333')).toBe(true);
});
test('A color code with 6 digits is allowed', () =>{
    expect(functions.isHexColor('#333333')).toBe(true);
});