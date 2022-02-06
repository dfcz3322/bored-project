export interface BoredResponse {
    accessibility: number;
    activity: string;
    key: number;
    link: string;
    participants: number;
    price: number;
    type: string;
}

export type Action<T, P = void> = { type: T, payload?: P };