import './App.css'
import Button from './components/Button'
import Input from './components/Input'
function App() {

  return (
    <div>
      <Input
        inputValue={'hello react'}
        title={'input title'}
        placeholder={'입력하세요'} />
      <h1>hello React!</h1>
      <Button text={'mail'} color={'red'}/>
      <Button text={'cafe'} color={'blue'}/>
      <Button text={'blog'} color={'green'}/>
      <Button text={'default'} />
      <Button text={'자식요소설정'} color={'pink'}>
        <strong>중요</strong>
      </Button>      
    </div>
  )
}

export default App
