import './App.css'

function App() {

  return (
    <>
    <button className='my-custom-button'>
  Button
</button>
<button className='btn bg-indigo-600 text-white '>Button</button>
<details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
    </>
  )
}

export default App
