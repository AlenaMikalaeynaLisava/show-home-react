import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
    const hocComponent = ({ ...props }) => {
        const daysFromPremiere = Math.round((new Date()- new Date(props.premiered))/360000/24);
    return <WrappedComponent {...props} daysFromPremiere={daysFromPremiere}/>}

   
    return hocComponent
}
