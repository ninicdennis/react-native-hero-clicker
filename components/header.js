import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Header extends React.Component{
   render() {
      return(
         <View style = {styles.header_bar}>
            <Text style = {styles.adj_font}>Adventure Clicker</Text>
         </View>
      )
   }
}

export default Header

const styles = StyleSheet.create({
header_bar: {
   display: 'flex',
   justifyContent: 'center',
   alignItems:'center',
   
   height: 50,
   width: '100%',
   backgroundColor: 'blue'
},
adj_font:{
   fontFamily: 'Roboto',
   fontSize: 20
}
 
 })