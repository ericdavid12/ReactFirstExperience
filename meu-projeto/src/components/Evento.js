import Button from './evento/Button'

function Evento({numero}){
    
    function meuEvento(){
        console.log(`Ativando o primeiro evento!`)
    }

    function segundoEvento(){
        console.log('ativando o segundo evento')
    }

    return(
        <div>
          <p>Clique para disparar um evento</p> 
          <Button event={meuEvento} text="Primeiro Evento" />
          <Button event={segundoEvento} text="2 Evento" />
        </div>

    )
}

export default Evento