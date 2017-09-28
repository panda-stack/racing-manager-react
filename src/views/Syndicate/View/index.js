import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import {
  description as syndicateDesc
} from 'data/syndicate'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

const mapStateToProps = ({ syndicate }, ownProps) => ({
  ...syndicate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSyndicateInfo: () => {
    const name = ownProps.match.params.name
    dispatch(fetchSyndicateInfo({ name }))
  },
  clearSyndicateData: () => {
    return dispatch(clearSyndicateData())
  }
})

const SyndicateViewHoc = (WrapperComponent) => {
  class SyndicateView extends Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      this.props.getSyndicateInfo()
    }

    componentWillUnmount () {
      this.props.clearSyndicateData()
    }

    render () {
      const {
        data = {},
        ...restOfProps
      } = this.props

      const {
        owner = {
          name: '-'
        },
        featuredImage = '',
        logo = '',
        description = syndicateDesc,
        ...rest
      } = data

      const syndicateProps = {
        owner,
        featuredImage,
        logo,
        description,
        ...rest
      }

      return (
        <View title={titleize(owner.name || '')} isPrefixed={false}>
          <div>
            <WrapperComponent
              data={syndicateProps}
              {...restOfProps} />
            <AjaxLoader isVisible={this.props.fetching} />
          </div>
        </View>
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(SyndicateView)
}

export default SyndicateViewHoc