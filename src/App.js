import './App.css';
import React, {Component} from 'react';
import NavBar from './NavBar';
import News from './News';
import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component{

  state = {
      progress : 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render(){
    return(
   <div>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        shadow={true}
      />
    <Router> 
   

        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}   Key="general"  country="in" category="general" headlines="Headlines"/>} /> 
          <Route exact path="/sports"  element={<News setProgress={this.setProgress}   Key="sports"  country="in" category="sports" headlines="Sports Headlines"/>} /> 
          <Route exact path="/bussness"  element={<News setProgress={this.setProgress}   Key="business"  country="in" category="business" headlines="Business Headlines"/>} /> 
          <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}   Key="entertainment"  country="in" category="entertainment" headlines="Entertainment Headlines"/>} /> 
          <Route exact path="/health"  element={<News setProgress={this.setProgress}   Key="health"  country="in" category="health" headlines="Health Headlines"/>} /> 
          <Route exact path="/science"  element={<News setProgress={this.setProgress}   Key="science"  country="in" category="science" headlines="Science Headlines"/>} /> 
          <Route exact path="/technology"  element={<News setProgress={this.setProgress}   Key="technology"  country="in" category="technology" headlines=" Technology Headlines"/>} /> 
          
        </Routes>
    

    </Router>
    </div>
  )
 }
}