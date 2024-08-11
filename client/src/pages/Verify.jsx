import { useState } from "react"

const Verify = () => {
    const [otp, setOtp] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("OTP submitted: ", otp);
    }

  return (
    <>
        <div className="flex justify-center items-center h-screen" >
        <form className="p-6 bg-white rounded shadow-md w-full md:w-[500px]" onSubmit={submitHandler} >
          <h1 className="text-2xl mb-4">Verify</h1>
          <div className="mb-4" >
            <label className="block text-gray-700 mb-2" htmlFor="otp">OTP</label>
            <input  type={'number'} id="email"  className="border rounded w-full p-2 px-3 text-gray-700 outline-none focus:ring-2 focus:border-blue-500"  required
                onChange={(e)=> setOtp(e.target.value)} value={otp} />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"  >Submit</button>
        </form>
    </div>
    </>
  )
}

export default Verify