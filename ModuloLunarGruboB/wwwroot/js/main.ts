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

//interface IMuestra {
//    dameContenido(MiPersona: Persona): String;
//}
//class MuestraHTML implements IMuestra {
//    dameContenido(MiPersona: Persona): String {
//        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
//    }
//}
//class MuestraHTML2 implements IMuestra {
//    dameContenido(MiPersona: Persona): String {
//        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
//    }
//}
//class MuestraHTMLGrupoB implements IMuestra {
//    dameContenido(MiPersona: Persona): String {
//        return `Nombre: ${MiPersona.primerNombre} <br/>
//        Apellido: ${MiPersona.apellido1} <br/>
//        Año de Nacimiento: ${MiPersona.añoNacimiento.toString()}
//        ID: ${MiPersona.identificador}`;
//    }

//}

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