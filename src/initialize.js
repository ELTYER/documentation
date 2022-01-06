import {sideNavOpenAction} from "./redux/actions";

export async function initialize(req, store) {
    const UA = req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    if(isMobile) {
        store.dispatch(sideNavOpenAction(false));
    }
}
