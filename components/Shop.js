import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

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

import { connect } from 'react-redux';
import mapStateToProps from '../redux/stateToProps'

class ShopMain extends Component {
  componentDidMount() {
    this.shopInterval = setInterval(() => this.props.dispatch({ type: "INCREMENT_SHOP_MULT" }), 1000);
  };

  componentWillUnmount() {
     clearInterval(this.shopInterval);
 }
// Purchasing Method
 buyShop = (event) => {
    event.preventDefault()
    if(this.props.gold < this.props.shop.price) console.log('Not enough gold!')
    else this.props.dispatch({ type: "PURCHASE_SHOP" })
    };

 buyShopReady = () => {
  if(this.props.gold < this.props.shop.price || this.props.gold <= 0) {
    return <Button title = {<Text>Need {this.props.shop.price - this.props.gold} more gold!</Text>}/>

    }
    else return <Button onPress= {e => this.buyShop(e)} title = {<Text>Buy for {this.props.shop.price} gold</Text>}/>
 }


  render() {
    console.log(this.props, 'reducer props')
    return (
      <View style= {styles.bar}>
         <Text style = {styles.item_text}>
         ShopKeep
         <Text style= {styles.subtext}>
           +1 Cps
         </Text>
         </Text >
         {this.buyShopReady()}
   </View>
    );
  }
}


export default connect(mapStateToProps)(ShopMain)