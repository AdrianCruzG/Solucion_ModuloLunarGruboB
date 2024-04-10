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
}());
//# sourceMappingURL=main.js.map