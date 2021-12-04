import {useState, useEffect} from "react";

function useCoordenadas() {
    const [coordenadas, setCoordenadas] = useState({ 
        var1: null,
         var2: null
});
    let geoId;
    useEffect(() => {
        geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordenadas({
                var1: position.coords.latitude,
                var2: position.coords.longitude
            });
        });

        return () => {
            navigator.geolocation.clearWatch(geoId);
        };
    });

    return coordenadas;
}
export function Coordenadas(){
    const coordenadas = useCoordenadas();
    return coordenadas.var1 ==null?(<div>Estoy cargando el componente</div>): (
        <div>
            <h2>La latitud es: {coordenadas.var1}</h2>
            <h2>La longitud es: {coordenadas.var2}</h2>
        </div>
    );

}
