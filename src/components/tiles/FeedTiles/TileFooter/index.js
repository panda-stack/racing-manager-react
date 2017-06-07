/**
 * @module react
 */
import React from 'react' // eslint-disable-line no-unused-vars

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Icon
 */
// import Icon from 'components/icon'

/**
 * @module classNames
 */
// import classNames from 'utils/classnames'

const TileFooter = props => {
  /*
  const {
    className,
    modifier
  } = props
  */

  // const modifiedClassNames = classNames('tile-footer', className, modifier)

  return (
    null
  )

 // Uncomment this when we need them!!!

 /*
 return (
    <div className={modifiedClassNames}>
      <div className='tile-footer__item'>
        <Icon
          className='tile-footer__icon micro'
          modifier='heart' />
        <p className='tile-footer__text micro'>0</p>
      </div>
      <div className='tile-footer__item'>
        <Icon
          className='tile-footer__icon micro'
          modifier='comment' />
        <p className='tile-footer__text micro'>0</p>
      </div>
    </div>
  )
  */
}

/**
 *  propTypes
 *  @type {Object}
 */
TileFooter.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileFooter.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileFooter
 */
export default TileFooter
