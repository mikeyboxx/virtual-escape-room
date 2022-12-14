import React, { useState,useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useGameContext } from '../utils/GlobalState'
import { QUERY_GET_LEADERBOARD } from '../utils/queries';

const Leaderboard = () => {
  const [state] = useGameContext();
  const {loading,  data } = useQuery(QUERY_GET_LEADERBOARD, 
    {
      variables: { gameId: state.game.game_id},
      fetchPolicy: "network-only"
    }
  );
  const leaderBoard = data?.leaderBoard || [];

return(
     <>
     <main className="leaderboard">
          <h3>Global Leaderboard</h3>
          <div >
               <table>
                <thead >
                  <tr>
                    <th>Rank</th>
                    <th className='ps-1'>Name</th>
                    <th>Number of Attempts</th>
                    <th>Final Solution Time</th>
                  </tr>
                </thead>  
                <tbody >
                {leaderBoard.map((user,idx) =>{ 
                  const timeMins=Math.floor(user.final_solution_time/60);
                  const timeSec=user.final_solution_time%60
                  return (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.number_of_attempts}</td>
                    <td>{timeMins+" mins " +timeSec +" sec"}</td>
                </tr>
                )})}
                </tbody>
               </table>
          </div>
      </main>
    </>
  );
}

export default Leaderboard;