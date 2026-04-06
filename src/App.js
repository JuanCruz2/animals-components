function App () {
    const handleClick = () => {
        console.log('Button was clicked!');
    }
  return (
    
    <button onClick={handleClick}>Add Animal</button>
    
  )
}

export default App;