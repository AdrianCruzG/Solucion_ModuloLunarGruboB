class Mineral {
    idMineral: string = "";
    nombre: string = "";
    grupo_origen: string = "";
    dureza: number = 0;
    tam_grano: number = 0;
    clasificacion: string = "";
    tam_cristales: number = 0;
    temp_formacion: number = 0;
    estructura: string = "";
    forma_granos: string = "";
    textura: string = "";
}
interface ILibreriaHTML {
    dameCss(): string;
    dameDiv(id: string): string;
    dameTextBox(id: string, etiqueta: string): string;
    dameNumberBox(id: string, etiqueta: string): string;
    dameCheckBox(id: string, etiqueta: string): string;
    dameComboBox(id: string, etiqueta: string, opciones: string[]): string;
    dameTextArea(id: string, etiqueta: string, filas: number): string;
    dameBoton(id: string, texto: string): string;
}
class HTMLBootStrapPC implements ILibreriaHTML {
    public dameCss(): string {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
    }
    public dameDiv(id: string): string {
        return (`<div id='${id}' class='container col-6 my-3 border border-dark bg-ligth rounded-3'>`);
    }
    public dameCheckBox(id: string, etiqueta: string): string {
    return `<div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="${id}" checked>
                <label class="form-check-label" for="${id}">${etiqueta}</label>
            </div>`;
    }
    public dameTextBox(id: string, etiqueta: string): string {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="text" class="form-control" id="${id}" />
                </div>`;
    }
    public dameNumberBox(id: string, etiqueta: string): string {
        return `<div class="input-group mb-3 w-50">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="number" class="form-control" id="${id}" />
                </div>`;
    }
    public dameComboBox(id: string, etiqueta: string, opciones: string[]): string {
        let cadena = `<div class="input-group mb-3">
                        <label class="input-group-text bg-primary text-white fw-bold" for="${id}">${etiqueta}</label>
                        <select class="form-select" id="${id}">`;
        for (let i = 0; i < opciones.length; i++) {
            cadena += `<option value="${opciones[i]}">${opciones[i]}</option>`;
        }
        cadena += `</select>
                </div>`;
        return cadena;
    }
    public dameTextArea(id: string, etiqueta: string, filas: number): string {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <textarea class="form-control" id="${id}" aria-label="${etiqueta} rows="${String(filas)}"></textarea>
                </div>`;
    }
    public dameBoton(id: string, texto: string): string {
        return `<div class="text-center my-2">
                    <input type="button" id="${id}" class="btn btn-primary my-3" value="${texto}" />
                </div>`;
    }
}
interface IGeneraHTML {
    dameHTML(): String;
}
class GenerarHTML implements IGeneraHTML {
    g: ILibreriaHTML;
    constructor(LibreriaHTML: ILibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML(): String {
        let contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("idMineral", "Identificativo");
        contenido += this.g.dameTextBox("nombre", "Nombre");
        contenido += this.g.dameComboBox("grupo_origen", "Grupo/Origen", ["Ígneas", "Metamórficas", "Sedimentarias"]);
        contenido += this.g.dameNumberBox("dureza", "Dureza");
        contenido += this.g.dameNumberBox("tam_grano", "Tamaño grano (mm)");
        contenido += this.g.dameComboBox("clasificacion", "Clasificación", ["Rocas de construcción", "Rocas ornamentales", "Rocas de uso en utensilios", "Piedras machacadas"]);
        contenido += this.g.dameNumberBox("tam_cristales", "Tamaño cristales");
        contenido += this.g.dameNumberBox("temp_formacion", "Temperatura formación (°K)");
        contenido += this.g.dameTextArea("estructura", "Estructura", 3);
        contenido += this.g.dameTextArea("forma_granos", "Forma de los granos", 3);
        contenido += this.g.dameComboBox("textura", "Textura", ["Vitrea", "Afanítica", "Fanerítica"]);
        contenido += this.g.dameBoton("boton", "Mostrar");
        contenido += "</div><br/>";
        return contenido;
    }
}




interface IValidable {
    isValid(MiMineral: Mineral): boolean;
}

class ValidadorIgneas implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            MiMineral.grupo_origen == "Igneas" &&
            MiMineral.tam_grano > 30
        );
    }
}

class ValidadorMetamorficas implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            MiMineral.grupo_origen == "Metamórfica" &&
            MiMineral.tam_grano < 5 &&
            MiMineral.textura == "Vítrea"
        );
    }
}

class ValidadorSedementaria implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            MiMineral.grupo_origen == "Sedimentaria" &&
            MiMineral.textura == "Fanerítica"
        );
    }
}

interface IMinerable {
    dameMineral(): Mineral;
}

class CreadorManualMineral implements IMinerable {
    dameMineral(): Mineral {
        let MiMineral = new Mineral();
        MiMineral.idMineral = "idMineral";
        MiMineral.nombre = "nombre";
        MiMineral.grupo_origen = "grupo_origen";
        MiMineral.dureza = 0;
        MiMineral.tam_grano = 0;
        MiMineral.clasificacion = "clasificacion";
        MiMineral.tam_cristales = 0;
        MiMineral.temp_formacion = 0;
        MiMineral.estructura = "estructura";
        MiMineral.forma_granos = "forma_granos";
        MiMineral.textura = "textura";
        return MiMineral;
    }
}

class CreadorHTML implements IMinerable {
    dameMineral(): Mineral {
        let MiMineral: Mineral = new Mineral();
        MiMineral.idMineral = this.dameValorTexto("idMineral");
        MiMineral.nombre = this.dameValorTexto("nombre");
        MiMineral.grupo_origen = this.dameValorTexto("grupo_origen");
        MiMineral.dureza = this.dameValorNumero("dureza");
        MiMineral.tam_grano = this.dameValorNumero("tam_grano");
        MiMineral.clasificacion = this.dameValorTexto("clasificacion");
        MiMineral.tam_cristales = this.dameValorNumero("tam_cristales");
        MiMineral.temp_formacion = this.dameValorNumero("temp_formacion");
        MiMineral.estructura = this.dameValorTexto("estructura");
        MiMineral.forma_granos = this.dameValorTexto("forma_granos");
        MiMineral.textura = this.dameValorTexto("textura");
        return MiMineral;
    }

    private dameValorNumero(elementoId: string): number {
        return Number(this.dameValorTexto(elementoId));
    }
    
    private dameValorTexto(elementoId: string) {
        return (<HTMLInputElement>document.getElementById(elementoId)).value;
    }
}
