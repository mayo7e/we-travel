

import React, {useState} from 'react'

const Places= [
  {name :"Neo Cafe"},
  {name :"Connect Central"},
  {name :"Creative Collective"},
  {name :"Conclave Corner"},
  {name :"Sip & Gather"},
  {name :"Fusion Chambers"}
]


const List = () => {

  const [workHubs, setWorkHubs] = useState("Cafes")
  const [ratings, setRatings] = useState("")

  return (
    <div>
      <h4>Cafes, Workspaces and Meeting rooms</h4>
          <ul>
            <li>
              <label htmlFor='filterDropdown'>Filter</label>
              <br />  <br />
                  <select value={workHubs} id='filterDropdown' onChange={(e)=>setWorkHubs(e.target.value)} >
                    {console.log(workHubs)}
                    <option value="Cafes">Cafes</option>
                    <option value="WorkSpaces">Workspaces</option>
                    <option value="Meetings" >Meeting rooms</option>
                  </select>
            </li>
            <br />
            <li>
              <label htmlFor='filterDropdown'>fRatings</label>
              <br />  <br />
                  <select value={ratings} id='filterDropdown' onChange={(e)=>setRatings(e.target.value)} >
                    {console.log(ratings)}
                    <option value={0}>All</option>
                    <option value={3.5}>Above 3.5</option>
                    <option value={4.0} >Above 4.0</option>
                    <option value={4.5} >Above 4.5</option>
                  </select>
            </li>
          </ul>
          <div>
              {Places.map((place)=>(
                <div>
                  <p>{place.name}</p>
                </div>
              ))}
          </div>
    </div>
  )
}

export default List
