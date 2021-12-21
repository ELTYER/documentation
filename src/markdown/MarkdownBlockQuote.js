import React, {PureComponent} from 'react';
import {Alert} from "@mui/lab";

export default class MarkdownBlockQuote extends PureComponent {
    render() {
        return (
            <Alert severity="info">
                {this.props.children}
            </Alert>
        );
    }
}

