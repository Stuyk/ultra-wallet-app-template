import { UltraApi } from './interfaces/wallet';

declare module '*.vue' {
    export default Vue;
}

declare global {
    const ultra: UltraApi;
}
