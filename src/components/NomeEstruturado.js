
function NomeEstruturado(props) {
    return <h3>Nome: {props.name} Idade: {props.idade ?? 0} anos</h3>;
}
export default NomeEstruturado;