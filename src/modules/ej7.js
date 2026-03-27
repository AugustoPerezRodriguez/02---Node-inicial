import { 
    getCountryByAbbreviation, 
    getCurrencyAbbreviation, 
    getCurrency 
} from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigo){
      try {
        const pais = getCountryByAbbreviation(codigo);

        if (!pais) 
            return null;

        const monedaAbbr = getCurrencyAbbreviation(pais);

        if (!monedaAbbr) 
            return null;

        const moneda = getCurrency(monedaAbbr);

        if (!moneda)
            return null;

        return moneda.name;

    } catch (error) {
        return null;
    }
}