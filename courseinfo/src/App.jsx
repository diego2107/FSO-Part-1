const App = () => {
  const course = 'Half Stack application development'
  const part1 = { part: 'Fundamentals of React', exercises: 10}
  const part2 = { part: 'Using props to pass data', exercises: 7}
  const part3 = { part: 'State of a component', exercises: 14}
  const total = part1.exercises + part2.exercises + part3.exercises
    
  const Header = (props) => {
    return (
     <h1>{props.course}</h1>
    )
  }
   

  const Content = (props) => {
    return (
    <>
    <p>{props.part1.part}: {props.part1.exercises}</p>
    <p>{props.part2.part}: {props.part2.exercises}</p>
    <p>{props.part3.part}: {props.part3.exercises}</p>
    </>
    )
  }
  
  const Total = (props) => {
    return (
      <p>Number of exercises: {props.total}</p>
    )
  }

  
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={total}/>
    </div>
  )
}

export default App