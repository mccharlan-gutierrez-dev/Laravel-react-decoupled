import React, { useMemo, useState } from 'react'
import { hotels } from '../data/hotels';
import { NavLink, useNavigate } from 'react-router';

const Rooms = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const room = useMemo(() => {
    const s = search.trim().toLowerCase();

    return hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(s)
    )

  }, [search]);

  function goRoom (id) {
    navigate("/rooms/" + id)
  }

  return (
<ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
    Hotels
  </li>

    <label className="floating-label">
      <span>Search</span>

      <input type="text" placeholder="Search" className="input input-md" 
      value={search} onChange={(e) => setSearch(e.target.value) } />
    </label>
      <span className='text-red-400'> {search}</span>
      
    {/* room variable from useMemo */}
    {room.length === 0 && <p>No Roooms match your filter</p> }
    {room.map((r) => (

      <NavLink className="list-row" key={r.id} to={`/rooms/${r.id}`} >
        <div><img className="size-10 rounded-box" 
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"/>
        </div>

          <div>{r.name}</div>

        <p className='list-col-wrap text-xs'>
         {r.description}
        </p>
      </NavLink>

    ))}
</ul>
  )
}

export default Rooms