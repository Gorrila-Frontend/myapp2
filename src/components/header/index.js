import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render () {
        return (
            <div className={this.props.className}>
                <h1>GORRILA Tasks</h1>
            </div>
        );
    }
}
export default styled(Header)`
    background: #512DA8;
    color: #fff;
    text-align: center;
`;