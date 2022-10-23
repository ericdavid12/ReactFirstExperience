import Item from './Item'

function List() {
    return(
       <div>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Peugeot" anoLancamento={1985}/>
            <Item marca="Fiat" anoLancamento={1997}/>
            <Item marca="Renaut" anoLancamento={1965}/>
            <Item/>
        </ul>
       </div> 
    )
}
export default List