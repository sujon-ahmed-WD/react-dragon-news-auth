import { Link } from "react-router-dom";

const NewDtals = ({ news }) => {
    const { title,thumbnail_url,details,_id} = news;
  return (
    <div>
      <div className="card bg-base-100 mx-auto">
        <figure>
        <img src={thumbnail_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
            {
                details.length>200 
                ?
                <p>{details.slice(0,200)}
                <Link
                to={`/news/${_id}`}
                 className="text-blue-600 font-bold">Read more ..</Link>
                </p>
                :
                <p>{details}</p>
            }
 
        </div>
      </div>
    </div>
  );
};

export default NewDtals;
