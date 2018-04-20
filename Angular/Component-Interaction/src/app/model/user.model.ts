export class User {
    public UserId: number;
    public Name: string;
    public PhoneNumber: string;
    public Address: string;

    constructor(userId: number, name: string, phoneNumber: string, address: string) {
        this.UserId = userId;
        this.Name = name;
        this.PhoneNumber = phoneNumber;
        this.Address = address;
    }
}
