import { errorMessages } from './utils';

export class UserValidationService {
    constructor (private language: string) {};
    
    validateEmail(email: string): string | undefined {
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return errorMessages.email[this.language];
      }
      return undefined;
    }
  
    validatePassword(password: string): string | undefined {
      if (password.length < 8) {
        return errorMessages.password[this.language];
    }
      return undefined;
    }
  
    validateName(name: string): string | undefined {
      if (name.length < 3) {
        return errorMessages.name[this.language];
      }
      return undefined;
    }
  
    passwordsMatch(password: string, confirmPassword: string): string | undefined {
      if (password !== confirmPassword) {
        return errorMessages.confirmPassword[this.language];
      }
      return undefined;
    }
  }
  