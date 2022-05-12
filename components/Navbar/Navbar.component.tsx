const Navbar = () => {
  return (
    <>
      <div className="flex h-10 w-full">
        <div className="flex items-center gap-2 ">
          <div className="w-auto h-7">
            <img
              src="https://rb.gy/ulxxee"
              width={100}
              height={100}
              className="h-full w-full cursor-pointer object-contain"
            />
          </div>
          <div>Browse</div>
        </div>
        <div className="flex"></div>
      </div>
    </>
  )
}

export default Navbar
