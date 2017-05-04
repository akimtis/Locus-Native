import React, { Component } from 'react'

import {
   View, 
   Text
} from 'react-native'

import Main from './app/components/Main.js'


export default class App extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: ''
      }
   }
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      alert('email: ' + this.state.email + ' password: ' + this.state.password)
   }

   render(){
      return(
         <View>
            <Text> This is a Test </Text>
            <Main
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
            />
         </View>
      )
   }
}