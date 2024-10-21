import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Components/side-bar/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService);
  const router = inject(Router);
  if (auth.isAuthanticatedd()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
