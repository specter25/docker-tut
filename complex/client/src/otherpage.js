import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const otherpage = props => {
    return (
        <div>
            I m some other page
            <Link to ="/">Go Back Home</Link>
        </div>
    )
}



export default otherpage
