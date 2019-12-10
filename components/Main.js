import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import ShopMain from './Shop.js';
import GuildShop from './Guild.js'
import ShopIronSword from './Upgrades/ironSword.js'
import SaveState from './savestate/save.js'
import Header from './header.js'

import { connect } from 'react-redux';
import mapStateToProps from '../redux/stateToProps'

class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveCode : ''
    }
  }

  generateSaveCode = (event, propsData) => {
    event.preventDefault()
    const secretCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);

    var {click, gold, shop, guild, ironSword} = propsData
    const data = {
      code: secretCode,
      click, gold, shop, guild, ironSword
    }

    console.log(secretCode)

    fetch('http://localhost:5251', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        data: data
     })
    })
    .then(data => data.json())
    .then(response => console.log(response))
    .then(this.setState({saveCode: secretCode}))
  }

  addGold = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: "INCREMENT" });
 };

  render() {
    var {click, gold, shop, guild, ironSword} = this.props
    const data = {
      click, gold, shop, guild, ironSword
    }
    console.log(data, 'THIS ONE ')
    const resizeMode = 'center'
    const remote = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fih1.redbubble.net%2Fimage.24675545.8656%2Fflat%2C800x800%2C070%2Cf.u2.jpg&f=1&nofb=1'
    return (
      <View style = {styles.main} > 
        <Header/> 
        <View onClick = {e => this.addGold(e)} style = {styles.clicker}>
          <Image style = {{flex: 1, resize: resizeMode, width: 200, height: 200,}} source = {{uri: remote}} />
        </View>
        <Text style = {styles.headerMain}>Tap Link</Text>
        <Text style={styles.header}> You Have: <Text style = {styles.gold}>{this.props.gold}</Text> Gold</Text>
        <Text style = {styles.header}>Shop</Text>
          <ShopMain />
          <GuildShop />
        <Text style = {styles.header}> Upgrades </Text>
          <ShopIronSword />
          <Button onPress = {e => {this.generateSaveCode(e, this.props)}} title = 'Generate Save'/>
          <Text>
          Your Save Code is: {this.state.saveCode}
          </Text>
          <View>
            <SaveState />
          </View>
          
      </View>
    );
  }
}

export default connect(mapStateToProps)(MainHome)

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  button: {
    margin: 5
  },
  header: {
    fontSize: 20,
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'center',
    paddingTop:20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  gold: {
    color:'yellow',
  },
  bar:{
    display:'flex',
  },
  item_text:{
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  clicker: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 300,
    height: 250,
  },
  headerMain:{
    fontFamily: 'Roboto',
    fontSize: 30
  }

})