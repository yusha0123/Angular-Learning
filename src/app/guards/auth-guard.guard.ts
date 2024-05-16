import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { session } from '../utils/session';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/dashboard'];
  return protectedRoutes.includes(state.url) && !session
    ? router.navigate(['/'])
    : true;
};
