/*Import styled components*/
import {LayoutContainer} from './Layout.Styles';

/*Import external components*/ 
import Header from  '../Header/index';
import Footer from '../Footer/index';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <LayoutContainer>
            <Header/>
            {children}
            <Footer/>
        </LayoutContainer>
    )
}

export default Layout;