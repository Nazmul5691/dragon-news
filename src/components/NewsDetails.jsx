import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
    const newsData = useLoaderData();

    // Extracting the first news item from the data array
    const news = newsData?.data?.[0];

  

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{news.title}</h1>
            <img src={news.image_url} alt={news.title} className="w-full max-w-2xl my-4" />
            <p className="text-gray-700">{news.details}</p>
            <div className="mt-4">
                <strong>Author: </strong>{news.author.name} <br />
                <strong>Published Date: </strong>{news.author.published_date}
            </div>
            <Link to='/'>
                <button>go back to home</button>
            </Link>
        </div>
    );
};

export default NewsDetails;
