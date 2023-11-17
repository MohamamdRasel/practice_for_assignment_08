import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div>
                <h2>This is main layout</h2>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;