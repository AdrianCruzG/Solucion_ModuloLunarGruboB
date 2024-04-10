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


interface IMuestra {
    dameContenido(MiMineral: Mineral): String;
}

class MuestraHTMLAmericano implements IMuestra {
    dameContenido(MiMineral: Mineral): String {
        return (`<p>Identifier: ${MiMineral.idMineral} </p> <br/>
                 <p>Name: ${MiMineral.nombre} </p> <br/>
                 <p>Group/Origin: ${MiMineral.grupo_origen} </p> <br/>
                 <p>Hardness: ${MiMineral.dureza} </p> <br/>
                 <p>Grain Size: ${MiMineral.dureza} </p> <br/>
                 <p>Sort: ${MiMineral.clasificacion} </p> <br/>
                 <p>Crystal Size: ${MiMineral.tam_cristales} </p> <br/> 
                 <p>Formation Temperature: ${ ((MiMineral.temp_formacion - 273.15) * 9) / 5 + 32} °F </p> <br/> 
                 <p>Structure: ${MiMineral.estructura} </p> <br/> 
                 <p>Forms Grains: ${MiMineral.forma_granos} </p> <br/> 
                 <p>Texture: ${MiMineral.textura} </p> <br/>   `);
    }
}

class MuestraHTMLEuropeo implements IMuestra {
    dameContenido(MiMineral: Mineral): String {
        return (`<p>Identificador: ${MiMineral.idMineral} </p> <br/>
                 <p>Nombre: ${MiMineral.nombre} </p> <br/>
                 <p>Grupo/Origen: ${MiMineral.grupo_origen} </p> <br/>
                 <p>Dureza: ${MiMineral.dureza} </p> <br/>
                 <p>Tamaño Grano: ${MiMineral.tam_grano} mm </p> <br/>
                 <p>Clasificación: ${MiMineral.clasificacion} </p> <br/>
                 <p>Tamaño Cristales: ${MiMineral.tam_cristales} </p> <br/> 
                 <p>Temperatura Formacion: ${ (MiMineral.temp_formacion - 273.15)} °C </p> <br/> 
                 <p>Estructura: ${MiMineral.estructura} </p> <br/> 
                 <p>Forma Granos: ${MiMineral.forma_granos} </p> <br/> 
                 <p>Textura: ${MiMineral.textura} </p> <br/> `);
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
