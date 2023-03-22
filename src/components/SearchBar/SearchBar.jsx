import React from 'react'
import "./searchBar.css"
import { cityType, maxPrice, minPrice, propertyType, rooms } from "../../util/selectData"

function SearchBar() {
  return (
    <div className='searchBarWrapper'>
        <div className="searchBar">
          <h3 className='title'>ENCONTRE O SEU IMÓVEL</h3>
          <div className='selectItemsWrapper'>
            <select className="selectItem" name="propertyType" id="propertyType">
              {propertyType.map(type => (
                <option key={type.id} value={type.value}>{type.label}</option>
              ))}
            </select>
            <select className="selectItem" name="cityType" id="cityType">
              {cityType.map(type => (
                <option key={type.id} value={type.value}>{type.label}</option>
              ))}
            </select>
            <select className="selectItem" name="rooms" id="rooms">
              {rooms.map(type => (
                <option key={type.id} value={type.value}>{type.label}</option>
              ))}
            </select>
            <select className="selectItem" name="minPrice" id="minPrice">
              {minPrice.map(type => (
                <option key={type.id} value={type.value}>{type.label}</option>
              ))}
            </select>
            <select className="selectItem" name="maxPrice" id="maxPrice">
              {maxPrice.map(type => (
                <option key={type.id} value={type.value}>{type.label}</option>
              ))}
            </select>
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
  )
}

export default SearchBar