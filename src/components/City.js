import './City.css'

export default function City(props) {

    const setButton = (props.item.name in props.favorites) ?
    <button onClick={() => updateFavorites()}>Remove from Favorites</button> :
    <button onClick={() => updateFavorites()}>Favorite</button>

    const updateFavorites = () => {
        const newFavorites = {...props.favorites}
        if (props.item.name in newFavorites) {
            delete newFavorites[props.item.name]
         } else {
            newFavorites[props.item.name] = props.item
         }
        props.setFavorites(newFavorites)
    }

    return(
        <div id="city">
            <h3>{props.item.name}</h3>
            <img src={props.item.image}></img>
            <div id="info">
                <br></br>
                <b>Country:</b> {props.item.country}
                <br></br>
                <b>Region:</b> {props.item.region}
                <br></br>
                <b>Religions:</b>
                {props.item.religions.map((religion, index) => (<span> {religion}</span> ))}
                <br></br>
                <b>Population:</b> {props.item.population}
                <br></br>
            </div>
            {setButton}
        </div>
    )
}