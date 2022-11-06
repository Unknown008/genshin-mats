import { Component, Input, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { WeaponModel } from "./../../_models/weapon.model";
import { EnvironmentPathService } from "./../../_services/environment-path.service";
import { NumberFormatPipeModule } from "./../../_shared/directives/number-format";
import { CharacterModel } from "./../../_models/character.model";

@Component({
    selector: "app-mat-table",
    templateUrl: "./mat-table.component.html",
    styleUrls: ["./mat-table.component.scss"]
})
export class MatTableComponent implements OnChanges {
    @Input() characters: CharacterModel[];
    @Input() levelUpData: any;
    @Input() ascensionData: any;
    @Input() talentData: any;
    @Input() charData: any;
    @Input() weaponData: any;
    @Input() weaponLevelUpData: any;
    @Input() weaponAscensionData: any;
    @Input() itemQualityData: any;
    @Input() change: boolean;

    public tableOptions: FormGroup;
    public numberFormat: NumberFormatPipeModule;

    public displayedColumns: string[] = [
        "Name", "Exp", "Exp Mora", "Ascension", "Ascension Mora", "Talent", 
        "Talent Mora"
    ];
    public totalColumns: string[] = ["Exp", "Gems", "Local Specialties", "Common Drops", "Domain Drops", "Boss Drops", "Limited", "Mora"];
    public tableData: any = [];
    public totalsData: any = [];
    public path: string = this.url.getUrl("./../../../assets/resources/", true);
    public ascensionLevels = [20, 40, 50, 60, 70, 80];
    public displayWeapon: boolean = false;
    public displayRarity: boolean = true;
    public displayTotals: boolean = true;
    public qualityOrder = ["grey", "green", "blue", "purple", "gold"];
    public tagOrder = [
        "Mask", "Arrowhead", "Slime", "Scroll", "Nectar", "Treasure_Hoarder_Insignia",
        "Fatui_Insignia", "Branch", "Horn", "Bone", "Knife", "Mist_Grass", "Chaos",
        "adaptive", "Freedom", "Resistance", "Ballad", "Prosperity", "Diligence", "Gold",
        "pyro", "hydro", "electro", "anemo", "cryo", "geo", "weekly", "Decarabian", "Fang",
        "Shackle", "Guyun", "Dango", "Aerosiderite", "exp", "weapon-exp"
    ];

    constructor(
        numberFormat: NumberFormatPipeModule,
        private url: EnvironmentPathService
    ) { 
        this.numberFormat = numberFormat;
    }

    ngOnChanges() {
        if (
            this.characters == null || 
            this.levelUpData == null || 
            this.ascensionData == null ||
            this.talentData == null ||
            this.charData == null || 
            this.itemQualityData == null ||
            this.weaponData == null ||
            this.weaponLevelUpData == null ||
            this.weaponAscensionData == null
        )
            return;

        if (this.displayWeapon)
            this.getWeaponTotals();
        else
            this.getTotals();
    }

    /**
     * Calculates the material requirements and totals for all characters excluding 
     * totals for weapons
     */
    getTotals() {
        this.tableData = [];
        this.totalsData = [];

        let traveler = false;
        for (let char of this.characters) {
            if (!char.display) continue;

            let exp = {exp: [], mora: []};
            let wExp = {exp: [], mora: []};
            let ascensions = {items: [], mora: []};
            let wAscensions = {items: [], mora: []};
            let talents = this.calcTalent(
                char.name, char.balevel, char.eslevel, char.eblevel, 
                char.tbalevel, char.teslevel, char.teblevel
            );

            if (!char.name.includes("Traveler") || !traveler) {                
                if (char.name.includes("Traveler"))
                    traveler = true;
                exp = this.calcExp(char.level, char.tlevel);
                ascensions = this.calcAscension(char.name, char.ascension, char.tascension);
                wExp = this.calcWeaponExp(JSON.parse(JSON.stringify(char.weapon)));
                wAscensions = this.calcWeaponAscension(
                    JSON.parse(JSON.stringify(char.weapon))
                );
            }

            this.tableData.push({
                "Name": char.name,
                "Exp": exp.exp,
                "Exp Mora": exp.exp.length == 0 ? [] : exp.mora,
                "Ascension": ascensions.items,
                "Ascension Mora": ascensions.items.length == 0 ? [] :ascensions.mora,
                "Talent": talents.items,
                "Talent Mora": talents.items.length == 0 ? [] : talents.mora,
                "Weapon Exp": wExp.exp,
                "Weapon Exp Mora": wExp.exp.length == 0 ? [] : wExp.mora,
                "Weapon Ascension": wAscensions.items,
                "Weapon Ascension Mora": wAscensions.items.length == 0 ? [] : 
                    wAscensions.mora
            });
            
            this.calcTotals(char);
        }
    }

    /**
     * Calculates the material requirements and totals for all characters including 
     * totals for weapons
     */
    getWeaponTotals() {
        this.getTotals();

        for (let char of this.characters) {
            if (!char.display) continue;
            this.calcWeaponTotals(char);
        }
    }

    /**
     * Returns the total exp and mora required for level ups
     * @param clevel Current level of character
     * @param tlevel Target level of character
     */
    calcExp(clevel: number, tlevel: number) {
        let batch = [];

        for (
            let i = 0; 
            this.ascensionLevels[i] < tlevel && this.ascensionLevels[i] < 90;
            i++
        ) {
            if (clevel > this.ascensionLevels[i]) continue
            batch.push({
                from: clevel,
                to: this.ascensionLevels[i]
            });
            clevel = this.ascensionLevels[i];
        }
        batch.push({
            from: clevel,
            to: tlevel
        });

        let cards = [];
        for (let t in this.itemQualityData.exp) {
            let d = this.itemQualityData.exp[t];
            cards.push({
                name: d.name,
                path: this.path + "items/" + d.name + ".png",
                qty: 0,
                exp: d.exp,
                cost: d.exp / 5,
                qly: this.displayRarity ? t : ""
            });
        }
        cards = cards.sort((a, b) => b.exp - a.exp);
        
        for (let row of batch) {
            let texp = this.levelUpData[row.to];
            let cexp = this.levelUpData[row.from];
            let exp = texp.cumm_exp - cexp.cumm_exp;

            for (let card of cards) {
                card.qty += Math.floor(exp / card.exp);
                exp %= card.exp;
            }
            if (exp > 0)
                cards[cards.length-1].qty += 1;
        }
        
        cards = cards.sort((a, b) => a.exp - b.exp);

        return {
            exp: cards.filter(c => c.qty > 0).map(c => ({
                name: c.name.replace(/_/g, " "),
                path: c.path,
                qty: c.qty,
                qly: c.qly,
                type: "item-exp",
                tag: "exp"
            })),
            mora: [{
                name: "Mora",
                path: this.path + "items/Mora.png",
                qty: cards.map(c => ({
                    cost: c.cost * c.qty
                })).reduce(
                    (s, i) => s + i.cost, 0
                )
            }]
        };
    }

    /**
     * Returns the total materials and mora required for ascensions
     * @param char Character name
     * @param cascension Current ascension of character
     * @param tascension Target ascension of character
     */
    calcAscension(char: string, cascension: number, tascension: number) {
        let characterAscensionData = this.charData[char].ascension;
        let mats = {
            cost: 0,
            gem: [],
            local_specialty: [],
            common_drop: [],
            boss_drop: []
        };

        for (
            let i = cascension; 
            i < tascension;
            i++
        ) {
            let data = JSON.parse(JSON.stringify(
                this.ascensionData.cost[this.ascensionLevels[i]]
            ));

            mats.cost += data.cost;
            if (data.gem != null) {
                let reqs = this.ascensionData.gem[characterAscensionData.element];
                let gemName = reqs.gem + "_" + 
                    this.itemQualityData.gem[data.gem.quality];
                
                let gemId = mats.gem.findIndex((g: any) => 
                    g.name == gemName.replace(/_/g, " ")
                );
                if (gemId == -1)
                    mats.gem.push({
                        name: gemName.replace(/_/g, " "),
                        qty: data.gem.quantity,
                        qly: data.gem.quality,
                        path: this.path + "items/" + gemName + ".png",
                        type: "item-gem",
                        tag: characterAscensionData.element
                    });
                else
                    mats.gem[gemId].qty += data.gem.quantity;

                if (data.boss_drop != null && reqs.boss_drop != "") {
                    let bossDropName;
                    if (characterAscensionData.hasOwnProperty("boss_drop"))
                        bossDropName = characterAscensionData.boss_drop;
                    else
                        bossDropName = reqs.boss_drop;

                    if (mats.boss_drop.length == 0)
                        mats.boss_drop.push({
                            name: bossDropName == null ? "Boss drop TBD" : bossDropName.replace(/_/g, " "),
                            qty: data.boss_drop.quantity,
                            qly: "purple",
                            path: this.path + 
                                (bossDropName == null ? "tbd.png" : "items/" + bossDropName + ".png"),
                            type: "item-boss-drop",
                            tag: characterAscensionData.element
                        });
                    else
                        mats.boss_drop[0].qty += data.boss_drop.quantity;
                }
            }

            if (data.local_specialty != null) {
                let localSpecialtyName = characterAscensionData.local_specialty;

                if (mats.local_specialty.length == 0)
                    mats.local_specialty.push({
                        name: localSpecialtyName == null ? "Local specialty TBD" : localSpecialtyName.replace(/_/g, " "),
                        qty: data.local_specialty.quantity,
                        qly: "grey",
                        path: this.path + 
                            (localSpecialtyName == null ? "tbd.png" : "items/" + localSpecialtyName + ".png"),
                        type: "item-local-specialty"
                    });
                else
                    mats.local_specialty[0].qty += data.local_specialty.quantity;
            }

            if (data.common_drop != null) {
                if (characterAscensionData.common_drop == null) {
                    let commonDropId = mats.common_drop.findIndex((c: any) => 
                        c.name == data.common_drop.quality.replace(/./, (m) => {
                            return m.toUpperCase()
                        }) + " common drop TBD"
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: data.common_drop.quality.replace(/./, (m) => {
                                return m.toUpperCase();
                            }) + " common drop TBD",
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "tbd.png",
                            type: "item-common-drop",
                            tag: characterAscensionData.common_drop
                        });
                    else
                        mats.common_drop[commonDropId].qty += data.common_drop.quantity;
                } else {
                    let commonDropName = this.itemQualityData
                        .common_drop[characterAscensionData.common_drop][data.common_drop.quality];
    
                    let commonDropId = mats.common_drop.findIndex((c: any) => 
                        c.name == commonDropName.replace(/_/g, " ")
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: commonDropName.replace(/_/g, " "),
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "items/" + commonDropName + ".png",
                            type: "item-common-drop",
                            tag: characterAscensionData.common_drop
                        });
                    else
                        mats.common_drop[commonDropId].qty += data.common_drop.quantity;
                }
            }
        }
        
        return {
            items: [
                ...mats.gem,
                ...mats.local_specialty,
                ...mats.common_drop,
                ...mats.boss_drop
            ],
            mora: [{
                name: "Mora",
                path: this.path + "items/Mora.png",
                qty: mats.cost
            }]
        };
    }

    /**
     * Returns the total materials and mora required to upgrade talents
     * @param char Character name
     * @c1 Talent 1 current level
     * @c2 Talent 2 current level
     * @c3 Talent 3 current level
     * @t1 Talent 1 target level
     * @t2 Talent 2 target level
     * @t3 Talent 3 target level
     */
    calcTalent(
        char: string, c1: number, c2: number, c3: number, t1: number, t2: number,
        t3: number
    ) {
        let characterTalentData = this.charData[char].talent;

        let mats = this.talentHandler(characterTalentData, 1, c1, t1);
        mats = this.talentHandler(characterTalentData, 2, c2, t2, mats);
        mats = this.talentHandler(characterTalentData, 3, c3, t3, mats);
        
        return {
            items: [
                ...mats.book,
                ...mats.common_drop,
                ...mats.boss_drop,
                ...mats.limited
            ],
            mora: [{
                name: "Mora",
                path: this.path + "items/Mora.png",
                qty: mats.cost
            }]
        };
    }

    /**
     * Calculates talent requirements for specific talent
     * @param charTalent Character talent data
     * @param talentNo The talent number (1, 2 or 3)
     * @param from From talent level
     * @param to To talent level
     */
    talentHandler(
        charTalent: any, talentNo: number, from: number, to: number, mats: any = null
    ) {
        if (mats == null) {
            mats = {
                cost: 0,
                book: [],
                common_drop: [],
                boss_drop: [],
                limited: []
            };
        }

        for (let i = from; i < to; i++) {
            let data = JSON.parse(JSON.stringify(this.talentData[i]));

            mats.cost = data.cost == null ? data.cost : mats.cost + data.cost;
            if (data.book != null) {
                let bookName = this.itemQualityData.talent[data.book.quality];
                let tag = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    tag = charTalent["talent" + talentNo.toString()][i].book;
                else
                    tag = charTalent.all.book;
                
                if (tag == null) {
                    let bookId = mats.book.findIndex((b: any) => 
                        b.name == data.book.quality.replace(/./, (m) => {
                            return m.toUpperCase();
                        }) + " talent book TBD"
                    );
                    if (bookId == -1)
                        mats.book.push({
                            name: data.book.quality.replace(/./, (m) => {
                                return m.toUpperCase()
                            }) + " talent book TBD",
                            qty: data.book.quantity,
                            qly: data.book.quality,
                            path: this.path + "tbd.png",
                            type: "item-domain",
                            tag: tag
                        });
                    else
                        mats.book[bookId].qty += data.book.quantity;

                } else {
                    bookName += tag;
                    let bookId = mats.book.findIndex((b: any) => 
                        b.name == bookName.replace(/_/g, " ")
                    );
                    if (bookId == -1)
                        mats.book.push({
                            name: bookName.replace(/_/g, " "),
                            qty: data.book.quantity,
                            qly: data.book.quality,
                            path: this.path + "talents/" + bookName + ".png",
                            type: "item-domain",
                            tag: tag
                        });
                    else
                        mats.book[bookId].qty += data.book.quantity;
                }
            }
            if (data.common_drop != null) {
                let commonDropType = "";
                    
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    commonDropType = 
                        charTalent["talent" + talentNo.toString()][i].common_drop;
                else
                    commonDropType = charTalent.all.common_drop;
                
                if (commonDropType == null) {
                    let commonDropId = mats.common_drop.findIndex((d: any) => 
                        d.name == data.common_drop.quality.replace(/./, (m) => {
                            return m.toUpperCase();
                        }) + " common drop TBD"
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: data.common_drop.quality.replace(/./, (m) => {
                                return m.toUpperCase()
                            }) + " common drop TBD",
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "tbd.png",
                            type: "item-common-drop",
                            tag: commonDropType
                        });
                    else
                        mats.common_drop[commonDropId].qty += 
                            data.common_drop.quantity;
                } else {
                    let commonDropName = this.itemQualityData
                        .common_drop[commonDropType][data.common_drop.quality];
                
                    let commonDropId = mats.common_drop.findIndex((d: any) => 
                        d.name == commonDropName.replace(/_/g, " ")
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: commonDropName.replace(/_/g, " "),
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "items/" + commonDropName + ".png",
                            type: "item-common-drop",
                            tag: commonDropType
                        });
                    else
                        mats.common_drop[commonDropId].qty += 
                            data.common_drop.quantity;
                }
            }
            if (data.boss_drop != null) {
                let bossDropName = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    bossDropName = 
                        charTalent["talent" + talentNo.toString()][i].boss_drop;
                else
                    bossDropName = charTalent.all.boss_drop;

                if (bossDropName == null) {
                    let bossDropId = mats.boss_drop.findIndex((d: any) => 
                        d.name == "Boss drop TBD"
                    );
                    if (bossDropId == -1)
                        mats.boss_drop.push({
                            name: "Boss drop TBD",
                            qty: data.boss_drop.quantity,
                            qly: "purple",
                            path: this.path + "tbd.png",
                            type: "item-boss-drop",
                            tag: "weekly"
                        });
                    else
                        mats.boss_drop[bossDropId].qty += 
                            data.boss_drop.quantity;
                } else {
                    let bossDropId = mats.boss_drop.findIndex((d: any) => 
                        d.name == bossDropName.replace(/_/g, " ")
                    );
                    if (bossDropId == -1)
                        mats.boss_drop.push({
                            name: bossDropName.replace(/_/g, " "),
                            qty: data.boss_drop.quantity,
                            qly: "purple",
                            path: this.path + "talents/" + bossDropName + ".png",
                            type: "item-boss-drop",
                            tag: "weekly"
                        });
                    else
                        mats.boss_drop[bossDropId].qty += 
                            data.boss_drop.quantity;
                }
            }
            if (data.limited != null) {
                let limitedId = mats.limited
                    .findIndex((l: any) => l.name == "Crown of Insight");
                if (limitedId == -1)
                    mats.limited.push({
                        name: "Crown of Insight",
                        qty: data.limited.quantity,
                        qly: "gold",
                        path: this.path + "talents/Crown_of_Insight.png",
                        type: "item-limited"
                    });
                else
                    mats.limited[limitedId].qty += 
                        data.limited.quantity;
            }
        }

        return mats;
    }

    /**
     * Returns the total exp and mora required for weapon level ups
     * @param weapon The weapon object
     */
     calcWeaponExp(weapon: WeaponModel) {
        let batch = [];
        let maxLevel = weapon.rarity < 3 ? 70 : 90;
        for (
            let i = 0; 
            this.ascensionLevels[i] < weapon.tlevel && this.ascensionLevels[i] < maxLevel;
            i++
        ) {
            if (weapon.level > this.ascensionLevels[i]) continue
            batch.push({
                from: weapon.level,
                to: this.ascensionLevels[i]
            });
            weapon.level = this.ascensionLevels[i];
        }
        batch.push({
            from: weapon.level,
            to: weapon.tlevel
        });

        let ores = [];
        for (let t in this.itemQualityData.weapon_exp) {
            let d = this.itemQualityData.weapon_exp[t];
            ores.push({
                name: d.name,
                path: this.path + "items/" + d.name + ".png",
                qty: 0,
                exp: d.exp,
                cost: d.exp / 10,
                qly: this.displayRarity ? t : ""
            });
        }
        ores = ores.sort((a, b) => b.exp - a.exp);
        
        for (let row of batch) {
            let texp = this.weaponLevelUpData[weapon.rarity][row.to];
            let cexp = this.weaponLevelUpData[weapon.rarity][row.from];
            let exp = texp.cumm_exp - cexp.cumm_exp;

            for (let ore of ores) {
                ore.qty += Math.floor(exp / ore.exp);
                exp %= ore.exp;
            }
            if (exp > 0)
                ores[ores.length-1].qty += 1;
        }
        
        ores = ores.sort((a, b) => a.exp - b.exp);

        return {
            exp: ores.filter(c => c.qty > 0).map(c => ({
                name: c.name.replace(/_/g, " "),
                path: c.path,
                qty: c.qty,
                qly: c.qly,
                type: "item-exp",
                tag: "weapon-exp"
            })),
            mora: [{
                name: "Mora",
                path: this.path + "items/Mora.png",
                qty: ores.map(c => ({
                    cost: c.cost * c.qty
                })).reduce(
                    (s, i) => s + i.cost, 0
                )
            }]
        };
    }

    /**
     * Returns the total materials and mora required for weapon ascensions
     * @param weapon The weapon object
     */
    calcWeaponAscension(weapon: WeaponModel) {
        if (weapon.name == "") return {items: [], mora: []};

        let weaponAscensionData = this.weaponData[weapon.name].ascension;
        let mats = {
            cost: 0,
            domain_drop: [],
            common_drop: [],
            rare_drop: []
        };

        for (
            let i = weapon.ascension; 
            i < weapon.tascension;
            i++
        ) {
            let data = JSON.parse(JSON.stringify(
                this.weaponAscensionData[weapon.rarity].cost[this.ascensionLevels[i]]
            ));

            mats.cost += data.cost;

            if (data.domain_drop != null) {
                if (weaponAscensionData.domain_drop == null) {
                    let domainDropId = mats.domain_drop.findIndex((d: any) => 
                        d.name == data.domain_drop.quality.replace(/./, (m) => {
                            return m.toUpperCase();
                        }) + " weapon mat TBD"
                    );
                    if (domainDropId == -1)
                        mats.domain_drop.push({
                            name: data.domain_drop.quality.replace(/./, (m) => {
                                return m.toUpperCase();
                            }) + " weapon mat TBD",
                            qty: data.domain_drop.quantity,
                            qly: data.domain_drop.quality,
                            path: this.path + "tbd.png",
                            type: "item-domain",
                            tag: weaponAscensionData.domain_drop
                        });
                    else
                        mats.domain_drop[domainDropId].qty += data.domain_drop.quantity;
                } else {
                    let domainDropName = this.itemQualityData
                        .weapon[weaponAscensionData.domain_drop][data.domain_drop.quality];
    
                    let domainDropId = mats.domain_drop.findIndex((d: any) => 
                        d.name == domainDropName.replace(/_/g, " ")
                    );
                    if (domainDropId == -1)
                        mats.domain_drop.push({
                            name: domainDropName.replace(/_/g, " "),
                            qty: data.domain_drop.quantity,
                            qly: data.domain_drop.quality,
                            path: this.path + "items/" + domainDropName + ".png",
                            type: "item-domain",
                            tag: weaponAscensionData.domain_drop
                        });
                    else
                        mats.domain_drop[domainDropId].qty += data.domain_drop.quantity;
                }
            }
            
            if (data.common_drop != null) {
                if (weaponAscensionData.common_drop == null) {
                    let commonDropId = mats.common_drop.findIndex((c: any) => 
                        c.name == data.common_drop.quality.replace(/./, (m) => {
                            return m.toUpperCase();
                        }) + " common drop TBD"
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: data.common_drop.quality.replace(/./, (m) => {
                                return m.toUpperCase();
                            }) + " common drop TBD",
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "tbd.png",
                            type: "item-common-drop",
                            tag: weaponAscensionData.common_drop
                        });
                    else
                        mats.common_drop[commonDropId].qty += data.common_drop.quantity;
                } else {
                    let commonDropName = this.itemQualityData
                        .common_drop[weaponAscensionData.common_drop][data.common_drop.quality];

                    let commonDropId = mats.common_drop.findIndex((c: any) => 
                        c.name == commonDropName.replace(/_/g, " ")
                    );
                    if (commonDropId == -1)
                        mats.common_drop.push({
                            name: commonDropName.replace(/_/g, " "),
                            qty: data.common_drop.quantity,
                            qly: data.common_drop.quality,
                            path: this.path + "items/" + commonDropName + ".png",
                            type: "item-common-drop",
                            tag: weaponAscensionData.common_drop
                        });
                    else
                        mats.common_drop[commonDropId].qty += data.common_drop.quantity;
                }
            }

            if (data.rare_drop != null) {
                if (weaponAscensionData.rare_drop == null) {
                    let rareDropId = mats.rare_drop.findIndex((r: any) => 
                        r.name == data.rare_drop.quality.replace(/./, (m) => {
                            return m.toUpperCase();
                        }) + " rare drop TBD"
                    );
                    if (rareDropId == -1)
                        mats.rare_drop.push({
                            name: data.rare_drop.quality.replace(/./, (m) => {
                                return m.toUpperCase();
                            }) + " rare drop TBD",
                            qty: data.rare_drop.quantity,
                            qly: data.rare_drop.quality,
                            path: this.path + "tbd.png",
                            type: "item-common-drop",
                            tag: weaponAscensionData.rare_drop
                        });
                else
                    mats.rare_drop[rareDropId].qty += data.rare_drop.quantity;
                } else {
                    let rareDropName = this.itemQualityData
                        .common_drop[weaponAscensionData.rare_drop][data.rare_drop.quality];

                    let rareDropId = mats.rare_drop.findIndex((r: any) => 
                        r.name == rareDropName.replace(/_/g, " ")
                    );
                    if (rareDropId == -1)
                        mats.rare_drop.push({
                            name: rareDropName.replace(/_/g, " "),
                            qty: data.rare_drop.quantity,
                            qly: data.rare_drop.quality,
                            path: this.path + "items/" + rareDropName + ".png",
                            type: "item-common-drop",
                            tag: weaponAscensionData.rare_drop
                        });
                    else
                        mats.rare_drop[rareDropId].qty += data.rare_drop.quantity;
                }
            }
        }
        
        return {
            items: [
                ...mats.domain_drop,
                ...mats.common_drop,
                ...mats.rare_drop
            ],
            mora: [{
                name: "Mora",
                path: this.path + "items/Mora.png",
                qty: mats.cost
            }]
        };
    }

    /**
     * Toggle values
     * @param item item that requires toggling
     */
    toggle(item: string) {
        switch (item) {
            case "weapon":
                this.displayWeapon = !this.displayWeapon;
                if (this.displayWeapon) {
                    this.displayedColumns.push("Weapon Exp");
                    this.displayedColumns.push("Weapon Exp Mora");
                    this.displayedColumns.push("Weapon Ascension");
                    this.displayedColumns.push("Weapon Ascension Mora");
                    this.getWeaponTotals();
                } else {
                    this.displayedColumns.splice(7, 4);
                    this.totalsData = [];
                    for (let char of this.characters) {
                        if (!char.display) continue;
                        this.calcTotals(char);
                    }
                }
                
                document.querySelector(".page").scrollLeft = 0;
                break;
            case "rarity":
                this.displayRarity = !this.displayRarity;
                break;
            case "totals":
                this.displayTotals = !this.displayTotals;
                break;
        }
    }

    /**
     * Generates the total items required
     * @param char Character for whom the total is being calculated
     */
    calcTotals(char: CharacterModel) {
        let rowData = this.tableData.filter(d => d.Name == char.name)[0];

        if (this.totalsData.length == 0) {
            let commonDropList = JSON.parse(JSON.stringify(
                rowData["Ascension"].filter((i: any) => i.type == "item-common-drop")
            ));
            for (
                let commonDrop of rowData["Talent"]
                    .filter((e: any) => e.type == "item-common-drop")
            ) {
                let commonDropId = commonDropList
                    .findIndex((l: any) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                } else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }

            let bossDropList = JSON.parse(JSON.stringify(
                rowData["Ascension"].filter((i: any) => i.type == "item-boss-drop")
            ));
            for (
                let bossDrop of rowData["Talent"]
                    .filter((e: any) => e.type == "item-boss-drop")
            ) {
                let bossDropId = bossDropList
                    .findIndex((l: any) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                } else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }

            this.totalsData.push({
                "Exp": JSON.parse(JSON.stringify(rowData["Exp"])),
                "Gems": JSON.parse(JSON.stringify(
                    rowData["Ascension"].filter((i: any) => i.type == "item-gem")
                )),
                "Local Specialties": JSON.parse(JSON.stringify(
                    rowData["Ascension"].filter((i: any) => i.type == "item-local-specialty")
                )),
                "Common Drops": commonDropList,
                "Boss Drops": bossDropList,
                "Domain Drops": JSON.parse(JSON.stringify(
                    rowData["Talent"].filter((i: any) => i.type == "item-domain")
                )),
                "Limited": JSON.parse(JSON.stringify(
                    rowData["Talent"].filter((i: any) => i.type == "item-limited")
                )),
                "Mora": (rowData["Exp Mora"].length == 0 && rowData["Ascension Mora"].length == 0 && rowData["Talent Mora"].length == 0) ? [] : [{
                    name: "Mora",
                    path: this.path + "items/Mora.png",
                    qty: (rowData["Exp Mora"].length == 0 ? 0 : rowData["Exp Mora"][0].qty) + 
                        (rowData["Ascension Mora"].length == 0 ? 0 : 
                            rowData["Ascension Mora"][0].qty) + 
                        (rowData["Talent Mora"].length == 0 ? 0 : 
                            rowData["Talent Mora"][0].qty)
                }]
            });
        } else {
            let expList = this.totalsData[0]["Exp"];
            for (let expItem of rowData["Exp"]) {
                let expId = expList.findIndex((e: any) => e.name == expItem.name);
                if (expId == -1) {
                    expList.push(JSON.parse(JSON.stringify(expItem)));
                } else {
                    expList[expId].qty += expItem.qty;
                }
            }
            this.totalsData[0]["Exp"] = expList;

            if (this.totalsData[0]["Mora"].length == 0)
                this.totalsData[0]["Mora"] = 
                    (rowData["Exp Mora"].length == 0 && rowData["Ascension Mora"].length == 0 && rowData["Talent Mora"].length == 0) ? [] : [{
                        name: "Mora",
                        path: this.path + "items/Mora.png",
                        qty: (rowData["Exp Mora"].length == 0 ? 0 : rowData["Exp Mora"][0].qty) + 
                            (rowData["Ascension Mora"].length == 0 ? 0 : 
                                rowData["Ascension Mora"][0].qty) + 
                            (rowData["Talent Mora"].length == 0 ? 0 : 
                                rowData["Talent Mora"][0].qty)
                    }]
            else
                this.totalsData[0]["Mora"] = this.totalsData[0]["Mora"].map(d => ({
                    name: d.name,
                    path: d.path,
                    qty: d.qty + 
                        (rowData["Exp Mora"].length == 0 ? 0 : rowData["Exp Mora"][0].qty) + 
                        (rowData["Ascension Mora"].length == 0 ? 0 : 
                            rowData["Ascension Mora"][0].qty) + 
                        (rowData["Talent Mora"].length == 0 ? 0 : 
                            rowData["Talent Mora"][0].qty)
                }));
        
            let gemList = this.totalsData[0]["Gems"];
            for (let gem of rowData["Ascension"].filter((e: any) => e.type == "item-gem")) {
                let gemId = gemList.findIndex((g: any) => g.name == gem.name);
                if (gemId == -1) {
                    gemList.push(JSON.parse(JSON.stringify(gem)));
                } else {
                    gemList[gemId].qty += gem.qty;
                }
            }
            this.totalsData[0]["Gems"] = gemList;

            let localSpecialtyList = this.totalsData[0]["Local Specialties"];
            for (
                let localSpecialty of rowData["Ascension"]
                    .filter((e: any) => e.type == "item-local-specialty")
            ) {
                let localSpecialtyId = localSpecialtyList
                    .findIndex((l: any) => l.name == localSpecialty.name);
                if (localSpecialtyId == -1) {
                    localSpecialtyList.push(JSON.parse(JSON.stringify(localSpecialty)));
                } else {
                    localSpecialtyList[localSpecialtyId].qty += localSpecialty.qty;
                }
            }
            this.totalsData[0]["Local Specialties"] = localSpecialtyList;

            let commonDropList = this.totalsData[0]["Common Drops"];
            for (
                let commonDrop of rowData["Ascension"]
                    .filter((e: any) => e.type == "item-common-drop")
            ) {
                let commonDropId = commonDropList
                    .findIndex((l: any) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                } else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }
            for (
                let commonDrop of rowData["Talent"]
                    .filter((e: any) => e.type == "item-common-drop")
            ) {
                let commonDropId = commonDropList
                    .findIndex((l: any) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                } else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }
            this.totalsData[0]["Common Drops"] = commonDropList;

            let bossDropList = this.totalsData[0]["Boss Drops"];
            for (
                let bossDrop of rowData["Ascension"]
                    .filter((e: any) => e.type == "item-boss-drop")
            ) {
                let bossDropId = bossDropList
                    .findIndex((l: any) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                } else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }
            for (
                let bossDrop of rowData["Talent"]
                    .filter((e: any) => e.type == "item-boss-drop")
            ) {
                let bossDropId = bossDropList
                    .findIndex((l: any) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                } else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }
            this.totalsData[0]["Boss Drops"] = bossDropList;

            let bookList = this.totalsData[0]["Domain Drops"];
            for (
                let book of rowData["Talent"]
                    .filter((e: any) => e.type == "item-domain")
            ) {
                let bookId = bookList
                    .findIndex((l: any) => l.name == book.name);
                if (bookId == -1) {
                    bookList.push(JSON.parse(JSON.stringify(book)));
                } else {
                    bookList[bookId].qty += book.qty;
                }
            }
            this.totalsData[0]["Book"] = bookList;

            let limitedList = this.totalsData[0]["Limited"];
            for (
                let limited of rowData["Talent"]
                    .filter((e: any) => e.type == "item-limited")
            ) {
                let limitedId = limitedList
                    .findIndex((l: any) => l.name == limited.name);
                if (limitedId == -1) {
                    limitedList.push(JSON.parse(JSON.stringify(limited)));
                } else {
                    limitedList[limitedId].qty += limited.qty;
                }
            }
            this.totalsData[0]["Limited"] = limitedList;
        }

        this.totalsData[0]["Exp"] = this.sortItem(this.totalsData[0]["Exp"]);
        this.totalsData[0]["Gems"] = this.sortItem(this.totalsData[0]["Gems"]);
        this.totalsData[0]["Common Drops"] = this.sortItem(this.totalsData[0]["Common Drops"]);
        this.totalsData[0]["Boss Drops"] = this.sortItem(this.totalsData[0]["Boss Drops"]);
        this.totalsData[0]["Domain Drops"] = 
            this.sortItem(this.totalsData[0]["Domain Drops"]);
    }

    /**
     * Generates the total items required
     * @param char Character for whom the total is being calculated
     */
    calcWeaponTotals(char: CharacterModel) {
        let rowData = this.tableData.filter(d => d.Name == char.name)[0];

        let expList = this.totalsData[0]["Exp"];
        for (let expItem of rowData["Weapon Exp"]) {
            let expId = expList.findIndex((e: any) => e.name == expItem.name);
            if (expId == -1) {
                expList.push(JSON.parse(JSON.stringify(expItem)));
            } else {
                expList[expId].qty += expItem.qty;
            }
        }
        this.totalsData[0]["Exp"] = expList;

        this.totalsData[0]["Mora"] = this.totalsData[0]["Mora"].map(d => ({
            name: d.name,
            path: d.path,
            qty: 
                d.qty + 
                (rowData["Weapon Exp Mora"].length == 0 ? 0 : 
                    rowData["Weapon Exp Mora"][0].qty) + 
                (rowData["Weapon Ascension Mora"].length == 0 ? 0 : 
                    rowData["Weapon Ascension Mora"][0].qty)
        }));
    
        let commonDropList = this.totalsData[0]["Common Drops"];
        for (
            let commonDrop of rowData["Weapon Ascension"]
                .filter((e: any) => e.type == "item-common-drop")
        ) {
            let commonDropId = commonDropList
                .findIndex((l: any) => l.name == commonDrop.name);
            if (commonDropId == -1) {
                commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
            } else {
                commonDropList[commonDropId].qty += commonDrop.qty;
            }
        }
        this.totalsData[0]["Common Drops"] = commonDropList;

        let relicList = this.totalsData[0]["Domain Drops"];
        for (
            let relic of rowData["Weapon Ascension"]
                .filter((e: any) => e.type == "item-domain")
        ) {
            let relicId = relicList
                .findIndex((l: any) => l.name == relic.name);
            if (relicId == -1) {
                relicList.push(JSON.parse(JSON.stringify(relic)));
            } else {
                relicList[relicId].qty += relic.qty;
            }
        }
        this.totalsData[0]["Domain Drop"] = relicList;

        this.totalsData[0]["Exp"] = this.sortItem(this.totalsData[0]["Exp"]);
        this.totalsData[0]["Common Drops"] = 
            this.sortItem(this.totalsData[0]["Common Drops"]);
        this.totalsData[0]["Domain Drops"] = 
            this.sortItem(this.totalsData[0]["Domain Drops"]);
    }

    /**
     * Sorts a list of items by rarity
     * @param list 
     */
    sortItem(list: any[]) {
        list.sort((a: any, b: any) => {
            if (this.qualityOrder.indexOf(a.qly) < this.qualityOrder.indexOf(b.qly))
                return -1;
            else if (this.qualityOrder.indexOf(a.qly) > this.qualityOrder.indexOf(b.qly))
                return 1;
            else
                return 0;
        });
        list.sort((a: any, b: any) => {
            if (this.tagOrder.indexOf(a.tag) < this.tagOrder.indexOf(b.tag))
                return -1;
            else if (this.tagOrder.indexOf(a.tag) > this.tagOrder.indexOf(b.tag))
                return 1;
            else
                return 0;
        });

        return list;
    }
}