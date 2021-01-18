import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CharacterModel } from '../_models/character.model';
import { JsonService } from '../_services/json.service';

@Component({
    selector: 'app-customize',
    templateUrl: './customize.component.html',
    styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
    public characters: CharacterModel[];
    public levelUpData: any;
    public expData: any;
    public ascensionData: any;
    public talentData: any;
    public charData: any;
    public itemQualityData: any;
    public change: boolean = false;
    public allCharacters: any[] = [];
    public filteredCharacters: any[] = [];
    public charFilter: string = "";
    public path: string = "./../../assets/resources/";

    public charSelect: FormGroup;

    constructor(
        private json: JsonService,
        private cookieService: CookieService
    ) { }

    ngOnInit() {
        this.json.getJSON("assets/resources/characters/_levelup.json")
            .subscribe((data: any) => {
                this.levelUpData = data;
            });

        this.json.getJSON("assets/resources/items/_exp.json")
            .subscribe((data: any) => {
                this.expData = data;
            });

        this.json.getJSON("assets/resources/items/_item_quality.json")
            .subscribe((data: any) => {
                this.itemQualityData = data;
            });

        this.json.getJSON("assets/resources/characters/_ascension.json")
            .subscribe((data: any) => {
                this.ascensionData = data;
            });

        this.json.getJSON("assets/resources/characters/_talent.json")
            .subscribe((data: any) => {
                this.talentData = data;
            });

        this.loadCharacters();
    }

    incrChange() {
        this.change = !this.change;
    }

    /**
     * 
     */
    loadCharacters() {
        let userData = this.cookieService.get('genshin-characters');
        if (userData == null || userData == "") {
            this.json.getJSON("assets/resources/characters/_template.json")
                .subscribe((data: CharacterModel[]) => {
                    this.characters = data;
                });
        } else {
            this.characters = JSON.parse(userData);
        }

        this.json.getJSON("assets/resources/characters/_data.json")
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
     * 
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
     * 
     */
    deleteCharacter(name: string) {
        let charId = this.characters.findIndex(c => c.name == name);
        this.characters.splice(charId, 1);
    }

    /**
     * 
     * @event 
     */
    filterCharacters() {
        console.log(this.charFilter);
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
