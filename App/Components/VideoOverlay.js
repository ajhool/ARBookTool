// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/VideoOverlayStyle'

export default class VideoOverlay extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>VideoOverlay Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// VideoOverlay.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// VideoOverlay.defaultProps = {
//   someSetting: false
// }
