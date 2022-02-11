//prima classe
var FirstUser = /** @class */ (function () {
    //dichiarazione del costruttore
    function FirstUser(_credito, _numeroChiamata) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    FirstUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito = (this.credito + creditoRicarica); //credito +=creditoRicarica
    };
    FirstUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
//implementazione della classe ( let primo = new firstUser(numerochiamate,creditoiniziale))
var user1 = new FirstUser(10, 3);
//utilizzo dei metodi per effettuare DUE ricariche e DUE chiamate(simulo una ricarica e una chiamata,LA CHIAMATA VUOLE I MINUTI!!)
user1.ricarica(user1.credito, 10);
user1.ricarica(user1.credito, 7);
user1.chiamata(user1.credito, 27);
user1.chiamata(user1.credito, 95);
//console.log del notepad
/*primo utente
valore carica disponibile: ' -> metodo per ottenere la carica
numero chiamate: -> metodo per ottenere numero chiamate
dopo l'azzeramento :
numero chiamate: -> metodo per ottenere numero chiamate*/
console.log('Primo Utente:');
console.log("Valore carica disponibile: ".concat(user1.numero404()));
console.log("Numero di chiamate effettuate: ".concat(user1.getNumeroChiamate()));
console.log("Dopo l'azzeramento: ");
user1.azzeraChiamate();
console.log("".concat(user1.getNumeroChiamate()));
//seconda classe e quindi SecondUser
var SecondUser = /** @class */ (function () {
    //dichiarazione del costruttore
    function SecondUser(_credito, _numeroChiamata) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    SecondUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito = (this.credito + creditoRicarica); //credito +=creditoRicarica
    };
    SecondUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var user2 = new SecondUser(35.2, 12);
user2.ricarica(user2.credito, 25);
user2.ricarica(user2.credito, 7);
user2.chiamata(user2.credito, 35);
user2.chiamata(user2.credito, 110);
console.log('Secondo Utente:');
console.log("Valore carica disponibile: ".concat(user2.numero404()));
console.log("Numero di chiamate effettuate: ".concat(user2.getNumeroChiamate()));
console.log("Dopo l'azzeramento: ");
user2.azzeraChiamate();
console.log("".concat(user2.getNumeroChiamate()));
var ThirdUser = /** @class */ (function () {
    //dichiarazione del costruttore
    function ThirdUser(_credito, _numeroChiamata) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamata;
    }
    //implemento i metodi dichiarati
    ThirdUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito = (this.credito + creditoRicarica); //credito +=creditoRicarica
    };
    ThirdUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var user3 = new ThirdUser(112, 35);
user3.ricarica(user3.credito, 10);
user3.ricarica(user3.credito, 55);
user3.chiamata(user3.credito, 88);
user3.chiamata(user3.credito, 66);
console.log('Secondo Utente:');
console.log("Valore carica disponibile: ".concat(user3.numero404()));
console.log("Numero di chiamate effettuate: ".concat(user3.getNumeroChiamate()));
console.log("Dopo l'azzeramento: ");
user3.azzeraChiamate();
console.log("".concat(user3.getNumeroChiamate()));
