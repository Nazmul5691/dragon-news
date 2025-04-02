import { Link } from "react-router-dom";


const NewsCard = ({singleNews}) => {

    const {title, _id} = singleNews;
    return (
        <div className="py-4">
            <Link  to={`/news/${_id}`}>single news:{title}</Link>
        </div>
    );
};

export default NewsCard;