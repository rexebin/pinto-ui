import { ERROR_CODE } from './error-code.const';
import { Injectable } from '@angular/core';

Injectable()
export class ValidationService {
  
  getValidatorErrorMessage(code: string, errors) {
    let config = {
      'required': 'Required',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
    };
    if (errors) {
      if (code === ERROR_CODE.minLength) {
        config[code] = 'Require minimum length of ' + errors[ERROR_CODE.minLength].requiredLength;
      }
      if (code === ERROR_CODE.email) {
        config[code] = 'Email address is not valid';
      }
    }
    return config[code];
  }
  
  creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return undefined;
    } else {
      return { 'invalidCreditCard': true };
    }
  }
  
  emailValidator(control) {
    // RFC 2822 compliant regex
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value.match(EMAIL_REGEXP)) {
      return undefined;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  
  passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return undefined;
    } else {
      return { 'invalidPassword': true };
    }
  }
}
