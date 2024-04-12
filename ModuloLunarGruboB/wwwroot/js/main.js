console.log(screen.width);
console.log(navigator.language);
if (navigator.language.indexOf("-") >= 0) {
    console.log(navigator.language.slice(0, navigator.language.indexOf("-")));
}
else {
    console.log(navigator.language);
}
var Mineral = /** @class */ (function () {
    function Mineral() {
        this.idMineral = "";
        this.nombre = "";
        this.grupo_origen = "";
        this.dureza = 0;
        this.tam_grano = 0;
        this.clasificacion = "";
        this.tam_cristales = 0;
        this.temp_formacion = 0;
        this.estructura = "";
        this.forma_granos = "";
        this.textura = "";
    }
    return Mineral;
}());
var Configurador = /** @class */ (function () {
    function Configurador() {
    }
    Configurador.prototype.dameGenerador = function () {
        var pantalla = screen.width;
        var idioma = "";
        if (navigator.language.indexOf("-") >= 0) {
            idioma = navigator.language.slice(0, navigator.language.indexOf("-"));
        }
        else {
            idioma = navigator.language;
        }
        var dispositivo;
        if (pantalla < 1024) {
            dispositivo = new HTMLBootStrapMovil();
        }
        else {
            dispositivo = new HTMLBootStrapPC();
        }
        if (idioma == "es") {
            return new GenerarHTMLEspanol(dispositivo);
        }
        else {
            return new GenerarHTMLIngles(dispositivo);
        }
    };
    Configurador.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    //dameValidador(): IValidable {
    //    return new ValidadorIgneas();
    //}
    Configurador.prototype.dameMostrador = function () {
        return new MuestraHTML();
    };
    return Configurador;
}());
var HTMLBootStrapPC = /** @class */ (function () {
    function HTMLBootStrapPC() {
    }
    HTMLBootStrapPC.prototype.dameCss = function () {
        return "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n                <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>";
    };
    HTMLBootStrapPC.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='container col-lg-6 col-md-12 col-sm-12 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>"));
    };
    HTMLBootStrapPC.prototype.dameCheckBox = function (id, etiqueta) {
        return "<div class=\"form-check form-switch mt-3\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(id, "\" checked>\n                <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(etiqueta, "</label>\n            </div>");
    };
    HTMLBootStrapPC.prototype.dameTextBox = function (id, etiqueta) {
        return "<div class=\"input-group mb-3\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"text\" class=\"form-control\" id=\"").concat(id, "\" />\n                </div>");
    };
    HTMLBootStrapPC.prototype.dameNumberBox = function (id, etiqueta, numMin, numMax) {
        return "<div class=\"input-group mb-3 w-75\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"number\" class=\"form-control\" id=\"").concat(id, "\" min=\"").concat(numMin, "\" max=\"").concat(numMax, "\" />\n                </div>");
    };
    HTMLBootStrapPC.prototype.dameComboBox = function (id, etiqueta, opciones) {
        var cadena = "<div class=\"input-group mb-3\">\n                        <label class=\"input-group-text bg-primary text-white fw-bold\" for=\"".concat(id, "\">").concat(etiqueta, "</label>\n                        <select class=\"form-select\" id=\"").concat(id, "\">");
        for (var i = 0; i < opciones.length; i++) {
            cadena += "<option value=\"".concat(opciones[i], "\">").concat(opciones[i], "</option>");
        }
        cadena += "</select>\n                </div>";
        return cadena;
    };
    HTMLBootStrapPC.prototype.dameTextArea = function (id, etiqueta, filas) {
        return "<div class=\"input-group mb-3\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <textarea class=\"form-control\" id=\"").concat(id, "\" aria-label=\"").concat(etiqueta, "\" rows=\"").concat(String(filas), "\"></textarea>\n                </div>");
    };
    HTMLBootStrapPC.prototype.dameBoton = function (id, texto) {
        return "<div class=\"text-center my-2\">\n                    <input type=\"button\" id=\"".concat(id, "\" class=\"btn btn-primary my-3\" value=\"").concat(texto, "\" />\n                </div>");
    };
    return HTMLBootStrapPC;
}());
var HTMLBootStrapMovil = /** @class */ (function () {
    function HTMLBootStrapMovil() {
    }
    HTMLBootStrapMovil.prototype.dameCss = function () {
        return "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n                <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>";
    };
    HTMLBootStrapMovil.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='container col-lg-6 col-md-12 col-sm-12 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>"));
    };
    HTMLBootStrapMovil.prototype.dameCheckBox = function (id, etiqueta) {
        return "<div class=\"form-check form-switch mt-3\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(id, "\" checked>\n                <label class=\"form-check-label text-white text-bold\" for=\"").concat(id, "\">").concat(etiqueta, "</label>\n            </div>");
    };
    HTMLBootStrapMovil.prototype.dameTextBox = function (id, etiqueta) {
        return "<input type=\"text\" class=\"form-control mb-3\" id=\"".concat(id, "\" placeholder =\"").concat(etiqueta, "\" />");
    };
    HTMLBootStrapMovil.prototype.dameNumberBox = function (id, etiqueta, numMin, numMax) {
        return "<input type=\"number\" class=\"form-control mb-3\" id=\"".concat(id, "\" min=\"").concat(numMin, "\" max=\"").concat(numMax, "\" placeholder=\"").concat(etiqueta, "\" />");
    };
    HTMLBootStrapMovil.prototype.dameComboBox = function (id, etiqueta, opciones) {
        var cadena = "<label for=\"".concat(id, "\" class=\"form-label text-white text-bold\">").concat(etiqueta, ":</label>\n                      <select class=\"form-select mb-3\" id=\"").concat(id, "\">");
        for (var i = 0; i < opciones.length; i++) {
            cadena += "<option value=\"".concat(opciones[i], "\">").concat(opciones[i], "</option>");
        }
        cadena += "</select>";
        return cadena;
    };
    HTMLBootStrapMovil.prototype.dameTextArea = function (id, etiqueta, filas) {
        return "<textarea class=\"form-control mb-3\" id=\"".concat(id, "\" placeholder=\"").concat(etiqueta, "\" aria-label=\"").concat(etiqueta, "\" rows=\"").concat(String(filas), "\"></textarea>");
    };
    HTMLBootStrapMovil.prototype.dameBoton = function (id, texto) {
        return "<div class=\"text-center my-2\">\n                    <input type=\"button\" id=\"".concat(id, "\" class=\"btn btn-primary my-3\" value=\"").concat(texto, "\" />\n                </div>");
    };
    return HTMLBootStrapMovil;
}());
var GenerarHTMLEspanol = /** @class */ (function () {
    function GenerarHTMLEspanol(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    GenerarHTMLEspanol.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
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
    };
    return GenerarHTMLEspanol;
}());
var GenerarHTMLIngles = /** @class */ (function () {
    function GenerarHTMLIngles(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    GenerarHTMLIngles.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
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
    };
    return GenerarHTMLIngles;
}());
var MuestraHTML = /** @class */ (function () {
    function MuestraHTML() {
    }
    MuestraHTML.prototype.dameContenido = function (MiMineral) {
        var idioma = "";
        if (navigator.language.indexOf("-") >= 0) {
            idioma = navigator.language.slice(0, navigator.language.indexOf("-"));
        }
        else {
            idioma = navigator.language;
        }
        if (idioma == "es") {
            return ("<p>Identificador: ".concat(MiMineral.idMineral, " </p> \n                 <p>Nombre: ").concat(MiMineral.nombre, " </p> \n                 <p>Grupo/Origen: ").concat(MiMineral.grupo_origen, " </p> \n                 <p>Dureza: ").concat(MiMineral.dureza, " </p> \n                 <p>Tama\u00F1o Grano: ").concat(MiMineral.tam_grano, " mm </p> \n                 <p>Clasificaci\u00F3n: ").concat(MiMineral.clasificacion, " </p> \n                 <p>Tama\u00F1o Cristales: ").concat(MiMineral.tam_cristales, " </p>\n                 <p>Temperatura Formacion: ").concat((MiMineral.temp_formacion - 273.15), " \u00B0C </p> \n                 <p>Estructura: ").concat(MiMineral.estructura, " </p> \n                 <p>Forma Granos: ").concat(MiMineral.forma_granos, " </p>\n                 <p>Textura: ").concat(MiMineral.textura, " </p> "));
        }
        else {
            return ("<p>Identifier: ".concat(MiMineral.idMineral, " </p> \n                 <p>Name: ").concat(MiMineral.nombre, " </p> \n                 <p>Group/Origin: ").concat(MiMineral.grupo_origen, " </p> \n                 <p>Hardness: ").concat(MiMineral.dureza, " </p> \n                 <p>Grain Size: ").concat(MiMineral.tam_grano, " </p> \n                 <p>Sort: ").concat(MiMineral.clasificacion, " </p> \n                 <p>Crystal Size: ").concat(MiMineral.tam_cristales, " </p> \n                 <p>Formation Temperature: ").concat(((MiMineral.temp_formacion - 273.15) * 9) / 5 + 32, " \u00B0F </p> \n                 <p>Structure: ").concat(MiMineral.estructura, " </p> \n                 <p>Forms Grains: ").concat(MiMineral.forma_granos, " </p> \n                 <p>Texture: ").concat(MiMineral.textura, " </p>    "));
        }
    };
    return MuestraHTML;
}());
var ValidadorIgneas = /** @class */ (function () {
    function ValidadorIgneas() {
    }
    ValidadorIgneas.prototype.isValid = function (MiMineral) {
        return ((/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
            MiMineral.grupo_origen == "Ígneas" &&
            MiMineral.tam_grano > 30);
    };
    return ValidadorIgneas;
}());
var ValidadorMetamorficas = /** @class */ (function () {
    function ValidadorMetamorficas() {
    }
    ValidadorMetamorficas.prototype.isValid = function (MiMineral) {
        return ((/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
            MiMineral.grupo_origen == "Metamórfica" &&
            MiMineral.tam_grano < 5 &&
            MiMineral.textura == "Vítrea");
    };
    return ValidadorMetamorficas;
}());
var ValidadorSedimentaria = /** @class */ (function () {
    function ValidadorSedimentaria() {
    }
    ValidadorSedimentaria.prototype.isValid = function (MiMineral) {
        return ((/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(MiMineral.idMineral)) &&
            MiMineral.grupo_origen == "Sedimentaria" &&
            MiMineral.textura == "Fanerítica");
    };
    return ValidadorSedimentaria;
}());
var CreadorManualMineral = /** @class */ (function () {
    function CreadorManualMineral() {
    }
    CreadorManualMineral.prototype.dameMineral = function () {
        var MiMineral = new Mineral();
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
    };
    return CreadorManualMineral;
}());
var CreadorHTML = /** @class */ (function () {
    function CreadorHTML() {
    }
    CreadorHTML.prototype.dameMineral = function () {
        var MiMineral = new Mineral();
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
    };
    CreadorHTML.prototype.dameValorNumero = function (elementoId) {
        return Number(this.dameValorTexto(elementoId));
    };
    CreadorHTML.prototype.dameValorTexto = function (elementoId) {
        return document.getElementById(elementoId).value;
    };
    return CreadorHTML;
}());
var configuradorGeneral = new Configurador();
var generadorHTML = configuradorGeneral.dameGenerador();
var _formulario = document.getElementById("ventanaFormulario");
if (_formulario != null) {
    _formulario.innerHTML = generadorHTML.dameHTML().toString();
}
var _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}
function valida() {
    var creador = configuradorGeneral.dameCreador();
    //let ValidadorMineral: IValidable = ConfiguradorGeneral.dameValidador();
    var validadorMineral;
    var _validador = document.getElementById("validador").value;
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
    var mostrador = configuradorGeneral.dameMostrador();
    var miMineral = creador.dameMineral();
    var _verde = document.getElementById("verde");
    var _rojo = document.getElementById("rojo");
    if (validadorMineral.isValid(miMineral)) {
        if (_verde != null) {
            _verde.innerHTML = "<div class=\"text-center py-3\"><img src=\"img/feliz.webp\" width=\"100\" /></div>"
                + mostrador.dameContenido(miMineral).toString();
        }
        if (_rojo != null) {
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = "<div class=\"text-center py-3\"><img src=\"img/enfadado.png\" width=\"100\" /></div>"
                + mostrador.dameContenido(miMineral).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}
//# sourceMappingURL=main.js.map