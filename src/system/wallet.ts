import { UltraApi } from '../interfaces/wallet';

/**
 * Returns the Wallet API
 *
 * @export
 * @return {(UltraApi | undefined)}
 */
export function getAPI(): UltraApi | undefined {
    if (typeof ultra === 'undefined') {
        console.error(new Error(`Ultra Extension is Unavailable`));
        return undefined;
    }

    return ultra;
}
