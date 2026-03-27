import fs from 'fs';


const ARCHIVO_ENTRADA           = "./archivo-entrada.txt";

const ARCHIVO_SALIDA            = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

async function copiar(origen, destino){

    let archivoOrigen;
    let archivoDestino;

    try {
        archivoOrigen = await fsPromises.open(origen, 'r'); 
        archivoDestino = await fsPromises.open(destino, 'r'); 

        const contenido = await archivoOrigen.readFile('utf-8');

        await archivoDestino.writeFile(contenido);

        console.log("Archivo copiado correctamente");

    } catch (error) {
        console.log("Error:", error);
    } finally {
        if (archivoOrigen) await archivoOrigen.close();
        if (archivoDestino) await archivoDestino.close();
    }
}