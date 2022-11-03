/* eslint-disable no-unused-vars */
export enum ConnectionMethods {
    _Serial = 'Serial',
    _Emulator = 'Emulator',
}

export interface ConnectionHandler {
    setSpeed(address: number, speed: number): void;
}
