import React, { Component } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <Segment inverted style={{margin: '-5px'}}>
          <Menu inverted>
            <Link to="/"><Button secondary>All posts</Button></Link>
            <Link to="/saved"><Button secondary>My saved posts</Button></Link>
          </Menu>
        </Segment>
    );
  };
};

export default Header;