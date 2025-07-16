import { useState } from "react";

const Ejercicio3 = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votesLength = anecdotes.length;
  const initialVotes = new Array(votesLength).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);

  const nexAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    console.log(newVotes);
  };

  const MaxVotes = () => {
    const maxVoteCount = Math.max(...votes);
    const maxVoteAnecdote = anecdotes[votes.indexOf(maxVoteCount)];

    if (maxVoteCount === 0) {
      return "No votes yet";
    }
    return maxVoteAnecdote;
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nexAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <MaxVotes />
    </div>
  );
};

export default Ejercicio3;
