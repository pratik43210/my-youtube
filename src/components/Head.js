import React from 'react'

const Head = () => {
  return (
    <>
    <div className='grid grid-flow-col bg-white items-center justify-between py-2 pr-2 sticky'>
      <div className='grid grid-flow-col col-span-4 items-center justify-start'>
        <img alt="menu"
         src="https://static.thenounproject.com/png/4763089-200.png"
         className='col-span-4 max-h-[40px] rounded-full hover:bg-gray-200'
        />
        <img alt="youtube-logo"
         src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
         className='max-h-[22px] col-span-8 px-2'
        />
      </div>
      <div className='grid grid-flow-col col-span-6 items-center'>
        <input type="text" className='col-span-10 bg-transparent  h-[100%] min-w-[20%] rounded-l-full border-slate-300 border'/>
        <button className='flex justify-center items-center  h-[100%] col-span-1 hover:bg-gray-200 bg-gray-100 p-1 rounded-r-full border-slate-300 border'>
          <img alt="search-icon"
           src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
           className='max-h-[20px]'
          />
        </button>
        <img alt="voice-search"
        className='max-h-[40px] p-2 ml-2 h-fit rounded-full hover:bg-gray-200 col-span-1'
         src="https://static.thenounproject.com/png/4892753-200.png"
        />
      </div>
      <div className='min-w-fit grid grid-flow-col col-span-3 items-center justify-end'>
        <img alt="settings-icon"
         src="https://cdn.iconscout.com/icon/free/png-256/free-dots-three-vertical-3603412-3003408.png"
         className='h-[30px] w-max col-span-2'
        />
        <button className='grid grid-flow-col col-span-9 sm:text-base text-[2.5vw] text-blue-800 hover:bg-teal-100 bg- items-center border border-slate-300 h-[35px] px-2 rounded-full'>
        <img alt="user-icon"
           src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-bleu.png"
           className='min-w-max mr-1 max-h-[22px]'
        /><div className=' min-w-max'>Sign In</div></button>
      </div>
    </div>
    </>
  )
}

export default Head