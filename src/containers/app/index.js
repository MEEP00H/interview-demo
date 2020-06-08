import React, {Component} from 'react'
import { Route, Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../home'
import About from '../about'
import YourBook from '../books/yourBook'
import BookStore from '../books/bookStore'
import { Layout, Menu } from 'antd';
const { Header, Footer  } = Layout;
class App extends Component{
  render() { 
      console.log(this.props.bookStore)
      return(
        <div>
          <Header>
            
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/books/yourBook">Your Book</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/books/bookStore">Book Store</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/about-us">About Us</Link></Menu.Item>
            </Menu>
          </Header>
          <main>
            <Route exact path="/" component={Home} />

            <Route exact path="/books/yourBook"  component={() => 
              <YourBook 
                books={this.props.bookStore.bookStores} 
                remove = {this.props}
                />}/>

            <Route exact path="/books/bookStore"  component={() => 
              <BookStore 
                books={this.props.bookStore.books} 
                add = {this.props}
                />}/>

            <Route exact path="/about-us" component={About} />
          </main>
          <Footer style={{ textAlign: 'center' }}>
            Interview ©2018 Created by Promphat
          </Footer>
        </div>
        )
  }
}

  const mapStateToProps = state => {
    return {
      bookStore:state.bookStore
    }
  }
  const mapDispatchToProps = dispatch =>{
    
    return {
      addBook : (index) => {dispatch({type:'ADD_BOOK',index})} ,
      removeBook : (index) => {dispatch({type:'REMOVE_BOOK',index})}   
  }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))