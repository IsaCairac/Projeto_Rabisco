export default function Titulo(props) {
    return (
        <h1 className='display-5 text-dark text-center mt-1'>
            {props.texto}
        </h1>
    )
}