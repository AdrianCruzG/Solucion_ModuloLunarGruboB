
console.log(screen.width);
console.log(navigator.language);
if (navigator.language.indexOf("-") >= 0) {
    console.log(navigator.language.slice(0, navigator.language.indexOf("-")));
}
else {
    console.log(navigator.language);
}

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


interface IConfigurable {
    dameGenerador(): IGeneraHTML;
    dameCreador(): IMinerable;
    //dameValidador(): IValidable;
    dameMostrador(): IMuestra;
}

class Configurador implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        let pantalla = screen.width;
        let idioma = "";
        if (navigator.language.indexOf("-") >= 0) {
            idioma = navigator.language.slice(0, navigator.language.indexOf("-"));
        }
        else {
            idioma = navigator.language;
        }
        let dispositivo: ILibreriaHTML;
        if (pantalla < 1024) {
            dispositivo = new HTMLBootStrapMovil();
        } else {
            dispositivo = new HTMLBootStrapPC();
        }

        if (idioma == "es") {
            return new GenerarHTMLEspanol(dispositivo);
        } else {
            return new GenerarHTMLIngles(dispositivo);
        }

    }
    dameCreador(): IMinerable {
        return new CreadorHTML();
    }
    //dameValidador(): IValidable {
    //    return new ValidadorIgneas();
    //}
    dameMostrador(): IMuestra {
        return new MuestraHTML();
    }
}
//class ConfiguradorEspanolMovil implements IConfigurable {
//    dameGenerador(): IGeneraHTML {
//        return new GenerarHTMLEspanol(new HTMLBootStrapMovil());
//    }
//    dameCreador(): IMinerable {
//        return new CreadorHTML();
//    }
//    //dameValidador(): IValidable {
//    //    return new ValidadorIgneas();
//    //}
//    dameMostrador(): IMuestra {
//        return new MuestraHTMLEuropeo();
//    }
//}

//class ConfiguradorInglesPC implements IConfigurable {
//    dameGenerador(): IGeneraHTML {
//        return new GenerarHTMLIngles(new HTMLBootStrapPC());
//    }
//    dameCreador(): IMinerable {
//        return new CreadorHTML();
//    }
//    //dameValidador(): IValidable {
//    //    return new ValidadorMetamorficas();
//    //}
//    dameMostrador(): IMuestra {
//        return new MuestraHTMLAmericano();
//    }
//}

//class ConfiguradorInglesMovil implements IConfigurable {
//    dameGenerador(): IGeneraHTML {
//        return new GenerarHTMLIngles(new HTMLBootStrapMovil());
//    }
//    dameCreador(): IMinerable {
//        return new CreadorHTML();
//    }
//    //dameValidador(): IValidable {
//    //    return new ValidadorSedimentaria();
//    //}
//    dameMostrador(): IMuestra {
//        return new MuestraHTMLAmericano();
//    }
//}

interface ILibreriaHTML {
    dameCss(): string;
    dameDiv(id: string): string;
    dameTextBox(id: string, etiqueta: string): string;
    dameNumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string;
    dameCheckBox(id: string, etiqueta: string): string;
    dameComboBox(id: string, etiqueta: string, opciones: string[]): string;
    dameTextArea(id: string, etiqueta: string, filas: number): string;
    dameBoton(id: string, texto: string): string;
    // dameParrafoEuropeo(texto: string):string;
}
class HTMLBootStrapPC implements ILibreriaHTML {
    public dameCss(): string {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
    }
    public dameDiv(id: string): string {
        return (`<div id='${id}' class='container col-lg-6 col-md-12 col-sm-12 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>`);
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
    public dameNumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string {
        return `<div class="input-group mb-3 w-75">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="number" class="form-control" id="${id}" min="${numMin}" max="${numMax}" />
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
                    <textarea class="form-control" id="${id}" aria-label="${etiqueta}" rows="${String(filas)}"></textarea>
                </div>`;
    }
    public dameBoton(id: string, texto: string): string {
        return `<div class="text-center my-2">
                    <input type="button" id="${id}" class="btn btn-primary my-3" value="${texto}" />
                </div>`;
    }
} class HTMLBootStrapMovil implements ILibreriaHTML {
    public dameCss(): string {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
    }
    public dameDiv(id: string): string {
        return (`<div id='${id}' class='container col-lg-6 col-md-12 col-sm-12 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>`);
    }
    public dameCheckBox(id: string, etiqueta: string): string {
        return `<div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="${id}" checked>
                <label class="form-check-label text-white text-bold" for="${id}">${etiqueta}</label>
            </div>`;
    }
    public dameTextBox(id: string, etiqueta: string): string {
        return `<input type="text" class="form-control mb-3" id="${id}" placeholder ="${etiqueta}" />`;
    }
    public dameNumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string {
        return `<input type="number" class="form-control mb-3" id="${id}" min="${numMin}" max="${numMax}" placeholder="${etiqueta}" />`;
    }
    public dameComboBox(id: string, etiqueta: string, opciones: string[]): string {
        let cadena = `<label for="${id}" class="form-label text-white text-bold">${etiqueta}:</label>
                      <select class="form-select mb-3" id="${id}">`;
        for (let i = 0; i < opciones.length; i++) {
            cadena += `<option value="${opciones[i]}">${opciones[i]}</option>`;
        }
        cadena += `</select>`;
        return cadena;
    }
    public dameTextArea(id: string, etiqueta: string, filas: number): string {
        return `<textarea class="form-control mb-3" id="${id}" placeholder="${etiqueta}" aria-label="${etiqueta}" rows="${String(filas)}"></textarea>`;
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
class GenerarHTMLEspanol implements IGeneraHTML {
    g: ILibreriaHTML;
    constructor(LibreriaHTML: ILibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML(): String {
        let contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameComboBox("validador", "Validador", ["Ígneas", "Metamórfica", "Sedimentaria"]);
        contenido += this.g.dameTextBox("idMineral", "Identificativo");
        contenido += this.g.dameTextBox("nombre", "Nombre");
        contenido += this.g.dameComboBox("grupo_origen", "Grupo/Origen", ["Ígneas", "Metamórfica", "Sedimentaria"]);
        contenido += this.g.dameNumberBox("dureza", "Dureza", 1, 10);
        contenido += this.g.dameNumberBox("tam_grano", "Tamaño grano (mm)", 0, 1000);
        contenido += this.g.dameComboBox("clasificacion", "Clasificación", ["Rocas de construcción", "Rocas ornamentales", "Rocas de uso en utensilios", "Piedras machacadas"]);
        contenido += this.g.dameNumberBox("tam_cristales", "Tamaño cristales", 0, 10);
        contenido += this.g.dameNumberBox("temp_formacion", "Temperatura formación (°K)", -100, 100);
        contenido += this.g.dameTextArea("estructura", "Estructura", 3);
        contenido += this.g.dameTextArea("forma_granos", "Forma de los granos", 3);
        contenido += this.g.dameComboBox("textura", "Textura", ["Vítrea", "Afanítica", "Fanerítica"]);
        contenido += this.g.dameBoton("boton", "Mostrar");
        contenido += "</div><br/>";
        return contenido;
    }
}
class GenerarHTMLIngles implements IGeneraHTML {
    g: ILibreriaHTML;
    constructor(LibreriaHTML: ILibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML(): String {
        let contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameComboBox("validador", "Validador", ["Ígneas", "Metamórfica", "Sedimentaria"]);
        contenido += this.g.dameTextBox("idMineral", "Identifier");
        contenido += this.g.dameTextBox("nombre", "Name");
        contenido += this.g.dameComboBox("grupo_origen", "Group/Origin", ["Ígneas", "Metamórfica", "Sedimentaria"]);
        contenido += this.g.dameNumberBox("dureza", "Hardness", 1, 10);
        contenido += this.g.dameNumberBox("tam_grano", "Grain Size (mm)", 0, 1000);
        contenido += this.g.dameComboBox("clasificacion", "Sort", ["Rocas de construcción", "Rocas ornamentales", "Rocas de uso en utensilios", "Piedras machacadas"]);
        contenido += this.g.dameNumberBox("tam_cristales", "Crystal Size", 0, 10);
        contenido += this.g.dameNumberBox("temp_formacion", "Formation Temperature (°K)", -100, 100);
        contenido += this.g.dameTextArea("estructura", "Structure", 3);
        contenido += this.g.dameTextArea("forma_granos", "Forms Grains", 3);
        contenido += this.g.dameComboBox("textura", "Texture", ["Vítrea", "Afanítica", "Fanerítica"]);
        contenido += this.g.dameBoton("boton", "Show");
        contenido += "</div><br/>";
        return contenido;
    }
}



interface IMuestra {
    dameContenido(MiMineral: Mineral): String;
}

class MuestraHTML implements IMuestra {
    dameContenido(MiMineral: Mineral): String {
        let idioma = "";
        if (navigator.language.indexOf("-") >= 0) {
            idioma = navigator.language.slice(0, navigator.language.indexOf("-"));
        }
        else {
            idioma = navigator.language;
        }
        if (idioma == "es") {
            return (`<p>Identificador: ${MiMineral.idMineral} </p> 
                 <p>Nombre: ${MiMineral.nombre} </p> 
                 <p>Grupo/Origen: ${MiMineral.grupo_origen} </p> 
                 <p>Dureza: ${MiMineral.dureza} </p> 
                 <p>Tamaño Grano: ${MiMineral.tam_grano} mm </p> 
                 <p>Clasificación: ${MiMineral.clasificacion} </p> 
                 <p>Tamaño Cristales: ${MiMineral.tam_cristales} </p>
                 <p>Temperatura Formacion: ${(MiMineral.temp_formacion - 273.15)} °C </p> 
                 <p>Estructura: ${MiMineral.estructura} </p> 
                 <p>Forma Granos: ${MiMineral.forma_granos} </p>
                 <p>Textura: ${MiMineral.textura} </p> `);
        } else {
            return (`<p>Identifier: ${MiMineral.idMineral} </p> 
                 <p>Name: ${MiMineral.nombre} </p> 
                 <p>Group/Origin: ${MiMineral.grupo_origen} </p> 
                 <p>Hardness: ${MiMineral.dureza} </p> 
                 <p>Grain Size: ${MiMineral.tam_grano} </p> 
                 <p>Sort: ${MiMineral.clasificacion} </p> 
                 <p>Crystal Size: ${MiMineral.tam_cristales} </p> 
                 <p>Formation Temperature: ${((MiMineral.temp_formacion - 273.15) * 9) / 5 + 32} °F </p> 
                 <p>Structure: ${MiMineral.estructura} </p> 
                 <p>Forms Grains: ${MiMineral.forma_granos} </p> 
                 <p>Texture: ${MiMineral.textura} </p>    `);
        }
    }

}

//class MuestraHTMLEuropeo implements IMuestra {
//    dameContenido(MiMineral: Mineral): String {
//        return (`<p>Identificador: ${MiMineral.idMineral} </p> 
//                 <p>Nombre: ${MiMineral.nombre} </p> 
//                 <p>Grupo/Origen: ${MiMineral.grupo_origen} </p> 
//                 <p>Dureza: ${MiMineral.dureza} </p> 
//                 <p>Tamaño Grano: ${MiMineral.tam_grano} mm </p> 
//                 <p>Clasificación: ${MiMineral.clasificacion} </p> 
//                 <p>Tamaño Cristales: ${MiMineral.tam_cristales} </p>
//                 <p>Temperatura Formacion: ${ (MiMineral.temp_formacion - 273.15)} °C </p> 
//                 <p>Estructura: ${MiMineral.estructura} </p> 
//                 <p>Forma Granos: ${MiMineral.forma_granos} </p>
//                 <p>Textura: ${MiMineral.textura} </p> `);
//    }
//}


interface IValidable {
    isValid(MiMineral: Mineral): boolean;
}

class ValidadorIgneas implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            (/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
            MiMineral.grupo_origen == "Ígneas" &&
            MiMineral.tam_grano > 30);

    }
}

class ValidadorMetamorficas implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            (/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
            MiMineral.grupo_origen == "Metamórfica" &&
            MiMineral.tam_grano < 5 &&
            MiMineral.textura == "Vítrea"
        );
    }
}

class ValidadorSedimentaria implements IValidable {
    isValid(MiMineral: Mineral): boolean {
        return (
            (/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
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


let configuradorGeneral: IConfigurable = new Configurador();
let generadorHTML: IGeneraHTML = configuradorGeneral.dameGenerador();
let _formulario = document.getElementById("ventanaFormulario");
if (_formulario != null) {
    _formulario.innerHTML = generadorHTML.dameHTML().toString();
}
let _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}

function valida() {

    let creador: IMinerable = configuradorGeneral.dameCreador();
    //let ValidadorMineral: IValidable = ConfiguradorGeneral.dameValidador();
    let validadorMineral: IValidable;
    let _validador = (<HTMLInputElement>document.getElementById("validador")).value;
    switch (_validador) {
        case "Ígneas": {
            validadorMineral = new ValidadorIgneas();
            break;
        }
        case "Metamórfica": {
            validadorMineral = new ValidadorMetamorficas();
            break;
        }
        case "Sedimentaria": {
            validadorMineral = new ValidadorSedimentaria();
            break;
        }
    }
    let mostrador: IMuestra = configuradorGeneral.dameMostrador();

    let miMineral = creador.dameMineral();
    let _verde = document.getElementById("verde");
    let _rojo = document.getElementById("rojo");
    if (validadorMineral.isValid(miMineral)) {
        if (_verde != null) {
            _verde.innerHTML = `<div class="text-center py-3"><img src="img/feliz.webp" width="100" /></div>`
                + mostrador.dameContenido(miMineral).toString();
        }
        if (_rojo != null) {
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = `<div class="text-center py-3"><img src="img/enfadado.png" width="100" /></div>`
                + mostrador.dameContenido(miMineral).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}