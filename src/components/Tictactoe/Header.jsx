import React from 'react';
import { Panel } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
          <Panel className="turn" bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Turn</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.props.text}</Panel.Body>
          </Panel>
        );
    }

}
