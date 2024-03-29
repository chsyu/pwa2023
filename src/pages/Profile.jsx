import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileCard from '../components/ProfileCard';
import MotionDiv from '../components/MotionDiv';

function Profile() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   return (
      <MotionDiv className="mainLayout">
         <Helmet>
            <title>profile</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Profile"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <ProfileCard />
         </div>
         <Footer className="layoutFooter" />
      </MotionDiv>
   );
}

export default Profile;
