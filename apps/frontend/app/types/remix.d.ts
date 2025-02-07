import type { RemixService } from '../../../backend/src/remix/remix.service';

declare module '@remix-run/node' {
  interface AppLoadContext {
    remixService: RemixService;
  }
} 