import { Dependent } from "./dependent";

export interface Employee {
    name: string,
    salary: number,
    deductions: number,
    dependents: Dependent[]
}