let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL)
{
    try{  const NuevaUrl = new URL(laURL);

    const UrlString = {
    host        : null,
    pathname        : null,
    parametros        : null

}
    UrlString.host = NuevaUrl.host;
    UrlString.pathname = NuevaUrl.pathname;
    UrlString.parametros = NuevaUrl.parametros;

    if(NuevaUrl.pathname === "/alumnos/index.htm")
    throw new Error(" en el pathname de la url");
    
     return (UrlString);
    }
    catch (error){
        console.log("Error" + error.message)
        return null;
    }

   

}