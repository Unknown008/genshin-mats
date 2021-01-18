import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

    public path: string = "./../../assets/resources/characters/";

    constructor() { }

    ngOnInit() {
        this.character.file = this.path + this.character.file + ".png";
    }

    removeCharacter() {
        this.deleteCharacter.emit(this.character.name);
    }

    toggleCharacterDisplay() {
        this.character.display = !this.character.display;
    }
}
