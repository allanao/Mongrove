import React from 'react';
import ResultsItem from '../components/ResultsItem.jsx';


const ResultsArea = (props) => {

  // declare array to store result items to render
  // const resultsItemsList = [];
  // for (let i = 0; i < props.testQueryList.length; i++) {
  //   resultsItemsList.push(
  //     <ResultsItem
  //       key={i}
  //       id={i}
  //       queryName={props.testQueryList[i].name}
  //     />
  //   )
  // }

  return (

    <div id="resultsArea" className="mainAreaComponents">
      <h2>Results Area</h2>
      
      <div id="resultItemsLegend">
        <div id="legend-2" className="legends">
          <div id="legend-2-colorBlock" className="colorblock"></div>
          <p>   Query Runtime (ms) </p>
        </div>
        <div id="legend-1" className="legends">
          <div id="legend-1-colorBlock" className="colorblock"></div>
          <p>   Query Throughput (amount/ms) </p>
        </div>
      </div>

      <div id="resultsItemsContainer">
        {/* {resultsItemsList} */}
        
        {/* sample results item display */}
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
      </div>
    </div>
  )
}

export default ResultsArea;