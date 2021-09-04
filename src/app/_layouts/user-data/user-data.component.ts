import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CharacterModel } from "./../../_models/character.model";
import { CookieStorageService } from "../../_services/cookie-storage.service";

@Component({
    selector: "app-user-data",
    templateUrl: "./user-data.component.html",
    styleUrls: ["./user-data.component.scss"]
})
export class UserDataComponent implements OnChanges {
    @Input() characters: CharacterModel[];
    @Input() charData: any;
    @Input() weaponData: any;
    @Output() charactersChange = new EventEmitter<CharacterModel[]>();
    @Input() change: boolean;

    public alertSeen: string = "false";
    public characterString: string = "";
    public deleteTitle: string = "";
    public disableDelete: boolean = false;
    public showAlert: boolean = false;
    public alertMsg: string = "";
    public timeouts: any = null;
    public loading: boolean = false;

    public userData: FormGroup;

    constructor(
        private cookieStorageService: CookieStorageService
    ) { 
        let alertSeen = this.cookieStorageService.get("disclaimer-seen");
        if (alertSeen == null || alertSeen == "")
            this.alertSeen = "false";
        else
            this.alertSeen = "true";
        
        let userData = this.cookieStorageService.get("c");
        if (userData == null || userData == "") {
            this.disableDelete = true;
            this.deleteTitle = "No data saved to browser";
        } else {
            this.disableDelete = false;
            this.deleteTitle = "Deleted saved data from browser";
        }
    }

    ngOnChanges() {
        this.loading = true;
        if (this.characters == null) {
            this.loading = false;
            return;
        }
        
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
                tascension: c.weapon.tascension
            }
        })));
        this.loading = false;
    }

    /**
     * Sets the disclaimer as seen in the cookies so it doesn't display again
     */
    disclaimerSeen() {
        this.cookieStorageService.set("disclaimer-seen", "true");
    }

    /**
     * Saves the text in the textarea to the cookies
     */
    save() {
        this.loading = true;
        try {
            let toValidate = JSON.parse(this.characterString);
            this.validateData(toValidate);
        } catch (e) {
            this.loading = false;
            console.log(e);
            this.alertMsg = e.message;
            this.displayAlert();
            return;
        }
        this.cookieStorageService.set("c", this.characterString);
        this.loading = false;
        this.alertMsg = "Character data saved!";
        this.disableDelete = false;
        this.displayAlert();
    }

    /**
     * Loads the text in the text area to the app
     */
    load() {
        this.loading = true;
        try {
            let toValidate = JSON.parse(this.characterString);
            this.validateData(toValidate);
            this.characters = toValidate;
        } catch (e) {
            this.loading = false;
            console.log(e);
            this.alertMsg = "Supplied data is an invalid JSON object and could not be loaded"
            this.displayAlert();
            return;
        }
        this.loading = false;
        this.alertMsg = "Character data loaded!";
        this.displayAlert();
        this.charactersChange.emit(this.characters);
    }

    /**
     * Deletes saved cookies
     */
    delete() {
        this.loading = true;
        this.cookieStorageService.delete("c");
        this.cookieStorageService.delete("disclaimer-seen");
        this.loading = false;
        this.disableDelete = true;
        this.alertMsg = "Character data deleted!";
        this.displayAlert();
    }

    /**
     * Shows alert messages
     */
    displayAlert() {
        this.showAlert = true;
        if (this.timeouts != null)
            clearTimeout(this.timeouts);

        this.timeouts = setTimeout(() => {
            this.showAlert = false;
        }, 5000);
    }

    /**
     * Validates the object for characters
     * @param data The object to be validated
     */
    validateData(data: CharacterModel[]) {
        for (let char of data) {
            // Validate character name and file
            let names = Object.getOwnPropertyNames(this.charData);
            if (
                !names.includes(char.name) || 
                !names.map(n => n.replace(/ \([^)]+\)/, "")).includes(char.file)
            )
                throw new Error(
                    "Invalid character or character file name:\n" + char.name + "\n" +
                        char.file
                );

            // Validate character levell
            if (
                char.level < 1 || char.level > 90 || 
                char.tlevel < char.level || char.tlevel > 90
            )
                throw new Error(
                    "Invalid character level for " + char.name + ":\nCurrent level: " + 
                    char.level + "\nTarget level: " + char.tlevel
                );

            // Validate character ascension
            if (
                char.ascension < 0 || char.ascension > 6 || 
                char.tascension < char.ascension || char.tascension > 6
            )
                throw new Error(
                    "Invalid character ascension for " + char.name + 
                    ":\nCurrent ascension: " + char.ascension + 
                    "\nTarget ascension: " + char.tascension
                );

            // Validate character normal attack
            if (
                char.balevel < 1 || char.balevel > 10 || 
                char.tbalevel < char.balevel || char.tbalevel > 10
            )
                throw new Error(
                    "Invalid normal attack level for " + char.name + 
                    ":\nCurrent level: " + char.balevel + "\nTarget level: " + 
                    char.tbalevel
                );

            // Validate character elemental skill
            if (
                char.eslevel < 1 || char.eslevel > 10 || 
                char.teslevel < char.eslevel || char.teslevel > 10
            )
                throw new Error(
                    "Invalid elemental skill level for " + char.name + 
                    ":\nCurrent level: " + char.eslevel + "\nTarget level: " + 
                    char.teslevel
                );

            // Validate character burst skill
            if (
                char.eblevel < 1 || char.eblevel > 10 || 
                char.teblevel < char.eblevel || char.teblevel > 10
            )
                throw new Error(
                    "Invalid elemental burst level for " + char.name + 
                    ":\nCurrent level: " + char.eblevel + "\nTarget level: " + 
                    char.teblevel
                );

            // Validate weapon name and file
            names = Object.getOwnPropertyNames(this.weaponData);
            if (
                !names.includes(char.weapon.name) || 
                !names.includes(char.weapon.file)
            )
                throw new Error(
                    "Invalid weapon name or weapon file name for " + char.name + ":\n" +
                        char.weapon.name + "\n" + char.weapon.file
                );

            // Validate if this character can equip this weapon
            if (this.charData[char.name].weapon != this.weaponData[char.weapon.name].type)
                throw new Error(
                    "Invalid weapon for " + char.name + ":\n" + char.weapon.name
                );

            let weaponRarity = this.weaponData[char.weapon.name].rarity;
            let maxAsc = weaponRarity < 3 ? 4 : 6;
            let maxLevel = weaponRarity < 3 ? 70 : 90;
            // Validate weapon level
            if (
                char.weapon.level < 1 || char.weapon.level > maxLevel ||
                char.weapon.tlevel < char.weapon.level || char.weapon.tlevel > maxLevel
            )
                throw new Error(
                    "Invalid character level for " + char.name + ":\nCurrent level: " + 
                    char.weapon.level + "\nTarget level: " + char.weapon.tlevel
                );

            // Validate weapon ascension
            if (
                char.weapon.ascension < 0 || char.weapon.ascension > maxAsc || 
                char.weapon.tascension < char.weapon.ascension || 
                char.weapon.tascension > maxAsc
            )
                throw new Error(
                    "Invalid character ascension for " + char.name + 
                    ":\nCurrent ascension: " + char.weapon.ascension + 
                    "\nTarget ascension: " + char.weapon.tascension
                );
        }
    }
}