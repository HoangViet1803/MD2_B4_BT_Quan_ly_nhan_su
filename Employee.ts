export class Employee {
    protected firstName: string;
    protected lastName: string;
    protected birthDay: Date;
    protected address: string;
    protected role: string;

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getBirthDay(): Date {
        return this.birthDay;
    }

    public setBirthDay(birthDay: Date): void {
        this.birthDay = birthDay;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    constructor (firstName: string, lastName: string, birthday: Date, address: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthday;
        this.address = address;
        this.role = role;
    }
}