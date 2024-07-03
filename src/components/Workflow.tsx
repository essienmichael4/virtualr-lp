import { CheckCircle } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow</span></h2>
        <div className="flex flex-wrap mt-10 rounded-lg justify-center bg-neutral-900">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="code" />
            </div>
            <div className="p-12 w-full lg:w-1/2">
                {checklistItems.map((item, i)=>{
                    return <div key={i} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center rounded-full items-center">
                            <CheckCircle />
                        </div>
                        <div>
                            <h5 className="mt-1 text-neutral-100 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Workflow
