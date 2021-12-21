import React from "react";
import {useSideNavStyles} from "../../styles";

export const SideNavSpacer = ({item}) => {
    const sideNavClasses = useSideNavStyles();

    return <div key={item.id} className={sideNavClasses.spacer}/>
}