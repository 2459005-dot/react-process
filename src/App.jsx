import './App.css'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

function App() {

  const user = {
    name: 'Elice',
    age: 20
  }

  return (
    <div>
      <Exam1 {...user} />
      <Exam2 />
      <Exam3 />
    </div>
  )
}

export default App
