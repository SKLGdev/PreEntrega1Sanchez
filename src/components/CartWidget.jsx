import imgs from "../imgs/carrito.png"

const estilos = {
    img: {
        height: "3rem",
        width: "auto",
    },
    span: {
        color: "white",
        paddingLeft: "2rem",
        fontSize: "2rem"
    }
}

export const CarWidget = () => (
    <>
        <img src={imgs} style={estilos.img} alt="carrito" /> 
        <span style={estilos.span} >0</span>
    </>
)

