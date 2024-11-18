import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Page() {
  return (
    <Box sx={{ width: '100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    <Typography variant={"h2"} gutterBottom>
    Survivor 47 Game Rules
    </Typography>

    
      <ol>
        <li>
        <Typography variant={'h5'} gutterBottom >
            Winner Selection and Scoring
            </Typography>
            <ul>
                <li>
               <b> Choosing a Winner:</b> At the beginning of the season, you will pick a winner. Points are
awarded based on their performance in reward and immunity challenges, as well as
other in-game events. You may change your chosen winner week to week, but the
longer you keep the same winner, the more points you accrue. To receive the extra
points, you must keep the winner consecutively selected until the end.
                </li>
                <li>
               <b> Scoring Example:</b> 
               <ul>
                <li> If you choose the winner starting in Week 10 and continue through Week 13, you
                will earn:
                <ul>
                    <li>Week 10: 10 points</li>
                    <li>Week 11: 10 + (10 * 0.5) = 15 points</li>
                    <li>Week 12: 15 + (10 * 0.5) = 20 points</li>
                    <li>Week 13: 20 + (10 * 0.5) = 25 points</li>
                    <li><b>Total:</b> 70 points</li>
                </ul>
                </li>
                <li> If you select the winner from Week 1 to Week 13, you can score a maximum of
                520 points.
                </li>
               </ul>
                </li>
                <li><b>Changing Your Winner:</b> Changes must be submitted 30 minutes before each episode
                airs. Text Nick at (314) 575-7757 to make a change. </li>
            </ul>
        </li>
        <li>
        <Typography variant={'h5'} gutterBottom >
            Challenge and Advantage Scoring:
            </Typography>
            <ul>
                <li><b>Tribal Reward/Immunity Challenges:</b>
                <ul>
                    <li>Winning Tribe: 20 points</li>
                    <li>Second place (when there are 3 tribes): 10 points</li>
                </ul>
                </li>
                <li><b>Individual Reward/Immunity</b>
                <ul>
                    <li> 40 points per win</li>
                </ul>
                </li>
                <li><b>Marooning Challenge</b>
                <ul>
                    <li>
                        20 points for the winning tribe
                    </li>
                </ul>
                </li>
                <li><b>Sweat or Savvy:</b>
                <ul>
                    <li>20 points if your player participates and succeeds</li>
                    <li>-10 points if your player participates and fails</li>
                </ul>
                </li>
                <li><b>Beware Advantage</b>
                <ul>
                    <li>50 points for successful completion</li>
                </ul>
                </li>
                <li><b>Using Advantages</b>
                <ul>
                    <li>Any advantage: 40 points</li>
                    <li>Shot in the Dark: 20 points</li>
                    <li>Successful Shot in the Dark: 60 points</li>
                </ul>
                </li>
                <li><b>Immunity Idol</b>
                <ul>
                    <li>100 point sfor using an idol, regardless of whom it is used on</li>
                </ul>
                </li>
                <li><b>Journey Challenge</b>
                <ul>
                    <li>Successful journey challenge: 20 points</li>
                    <li>Losing journey challenge: -10 points</li>
                    <li>Choosing not to participate: 0 points</li>
                </ul>
                </li>
            </ul>
            <li>
            <Typography variant={'h5'} gutterBottom >
            Additional Rules:
            </Typography>
            <ul>
                <li><b>Points Bank:</b> Points earned from reward/immunity/HII/SID/vote rankings can be ranked or spent on a Game Changer Play. For 250 banked points you can force someone to change their ultimate winner choice or break someone's long streak of having the winner selected This option is available until week 12.</li>
            </ul>
            </li>
        </li>
      </ol>

    </Box>


  )
}
