import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { LoggerService } from './services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockRouter = { navigate: jasmine.createSpy('navigate') };
  let mockLoggerService = { isLoggedIn: jasmine.createSpy() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: LoggerService, useValue: mockLoggerService }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow the route when logged in', () => {
    mockLoggerService.isLoggedIn.and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should block the route and redirect when not logged in', () => {
    mockLoggerService.isLoggedIn.and.returnValue(false);
    expect(guard.canActivate()).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
