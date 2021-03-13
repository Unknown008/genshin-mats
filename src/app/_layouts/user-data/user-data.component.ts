import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CharacterModel } from './../../_models/character.model';

@Component({
    selector: 'app-user-data',
    templateUrl: './user-data.component.html',
    styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnChanges {
    @Input() characters: CharacterModel[];
    @Output() charactersChange = new EventEmitter<CharacterModel[]>();
    @Input() change: boolean;

    public alertSeen: string = "false";
    public characterString: string = "";
    public deleteTitle: string = "";
    public disableDelete: boolean = false;
    public showAlert: boolean = false;
    public alertMsg: string = "";
    public timeouts: any = null;

    public userData: FormGroup

    constructor(
        private cookieService: CookieService
    ) { 
        let alertSeen = this.cookieService.get("disclaimer-seen");
        if (alertSeen == null || alertSeen == "")
            this.alertSeen = "false";
        else
            this.alertSeen = "true";
        
        let userData = this.cookieService.get("genshin-characters");
        if (userData == null || userData == "") {
            this.disableDelete = true;
            this.deleteTitle = "No data saved to browser";
        } else {
            this.disableDelete = false;
            this.deleteTitle = "Deleted saved data from browser";
        }
    }

    ngOnChanges() {
        if (this.characters == null)
            return;

        this.characterString = JSON.stringify(this.characters.map((c: CharacterModel) => ({
            name: c.name,
            file: c.name.replace(/ \([^)]*\)/, ""),
            level: c.level,
            balevel: c.balevel,
            eslevel: c.eslevel,
            eblevel: c.eblevel,
            ascension: c.ascension,
            tlevel: c.tlevel,
            tbalevel: c.tbalevel,
            teslevel: c.teslevel,
            teblevel: c.teblevel,
            tascension: c.tascension,
            display: c.display,
            weaponMode: false,
            weapon: {
                name: c.weapon.name,
                file: c.weapon.name,
                rarity: c.weapon.rarity,
                level: c.weapon.level,
                ascension: c.weapon.ascension,
                tlevel: c.weapon.tlevel,
                tascensoin: c.weapon.tascension
            }
        })));
    }

    disclaimerSeen() {
        this.cookieService.set("disclaimer-seen", "true");
    }

    save() {
        this.cookieService.set("genshin-characters", this.characterString);
        this.alertMsg = "Character data saved!";
        this.disableDelete = false;
        this.displayAlert();
    }

    load() {
        this.characters = JSON.parse(this.characterString);
        this.alertMsg = "Character data loaded!";
        this.displayAlert();
    }

    delete() {
        this.cookieService.delete("genshin-characters");
        this.disableDelete = true;
        this.alertMsg = "Character data deleted!";
        this.displayAlert();
    }

    displayAlert() {
        this.showAlert = true;
        if (this.timeouts != null)
            clearTimeout(this.timeouts);

        this.timeouts = setTimeout(() => {
            this.showAlert = false;
        }, 5000);
    }
}