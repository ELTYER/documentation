import React, {PureComponent} from 'react';
import {Alert} from "@mui/material";

export default class MarkdownBlockQuote extends PureComponent {
    render() {
        return (
            <Alert variant={"outlined"} severity={"info"}>
                {this.props.children}
            </Alert>
        );
    }
}
