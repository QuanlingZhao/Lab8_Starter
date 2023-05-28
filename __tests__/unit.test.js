// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('isPhoneNumber-True-1', () => {
  expect(functions.isPhoneNumber("626-7846765")).toBe(true);
});

test('isPhoneNumber-True-2', () => {
  expect(functions.isPhoneNumber("256-7965476")).toBe(true);
});

test('isPhoneNumber-False-1', () => {
  expect(functions.isPhoneNumber("32redadf")).toBe(false);
});

test('isPhoneNumber-False-2', () => {
  expect(functions.isPhoneNumber("wqef34w3edr")).toBe(false);
});



//isEmail
test('isEmail-True-1', () => {
  expect(functions.isEmail("1wqed@gamil.com")).toBe(true);
});

test('isEmail-True-2', () => {
  expect(functions.isEmail("13e3efwdd@yahoo.com")).toBe(true);
});

test('isEmail-False-1', () => {
  expect(functions.isEmail("2edf23edfq")).toBe(false);
});

test('isEmail-False-2', () => {
  expect(functions.isEmail("234-545-7333")).toBe(false);
});



//isStrongPassword
test('isStrongPassword-True-1', () => {
  expect(functions.isStrongPassword("ATY8374672")).toBe(true);
});

test('isStrongPassword-True-2', () => {
  expect(functions.isStrongPassword("H4338TY472")).toBe(true);
});

test('isStrongPassword-False-1', () => {
  expect(functions.isStrongPassword("NHJHAHADFGHFHAFIUHAIFUHDFBSHF")).toBe(false);
});

test('isStrongPassword-False-2', () => {
  expect(functions.isStrongPassword("134234234234")).toBe(false);
});



//isDate
test('isDate-True-1', () => {
  expect(functions.isDate("05/02/1975")).toBe(true);
});

test('isDate-True-2', () => {
  expect(functions.isDate("14/11/2023")).toBe(true);
});

test('isDate-False-1', () => {
  expect(functions.isDate("626-9278635")).toBe(false);
});

test('isDate-False-2', () => {
  expect(functions.isDate("qd232@ucsd.edu")).toBe(false);
});



//isHexColor
test('isHexColor-True-1', () => {
  expect(functions.isHexColor("d1b598")).toBe(true);
});

test('isHexColor-True-2', () => {
  expect(functions.isHexColor("ffffff")).toBe(true);
});

test('isHexColor-False-1', () => {
  expect(functions.isHexColor("rththf")).toBe(false);
});

test('isHexColor-False-2', () => {
  expect(functions.isHexColor("tyuuiu")).toBe(false);
});



