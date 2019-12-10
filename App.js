import {createStore } from 'redux'
import { Provider } from 'react-redux';
import React from 'react'
import MainHome from './components/Main'
import initialState from './redux/initialState'


function reducer(state = initialState, action) {
      console.log('reducer', state, action);
      switch(action.type) {
            case 'INCREMENT':
              console.log(action)
              return {
                gold: state.gold + state.click,
                click: state.click,
                shop: state.shop,
                guild: state.guild,
                ironSword: state.ironSword
              };
            case 'INCREMENT_SHOP_MULT':
              return {
                  gold: state.gold + state.shop.owned,
                  click: state.click,
                  shop: state.shop,
                  guild: state.guild,
                  ironSword: state.ironSword
                    }
            case 'PURCHASE_SHOP':
              return {
                  gold: state.gold - state.shop.price,
                  click: state.click,
                  shop: {
                        owned: state.shop.owned + 1,
                        price: Math.round(state.shop.price * 1.3)
                        },
                  guild: state.guild,
                  ironSword: state.ironSword
                    }
            case 'INCREMENT_GUILD_MULT':
              return {
                  gold: state.gold + state.guild.owned * 10,
                  click: state.click,
                  shop: state.shop,
                  guild: state.guild,
                  ironSword: state.ironSword
                     }
            case 'PURCHASE_GUILD':
              return {
                  gold: state.gold - state.guild.price,
                  click: state.click,
                  shop: state.shop,
                  guild: {
                      owned: state.guild.owned + 1,
                      price: Math.round(state.guild.price * 1.4)
                          },
                  ironSword: state.ironSword
                     }
            case 'PURCHASE_IRON_SWORD':
              return {
                gold: state.gold - state.ironSword.price,
                click: state.click + 2,
                shop: state.shop,
                guild: state.guild,
                ironSword: {
                  price: state.gold,
                  click: state.click,
                  isOwned: true
                }
              }
            default:
              return state;
          }
    }

const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // ...
  }

  render() {
    return (
      <Provider store={ store }>
        <MainHome/>
      </Provider>
    );
  }
}