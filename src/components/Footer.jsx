const Footer = () => {
  return (
    <section id='Footer' className='flex flex-row py-16 w-full justify-between px-32 text bg-[#f6f3ec]'>
      <div className='flex flex-col mx-4'>
        <p className='font-bold mb-2'>Kraftr</p>
        <p className='text-xs'>Making a better future, one step at a time</p>
      </div>
      <div className='flex flex-col mx-4'>
        <p className='font-bold mb-2'>Products</p>
        <a className='text-sm'>Kraftr Blues</a>
        <a className='text-sm'>Kraftr Reds</a>
        <a className='text-sm'>Kraftr Yellows</a>
        <a className='text-sm'>Kraftr Greens</a>
      </div>
      <div className='flex flex-col mx-4'>
        <p className='font-bold mb-2'>Useful Links</p>
        <a className='text-sm'>Who we are</a>
        <a className='text-sm'>What we do</a>
        <a className='text-sm'>About</a>
      </div>
      <div className='flex flex-col mx-4 w-56'>
        <p className='font-bold mb-2'>Contact</p>
        <p className='text-sm'>AB4, Manipal Institute of Technology, Manipal - 576104</p>
        <p className='text-sm'>contact@kraftrlyfstyle.com</p>
        <p className='text-sm'>+919829023976</p>
        <p className='text-sm'>+918273036616</p>
      </div>
  </section>
  )
}

export default Footer