import Link from "../../Link";
import React from "react";
import {Divider, Typography} from "@mui/material";

export const Contributing = ({source}) => {
    return (
        <>
            <br/>
            <Divider/>
            <br/>
            <Typography variant={"h5"} color={"primary"}>Help make this document better</Typography>
            <br/>
            <Typography>
                This guide, as well as the rest of our docs, are open-source and
                available on <Link href="https://github.com/eltyer/documentation">Github
            </Link>. We welcome your contributions.
            </Typography>
            <ul>
                <li>
                    <Link href={source}>Suggest an edit to this page</Link>.
                </li>
                <li>To report a problem in the documentation, or to submit feedback and comments, please open an <Link href={'https://github.com/eltyer/documentation/issues/new/choose'}>issue</Link> on GitHub</li>
            </ul>
            <br/>
            <Divider/>
        </>
    )
}