export interface Response<T = Object> {
    status: 'success' | 'fail' | 'error';
    data: T;
    message?: string;
}

export interface Account {
    blockchainid: string;
    permission: string;
    publicKey: string;
}

export interface Transaction<T = any> {
    /**
     * The contract to use.
     *
     * @type {string}
     * @memberof Transaction
     */
    contract: string;

    /**
     * The action available inside of the contract.
     *
     * @type {string}
     * @memberof Transaction
     */
    action: string;

    /**
     * The data to send with the contract.
     *
     * @type {T}
     * @memberof Transaction
     */
    data: T;
}

export type ConnectFunction = () => Promise<Response<{ blockchainid: string; publicKey: string }>>;

export interface UltraApi {
    /**
     * Connect to the ultra wallet extension
     *
     * @memberof UltraApi
     */
    connect: ConnectFunction;

    /**
     * Disconnect the wallet extension
     *
     * @memberof UltraApi
     */
    disconnect(): Promise<void>;

    /**
     * Sign a message and return the result.
     *
     * Message must start with 0x or UOSx
     *
     * @param {string} message
     * @return {Promise<string>}
     * @memberof UltraApi
     */
    signMessage(message: string): Promise<Response<{ signature: string }>>;

    /**
     *  Sign a transaction and broadcast it to the chain.
     *
     * @param {Transaction} transaction
     * @return {Promise<Response<{ transactionHash: string }>>}
     * @memberof UltraApi
     */
    signTransaction(transaction: Transaction): Promise<Response<{ transactionHash: string }>>;
}
