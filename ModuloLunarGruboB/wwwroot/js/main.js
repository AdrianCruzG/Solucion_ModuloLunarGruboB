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

var ValidadorIgneas = /** @class */ (function () {
    function ValidadorIgneas() {
    }
    ValidadorIgneas.prototype.isValid = function (MiMineral) {
        return (MiMineral.grupo_origen == "Igneas" &&
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
var ValidadorSedementaria = /** @class */ (function () {
    function ValidadorSedementaria() {
    }
    ValidadorSedementaria.prototype.isValid = function (MiMineral) {
        return (MiMineral.grupo_origen == "Sedimentaria" &&
            MiMineral.textura == "Fanerítica");
    };
    return ValidadorSedementaria;

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
//# sourceMappingURL=main.js.map