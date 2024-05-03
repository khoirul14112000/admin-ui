import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer"><Navbar/>container</div>
      <div className="widgets">
        <widget type="user" />
        <widget type="order" />
        <widget type="earning" />
        <widget type="balance" />
      </div>
      <div className="charts">
        <Chart type="order" aspect={2/1}/>
        <Chart type="earning" aspect={2/1}/>
      </div>    
    </div>
  );
};

export default Home;