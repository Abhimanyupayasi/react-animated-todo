import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion"


const Card = ({reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale :1.2}} dragElastic={0.2} className='w-60 ml-5 overflow-hidden h-72 rounded-[40px] bg-sky-900 relative bg-zinc-900/90 '>
           <IoDocumentTextOutline className='text-white text-lg ml-4 mt-4' />
           <div className='py-2 mt-4 text-center'>
            <h4 className='text-white'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</h4>
           </div>
           <div className='text-white flex justify-between absolute bottom-0 w-full h-10  content-center px-6 mt-4 py-2 mb-9'>
            <h4>0.5mb</h4>
            <MdDownloadForOffline className='text-xl' />
           </div>
           <div className='w-full p-2 text-white bg-yellow-800 text-center absolute bottom-0'>
            <h4>Download</h4>
           </div>
        </motion.div>
    );
}

export default Card;
