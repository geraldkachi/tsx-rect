import React from "react";
import { Store } from "../../Store";

const RickMorty = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    // FetchDataAction()    
    state.episodes.length === 0 ? FetchDataAction() : (<div>Rick and Mporty Loading....</div>);
  });

  
  const FetchDataAction = async () => {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episoldes,
    });
  };

//   const FetchDataList = state.episodes.length === 0 ? FetchDataAction() : (<div>Loading....</div>);


  //   console.log(store);
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick you fav episode!!!</p>
      <div>
      {/* {FetchDataList} */}
      {state.episodes.map((item: any) =>  (
      <div key={item.id}>
          <img src={item.image.medium} alt={`rick and  morty ${item.name}`}/>
          <div>{item.name}</div>
          <section>
              Section: {item.season} Number: {item.number}
          </section>
      </div>
  )
  )}
      </div>
    </>
  );
};

export default RickMorty;
