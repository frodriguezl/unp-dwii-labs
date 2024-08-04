import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaBindingComponent } from "../persona-binding/persona-binding.component";
import { Persona2Modelo } from '../modelo/persona2.modelo';
import { FormularioPersonaBindingComponent } from "../formulario-persona-binding/formulario-persona-binding.component";
import { Formulario2PersonaBindingComponent } from "../formulario2-persona-binding/formulario2-persona-binding.component";
import { Formulario3PersonaBindingComponent } from '../formulario3-persona-binding/formulario3-persona-binding.component';
import { LoginService } from '../service/logging.service';
import { AyudaService } from '../service/ayuda.service';
import { PersonasService } from '../service/personas.service';

@Component({
  selector: 'app-listado-personas-binding',
  standalone: true,
  imports: [CommonModule, PersonaBindingComponent, FormularioPersonaBindingComponent],
  templateUrl: './listado-personas-binding.component.html',
  styleUrls: ['./listado-personas-binding.component.css'],
  providers: [LoginService, AyudaService, PersonasService]
})
export class ListadoPersonasBindingComponent implements OnInit{
  constructor(private loginService: LoginService, private ayudaService: AyudaService, private personasService: PersonasService){}
  
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  public personas: Persona2Modelo[] = [];

  public personaAgregada(persona: Persona2Modelo) {
    this.loginService.imprimirConsola("Persona agregada DNI:" + persona.dni);
    this.ayudaService.procesar();
    this.personasService.agregarPersona(persona);
  }

}
