import type { ConnectionHandler } from '../HwConnections';

export class Serial implements ConnectionHandler {
    setSpeed(address: number, speed: number): void {
        console.log(`Set speed of ${address} to ${speed}`);
    }
}