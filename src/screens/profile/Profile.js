import React, { Component } from 'react';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";


const styles = theme => ({

bigAvatar: {
    margin: '20px',
    width: '60px',
    height: '60px',
    float: 'center',
    display: 'flex'

},

});

class Profile extends Component {
    state = {  }

    componentWillMount() {

        let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(JSON.parse(this.responseText));
        that.setState({ userImages: JSON.parse(this.responseText).data });
      }
    });
    xhr.open(
      "GET",
      this.props.baseUrl +
        "me/media?fields=id,caption&access_token=IGQVJXWV9CMXYyWlVYNlVjWW93ZAy03Y08zODBHMzlVQmFmRDZA6bUZA4ck9tWnJOeDZAwdUgzTWxHempqTmRtVnhBUjlrR3JMSHl1elpjd2hncTd4NFBlTk9FSkpLdlV0NlhSSDBZAX1FMRnBfaXk5MDAweUlaWDhPVDhBeG1V"
    );
    // xhr.open("GET",)
    xhr.send(data);

    //Second API Call
    let imageinfo = null;
    let xhrImageinfo = new XMLHttpRequest();
    xhrImageinfo.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(JSON.parse(this.responseText));
        that.setState({ imageInfo: JSON.parse(this.responseText) });
      }
    });

    xhrImageinfo.open(
      "GET",
      this.props.baseUrl +
        "17936454466396635?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXWV9CMXYyWlVYNlVjWW93ZAy03Y08zODBHMzlVQmFmRDZA6bUZA4ck9tWnJOeDZAwdUgzTWxHempqTmRtVnhBUjlrR3JMSHl1elpjd2hncTd4NFBlTk9FSkpLdlV0NlhSSDBZAX1FMRnBfaXk5MDAweUlaWDhPVDhBeG1V"
    );
    xhrImageinfo.send(imageinfo);
    }
    render() { 
        const { classes } = this.props;
        return ( 
            <div>

           
            <div>
                <Header />
            </div>
            <div className="col-left">
                                    {<Avatar aria-label="recipe" className={classes.bigavatar}>
                   <img src={require('./masha.jpeg')} width="50" height="50"></img>
                </Avatar>}
                                </div>

            </div>
         );
    }
}

export default withStyles(styles)(Profile);