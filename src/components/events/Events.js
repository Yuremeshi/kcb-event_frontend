import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailDialog } from '../modal/Details';
import CheckIcon from '../svg/checkmarkSVG';
import XmarkIcon from '../svg/xmarkSVG';
import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

const event1 = {"guid": 1, "name": "Church Picnic", "location": "Larz Anderson Park", "description": "Awesome Picnic", "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/65/7a/27/filename-temple-of-love.jpg", "startTime": {"year": "2024", "month": "May", "day": "6"}, "created": "May 20, 2024", "modified": "May 20, 2024", "deleted": "false"};

const event2 = {"guid": 2, "name": "Six Flags Trip", "location": "Six Flags New England", "description": "A trip to Six Flags", "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/VR_Coaster_Train_at_Six_Flags_New_England.jpg", "startTime": {"year": "2024", "month": "June", "day": "24"}, "created": "April 20, 2024", "modified": "April 20, 2024", "deleted": "false"};

export const events = [event1, event2];

export const Events = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState({
        id: '',
        name: '',
        location: '',
        description: '',
        image: '',
        startTime: ''
    });

    let [isOpen, setIsOpen] = useState(false)

    function closeDetailModal() {
        setIsOpen(false)
    }

    useEffect(() => {
        if ((selected.id !=='') && (selected.name !== '')) {
            setIsOpen(true)
        }
    },[selected]);

    function handleDetail() {

    }

    return (
        <div className="flex flex-grow flex-col items-center max-w-[1200px] bg-wood-pattern min-h-100% h-fit">
            <div className="flex flex-col items-center pt-40 w-full gap-10">
                {events && (events.length > 0) && events.map((event, index) =>
                    <div className="flex flex-grow max-w-[1100px] w-full h-[100px] md:h-[180px] bg-paper-pattern rounded-sm gap-1 md:gap-4 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)] hover:cursor-pointer group" onClick={() => setSelected({
                        id: event.guid,
                        name: event.name, 
                        location: event.location,
                        description: event.description,
                        image: event.image,
                        startTime: event.startTime
                    })}>
                        <div className="flex">
                            <img className="h-full w-28 md:w-64 md:opacity-60 group-hover:opacity-100" src={ event.image } />
                        </div>
                        <div className="flex flex-col justify-end mb-1 md:mb-2">
                            <div className="md:text-xl">
                                { event.startTime.year }
                            </div>
                            <div className="text-3xl md:text-7xl">
                                { event.startTime.day }
                            </div>
                            <div className="text-2xl md:text-4xl">
                                { event.startTime.month }
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flex-grow justify-end md:justify-normal gap-1 md:gap-4">
                            <div className="flex flex-col justify-end md:mb-5 ml-2">
                                <div className="md:text-4xl">
                                    { event.name }
                                </div>
                                <div className="text-xs md:text-base">
                                    Location: { event.location }
                                </div>
                                <div className="text-xs md:text-base">
                                    Description: { event.description}
                                </div>
                            </div>
                            <div className="flex md:flex-grow justify-end items-end mr-3 md:mr-4 mb-1 md:mb-4 gap-2">
                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><CheckIcon /></button>
                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><XmarkIcon /></button>
                            </div>
                        </div>
                    </div>
                )}
                <>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeDetailModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-4 text-center align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-3xl text-left font-medium leading-6 text-gray-900">
                                    Event Details
                                </Dialog.Title>
                                <div className="flex flex-col pt-5 w-full gap-10">
                                    <div className="flex flex-grow w-full bg-white rounded-sm gap-1 md:gap-4 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)] group">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col">
                                                <img className="w-28 md:w-96 rounded-sm" src={ selected.image } />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <div className="flex font-light text-4xl">
                                                    { selected.name }
                                                </div>
                                                <div>
                                                    Location: { selected.location }
                                                </div>
                                                <div>
                                                    Description: { selected.description }
                                                </div>
                                                <div>
                                                    Date: { selected.startTime.month } { selected.startTime.day }, { selected.startTime.year }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row flex-grow justify-end md:justify-normal gap-1 md:gap-4">
                                            <div className="flex md:flex-grow justify-end items-end gap-2">
                                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><CheckIcon /></button>
                                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center"><XmarkIcon /></button>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                </> 
            </div>
            <div className="min-h-[1300px]">Scroll Placeholder</div>
            <div>AHH</div>
            <div>Scroll Placeholder 2</div>
        </div>
    )
}