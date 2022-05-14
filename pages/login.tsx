// Compoennts
import Head from 'next/head'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="relative h-screen w-screen ">
          <Image
            src="https://rb.gy/p2hphi"
            layout="fill"
            className="-z-10 opacity-60"
            objectFit="cover"
          />
        </div>
        <div className="shadow-lg">
          <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute top-0 mx-4 mt-40 rounded bg-black bg-opacity-60 p-4 md:p-8">
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <form className="py-6 md:py-7" onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded bg-[#333333] px-4 py-3 text-gray-300 placeholder-[gray] outline-none focus:bg-[#454545] md:py-4"
                    {...register("email",{ required: true })}/>
                    {errors.email && <p className='text-red-600 text-sm font-light w-full md:pr-60 pr-44'>Please enter a valid Email</p>}
                </label>
                <label>
                  <input
                    type="password"
                    placeholder="password"
                    className="mt-2 md:mt-3  w-full rounded-md bg-[#333333] px-4 py-3 text-gray-300 placeholder-[gray] outline-none focus:bg-[#454545] md:py-4"
                    {...register("password",{ required: true })}/>
                    {errors.password && <p className='text-red-600 text-sm font-light w-full md:pr-60 pr-32'>Please Enter the correct Password</p>}
                </label>
                <div className="flex justify-center">
                  <button className="mt-6 w-2/3 rounded-md bg-[#E50914] py-2 font-semibold md:mt-7">
                    Sign In
                  </button>
                </div>
                <div className="mt-3 text-center md:mt-4">
                  <span className="text-[gray]">New to Netflix? </span>
                  <button className="hover:underline">Sign Up Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
