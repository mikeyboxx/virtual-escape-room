import React, { useState,useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_GET_LEADERBOARD } from '../utils/queries';

const styles = {

  thead:{
    "background-color": "plum",
  },

  tbody:{
    "text-align": "center",
  }
}


const Leaderboard = () => {
// const [state, dispatch] = useGameContext();
const { game_id } = useParams();

const {loading,  data } = useQuery(QUERY_GET_LEADERBOARD, 
  {
    variables: 
      { gameId:1 },
  }
);
const leaderBoard = data?.leaderBoard || [];
console.log(leaderBoard);


return(
     <>
     <main id="leaderboard">
          <h3>Global Leader board</h3>
          <div >
               <table>
                <thead style={styles.thead}>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Number of Attempts</th>
                    <th>Final Solution Time</th>
                  </tr>
                </thead>  
                <tbody style={styles.tbody}>
                {leaderBoard.map((user,idx) => (
                <tr key={user.idx}>
                    <td>{idx+1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.number_of_attempts}</td>
                    <td>{user.final_solution_time}</td>
                </tr>
                ))}
                </tbody>
               </table>
          </div>
     </main>
     </>
     );
}
export default Leaderboard;