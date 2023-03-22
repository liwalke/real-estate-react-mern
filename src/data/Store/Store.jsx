import React, { useState } from 'react'

const InitialState = {
  currPage: ""
}

export const Context = React.createContext(InitialState)

function Store({children}) {
  const [ state, setState ] = useState(InitialState)

  function updateState (key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <Context.Provider value={{
      currPage: state.currPage,
      setCurrPage: page => {
        updateState("currPage", page)
      }
    }}>
      {children}
    </Context.Provider>
  )
}

export default Store