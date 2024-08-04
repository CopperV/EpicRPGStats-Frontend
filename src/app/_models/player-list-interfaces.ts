export interface ListPlayer {
    position: number;
    headUrl: string | null;

    id: number;
    uid: string;
    nick: string;
    
    stats: PlayerStats;
}

interface PlayerStats {
    ranga: string;
    klasa: string;

    level: number;
    exp: number;
    nextLevel: number;
    pn: number;

    sila: number;
    wytrzymalosc: number;
    zrecznosc: number;
    zdolnosci: number;
    inteligencja: number;
    mana: number;
    walka: number;

    potionSila: number;
    potionWytrzymalosc: number;
    potionZrecznosc: number;
    potionZdolnosci: number;
    potionInteligencja: number;
    potionMana: number;
    potionWalka: number;

    krag: number;

    stygia: number;
    coins: number;
    brylki: number;
    event: number;
    event2: number;
}