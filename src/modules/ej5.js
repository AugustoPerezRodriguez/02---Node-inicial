let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL)
{
    const NuevaUrl = new URL(laURL);

    const UrlString = {
    host        : null,
    pathname        : null,
    parametros        : null

}
    UrlString.host = NuevaUrl.host;
    UrlString.pathname = NuevaUrl.pathname;
    UrlString.parametros = NuevaUrl.parametros;

    return (UrlString);

}

