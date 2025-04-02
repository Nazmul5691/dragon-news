import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 items-center overflow-hidden">
            <p className="bg-[#D72050] text-white py-[9px] pl-[25px] pr-6">Latest</p>
            <div className="flex-1 min-w-0 pl-5 pr-[95px]">
                <Marquee speed={100} pauseOnHover={true} className="text-lg text-[#403F3F] font-semibold">
                    <Link to="/news" className="mx-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit Cupiditate vero odio nemo vero odio nemo.
                    </Link>
                    <Link to="/news" className="mx-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit Cupiditate vero odio nemo vero odio nemo.
                    </Link>
                    <Link to="/news" className="mx-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit Cupiditate vero odio nemo vero odio nemo.
                    </Link>
                    <Link to="/news" className="mx-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit Cupiditate vero odio nemo vero odio nemo.
                    </Link>
                </Marquee>
            </div>

        </div>
    );
};

export default LatestNews;