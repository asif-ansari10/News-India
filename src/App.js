import './App.css';
import React, {Component} from 'react';
import NavBar from './NavBar';
import News from './News';
import { HashRouter as Router,Route, Routes, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import About from './About';
import Help from './help';


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
    <Router> 
    <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        shadow={true}
      />

        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}   key="general"  country="us" category="general" headlines="Headlines"/>} /> 
          <Route exact path="/sports"  element={<News setProgress={this.setProgress}   key="sports"  country="us" category="sports" headlines="Sports Headlines"/>} /> 
          <Route exact path="business"  element={<News setProgress={this.setProgress}   key="business"  country="us" category="business" headlines="Business Headlines"/>} /> 
          <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}   Key="entertainment"  country="us" category="entertainment" headlines="Entertainment Headlines"/>} /> 
          <Route exact path="/health"  element={<News setProgress={this.setProgress}   key="health"  country="us" category="health" headlines="Health Headlines"/>} /> 
          <Route exact path="/science"  element={<News setProgress={this.setProgress}   key="science"  country="us" category="science" headlines="Science Headlines"/>} /> 
          <Route exact path="/technology"  element={<News setProgress={this.setProgress}   key="technology"  country="us" category="technology" headlines=" Technology Headlines"/>} /> 
          <Route exact path="/about"  element={<About/>} />
          <Route exact path="/help"  element={<Help/>} />  
        </Routes>
    
    </Router>
    </div>
  )
 }
}