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

