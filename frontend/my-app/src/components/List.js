import React, {Component} from 'react';
import axios from 'axios';

class List extends Component{
    constructor(props) {
      super(props);
      this.state={
        success: null,
        message: null,
        loading: false

       }

    }

    componentDidMount() {
      axios.get('http://localhost:4000/').then((resp)=> {
        console.log(resp);
          this.setState({success: resp.data.success.toString(), message: resp.data.message, loading: true})


      })

    }
  render() {

    const renderSmth= ()=> {
      if (this.state.loading===false){
        return <h1> Loading </h1>
      }

      else {
        return (
          <div>
        <h1> this is a list Component </h1>
        <h2> {this.state.message}</h2>
        <h3> {this.state.success}</h3>

        </div>
      );

      }
    }
      const {message, success} = this.state
      return (
        <div>
        {renderSmth()}
        </div>
      )

    }

}

export default List;
