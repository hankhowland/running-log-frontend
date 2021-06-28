import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_GOALS = gql`
  query goalsQuery {
    text(name: "goals")
  }
`;

const Goals = () => {
    const { loading, error, data } = useQuery(GET_GOALS);
    const [goals, setGoals] = useState("no data loaded");
    useEffect(() => {
        if (data) {
            setGoals(data.text)
        }
    }, [data])
    
    const EDIT_GOALS = gql`
        mutation updateText($cont: String) {
            updateText(name: "goals", cont: $cont)
        }
    `;
    const [editGoals] = useMutation(EDIT_GOALS);
    
    return (
        <GoalsContainer
            className="goals" 
            onKeyPress={(e) => {if (e.key == "Enter") {editGoals({variables: { cont: goals}})}}} 
            value={goals} 
            onChange={(e) => setGoals(e.target.value)}
            rows={30}
            cols={30} />
    )
}

export default Goals;

const GoalsContainer = styled.textarea`
  border:none;
`