import Header from "../componentes/header";
import Slider from "../componentes/slider";
import Tarjetas from "../componentes/tarjetas";
import { useOrder } from "../contexto/OrderContext";
import Footer from "../componentes/footer";

function InicioPage() {
    
    return (
        <>
            <Header />
            <Slider />
            <Tarjetas />
            <Footer />

        </>
    )
}
export default InicioPage