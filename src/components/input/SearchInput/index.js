/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Input
 */
import Input from 'components/input/Input'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @class
 *  @name SearchInput
 *  @extends {Component}
 */
class SearchInput extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      open: false
    }

    // Bind custom fn
    this.openSearch = this.openSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
    this.handleSearchResult = this.handleSearchResult.bind(this)
  }

  /**
   *  openSearch
   *  @description Will open the search bar on mobile
   */
  openSearch () {
    this.setState({
      open: true
    })
  }

  /**
   *  closeSearch
   *  @description Will close the search bar on mobile.
   */
  closeSearch () {
    this.setState({
      open: false
    })
  }

  handleSearchResult (event) {
    const value = event.target.value

    const {
      onChange
    } = this.props

    onChange && onChange(value)
  }

  render () {
    const {
      containerClassName
    } = this.props

    const {
      open
    } = this.state

    const modifiedClassNames = classNames('search-input', containerClassName, {
      'active': open
    })

    const closeModifiedClassNames = classNames('search-input__close-container', 'hidden-md-up', {
      'active': open
    })

    // Props for the input excluding any props meant for parent component.
    const inputProps = omit(this.props, ['containerClassName', 'handleChange'])

    return (
      <div className={modifiedClassNames}>
        <Icon
          onClick={this.openSearch}
          className='search-input__glass absolute-center-v'
          modifier='magnifying-glass' />
        <Input
          inputLineClassName='visible-md-up'
          handleChange={this.handleSearchResult}
          {...inputProps} />
        <div className={closeModifiedClassNames}>
          <Icon
            onClick={this.closeSearch}
            className='search-input__close'
            modifier='close'/>
        </div>
      </div>
    )
  }
}

SearchInput.propTypes = {
  containerClassName: PropTypes.string,
  onChange: PropTypes.func
}

/**
 *  @module SearchInput
 */
export default SearchInput