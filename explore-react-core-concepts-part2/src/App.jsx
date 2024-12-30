import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('yes bro')
  }

  const addToFive = (num) => {
    alert(num +5)
  }

  return (
    <>
      <h3>React Core Concepts</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>Click3</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
