import React from 'react';
import CheckIcon from '../svg/checkmarkSVG';
import XmarkIcon from '../svg/xmarkSVG';
import { events } from '../events/Events';

export const Details = () => {
   return (
    <div className="flex flex-grow flex-col items-center max-w-[1200px] min-h-100% bg-wood-pattern">
            <div className="flex flex-col items-center pt-40 w-full gap-10">
                <div className="flex flex-grow max-w-[1100px] w-full h-[100px] md:h-[700px] bg-white rounded-sm gap-1 md:gap-4 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)] group">
                    <div className="flex flex-col mb-1 md:mb-2">
                        <img className="w-28 md:w-96" src={ events[0].image } />
                        
                    </div>
                    <div className="flex flex-col md:flex-row flex-grow justify-end md:justify-normal gap-1 md:gap-4">
                        <div className="flex flex-col justify-end md:mb-5 ml-2">
                            ASDF
                        </div>
                        <div className="flex md:flex-grow justify-end items-end mr-3 md:mr-4 mb-1 md:mb-4 gap-2">
                            <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><CheckIcon /></button>
                            <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><XmarkIcon /></button>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
   )
}