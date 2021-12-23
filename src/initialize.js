import {sideNavOpenAction} from "./redux/actions";
import Cookies from 'universal-cookie';
import {SIDE_NAV_OPEN} from "./redux/types";

export async function initialize(req, store) {
    const cookies = new Cookies(req.headers.cookie);
    let sideNavValue = cookies.get(SIDE_NAV_OPEN, "/");

    if(sideNavValue === undefined) {
        store.dispatch(sideNavOpenAction(false));
    } else {
        store.dispatch(sideNavOpenAction(sideNavValue === 'true'));
    }
}
