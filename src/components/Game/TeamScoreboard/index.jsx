import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';
import TeamItem from './TeamItem';
import teamsSlice from '../../../store/slices/teams';
import generalSlice from '../../../store/slices/general';
import { getTeamsArray } from "../../../store/slices/teams/selectors";
import { getQuestionsCount } from '../../../store/slices/general/selectors';

const TeamScoreboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const teams = useSelector(getTeamsArray);
  const questionsCount = useSelector(getQuestionsCount);

  const questionTeamItem = useMemo(() => ({
    id: 'questions',
    name: 'Questions',
    score: questionsCount,
  }), [questionsCount]);

  const handleScoreChange = useCallback((team, isUp) => {
    const newScore = team.score + (isUp ? 1 : -1);

    if (newScore < 0) return;

    if (team.id === 'questions') {
      dispatch(generalSlice.actions.setQuestionsCount(newScore));
      return;
    }

    if (newScore > questionsCount) return;

    dispatch(teamsSlice.actions.setTeamScore({
      id: team.id,
      score: newScore,
    }));
  }, [dispatch, questionsCount]);

  return (
    <div className={classes.root}>
      <div className={classes.scoreboard}>
        {
          teams.map(team => (
            <TeamItem
              key={team.id}
              team={team}
              countHandler={handleScoreChange}
            />
          ))
        }
      </div>
      <div>
        <TeamItem
          team={questionTeamItem}
          countHandler={handleScoreChange}
        />
      </div>
    </div>
  )
};

export default TeamScoreboard;
