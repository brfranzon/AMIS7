export class SchuelerList{

    public ID: number;
    public Postleitzeil: number;
    public Status: number;
    public Nachname: string;
    public Vorname: string;
    public Tel: number;
    public Strasse: string;
    public Stadt: string;

    getNameSchueler(input: string){
        this.Nachname = input;
    }

}