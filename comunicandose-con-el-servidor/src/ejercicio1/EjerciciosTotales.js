const EjerciciosTotales = ({ courseExercices }) => {
  const totalExercices = courseExercices.reduce((acc, current) => {
    return acc + current.exercises;
  }, 0);
  return <p>Ejercicios totales: {totalExercices}</p>;
};

export default EjerciciosTotales;
