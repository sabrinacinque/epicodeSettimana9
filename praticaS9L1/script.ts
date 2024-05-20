interface iSmartphone {
    credito: number;
    numeroChiamate: number;
}

class User implements iSmartphone {
    nome: string;
    cognome: string;

    constructor(_nome: string, _cognome: string, public credito: number, public numeroChiamate: number) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    ricarica(a: number): void {
        this.credito += a;
    }

    chiamata(minuti: number): void {
        const costoChiamata = minuti * 0.20;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += 1;
        } else {
            console.log('Credito insufficiente, impossibile effettuare la chiamata.');
        }
    }

    chiama404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const user1 = new User("Mario", "Rossi", 10, 50);
const user2 = new User("Serena", "Bianchi", 4, 20);

console.log(`${user1.nome} ${user1.cognome} ha un credito di ${user1.credito} euro`);
console.log(`${user2.nome} ${user2.cognome} ha un credito di ${user2.credito} euro`);

user1.ricarica(20);
console.log(`${user1.nome} ${user1.cognome} ha un credito di ${user1.credito} euro`);
console.log(`${user2.nome} ${user2.cognome} ha un credito di ${user2.credito} euro`);


console.log(`L'user 1 ha ora ${user1.numeroChiamate} chiamate`);
user1.azzeraChiamate();
console.log("l'user 1 ha " + user1.chiama404() + " credito disponibile");

user2.chiamata(20)
console.log("l'user 2 ha " + user2.chiama404() + " euro di credito disponibile rimasto ");

user2.chiamata(20)





