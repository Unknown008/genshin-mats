import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CharacterModel } from '../_models/character.model';
import { EnvironmentPathService } from '../_services/environment-path.service';
import { JsonService } from '../_services/json.service';
import PerfectScrollbar from "perfect-scrollbar";
import { characterList, weaponList } from '../_models/display.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public characters: CharacterModel[];
    public levelUpData: any;
    public ascensionData: any;
    public talentData: any;
    public charData: any;
    public itemQualityData: any;
    public weaponData: any;
    public weaponLevelUpData: any;
    public weaponAscensionData: any;
    public change: boolean = false;
    public allCharacters: characterList[] = [];
    public filteredCharacters: characterList[] = [];
    public filteredPickCharacters: characterList[] = [];
    public allWeapons: weaponList[] = [];
    public filteredWeapons: weaponList[] = [];
    public charFilter: string = "";
    public pickCharFilter: string = "";
    public weaponFilter: string = "";
    public oldCharacter: string = "";
    public oldWeapon: string = "";
    public weaponCharacter: string = "";
    public path: string = this.url.getUrl("./../../assets/resources/", true);

    public charSelect: FormGroup;

    constructor(
        private json: JsonService,
        private cookieService: CookieService,
        private url: EnvironmentPathService
    ) { }

    ngOnInit() {
        let mainPanel = document.querySelector('.main-panel');
        new PerfectScrollbar(mainPanel);

        let modalPanels = document.querySelectorAll('.modal-panel');
        for (let i = 0, len = modalPanels.length; i < len; i++) {
            new PerfectScrollbar(modalPanels[i]);
        }

        this.json.getJSON(this.url.getUrl("assets/resources/characters/levelup.json"))
            .subscribe((data: any) => {
                this.levelUpData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/items/item_quality.json"))
            .subscribe((data: any) => {
                this.itemQualityData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/characters/ascension.json"))
            .subscribe((data: any) => {
                this.ascensionData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/characters/talent.json"))
            .subscribe((data: any) => {
                this.talentData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/weapons/levelup.json"))
            .subscribe((data: any) => {
                this.weaponLevelUpData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/weapons/ascension.json"))
            .subscribe((data: any) => {
                this.weaponAscensionData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/characters/data.json"))
            .subscribe((data: any) => {
                this.charData = data;

                this.json.getJSON(this.url.getUrl("assets/resources/weapons/data.json"))
                    .subscribe((weaponData: any) => {
                        for (let weapon in weaponData) {
                            if (weaponData[weapon].ascension.domain_drop == "")
                                delete weaponData[weapon];
                        }
                        this.weaponData = weaponData;

                        for (let char in data) {
                            this.allCharacters.push({
                                name: char,
                                vision: this.path + "elements/" + data[char].element + ".png",
                                element: data[char].element,
                                selected: false
                            });
                        }
                        this.allCharacters.sort((a: any, b: any) => {
                            if (a.name > b.name)
                                return 1;
                            else if (a.name < b.name)
                                return -1;
                            return 0;
                        });
                        
                        this.loadCharacters();
                    });
            });
    }

    /**
     * Dummy function to allow ngOnChanges to trigger
     */
    incrChange() {
        this.change = !this.change;
        document.querySelector(".page").scrollLeft = 0;
        document.querySelector(".page").scrollTop = 0;
    }

    /**
     * Load characters from cookie if available, otherwise from default template
     */
    loadCharacters() {
        let userData = this.cookieService.get('genshin-characters');
        if (userData == null || userData == "") {
            this.json.getJSON(this.url.getUrl("assets/resources/characters/template.json"))
                .subscribe((data: CharacterModel[]) => {
                    this.characters = data;
                    this.loadCharData();
                });
        } else {
            this.characters = JSON.parse(userData);
            this.loadCharData();
        }
    }

    /**
     * Load the data json file for characters
     */
    loadCharData() {
        for (let char of this.allCharacters) {
            char.selected = (this.characters.findIndex(c => c.name == char.name) > -1);
        }

        this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters));
    }

    /**
     * Adds a new character to the character list
     * @param character The object for the character that is being added
     */
    addCharacter(character: CharacterModel) {
        let selectedChar = this.allCharacters.filter((c: any) => c.name == character.name)[0];
        if (selectedChar != null) {
            selectedChar.selected = !selectedChar.selected;
            if (selectedChar.selected) {
                this.characters.push({
                    name: character.name,
                    file: character.name.replace(/ \([^)]*\)/, ""),
                    level: 1,
                    balevel: 1,
                    eslevel: 1,
                    eblevel: 1,
                    ascension: 0,
                    tlevel: 90,
                    tbalevel: 10,
                    teslevel: 10,
                    teblevel: 10,
                    tascension: 6,
                    display: true,
                    weaponMode: false,
                    weapon: {
                        name: "",
                        file: "",
                        rarity: 1,
                        level: 1,
                        tlevel: 70,
                        ascension: 0,
                        tascension: 4
                    }
                });
            } else {
                let charId = this.characters.findIndex((c: CharacterModel) => 
                    c.name == character.name
                );
                if (charId > -1) {
                    this.characters.splice(charId, 1);
                }
            }
        }
    }

    /**
     * Shows the list of available characters who are not already in the character list
     * @param name The name of the character to be replaced
     */
    showCharacter(name: string) {
        this.filteredPickCharacters = [];
        this.oldCharacter = name;
        for (let char of this.allCharacters) {
            if (
                this.characters.findIndex(c => c.name == char.name) == -1 ||
                name == char.name
            ) {
                this.filteredPickCharacters.push({
                    name: char.name,
                    element: char.element,
                    selected: name == char.name,
                    vision: char.vision
                });
            }
        }
    }

    /**
     * Removes a character from the character list
     * @param name The name of the character
     */
    deleteCharacter(name: string) {
        let charId = this.characters.findIndex(c => c.name == name);
        this.characters.splice(charId, 1);
    }

    /**
     * Switches to a character's weapon mode
     * @param name The name of the character
     */
    showWeapon(name: string) {
        let weaponType = this.charData[name].weapon;
        this.allWeapons = [];
        this.filteredWeapons = [];
        this.weaponCharacter = name;
        for (let char of this.characters) {
            if (char.name == name) {
                this.oldWeapon = char.weapon.name;
                break;
            }
        }
        for (let weapon in this.weaponData) {
            if (this.weaponData[weapon].type == weaponType) {
                this.allWeapons.push({
                    name: weapon,
                    selected: weapon == this.oldWeapon
                });
            }
        }

        this.allWeapons.sort((a: any, b: any) => {
            if (a.name > b.name)
                return 1;
            else if (a.name < b.name)
                return -1;
            return 0;
        });

        this.filteredWeapons = JSON.parse(JSON.stringify(this.allWeapons));
    }

    /**
     * Filters the full weapon list with the keywords typed by the user
     */
    filterWeapons() {
        if (this.weaponFilter != "") {
            let filtered = this.allWeapons.filter((c: any) =>
                c.name.toLowerCase().includes(this.weaponFilter.toLowerCase())
            )
            if (filtered.length != 0) {
                this.filteredWeapons = JSON.parse(JSON.stringify(filtered));
            }
        } else {
            this.filteredWeapons = JSON.parse(JSON.stringify(this.allWeapons));
        }
    }    

    /**
     * Changes an existing weapon to the specified weapon
     * @param name The name of the replacement weapon
     */
    changeWeapon(name: string) {
        for (let character of this.characters) {
            if (character.name == this.weaponCharacter) {
                character.weapon.name = name;
                character.weapon.file = this.path + "weapons/" + 
                    name.replace(/ /g, "_") + ".png";
                
                character.weapon.rarity = this.weaponData[name].rarity;
                if (character.weapon.rarity == 1 || character.weapon.rarity == 2) {
                    character.weapon.tlevel = 70;
                    character.weapon.tascension = 4;
                } else {
                    character.weapon.tlevel = 90;
                    character.weapon.tascension = 6;
                }

                this.oldWeapon = name;
                break;
            }
        }
    }

    /**
     * Changes an existing character to the specified character
     * @param name The name of the replacement character
     */
    changeCharacter(name: string) {
        for (let character of this.characters) {
            if (character.name == this.oldCharacter) {
                character.name = name;
                character.file = this.path + "characters/" + 
                    name.replace(/ \([^)]+\)/, "") + ".png";

                let weaponType = this.charData[name].weapon;
                let defaultWeapon;
                for (let weapon in this.weaponData) {
                    if (
                        this.weaponData[weapon].type == weaponType && 
                        this.weaponData[weapon].rarity == 1
                    ) {
                        defaultWeapon = weapon;
                        break;
                    }
                }
                character.weapon.file = this.path + "weapons/" + 
                    defaultWeapon.replace(/ /g, "_") + ".png";
                character.weapon.name = defaultWeapon;

                this.oldCharacter = character.name;
                break;
            }
        }
    }

    /**
     * Filters the full character list with the keywords typed by the user
     */
    filterCharacters() {
        let elements = ["pyro", "hydro", "electro", "anemo", "cryo", "geo"];
        if (elements.includes(this.charFilter.toLowerCase())) {
            this.filteredCharacters = JSON.parse(JSON.stringify(
                this.allCharacters.filter((c: any) =>
                    c.element == this.charFilter.toLowerCase()
                )
            ));
        } else if (this.charFilter != "") {
            let filtered = this.allCharacters.filter((c: any) =>
                c.name.toLowerCase().includes(this.charFilter.toLowerCase())
            )
            if (filtered.length != 0) {
                this.filteredCharacters = JSON.parse(JSON.stringify(filtered));
            }
        } else {
            this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters));
        }
    }

    /**
     * Filters the full character list with the keywords typed by the user
     */
    filterPickCharacters() {
        let elements = ["pyro", "hydro", "electro", "anemo", "cryo", "geo"];
        if (elements.includes(this.charFilter.toLowerCase())) {
            this.filteredCharacters = JSON.parse(JSON.stringify(
                this.filteredPickCharacters.filter((c: any) =>
                    c.element == this.charFilter.toLowerCase()
                )
            ));
        } else if (this.charFilter != "") {
            let filtered = this.filteredPickCharacters.filter((c: any) =>
                c.name.toLowerCase().includes(this.charFilter.toLowerCase())
            )
            if (filtered.length != 0) {
                this.filteredCharacters = JSON.parse(JSON.stringify(filtered));
            }
        } else {
            this.filteredCharacters = 
                JSON.parse(JSON.stringify(this.filteredPickCharacters));
        }
    }
}
