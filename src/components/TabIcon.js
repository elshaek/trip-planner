import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

class TabIcon extends React.Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
      </View>
    );
  }
}

export default TabIcon;
