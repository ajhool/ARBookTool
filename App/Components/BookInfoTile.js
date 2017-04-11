// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/BookInfoTileStyle'

export default class BookInfoTile extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>BookInfoTile Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// BookInfoTile.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// BookInfoTile.defaultProps = {
//   someSetting: false
// }
