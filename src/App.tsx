import TypeWriterEffect from "./components/TypeWriterEffect"

function App() {

  return (
    <TypeWriterEffect
      blinkDuration="10s"
      cursorColor="red"
      fontFamily="Lucida Console"
      fontSize="20px"
      text="Hello World!"
      textWrapperElementType="h1"
      typingSpeed="fast"
    />
  )
}

export default App
