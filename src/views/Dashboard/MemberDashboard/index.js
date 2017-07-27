/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module Connect
 */
import { connect } from 'react-redux'

/**
 *  @module NewsTile
 */
import NewsTile from 'components/tiles/NewsTile'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module HeaderSection
 */
import HeaderSection from 'components/dashboard/HeaderSection'

/**
 *  @module Block, Grid
 */
import { Block, Grid } from 'components/masonry'

/**
 *  @module newsImage
 */
import { newsImage } from 'assets/dummyassets'

/**
 *  @module getDashboard
 */
import { getDashboard } from 'actions/dashboard'

import View from 'components/routing/View'

import { MEMBER_DASHBOARD as title } from 'data/titles'

/**
 *  @class
 *  @name MemberDashboard
 *  @extends {Component}
 */
export class MemberDashboard extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      syndicates: []
    }

    // Bind custom fns
    this.fetchDashboardData = this.fetchDashboardData.bind(this)
  }

  componentDidMount () {
    // Fetch the data.
    this.fetchDashboardData()
  }

  /**
   *  fetchDashboardData
   *  @description Will make an ajax call to get the dashboard data.
   *  @return {Void}
   */
  fetchDashboardData () {
    this.props.getDashBoardData()
    .then(({ownership}) => {
      this.setState({
        syndicates: ownership
      })
    })
    .catch(error => {
      console && console.error(error)
    })
  }

  render () {
    const { data } = this.props
    const { tiles } = data
    const { syndicates } = this.state

    return (
      <View title={title}>
        <div className='member-dashboard'>
          <div className='member-dashboard__slider'>
            <HeaderSection
              data={syndicates}/>
          </div>
          <div className='member-dashboard__feed-section container'>
            <h1 className='member-dashboard__title uppercase'>
              Racing News
            </h1>
            <div className='member-dashboard__feed'>
              <Grid
                targetBlockWidth={265}
                center={false}
                maxColumns={4}>
                {
                  tiles.map((tile, index) => (
                    <Block width={1} key={index}>
                      <NewsTile
                        id={index}
                        rootPath={tile.rootPath}
                        text={tile.text}
                        src={tile.src}
                        providerSrc={tile.providerSrc}
                        date={tile.date}
                        className='member-dashboard__tile'
                      />
                    </Block>
                  ))
                }
              </Grid>
            </div>
            <TextButton
              text='Load more'
              modifier='secondary'
              className='member-dashboard__more-btn'
              onClick={() => {}}
            />
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // TODO: Use state.dashboardOverview
  data: {
    tiles: new Array(12).fill({
      text: 'Tobefair: the Cheltenham favourite owned by 17 regulars of a Pembroke pub',
      rootPath: '',
      src: newsImage,
      providerSrc: newsImage,
      date: '2017-06-06T14:11:42.820Z'
    })
  }
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDashBoardData: () => {
      return dispatch(getDashboard())
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard))
