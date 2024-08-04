export class Persona2Modelo{

    public dni?: string;
    public nombres?: string;
    public apellidos?: string;
    public indice: number = -1;

    public limpiar(){
        this.dni = '';
        this.nombres = '';
        this.apellidos = '';
    }

}