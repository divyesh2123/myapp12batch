import React, { Component } from 'react'

export default class ErrorBoundary extends React.Component {
constructor(props) {  
  super(props);  
  this.state = { error: false, errorInfo: null };  
}  


  
componentDidCatch(error, errorInfo) {  
  // Catch errors in any components below and re-render with error message  
  this.setState({  
    error: error,  
    errorInfo: errorInfo  
  })  
}  
  
render() {  
  if (this.state.errorInfo) {  
    return (  
      <div>  
        <h2>Something went wrong.</h2>  
        <details style={{ whiteSpace: 'pre-wrap' }}>  
          {this.state.error && this.state.error.toString()}  
          <br />  
          {this.state.errorInfo.componentStack}  
        </details>  
      </div>  
    );  
  }  
  return this.props.children;  
}    

}


