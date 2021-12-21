import {useSideNavStyles} from "../../styles";
import {Divider} from "@mui/material";

export const SideNavDivider = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    return <Divider key={item.id} className={sideNavClasses.sideNavDivider}/>
}