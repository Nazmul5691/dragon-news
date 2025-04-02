

const NewsCard = ({singleNews}) => {

    const {title} = singleNews;
    return (
        <div>
            <h1>single news:{title}</h1>
        </div>
    );
};

export default NewsCard;