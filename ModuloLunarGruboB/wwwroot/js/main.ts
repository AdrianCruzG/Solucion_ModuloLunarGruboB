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
    dameValidador(): IValidable;
    dameMostrador(): IMuestra;
}

class configuradorEspanolPC implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new GenerarHTML(new HTMLBootStrapPC());
    }
    dameCreador(): IMinerable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorIgneas();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTMLEuropeo();
    }
}
class configuradorEspanolMovil implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new GenerarHTML(new HTMLBootStrapPC());
    }
    dameCreador(): IMinerable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorIgneas();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTMLEuropeo();
    }
}

class configuradorInglesPC implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new GenerarHTML(new HTMLBootStrapPC());
    }
    dameCreador(): IMinerable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorMetamorficas();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTMLAmericano();
    }
}

class configuradorInglesMovil implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new GenerarHTML(new HTMLBootStrapPC());
    }
    dameCreador(): IMinerable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorSedimentaria();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTMLAmericano();
    }
}