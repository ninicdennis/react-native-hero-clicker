import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { connect } from 'react-redux';
import mapStateToProps from '../../redux/stateToProps'

class ShopIronSword extends Component {
   buySwordReady = () => {
      if(this.props.ironSword.isOwned === true) return <Button title = {<Text>Already Owned!</Text>} />
      else if(this.props.gold < this.props.ironSword.price || this.props.gold <= 0) {
         return <Button title = {<Text>Need {this.props.ironSword.price - this.props.gold} more!</Text>}/>
      }
         
         else return <Button onPress={e => this.buyIronSword(e)} title = {<Text>Buy for {this.props.ironSword.price} gold</Text>}/>
        }
   

   buyIronSword = () => {
      if(this.props.gold < this.props.ironSword.price) {
         console.log('Not enough gold!')
      }
      else if(this.props.ironSword.isOwned === true) {
         console.log('You already own this!')
      }
    
      else {
         this.props.dispatch({ type: "PURCHASE_IRON_SWORD" })
      }
    };

  render() {
    return (
      <View style= {styles.bar}>
         <Text style = {styles.item_text}>
         Iron Sword
         <Text style = {styles.subtext}>
            +2 Clicks
         </Text>
         </Text >
         {this.buySwordReady()}
   </View>
    );
  }
}


export default connect(mapStateToProps)(ShopIronSword)

const styles = StyleSheet.create({
   bar:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      width: '90%',
      
    },
    item_text:{
      fontFamily: 'Roboto',
      fontSize: 20,
      display: 'flex',
      flexDirection: 'column'
      
    },
    subtext: {
      fontFamily: 'Roboto',
      fontSize: 14,
    }
 
 })