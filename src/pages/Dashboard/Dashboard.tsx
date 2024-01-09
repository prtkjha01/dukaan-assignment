import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import MainSection from "../../components/mainSection/index";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="main flex">
        <div className="left-section">
          <Sidebar />
        </div>
        <div className="right-section w-full ">
          <Navbar />
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
