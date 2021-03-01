import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CharacterModel } from '../_models/character.model';
import { EnvironmentPathService } from '../_services/environment-path.service';
import { JsonService } from '../_services/json.service';

@Component({
    selector: 'app-customize',
    templateUrl: './customize.component.html',
    styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
    public characters: CharacterModel[];
    public levelUpData: any;
    public ascensionData: any;
    public talentData: any;
    public charData: any;
    public itemQualityData: any;
    public weaponData: any;
    public weaponExpData: any;
    public change: boolean = false;
    public allCharacters: any[] = [];
    public filteredCharacters: any[] = [];
    public charFilter: string = "";
    public path: string = this.url.getUrl("./../../assets/resources/", true);

    public charSelect: FormGroup;

    constructor(
        private json: JsonService,
        private cookieService: CookieService,
        private url: EnvironmentPathService
    ) { }

    ngOnInit() {
        this.json.getJSON(this.url.getUrl("assets/resources/characters/levelup.json"))
            .subscribe((data: any) => {
                this.levelUpData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/items/item_quality.json"))
            .subscribe((data: any) => {
                this.itemQualityData = data;
            });

        this.json.getJSON(this.url.getUrl(
            "assets/resources/characters/ascension.json"
        )).subscribe((data: any) => {
            this.ascensionData = data;
        });

        this.json.getJSON(this.url.getUrl("assets/resources/characters/talent.json"))
            .subscribe((data: any) => {
                this.talentData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/weapons/data.json"))
            .subscribe((data: any) => {
                this.weaponData = data;
            });

        this.json.getJSON(this.url.getUrl("assets/resources/weapons/levelup.json"))
            .subscribe((data: any) => {
                this.weaponExpData = data;
            });
        
        this.loadCharacters();
    }

    /**
     * Dummy function to allow ngOnChanges to trigger
     */
    incrChange() {
        this.change = !this.change;
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
        this.json.getJSON(this.url.getUrl("assets/resources/characters/data.json"))
            .subscribe((data: any) => {
                this.charData = data;
                for (let char in data) {
                    this.allCharacters.push({
                        name: char,
                        vision: this.path + "elements/" + data[char].element + ".png",
                        element: data[char].element,
                        selected: (this.characters.findIndex(c => c.name == char) > -1)
                    });
                }
                this.allCharacters.sort((a: any, b: any) => {
                    if (a.name > b.name)
                        return 1;
                    else if (a.name < b.name)
                        return -1;
                    return 0;
                });
                this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters));
            });
    }

    /**
     * Adds a new character to the character list
     * @character The object for the character that is being added
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
                    display: true
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
     * Removes a character from the character list
     * @name The name of the character
     */
    deleteCharacter(name: string) {
        let charId = this.characters.findIndex(c => c.name == name);
        this.characters.splice(charId, 1);
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
}
