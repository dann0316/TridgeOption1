import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import Breadcrumb from "../components/Breadcrumb";

const Home = () => {
    // breadcrumb 내부로
    const breadcrumbs = [{ name: "Home", path: "/" }];

    return (
        <div className="container">
            
            <div
                aria-label="breadcrumb"
                className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#183168] w-[60%]"
            >
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <main className="page-container pt-16">
                {/* img section */}
                <div className="w-full flex justify-center items-center">
                    <img
                        loading="lazy"
                        src={bg}
                        alt="bg"
                        className="w-80 md:w-[30rem] lg:w-[40rem] drop-shadow-xl md:drop-shadow-2xl animate-bounce"
                    />
                </div>

                {/* title section */}
                <div>
                    <h2 className="text-[#183168] text-base md:text-xl lg:text-2xl font-extrabold">
                        {`포켓몬들을 찾아보아요 :)`}
                    </h2>
                </div>

                <Link to={`/species`} className="link">
                    찾아보기
                </Link>
            </main>
        </div>
    );
};

export default Home;
