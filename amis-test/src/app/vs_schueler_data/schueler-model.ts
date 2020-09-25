export class SchuelerList{

    public id: string;
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