import { Header } from "./components/header"
import { InputForm } from "./components/input-form"

function App() {
  return (
    <>
      <Header />
      <main className="grid gap-y-10 place-items-center p-5 max-w-5xl mx-auto">
        <InputForm />
      </main>
    </>
  )
}

export default App
