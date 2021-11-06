import { Grid } from "./Grid";

export function Componente1() {
    return (
        <>
            <div className="productGrid">Hola mundo desde un componente externo</div>
            <main>
                <Grid></Grid>
                <Grid></Grid>
                <Grid></Grid>
            </main>
        </>
    );
}

export default Componente1;