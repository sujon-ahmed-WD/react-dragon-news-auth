import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const{id}=useParams()
  return (
    <div className="max-w-6xl mx-auto font-poppins">
        <Header/>
        <Navbar/>
      <div className="grid grid-cols-4">
        <div className="border col-span-3">
            {id}
        </div>
        <div>
            <RightSideNav/>
        </div>
      </div>
    </div>
  );
};

export default News;
