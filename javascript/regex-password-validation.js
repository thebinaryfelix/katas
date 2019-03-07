// https://www.codewars.com/kata/regex-password-validation

const validate = password => /(^(?!.*(\s|\.|;))(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/.test(password);
