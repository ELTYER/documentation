import React from "react";
import {useSideNavStyles} from "../../styles";

export const SideNavSmallSpacer = ({item}) => {
    const sideNavClasses = useSideNavStyles();

    return <div key={item.id} className={sideNavClasses.smallSpacer}/>
}