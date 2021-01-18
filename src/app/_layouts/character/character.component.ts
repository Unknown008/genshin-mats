import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnvironmentPathService } from 'src/app/_services/environment-path.service';
import { CharacterModel } from './../../_models/character.model';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
    @Input() character: CharacterModel;
    @Output() deleteCharacter = new EventEmitter<string>();

    characterForm: FormGroup;

    public path: string = this.url.getUrl("./../../assets/resources/characters/", true);
    public levels = [1, 20, 40, 50, 60, 70, 80, 90];
    public ascensions = [0, 1, 2, 3, 4, 5, 6, 7];
    public talents = [1, 1, 2, 4, 6, 8, 10];

    constructor(
        private url: EnvironmentPathService
    ) { }

    ngOnInit() {
        this.character.file = this.path + this.character.file + ".png";
    }

    removeCharacter() {
        this.deleteCharacter.emit(this.character.name);
    }

    toggleCharacterDisplay() {
        this.character.display = !this.character.display;
    }

    checkAscension(type: string) {
        switch (type) {
            case "c":
                if (this.character.ascension < 0 || this.character.ascension > 6)
                    return;

                this.syncAscToLevel();
                this.syncTlevelToLevel();
                this.syncTascToTlevel();
                this.syncTalentToAsc();
                break;
            case "t":
                if (this.character.tascension < 0 || this.character.tascension > 6)
                    return;

                this.syncTascToTlevel();
                this.syncLevelToTlevel();
                this.syncAscToLevel();
                this.syncTtalentToTasc();
                break;
        }
    }

    checkLevel(type: string) {
        switch (type) {
            case "c":
                if (this.character.ascension < 0 || this.character.ascension > 6)
                    return;

                this.syncLevelToAsc();
                this.syncTascToAsc();
                this.syncTlevelToTasc();
                break;
            case "t":
                if (this.character.tascension < 0 || this.character.tascension > 6)
                    return;

                this.syncTlevelToTasc();
                this.syncAscToTasc();
                this.syncLevelToAsc();
                break;
        }
    }

    checkTalent(type: string) {
        switch (type) {
            case "cba":
                if (this.character.balevel < 0 || this.character.balevel > 10)
                    return;
                
                this.syncTtalentToTalent("ba");
                // sync asc & level
                // sync tasc & tlevel
                break;
            case "tba":
                if (this.character.tbalevel < 0 || this.character.tbalevel > 10)
                    return;
                break;
            case "ces":
                if (this.character.eslevel < 0 || this.character.eslevel > 10)
                    return;

                this.syncTtalentToTalent("es");
                break;
            case "tes":
                if (this.character.teslevel < 0 || this.character.teslevel > 10)
                    return;
                break;
            case "ceb":
                if (this.character.eblevel < 0 || this.character.eblevel > 10)
                    return;

                this.syncTtalentToTalent("eb");
                break;
            case "teb":
                if (this.character.teblevel < 0 || this.character.teblevel > 10)
                    return;
                break;
        }
    }

    syncAscToLevel() {
        if (
            this.character.level >= this.levels[this.character.ascension] &&
            this.character.level <= this.levels[this.character.ascension + 1]
        ) { } else {
            let previous = 0;
            for (let i = 0; i < this.levels.length; i++) {
                if (previous == 0) {
                    previous = this.levels[i];
                    continue;
                }
                if (
                    this.character.level >= previous &&
                    this.character.level <= this.levels[i]
                ) {
                    this.character.ascension = this.ascensions[i] - 1;
                    break;
                }

                previous = this.levels[i];
            }
        }
    }

    syncTlevelToLevel() {
        if (this.character.level > this.character.tlevel) {
            this.character.tlevel = this.character.level;
        }
    }

    syncLevelToTlevel() {
        if (this.character.level > this.character.tlevel) {
            this.character.level = this.character.tlevel;
        }
    }

    syncTascToTlevel() {
        if (
            this.character.tlevel >= this.levels[this.character.tascension] &&
            this.character.tlevel <= this.levels[this.character.tascension + 1]
        ) { } else {
            let previous = 0;
            for (let i = 0; i < this.levels.length; i++) {
                if (previous == 0) {
                    previous = this.levels[i];
                    continue;
                }
                if (
                    this.character.tlevel >= previous &&
                    this.character.tlevel <= this.levels[i]
                ) {
                    this.character.tascension = this.ascensions[i] - 1;
                    break;
                }

                previous = this.levels[i];
            }
        }
    }

    syncLevelToAsc() {
        if (
            this.character.level >= this.levels[this.character.ascension] &&
            this.character.level <= this.levels[this.character.ascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.ascension == this.ascensions[i]) {
                    this.character.level = this.levels[i];
                    break;
                }
            }
        }
    }

    syncTascToAsc() {
        if (this.character.ascension > this.character.tascension) {
            this.character.tascension = this.character.ascension;
        }
    }

    syncTlevelToTasc() {
        if (
            this.character.tlevel >= this.levels[this.character.tascension] &&
            this.character.tlevel <= this.levels[this.character.tascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.tascension == this.ascensions[i]) {
                    this.character.tlevel = this.levels[i];
                    break;
                }
            }
        }
    }

    syncAscToTasc() {
        if (this.character.ascension > this.character.tascension) {
            this.character.ascension = this.character.tascension;
        }
    }

    syncTtalentToTasc() {
        if (
            this.character.tbalevel >= this.talents[this.character.tascension] &&
            this.character.tbalevel <= this.talents[this.character.tascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.tascension == this.ascensions[i]) {
                    this.character.tbalevel = this.talents[i];
                    break;
                }
            }
        }
        if (
            this.character.teslevel >= this.talents[this.character.tascension] &&
            this.character.teslevel <= this.talents[this.character.tascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.tascension == this.ascensions[i]) {
                    this.character.teslevel = this.talents[i];
                    break;
                }
            }
        }
        if (
            this.character.teblevel >= this.talents[this.character.tascension] &&
            this.character.teblevel <= this.talents[this.character.tascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.tascension == this.ascensions[i]) {
                    this.character.teblevel = this.talents[i];
                    break;
                }
            }
        }
    }

    syncTalentToAsc() {
        if (
            this.character.balevel >= this.talents[this.character.ascension] &&
            this.character.balevel <= this.talents[this.character.ascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.ascension == this.ascensions[i]) {
                    this.character.balevel = this.talents[i];
                    break;
                }
            }
        }
        if (
            this.character.eslevel >= this.talents[this.character.ascension] &&
            this.character.eslevel <= this.talents[this.character.ascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.ascension == this.ascensions[i]) {
                    this.character.eslevel = this.talents[i];
                    break;
                }
            }
        }
        if (
            this.character.eblevel >= this.talents[this.character.ascension] &&
            this.character.eblevel <= this.talents[this.character.ascension + 1]
        ) { } else {
            for (let i = 0; i < this.ascensions.length; i++) {
                if (this.character.ascension == this.ascensions[i]) {
                    this.character.eblevel = this.talents[i];
                    break;
                }
            }
        }
    }

    syncTtalentToTalent(type: string) {
        switch (type) {
            case "ba":
                if (this.character.balevel > this.character.tbalevel)
                    this.character.tbalevel = this.character.balevel;
                break;
            case "es":
                if (this.character.eslevel > this.character.teslevel)
                    this.character.teslevel = this.character.eslevel;
                break;
            case "eb":
                if (this.character.eblevel > this.character.teblevel)
                    this.character.teblevel = this.character.eblevel;
                break;
        }
    }
}

