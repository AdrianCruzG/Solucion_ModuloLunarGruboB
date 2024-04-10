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
//# sourceMappingURL=main.js.map