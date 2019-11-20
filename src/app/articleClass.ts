export class article{
    public get percontage(): number {
        return this._percontage;
    }
    public set percontage(value: number) {
        this._percontage = value;
    }
    public get dateFabrication(): String {
        return this._dateFabrication;
    }
    public set dateFabrication(value: String) {
        this._dateFabrication = value;
    }
    public get type(): String {
        return this._type;
    }
    public set type(value: String) {
        this._type = value;
    }
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }

    public get image(): String {
        return this._image;
    }
    public set image(value: String) {
        this._image = value;
    }
    public get nom(): String {
        return this._nom;
    }
    public set nom(value: String) {
        this._nom = value;
    }
    public get matricule(): number {
        return this._matricule;
    }
    public set matricule(value: number) {
        this._matricule = value;
    }
    public get promos(): boolean {
        return this._promos;
    }
    public set promos(value: boolean) {
        this._promos = value;
    }
    private _matricule:number;
    private static _nb: number = 1;
    constructor(
      private _nom: String,private _image: String, private _prix: number,private _stock: number,
       private _type: String,private _dateFabrication: String,private _promos: boolean,private _percontage: number)
        
       {
            this._matricule=this._matricule+article._nb;
            article._nb++;
        }
}