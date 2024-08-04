import { EventEmitter, Injectable } from "@angular/core";
import { Persona2Modelo } from "../modelo/persona2.modelo";


@Injectable(
    // { providedIn: 'root'}
)
export class PersonasService{
    personas: Persona2Modelo[] = [];
    personaEditId = new EventEmitter<number>();
    
    constructor(){}

    agregarPersona(persona: Persona2Modelo){

        if(persona.indice==-1){
            this.personas.push(persona);
        }else{
            this.personas.splice(persona.indice, 1, persona)
        }
    }

}