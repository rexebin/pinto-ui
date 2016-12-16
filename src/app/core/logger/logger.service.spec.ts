import { LoggerService } from './logger.service';
import { inject, TestBed } from '@angular/core/testing';

describe('LoggerService Service', () => {
  let _console = (<any>window).console;
  let fakeConsole = {
    _logs: [],
    log: (args: string[]): void => {
    },
    _warns: [],
    warn: (args: string[]): void => {
    },
    _errors: [],
    error: (args: string[]): void => {
    },
  };
  let service: LoggerService;
  let testMessage = 'Test Message';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(LoggerService);
    fakeConsole = {
      _logs: [],
      log: (...args) => fakeConsole._logs.push(args.join(' ')),
      _warns: [],
      warn: (...args) => fakeConsole._warns.push(args.join(' ')),
      _errors: [],
      error: (...args) => fakeConsole._errors.push(args.join(' '))
    };
    (<any>window).console = fakeConsole;
  });
  // restores the real console
  afterAll(() => (<any>window).console = _console);
  
  it('service should be injectable', () => {
    expect(service).toBeTruthy();
  });
  
  it('should write logs to console', () => {
    service.log(testMessage);
    expect(fakeConsole._logs).toContain(testMessage);
  });
  
  it('should write warnings to console', () => {
    service.warn(testMessage);
    expect(fakeConsole._warns).toContain(testMessage);
  });
  
  it('should write errors to console', () => {
    service.error(testMessage);
    expect(fakeConsole._errors).toContain(testMessage);
  });
});
