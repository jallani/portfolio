// eslint-disable-next-line no-unused-vars
import React from 'react'
import parse from 'html-react-parser'

const Resumeitems = ({ icon, year, title, desc}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className="resume__data">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  )
}

export default Resumeitems