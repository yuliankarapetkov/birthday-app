import { DateService } from './date/date.service';
import { AuthService } from './auth/auth.service';

export const services: any[] = [DateService, AuthService];

export * from './date/date.service';
export * from './auth/auth.service';
