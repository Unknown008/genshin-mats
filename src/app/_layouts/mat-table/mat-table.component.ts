import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NumberFormatPipeModule } from 'src/app/_shared/directives/number-format';
import { CharacterModel } from './../../_models/character.model';

@Component({
    selector: 'app-mat-table',
    templateUrl: './mat-table.component.html',
    styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnChanges {
    @Input() characters: CharacterModel[];
    @Input() levelUpData: any;
    @Input() expData: any;
    @Input() ascensionData: any;
    @Input() talentData: any;
    @Input() charData: any;
    @Input() itemQualityData: any;
    @Input() change: boolean;

    public tableOptions: FormGroup;
    public numberFormat: NumberFormatPipeModule;

    public displayedColumns: string[] = [];
    public totalColumns: string[] = ["Exp", "Gems", "Local Specialties", "Common Drops", "Books", "Boss Drops", "Limited", "Mora"];
    public tableData: any = [];
    public totalsData: any = [];
    public path: string = "./../../../assets/resources/";
    public ascensionLevels = [20, 40, 50, 60, 70, 80];
    public displayRarity: boolean = true;
    public displayTotals: boolean = true;
    public qualityOrder = ["grey", "green", "blue", "purple", "gold"];
    public tagOrder = [
        "Mask", "Arrowhead", "Slime", "Scroll", "Nectar", "Treasure_Hoarder_Insignia",
        "Fatui_Insignia", "Branch", "Horn", "Bone", "Knife", "Mist_Grass", "Chaos",
        "adaptive", "Freedom", "Resistance", "Ballad", "Prosperity", "Diligence", "Gold",
        "pyro", "hydro", "electro", "anemo", "cryo", "geo", "weekly"
    ];

    constructor(
        numberFormat: NumberFormatPipeModule
    ) { 
        this.numberFormat = numberFormat;
    }

    ngOnChanges() {
        if (
            this.characters == null || 
            this.levelUpData == null || 
            this.ascensionData == null ||
            this.expData == null ||
            this.talentData == null ||
            this.charData == null || 
            this.itemQualityData == null
        )
            return;

        this.displayedColumns = [];
        this.tableData = [];
        this.totalsData = [];

        for (let prop in this.characters[0]) {
            switch (prop) {
                case "name":
                    this.displayedColumns.push("Name");
                    break;
                case "level":
                    this.displayedColumns.push("Exp");
                    this.displayedColumns.push("Exp Mora");
                    break;
                case "ascension":
                    this.displayedColumns.push("Ascension");
                    this.displayedColumns.push("Ascension Mora");
                    break;
                case "balevel":
                    this.displayedColumns.push("Talent");
                    this.displayedColumns.push("Talent Mora");
                    break;
            }
        }

        for (let char of this.characters) {
            if (!char.display) continue;
            let exp = this.calcExp(char.level, char.tlevel);
            let talents = this.calcTalent(
                char.name, char.balevel, char.eslevel, char.eblevel, 
                char.tbalevel, char.teslevel, char.teblevel
            );
            let ascensions = this.calcAscension(char.name, char.level, char.tlevel);

            this.tableData.push({
                "Name": char.name,
                "Exp": exp.exp,
                "Exp Mora": exp.mora,
                "Ascension": ascensions.items,
                "Ascension Mora": ascensions.mora,
                "Talent": talents.items,
                "Talent Mora": talents.mora
            });

            this.getTotals(exp, talents, ascensions);
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
        for (let t in this.expData) {
            let d = this.expData[t];
            cards.push({
                name: t,
                path: this.path + "items/" + t + ".png",
                qty: 0,
                exp: d.exp,
                cost: d.cost,
                qly: this.displayRarity ? d.quality : ""
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
                type: "item-exp"
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
     * @char Character name
     * @clevel Current level of character
     * @tlevel Target level of character
     */
    calcAscension(char: string, clevel: number, tlevel: number) {
        let characterAscensionData = this.charData[char].ascension;
        let mats = {
            cost: 0,
            gem: [],
            local_specialty: [],
            common_drop: [],
            boss_drop: []
        };

        for (
            let i = 0; 
            this.ascensionLevels[i] < tlevel && this.ascensionLevels[i] < 90;
            i++
        ) {
            let data = JSON.parse(JSON.stringify(
                this.ascensionData.cost[this.ascensionLevels[i]]
            ));

            if (clevel > this.ascensionLevels[i]) continue
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
                    let bossDropName = reqs.boss_drop;

                    if (mats.boss_drop.length == 0)
                        mats.boss_drop.push({
                            name: bossDropName.replace(/_/g, " "),
                            qty: data.boss_drop.quantity,
                            qly: "purple",
                            path: this.path + "items/" + bossDropName + ".png",
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
                        name: localSpecialtyName.replace(/_/g, " "),
                        qty: data.local_specialty.quantity,
                        qly: "grey",
                        path: this.path + "items/" + localSpecialtyName + ".png",
                        type: "item-local-specialty"
                    });
                else
                    mats.local_specialty[0].qty += data.local_specialty.quantity;
            }

            if (data.common_drop != null) {
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
     * @char Character name
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
     * @charTalent Character talent data
     * @talentNo The talent number (1, 2 or 3)
     * @from From talent level
     * @to To talent level
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
                        type: "item-book",
                        tag: tag
                    });
                else
                    mats.book[bookId].qty += data.book.quantity;
            }
            if (data.common_drop != null) {
                let commonDropType = "";
                    
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    commonDropType = 
                        charTalent["talent" + talentNo.toString()][i].common_drop;
                else
                    commonDropType = charTalent.all.common_drop;
                
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
            if (data.boss_drop != null) {
                let bossDropName = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    bossDropName = 
                        charTalent["talent" + talentNo.toString()][i].boss_drop;
                else
                    bossDropName = charTalent.all.boss_drop;

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
     * Toggle values
     * @item item that requires toggling
     */
    toggle(item: string) {
        switch (item) {
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
     * @exp List of exp items required
     * @talents List of ascension items required
     * @ascensions List of talent items required
     */
    getTotals(exp: any, talents: any, ascensions: any) {
        if (this.totalsData.length == 0) {
            let commonDropList = JSON.parse(JSON.stringify(ascensions.items
                .filter((i: any) => i.type == "item-common-drop")));
            for (
                let commonDrop of talents.items
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
                talents.items.filter((i: any) => i.type == "item-boss-drop")
            ));
            for (
                let bossDrop of talents.items
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
                "Exp": JSON.parse(JSON.stringify(exp.exp)),
                "Gems": JSON.parse(JSON.stringify(
                    ascensions.items.filter((i: any) => i.type == "item-gem")
                )),
                "Local Specialties": JSON.parse(JSON.stringify(
                    ascensions.items.filter((i: any) => i.type == "item-local-specialty")
                )),
                "Common Drops": commonDropList,
                "Boss Drops": bossDropList,
                "Books": JSON.parse(JSON.stringify(
                    talents.items.filter((i: any) => i.type == "item-book")
                )),
                "Limited": JSON.parse(JSON.stringify(
                    talents.items.filter((i: any) => i.type == "item-limited")
                )),
                "Mora": [{
                    name: exp.mora[0].name,
                    path: exp.mora[0].path,
                    cost: (exp.mora[0].qty + ascensions.mora[0].qty + 
                        talents.mora[0].qty),
                    qty: (exp.mora[0].qty + ascensions.mora[0].qty + 
                        talents.mora[0].qty).toString().replace(
                            /\d(?=(?:\d{3})+$)/g, (m: string) => {
                                return m + ",";
                            })
                }]
            });
        } else {
            let expList = this.totalsData[0]["Exp"];
            for (let expItem of exp.exp) {
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
                qty: (d.cost + exp.mora[0].qty + ascensions.mora[0].qty + 
                    talents.mora[0].qty).toString().replace(
                        /\d(?=(?:\d{3})+$)/g, (m: string) => {
                            return m + ",";
                        }),
                cost: d.cost + exp.mora[0].qty + ascensions.mora[0].qty + 
                    talents.mora[0].qty,
            }));
        
            let gemList = this.totalsData[0]["Gems"];
            for (let gem of ascensions.items.filter((e: any) => e.type == "item-gem")) {
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
                let localSpecialty of ascensions.items
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
                let commonDrop of ascensions.items
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
                let commonDrop of talents.items
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
                let bossDrop of ascensions.items
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
                let bossDrop of talents.items
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

            let bookList = this.totalsData[0]["Books"];
            for (
                let book of talents.items
                    .filter((e: any) => e.type == "item-book")
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
                let limited of talents.items
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
        this.totalsData[0]["Books"] = this.sortItem(this.totalsData[0]["Books"]);
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

export class expField {
    name: string
    path: string
    qty: number
}