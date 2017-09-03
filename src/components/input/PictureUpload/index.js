import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import ProfilePicture from 'components/common/ProfilePicture'

import processFileUpload from 'utils/processfileupload'

import { generatethumbnailFromFiles } from 'utils/imageutils'

import PropTypes from 'prop-types'

import isDev from 'isdev'

class PictureUpload extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      previousSrc: props.src || '',
      thumbnailSrc: props.src || ''
    }

    this.addPhoto = this.addPhoto.bind(this)
    this.removePhoto = this.removePhoto.bind(this)
    this.clearFileInputValue = this.clearFileInputValue.bind(this)
  }

  addPhoto (e) {
    processFileUpload(e, this.props.allowedFileTypes)
    .then(files => {
      // Add to redux or something

      return generatethumbnailFromFiles(files)
    })
    .then(thumbnails => {
      this.setState({
        thumbnailSrc: thumbnails[0]
      })
    })
    .catch(error => {
      if (isDev) {
        console && console.error(error)
      }
    })
  }

  removePhoto () {
    // Call on redux to clear the thumbnail

    this.clearFileInputValue()

    // Set the previous src to the new src
    this.setState(({previousSrc}) => ({
      thumbnailSrc: previousSrc
    }))
  }

  clearFileInputValue () {
    if (this.attachmentRef) {
      this.attachmentRef.value = ''
    }
  }

  render () {
    const {
      className
    } = this.props

    const {
      thumbnailSrc
    } = this.state

    const modifiedClassNames = classNames('picture-upload', className)

    return (
      <div className={modifiedClassNames}>
        <ProfilePicture
          src={thumbnailSrc} />

        <div className='picture-upload__section'>
          <div className='picture-upload__upload cursor--pointer'>
            <h6 className='italic uppercase link'>
              update
            </h6>
            <input
              onChange={this.addPhoto}
              className='picture-upload__file-upload'
              type='file'
              ref={ref => { this.attachmentRef = ref }} />
          </div>
          <span className='picture-upload__upload-text picture-upload__upload-text--center link'>|</span>
          <h6 className='italic uppercase link picture-upload__upload-text cursor--pointer' onClick={this.removePhoto}>
            remove
          </h6>
        </div>
      </div>
    )
  }
}

PictureUpload.propTypes = {
  allowedFileTypes: PropTypes.array,
  className: PropTypes.string
}

PictureUpload.defaultProps = {
  allowedFileTypes: ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']
}

export default PictureUpload
