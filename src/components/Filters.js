export default function Filters(props) {

  const populationSortButton = (eventKey)=> {
    props.setPopulationSort(eventKey.target.checked)
  }

  const selectRegionFilter = (eventKey) => {
    props.setRegion(eventKey.target.value)
  }

  const updateReligionFilter = (eventKey) => {
    const newReligionFilter = {...props.currReligions}
    if (eventKey.target.value in newReligionFilter) {
      delete newReligionFilter[eventKey.target.value]
    } else {
      newReligionFilter[eventKey.target.value] = 1
    }
    props.setReligions(newReligionFilter)
  }

  const onFavoritesClick = (eventKey) => {
    props.toggleDisplayFavorites(eventKey.target.checked)
  }

  const calculateTotalPopulation = () => {
    const populations =  Object.keys(props.favorites).map((key, value) => (props.favorites[key].population))
    return populations.reduce((acc, item) => acc + item, 0)
  }


    return(
        <div id="selection">
        <h2>Sort by</h2>
        <input type="radio" onChange={populationSortButton} /> Population (Highest to Lowest)

        <h2>Filter by</h2>
        <h3>Regions</h3>
        <div id ="regions" onChange={selectRegionFilter}>
          <input type="radio" value="All" name="region" defaultChecked /> All
          <br></br>
          <input type="radio" value="East Asia" name="region" /> East Asia
          <br></br>
          <input type="radio" value="Central Asia" name="region" /> Central Asia
          <br></br>
          <input type="radio" value="South Asia" name="region" /> South Asia
          <br></br>
          <input type="radio" value="Southeast Asia" name="region" /> Southeast Asia
          <br></br>
          <input type="radio" value="West Asia" name="region" /> West Asia
        </div>

        <h3>Religions</h3>
        <div id="religions" onChange={updateReligionFilter}>
          <input type="checkbox" value="Buddhism" name="religion" /> Buddhism
          <br></br>
          <input type="checkbox" value="Islam" name="religion" /> Islam
          <br></br>
          <input type="checkbox" value="Hinduism" name="religion" /> Hinduism
          <br></br>
          <input type="checkbox" value="Christianity" name="religion" /> Christianity
          <br></br>
          <input type="checkbox" value="Other" name="religion" /> Other
          <br></br>
        </div>

        <h2>Favorites</h2>
        <input type="checkbox" onChange={onFavoritesClick} /> Show Favorites
        <p><b>Population of Favorites:</b> {calculateTotalPopulation()} </p>
      </div>
    )
}