/**
*  @module react
*/
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'utils/classnames'

/**
*  @module InputLine
*/
import InputLine from 'components/input/InputLine'

/**
 *  @module BaseAccordion
 */
import Accordion from 'components/accordion/BaseAccordion'

/**
 *  @module InputError
 */
import InputError from 'components/input/InputError'

/**
 *  @class
 *  @extends {Component}
 */
const Input = props => {
  /**
   *  @const
   */
  const {
    type,
    placeholder,
    name,
    value,
    error,
    handleSubmit,
    handleBlur,
    handleFocus,
    handleChange,
    inputClassName
  } = props

  /**
   *  hasError
   *  @const
   *  @type {Boolean}
   */
  const hasError = error && !!error.length

  // Class names for the container
  const modifiedClassName = classNames('input')

  // Class names for the input line
  const inputLineClassNames = classNames('input__line', inputClassName)

  return (
    <div className={modifiedClassName}>
      <input
        className='input__input-element'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange} />
      <InputLine error={hasError} className={inputLineClassNames} />
      <Accordion
        className='input__accordion'
        isOpen={hasError}>
        <InputError
          className='micro'
          errors={error} />
      </Accordion>
    </div>
  )
}

/**
 *  defaultProps
 *  @type {Object}
 */
Input.defaultProps = {
  type: 'text'
}

/**
 *  propTypes
 *  @type {Object}
 */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputClassName: PropTypes.string
}

/**
 *  @module Input
 */
export default Input
