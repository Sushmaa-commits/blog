import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router,Switch,Route } from "react-router-dom";

import { StylesProvider } from '@material-ui/core/styles';

import Header from "./components/HearderPage/Header";
import Footer from "./components/FooterPage/Footer";

import Home from "./containers/HomePage";
import About from "./containers/AboutPage/About";
import Contact from "./containers/ContactPage/Contact";
import Blog from "./containers/BlogPage";
import Art from "./containers/ArtPage";
import Tag from "./containers/TagPage";
import Faq from "./containers/FaqPage";
import SingleBlog from './containers/SingleBlogPage';
import SingleArt from "./containers/SingleArtPage";
import SingleTag from "./containers/SingleTagPage";


function Index() {
    return (
      <StylesProvider injectFirst>
          <Router>
              <Header/>
                <Switch>
                  <Route path="/about" component={About}/>  
                  <Route path="/contact" component={Contact}/> 
                  <Route path ="/blogs" component={Blog}/>
                  <Route path="/arts" component={Art}/> 
                  <Route path="/tags" component={Tag}/> 
                  <Route path="/faq" component={Faq}/> 
                  <Route exact path="/" component={Home}/>
                  <Route path="/blog/:slug" component={SingleBlog}/>
                  <Route path="/art/:slug" component={SingleArt}/>
                  <Route path="/tag/:slug" component={SingleTag}/>
                </Switch>
              <Footer/>  
          </Router>
      </StylesProvider>

    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
