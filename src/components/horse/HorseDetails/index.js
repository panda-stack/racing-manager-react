import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HorseDetails = props => {
  const { data } = props

  return (
    <div className='horse-details-list'>
      {
        data.map((item, index) => (
          <div className='row' key={index}>
            <div className='horse-details__title col-xs-6'>
              {item.title}
            </div>
            <div className='col-xs-6'>
              {item.isLink ? (
                <Link to={item.href} className='link--italic'>
                  {item.value || '-'}
                </Link>
              ) : (
                item.value || '-'
              )}
            </div>
          </div>
        ))
      }
    </div>
  )
}

HorseDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      isLink: PropTypes.bool,
      href: PropTypes.string
    })
  ),
}

export default HorseDetails
