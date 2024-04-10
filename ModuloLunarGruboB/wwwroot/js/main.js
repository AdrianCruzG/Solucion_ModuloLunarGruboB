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
    };
    return GenerarHTML;
}());
//# sourceMappingURL=main.js.map