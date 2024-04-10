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
var configuradorEspanolPC = /** @class */ (function () {
    function configuradorEspanolPC() {
    }
    configuradorEspanolPC.prototype.dameGenerador = function () {
        return new GenerarHTML(new HTMLBootStrapPC());
    };
    configuradorEspanolPC.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    configuradorEspanolPC.prototype.dameValidador = function () {
        return new ValidadorIgneas();
    };
    configuradorEspanolPC.prototype.dameMostrador = function () {
        return new MuestraHTMLEuropeo();
    };
    return configuradorEspanolPC;
}());
var configuradorEspanolMovil = /** @class */ (function () {
    function configuradorEspanolMovil() {
    }
    configuradorEspanolMovil.prototype.dameGenerador = function () {
        return new GenerarHTML(new HTMLBootStrapMovil());
    };
    configuradorEspanolMovil.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    configuradorEspanolMovil.prototype.dameValidador = function () {
        return new ValidadorIgneas();
    };
    configuradorEspanolMovil.prototype.dameMostrador = function () {
        return new MuestraHTMLEuropeo();
    };
    return configuradorEspanolMovil;
}());
var configuradorInglesPC = /** @class */ (function () {
    function configuradorInglesPC() {
    }
    configuradorInglesPC.prototype.dameGenerador = function () {
        return new GenerarHTML(new HTMLBootStrapPC());
    };
    configuradorInglesPC.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    configuradorInglesPC.prototype.dameValidador = function () {
        return new ValidadorMetamorficas();
    };
    configuradorInglesPC.prototype.dameMostrador = function () {
        return new MuestraHTMLAmericano();
    };
    return configuradorInglesPC;
}());
var configuradorInglesMovil = /** @class */ (function () {
    function configuradorInglesMovil() {
    }
    configuradorInglesMovil.prototype.dameGenerador = function () {
        return new GenerarHTML(new HTMLBootStrapMovil());
    };
    configuradorInglesMovil.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    configuradorInglesMovil.prototype.dameValidador = function () {
        return new ValidadorSedimentaria();
    };
    configuradorInglesMovil.prototype.dameMostrador = function () {
        return new MuestraHTMLAmericano();
    };
    return configuradorInglesMovil;
}());
var HTMLBootStrapPC = /** @class */ (function () {
    function HTMLBootStrapPC() {
    }
    HTMLBootStrapPC.prototype.dameCss = function () {
        return "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n                <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>";
    };
    HTMLBootStrapPC.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='container col-6 my-3 border border-dark bg-ligth rounded-3'>"));
    };
    HTMLBootStrapPC.prototype.dameCheckBox = function (id, etiqueta) {
        return "<div class=\"form-check form-switch mt-3\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(id, "\" checked>\n                <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(etiqueta, "</label>\n            </div>");
    };
    HTMLBootStrapPC.prototype.dameTextBox = function (id, etiqueta) {
        return "<div class=\"input-group mb-3\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"text\" class=\"form-control\" id=\"").concat(id, "\" />\n                </div>");
    };
    HTMLBootStrapPC.prototype.dameNumberBox = function (id, etiqueta) {
        return "<div class=\"input-group mb-3 w-50\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"number\" class=\"form-control\" id=\"").concat(id, "\" />\n                </div>");
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
        return "<div class=\"input-group mb-3\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <textarea class=\"form-control\" id=\"").concat(id, "\" aria-label=\"").concat(etiqueta, " rows=\"").concat(String(filas), "\"></textarea>\n                </div>");
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
        return ("<div id='".concat(id, "' class='container col-3 my-3 border border-dark bg-ligth rounded-3'>"));
    };
    HTMLBootStrapMovil.prototype.dameCheckBox = function (id, etiqueta) {
        return "<div class=\"form-check form-switch mt-3\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(id, "\" checked>\n                <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(etiqueta, "</label>\n            </div>");
    };
    HTMLBootStrapMovil.prototype.dameTextBox = function (id, etiqueta) {
        return "<input type=\"text\" class=\"form-control mb-3\" id=\"".concat(id, "\" placeholder =\"").concat(etiqueta, "\" />");
    };
    HTMLBootStrapMovil.prototype.dameNumberBox = function (id, etiqueta) {
        return "<input type=\"number\" class=\"form-control mb-3\" id=\"".concat(id, "\" placeholder=\"").concat(etiqueta, "\" />");
    };
    HTMLBootStrapMovil.prototype.dameComboBox = function (id, etiqueta, opciones) {
        var cadena = "<label for=\"".concat(id, "\" class=\"form-label\">").concat(etiqueta, ":</label>\n                      <select class=\"form-select mb-3\" id=\"").concat(id, "\">");
        for (var i = 0; i < opciones.length; i++) {
            cadena += "<option value=\"".concat(opciones[i], "\">").concat(opciones[i], "</option>");
        }
        cadena += "</select>";
        return cadena;
    };
    HTMLBootStrapMovil.prototype.dameTextArea = function (id, etiqueta, filas) {
        return "<textarea class=\"form-control mb-3\" id=\"".concat(id, "\" placeholder=\"").concat(etiqueta, "\" aria-label=\"").concat(etiqueta, " rows=\"").concat(String(filas), "\"></textarea>");
    };
    HTMLBootStrapMovil.prototype.dameBoton = function (id, texto) {
        return "<div class=\"text-center my-2\">\n                    <input type=\"button\" id=\"".concat(id, "\" class=\"btn btn-primary my-3\" value=\"").concat(texto, "\" />\n                </div>");
    };
    return HTMLBootStrapMovil;
}());
var GenerarHTML = /** @class */ (function () {
    function GenerarHTML(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    GenerarHTML.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("idMineral", "Identificativo");
        contenido += this.g.dameTextBox("nombre", "Nombre");
        contenido += this.g.dameComboBox("grupo_origen", "Grupo/Origen", ["Ígneas", "Metamórficas", "Sedimentaria"]);
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
    };
    return GenerarHTML;
}());
var MuestraHTMLAmericano = /** @class */ (function () {
    function MuestraHTMLAmericano() {
    }
    MuestraHTMLAmericano.prototype.dameContenido = function (MiMineral) {
        return ("<p>Identifier: ".concat(MiMineral.idMineral, " </p> <br/>\n                 <p>Name: ").concat(MiMineral.nombre, " </p> <br/>\n                 <p>Group/Origin: ").concat(MiMineral.grupo_origen, " </p> <br/>\n                 <p>Hardness: ").concat(MiMineral.dureza, " </p> <br/>\n                 <p>Grain Size: ").concat(MiMineral.dureza, " </p> <br/>\n                 <p>Sort: ").concat(MiMineral.clasificacion, " </p> <br/>\n                 <p>Crystal Size: ").concat(MiMineral.tam_cristales, " </p> <br/> \n                 <p>Formation Temperature: ").concat(((MiMineral.temp_formacion - 273.15) * 9) / 5 + 32, " \u00B0F </p> <br/> \n                 <p>Structure: ").concat(MiMineral.estructura, " </p> <br/> \n                 <p>Forms Grains: ").concat(MiMineral.forma_granos, " </p> <br/> \n                 <p>Texture: ").concat(MiMineral.textura, " </p> <br/>   "));
    };
    return MuestraHTMLAmericano;
}());
var MuestraHTMLEuropeo = /** @class */ (function () {
    function MuestraHTMLEuropeo() {
    }
    MuestraHTMLEuropeo.prototype.dameContenido = function (MiMineral) {
        return ("<p>Identificador: ".concat(MiMineral.idMineral, " </p> <br/>\n                 <p>Nombre: ").concat(MiMineral.nombre, " </p> <br/>\n                 <p>Grupo/Origen: ").concat(MiMineral.grupo_origen, " </p> <br/>\n                 <p>Dureza: ").concat(MiMineral.dureza, " </p> <br/>\n                 <p>Tama\u00F1o Grano: ").concat(MiMineral.tam_grano, " mm </p> <br/>\n                 <p>Clasificaci\u00F3n: ").concat(MiMineral.clasificacion, " </p> <br/>\n                 <p>Tama\u00F1o Cristales: ").concat(MiMineral.tam_cristales, " </p> <br/> \n                 <p>Temperatura Formacion: ").concat((MiMineral.temp_formacion - 273.15), " \u00B0C </p> <br/> \n                 <p>Estructura: ").concat(MiMineral.estructura, " </p> <br/> \n                 <p>Forma Granos: ").concat(MiMineral.forma_granos, " </p> <br/> \n                 <p>Textura: ").concat(MiMineral.textura, " </p> <br/> "));
    };
    return MuestraHTMLEuropeo;
}());
var ValidadorIgneas = /** @class */ (function () {
    function ValidadorIgneas() {
    }
    ValidadorIgneas.prototype.isValid = function (MiMineral) {
        return (MiMineral.grupo_origen == "Ígneas" &&
            MiMineral.tam_grano > 30);
    };
    return ValidadorIgneas;
}());
var ValidadorMetamorficas = /** @class */ (function () {
    function ValidadorMetamorficas() {
    }
    ValidadorMetamorficas.prototype.isValid = function (MiMineral) {
        return (MiMineral.grupo_origen == "Metamórfica" &&
            MiMineral.tam_grano < 5 &&
            MiMineral.textura == "Vítrea");
    };
    return ValidadorMetamorficas;
}());
var ValidadorSedimentaria = /** @class */ (function () {
    function ValidadorSedimentaria() {
    }
    ValidadorSedimentaria.prototype.isValid = function (MiMineral) {
        return (MiMineral.grupo_origen == "Sedimentaria" &&
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
var ConfiguradorGeneral = new configuradorInglesMovil();
var GeneradorHTML = ConfiguradorGeneral.dameGenerador();
var _formulario = document.getElementById("ventanaFormulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
var _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}
function valida() {
    var Creador = ConfiguradorGeneral.dameCreador();
    var ValidadorMineral = ConfiguradorGeneral.dameValidador();
    var Mostrador = ConfiguradorGeneral.dameMostrador();
    var MiMineral = Creador.dameMineral();
    var _verde = document.getElementById("verde");
    var _rojo = document.getElementById("rojo");
    if (ValidadorMineral.isValid(MiMineral)) {
        if (_verde != null) {
            _verde.innerHTML = "<img src=\"img/feliz.webp\" width=\"100\" />" + Mostrador.dameContenido(MiMineral).toString();
        }
        if (_rojo != null) {
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = "<img src=\"img/enfadado.png\" width=\"100\" />" + Mostrador.dameContenido(MiMineral).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}
//# sourceMappingURL=main.js.map