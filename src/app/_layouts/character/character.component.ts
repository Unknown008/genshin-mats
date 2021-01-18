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
}
