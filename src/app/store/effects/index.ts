import { RouterEffects } from './router.effect';
import { AuthEffect } from './auth.effect';

export const effects: any[] = [ RouterEffects, AuthEffect ];

export * from './router.effect';
export * from './auth.effect';