/* eslint-disable no-unused-vars */
import { Each } from "./utility/Each";
import { products } from "./utility";

function App() {
  return (
    <div className="w-full flex flex-col gap-9 justify-center items-center max-w-screen-lg m-auto my-5">
      <div className="text-xl">Just copy and paste 😂</div>
      <div className="text-lg"><em>Each</em> used if you are too lazy to add a key</div>
      <div className="text-base">Example :</div>
      <ul className="flex flex-col gap-5" >
        <Each of={products} render={(item, index) => {
          return (
            <li className="rounded-xl w-fit border border-gray-300 p-4 flex flex-col gap-4">
              <span>{item?.brand}</span>
              <span>{item?.title}</span>
              <span>{item?.description}</span>
            </li>
          )
        }} />
      </ul>
    </div>
  )
}

export default App
