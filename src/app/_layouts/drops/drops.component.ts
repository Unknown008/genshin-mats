import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { JsonService } from "../../_services/json.service";
import { EnvironmentPathService } from "../../_services/environment-path.service";
import { CharacterModel } from "src/app/_models/character.model";
import { CookieStorageService } from "../../_services/cookie-storage.service";

declare var $: any;
@Component({
    selector: "app-drops",
    templateUrl: "./drops.component.html",
    styleUrls: ["./drops.component.scss"]
})
export class DropsComponent implements OnInit, OnChanges {
    @Input() characters: CharacterModel[];
    @Input() change: boolean;
    
    public charData: any;
    public weaponData: any;
    public weaponQualityData: any = null;
    public userData: any;
    public talents = {
        "Freedom": [],
        "Resistance": [],
        "Ballad": [],
        "Prosperity": [],
        "Diligence": [],
        "Gold": [],
        "Light": [],
        "Elegance": [],
        "Transience": []
    };
    public charPath: string = this.url.getUrl("../../assets/resources/characters/", true);
    public weapons = {
        "Decarabian": [],
        "Fang": [],
        "Shackle": [],
        "Guyun": [],
        "Dango": [],
        "Aerosiderite": [],
        "Coral": [],
        "Magatama": [],
        "Mask": []
    };
    public charWeapons: any;
    public weapPath: string = this.url.getUrl("../../assets/resources/items/", true);
    public isPersonalised: boolean = false;
    public day = {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false
    };
    
    constructor(
        private json: JsonService,
        private url: EnvironmentPathService,
        private cookieStorageService: CookieStorageService
    ) { 
        this.userData = this.cookieStorageService.get("c");
    }

    ngOnInit() {
        this.charWeapons = JSON.parse(JSON.stringify(this.weapons));

        this.json.getJSON(this.url.getUrl("assets/resources/items/item_quality.json"))
            .subscribe((data: any) => {
                this.weaponQualityData = data.weapon;

                this.json.getJSON(this.url.getUrl("assets/resources/weapons/data.json"))
                    .subscribe((weaponData: any) => {
                        this.weaponData = weaponData;

                        this.json.getJSON(
                            this.url.getUrl("assets/resources/characters/data.json")
                        ).subscribe((charData: any) => {
                            this.charData = charData;

                            if (this.userData == null || this.userData == "") {
                                this.isPersonalised = false;
                                this.dePersonalise();
                            } else {
                                this.isPersonalised = true;
                                this.personalise();
                            }
                        });
                    });
            });
    }

    ngOnChanges() {
        if (this.userData == null || this.userData == "") {
            this.isPersonalised = false;
            this.dePersonalise();
        } else {
            this.isPersonalised = true;
            this.personalise();
        }
    }

    /**
     * Toggles personalisation
     */
    togglePersonalise() {
        this.isPersonalised = !this.isPersonalised;
        
        if (this.isPersonalised)
            this.personalise();
        else 
            this.dePersonalise();
        
        document.querySelector(".page").scrollTop = 0;
    }

    /**
     * Shows only characters and weapon materials the user has/needs
     */
    personalise() {
        if (!this.isPersonalised || !this.characters || !this.charData)
            return;

        this.resetLists();

        for (let char of this.characters) {
            if (!char.display) continue;

            if (char.name.includes("Traveler")) {
                let talents = this.charData[char.name].talent;
                let books = [];
                if (char.tbalevel - char.balevel > 0) {
                    for (let i = char.balevel; i < char.tbalevel; i++) {
                        if (books.indexOf(talents.talent1[i].book) == -1) {
                            books.push(talents.talent1[i].book);
                        }
                    }
                }
                if (char.teslevel - char.eslevel > 0) {
                    for (let i = char.eslevel; i < char.teslevel; i++) {
                        if (books.indexOf(talents.talent2[i].book) == -1)
                            books.push(talents.talent2[i].book);
                    }
                }
                if (char.teblevel - char.eblevel > 0) {
                    for (let i = char.eblevel; i < char.teblevel; i++) {
                        if (books.indexOf(talents.talent3[i].book) == -1)
                            books.push(talents.talent3[i].book);
                    }
                }
                for (let book of books) {
                    this.talents[book].push({
                        name: char.name,
                        path: char.file
                    });
                }
            } else if (
                char.tbalevel - char.balevel > 0 ||
                char.teslevel - char.eslevel > 0 ||
                char.teblevel - char.eblevel > 0
            ) {
                this.talents[this.charData[char.name].talent.all.book].push({
                    name: char.name,
                    path: char.file
                });
            }

            if (char.weapon.tascension > char.weapon.ascension) {
                let relic = this.weaponData[char.weapon.name]
                    .ascension.domain_drop;
                this.charWeapons[relic].push({
                    name: char.name,
                    path: char.file
                });
            }
        }

        this.day = {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false
        };

        let days = ["mon", "tue", "wed", "thu", "fri", "sat"];
        let day = new Date().getDay();
        this.day[days[day-1]] = true;
    }

    /**
     * Revert to the default view with all materials and characters
     */
    dePersonalise() {
        if (this.weaponQualityData == null)
            return;

        this.resetLists();

        for (let type in this.weapons) {
            for (let quality in this.weaponQualityData[type]) {
                let weaponName = this.weaponQualityData[type][quality];
                this.weapons[type].push({
                    name: weaponName.replace("_", " "),
                    quality: quality.toLowerCase() + "-mat",
                    path: this.weapPath + weaponName + ".png"
                }); 
            }
        }
            
        for (let char in this.charData) {
            if (char.includes("Traveler")) continue;
            
            this.talents[this.charData[char].talent.all.book].push({
                name: char,
                path: this.charPath + char + ".png"
            });
        }
    }

    /**
     * Resets lists
     */
    resetLists() {
        this.talents = {
            "Freedom": [],
            "Resistance": [],
            "Ballad": [],
            "Prosperity": [],
            "Diligence": [],
            "Gold": [],
            "Light": [],
            "Elegance": [],
            "Transience": []
        };
        this.weapons = {
            "Decarabian": [],
            "Fang": [],
            "Shackle": [],
            "Guyun": [],
            "Dango": [],
            "Aerosiderite": [],
            "Coral": [],
            "Magatama": [],
            "Mask": []
        };
        this.charWeapons = {
            "Decarabian": [],
            "Fang": [],
            "Shackle": [],
            "Guyun": [],
            "Dango": [],
            "Aerosiderite": [],
            "Coral": [],
            "Magatama": [],
            "Mask": []
        };
    }
}
