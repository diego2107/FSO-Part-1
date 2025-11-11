const App = () => {
  const course = 'Half Stack application development'
  console.log(course)

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  console.log(part1.name)
  console.log(part1.exercises)

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  console.log(part2.name)
  console.log(part2.exercises)

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  console.log(part3.name)
  console.log(part3.exercises)

  const result = (part1.exercises + part2.exercises + part3.exercises)
  console.log(result)
  
  return (
    <div>
      <p>{course}</p>
      <p>{part1.name}: {part1.exercises}</p>
      <p>{part2.name}: {part2.exercises}</p>
      <p>{part3.name}: {part3.exercises}</p>
      <p>Number of exercises: {result}</p>
    </div>
  )
}

export default App