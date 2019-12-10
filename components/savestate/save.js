import React from 'react'
import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux';

import mapStateToProps from '../../redux/stateToProps'

class SaveState extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         saveCode: ''
      }
   };

   updateTextInput = (event) => {
      event.preventDefault();
      this.setState({
         saveCode: event.target.value
      })
      console.log(this.state.saveCode)
   }

   sendSaveData = (event, saveValue) => {
      event.preventDefault();

   }
   render() {
      return(
         <View>
         <View style = {styles.textfield}>
             <Text>Load Save: </Text>
             <TextInput onChange = {e => this.updateTextInput(e)}style={{ height: 20,width: "70%", borderColor: 'gray', borderWidth: 1, margin: 10, }} ></TextInput>
         </View>
         <Button onPress = {e => this.sendSaveData(e, this.state.saveCode)} title ='Load Save'/>
         </View>
      )
   }
}

export default connect(mapStateToProps)(SaveState)


const styles = StyleSheet.create({
   textfield: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
   }
});   