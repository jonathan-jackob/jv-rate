import React from "react"
import PropTypes from "prop-types"

import { starRegImg, starHalfImg, starImg, generateRateIcons } from "./assets/Icons"

/**
 * @param {value} number 0 el valor que queremos representar en el rate
 * @param {className} string "" clases para estilizar el componente
 * @param {style} object {} estilos en linea para estilizar el componente
 * @param {emptyIcon} element icono estrella vaciá
 * @param {halfIcon} element icono estrella a medias
 * @param {fullIcon} element icono estrella completa
 * @returns element
 */
const Rate = ({
  value = 0,
  className="",
  style={},
  emptyIcon = starRegImg,
  halfIcon = starHalfImg,
  fullIcon = starImg
}) => {
  const rateIcons = generateRateIcons({value, emptyIcon, halfIcon,fullIcon})

  return (<div className={className} style={style}>
      {
      rateIcons.map((item,index)=>(
      <label key={index} >
          {item}
      </label>
  ))}</div>);
};

Rate.propTypes = {
  value: PropTypes.number,
  emptyIcon: PropTypes.element,
  halfIcon:  PropTypes.element,
  fullIcon:  PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Rate;
