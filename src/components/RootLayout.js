import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/Store";

const RootLayout = () => {
    return ( 
        <div>
            <Provider store={store}>
            {<NavBarPanel/>}
            <main>
                <Outlet/>
            </main>
            </Provider>
        </div>
     );
}
 
export default RootLayout;