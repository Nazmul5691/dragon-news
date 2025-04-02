import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../layout-components/LeftNavbar";
import RightNavbar from "../layout-components/RightNavbar";


const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header className="flex flex-col gap-[30px]">
                <section>
                    <Header />
                </section>
                <section className="max-w-6xl w-full mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="max-w-6xl w-full mx-auto pt-5">
                <Navbar />
            </nav>
            <main className="max-w-6xl w-full mx-auto grid grid-cols-12 pt-[76px]">
                <aside className="col-span-3"><LeftNavbar /></aside>
                <section className="col-span-6">Middle</section>
                <aside className="col-span-3"><RightNavbar /></aside>
            </main>
        </div>
    );
};

export default HomeLayouts;