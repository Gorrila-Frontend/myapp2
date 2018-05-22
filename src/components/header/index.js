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
    color: #fff;
    text-align: center;
    margin-bottom: 100px;
    margin-top: 50px;
`;
