export class compte{
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }

    constructor(private _name: String, private _password: String){}

}