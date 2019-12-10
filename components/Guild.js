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

class GuildMain extends Component {
  componentDidMount() {
    this.guildInterval = setInterval(() => this.props.dispatch({ type: "INCREMENT_GUILD_MULT" }), 1000);
  };

  componentWillUnmount() {
     clearInterval(this.guildInterval);
 }

// Purchasing Method
 buyGuild = (event) => {
    event.preventDefault()
    if(this.props.gold < this.props.shop.price) console.log('Not enough gold!')
    else this.props.dispatch({ type: "PURCHASE_GUILD" })
    };

 buyGuildReady = () => {
    if(this.props.gold < this.props.guild.price || this.props.gold <= 0) {
    return <Button title = {<Text>Need {this.props.guild.price - this.props.gold} more gold!</Text>}/>

    }
    else return <Button onPress= {e => this.buyGuild(e)} title = {<Text>Buy for {this.props.guild.price} gold!</Text>}/>
 };

 
  render() {
    console.log(this.props, 'reducer props')
    return (
      <View style= {styles.bar}>
         <Text style = {styles.item_text}>
         Guild
         <Text style = {styles.subtext}>
            +10 Cps
         </Text>
         </Text >
         {this.buyGuildReady()}
   </View>
    );
  }
}


export default connect(mapStateToProps)(GuildMain)