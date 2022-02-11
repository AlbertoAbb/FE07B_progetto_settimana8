//INTERFACCIA SMARTPHONE
interface Smartphone {
    //dichiaro le proprietà
    credito: number;
    numeroChiamate: number;

    //dichiaro i metodi, non li definisco
    ricarica(credito:number,creditoRicarica:number):void;
    chiamata(credito:number,minutiDurata:number): void;
    numero404(): number;
    azzeraChiamate(): void;
    getNumeroChiamate():number;
}

//prima classe
class FirstUser implements Smartphone {
    //modificatori di accesso sulle proprietà(ridichiaro le proprietà dell'interfaccia definendole public)
    public credito: number;
    public numeroChiamate: number;
    //dichiarazione del costruttore
    constructor(_credito:number,_numeroChiamata:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    public ricarica(credito:number,creditoRicarica:number):void{
        this.credito = (this.credito+creditoRicarica); //credito +=creditoRicarica
    }
    public chiamata(credito:number,minutiDurata:number): void{
        this.credito -=(minutiDurata*0.20);
        this.numeroChiamate++;
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }
    public numero404(): number {
        return this.credito;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate  = 0;
    }
}
//implementazione della classe ( let primo = new firstUser(numerochiamate,creditoiniziale))
let user1 = new FirstUser(10,3);
//utilizzo dei metodi per effettuare DUE ricariche e DUE chiamate(simulo una ricarica e una chiamata,LA CHIAMATA VUOLE I MINUTI!!)
user1.ricarica(user1.credito,10);
user1.ricarica(user1.credito,7);
user1.chiamata(user1.credito,27);
user1.chiamata(user1.credito,95);
//console.log del notepad
/*primo utente
valore carica disponibile: ' -> metodo per ottenere la carica
numero chiamate: -> metodo per ottenere numero chiamate
dopo l'azzeramento :
numero chiamate: -> metodo per ottenere numero chiamate*/
console.log('Primo Utente:');
console.log(`Valore carica disponibile: ${user1.numero404()}`);
console.log(`Numero di chiamate effettuate: ${user1.getNumeroChiamate()}`);
console.log(`Dopo l'azzeramento: `);
user1.azzeraChiamate();
console.log(`${user1.getNumeroChiamate()}`);
//seconda classe e quindi SecondUser
class SecondUser implements Smartphone {
    //modificatori di accesso sulle proprietà(ridichiaro le proprietà dell'interfaccia definendole public)
    public credito: number;
    public numeroChiamate: number;
    //dichiarazione del costruttore
    constructor(_credito:number,_numeroChiamata:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    public ricarica(credito:number,creditoRicarica:number):void{
        this.credito = (this.credito+creditoRicarica); //credito +=creditoRicarica
    }
    public chiamata(credito:number,minutiDurata:number): void{
        this.credito -=(minutiDurata*0.20);
        this.numeroChiamate++;
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }
    public numero404(): number {
        return this.credito;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate  = 0;
    }
}
let user2 = new SecondUser(35.2,12);
user2.ricarica(user2.credito,25);
user2.ricarica(user2.credito,7);
user2.chiamata(user2.credito,35);
user2.chiamata(user2.credito,110);

console.log('Secondo Utente:');
console.log(`Valore carica disponibile: ${user2.numero404()}`);
console.log(`Numero di chiamate effettuate: ${user2.getNumeroChiamate()}`);
console.log(`Dopo l'azzeramento: `);
user2.azzeraChiamate();
console.log(`${user2.getNumeroChiamate()}`);

class ThirdUser implements Smartphone {
    //modificatori di accesso sulle proprietà(ridichiaro le proprietà dell'interfaccia definendole public)
    public credito: number;
    public numeroChiamate: number;
    //dichiarazione del costruttore
    constructor(_credito:number,_numeroChiamata:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    public ricarica(credito:number,creditoRicarica:number):void{
        this.credito = (this.credito+creditoRicarica); //credito +=creditoRicarica
    }
    public chiamata(credito:number,minutiDurata:number): void{
        this.credito -=(minutiDurata*0.20);
        this.numeroChiamate++;
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }
    public numero404(): number {
        return this.credito;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate  = 0;
    }
}
let user3 = new ThirdUser(112,35);
user3.ricarica(user3.credito,10);
user3.ricarica(user3.credito,55);
user3.chiamata(user3.credito,88);
user3.chiamata(user3.credito,66);

console.log('Secondo Utente:');
console.log(`Valore carica disponibile: ${user3.numero404()}`);
console.log(`Numero di chiamate effettuate: ${user3.getNumeroChiamate()}`);
console.log(`Dopo l'azzeramento: `);
user3.azzeraChiamate();
console.log(`${user3.getNumeroChiamate()}`);