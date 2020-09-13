import React, { Component } from 'react';
import Feed from './Feed';

class Feeds extends Component {
    state = {
        allfeeds:[{id:1, desc:"Covid Increased!!"},
        {id:2, desc:"abc"},
        {id:3, desc:"def"},
        {id:4, desc:"dfcf"}],
    };
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {this.state.allfeeds}

                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
            </React.Fragment>
           
         );
    }
}
 
export default Feeds;