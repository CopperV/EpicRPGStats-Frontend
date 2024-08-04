export interface DetailPlayer {
    bodyUrl: string | null;

    id: number;
    uid: string;
    nick: string;

    info: PlayerInfo;
    rep: PlayerReputation;
    rzemioslo: PlayerRzemioslo;
    skills: PlayerSkills;
    stats: PlayerStats;
}

interface PlayerInfo {
    hp: number;
    potionHp: number;
    itemDrop: boolean;
    tutorial: boolean;
    checkHp: boolean;
}

interface PlayerReputation {
    archolosLevel: number;
    archolosAmount: number;
    klanLevel: number;
    klanAmount: number;
    witcherLevel: number;
    witcherAmount: number;
}

interface PlayerRzemioslo {
    alchemia: boolean;
    kowalstwo: boolean;
    platnerstwo: boolean;
    luczarstwo: boolean;
    jubilerstwo: boolean;
}

interface PlayerSkills {
    manaRegeneration: boolean;
    unlimitedArrows: boolean;
    hungerless: boolean;
    slugaBeliara: boolean;
    magKrwi: boolean;
    ciosKrytyczny: boolean;
    magnetyzm: boolean;
    silaZywiolow: boolean;
    polnocnyBarbarzynca: boolean;
    rozprucie: boolean;
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
    potionObrazenia: number;
    potionOchrona: number;

    krag: number;

    stygia: number;
    coins: number;
    brylki: number;
    event: number;
    event2: number;
}