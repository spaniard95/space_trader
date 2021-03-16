import { withHoverClick } from "../hoc";
import{ Card } from "../cards";
import { ExpandClick } from "../expand";
import "./traderInfo.css";

const TraderInfo = ({data, loading, error}) => {

  if (error) {
      return <div>Error: {error.message}</div>;
  } else if (loading) {
      return <div>Loading...</div>;
  } else {
    const Ho = withHoverClick(<Card info={data.user.username}/>);
      return (
      <div>
        <text>
          {data &&
            <ul class="trader-items">
              <li>Trader: {data.user.username}</li>
              <li>Funds : {data.user.credits} </li> 
              <ExpandClick dataKey="ships" data={data.user}/>
              <ExpandClick dataKey="loans" data={data.user}/>
            </ul>
          }
        </text>
      </div>
    );
  }
}

export default TraderInfo;