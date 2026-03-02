import { useState } from "react"


function App() {
  const [color, setColor] = useState("#E3DBBB")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#FF7070")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#FF7070"}}
          >Red</button>
          <button
          onClick={() => setColor("#66D0BC")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#66D0BC"}}
          >Green</button>
          <button
          onClick={() => setColor("#0AC4E0")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#0AC4E0"}}
          >Blue</button>
          <button
          onClick={() => setColor("#FF88BA")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#FF88BA"}}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App