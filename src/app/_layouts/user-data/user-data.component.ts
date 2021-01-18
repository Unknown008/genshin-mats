import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CharacterModel } from 'src/app/_models/character.model';

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
    public canDelete: boolean = true;

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
            this.canDelete = false;
            this.deleteTitle = "No data saved to browser";
        } else {
            this.canDelete = true;
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
            display: c.display
        })));
    }

    disclaimerSeen() {
        this.cookieService.set("disclaimer-seen", "true");
    }

    save() {
        this.cookieService.set("genshin-characters", this.characterString);
    }

    load() {
        this.characters = JSON.parse(this.characterString);
    }

    delete() {
        this.cookieService.delete("genshin-characters");
    }
}