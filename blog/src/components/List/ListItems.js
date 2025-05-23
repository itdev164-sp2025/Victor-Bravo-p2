import React from 'react'
import PropTypes from 'prop-types'
import {BaseContainer} from '../BaseContainer'

export const ListItems= ({children, ...rest}) => {
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
}

ListItems.propTypes = {
    children: PropTypes.node.isRequired
}