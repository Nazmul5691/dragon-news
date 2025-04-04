import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {

    const {data:news} = useLoaderData()
    // console.log(news);
    return (
        <div className="px-5">
            <h1>{news.length} news found on this category</h1>
            <div className="">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;