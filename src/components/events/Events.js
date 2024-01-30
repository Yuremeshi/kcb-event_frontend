import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailDialog } from '../modal/Details';
import CheckIcon from '../svg/checkmarkSVG';
import XmarkIcon from '../svg/xmarkSVG';
import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const event1 = {"guid": 1, "name": "Church Picnic", "location": "Larz Anderson Park", "description": "Picnic hosted by Young Married Couples Group that will take place at Larz Anderson Park.  Come join us for good food, fun and games!", "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/65/7a/27/filename-temple-of-love.jpg", "organization": "Young Married Couples Group", "total": 40, "going": 26, "notgoing": 14, "startTime": {"year": "2024", "month": "May", "day": "6", "starthour": "1:30 P.M. EDT", "endhour": "4:30 P.M. EDT"}, "created": "May 20, 2024", "modified": "May 20, 2024", "deleted": "false"};

const event2 = {"guid": 2, "name": "Six Flags Trip", "location": "Six Flags New England", "description": "A trip to Six Flags New England hosted by Young Adult Group 2.  Come join us for fun rides and overpriced theme park food.  The Harley Quinn ride is especially recommended!", "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/VR_Coaster_Train_at_Six_Flags_New_England.jpg", "organization": "Young Adult Group 2", "total": 23, "going": 12, "notgoing": 11, "startTime": {"year": "2024", "month": "June", "day": "24", "starthour": "8:00 A.M. EDT", "endhour": "9:00 P.M. EDT"}, "created": "April 20, 2024", "modified": "April 20, 2024", "deleted": "false"};

export const events = [event1, event2];

export const Events = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState({
        id: '',
        name: '',
        location: '',
        description: '',
        image: '',
        startTime: '',
        organization: '',
        total: '',
        going: '',
        notgoing: ''
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

    function voteSubmitYes() {
        alert("Voted Go");
    }

    function voteSubmitNo() {
        alert("Voted Not");
    }

    return (
        <div className="flex flex-grow flex-col items-center max-w-[1200px] bg-wood-pattern min-h-100% h-fit">
            <div className="flex flex-col items-center pt-40 w-full gap-10">
                {events && (events.length > 0) && events.map((event, index) =>
                    <div className="flex flex-grow max-w-[1100px] w-full h-[100px] md:h-[180px] bg-paper-pattern rounded-sm gap-1 md:gap-4 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)] hover:cursor-pointer group" onClick={(e) => setSelected({
                        id: event.guid,
                        name: event.name, 
                        location: event.location,
                        description: event.description,
                        image: event.image,
                        startTime: event.startTime,
                        organization: event.organization,
                        total: event.total,
                        going: event.going,
                        notgoing: event.notgoing
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
                                    Organization: { event.organization }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <Bar
                                        data={{
                                            labels: ["Going", "Not Going"],
                                            datasets: [
                                                {
                                                    
                                                    data: [event.going, event.notgoing],
                                                    backgroundColor: ["blue", "red"]
                                                }
                                            ]
                                        }}
                                        option={{
                                            title:{
                                                display: false,
                                                text:'Going',
                                                fontSize:12
                                            }
                                        }}
                                    />
                                </div>
                                <div className="flex md:flex-grow justify-end items-end mr-3 md:mr-4 mb-1 md:mb-4 gap-2">
                                    <button className="button flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center" onClick={(e) => {e.stopPropagation(); voteSubmitYes();}}><CheckIcon /></button>
                                    <button className="button flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center" onClick={(e) => {e.stopPropagation(); voteSubmitNo();}}><XmarkIcon /></button>
                                </div>
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
                                <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-10 text-center align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-3xl text-left font-medium leading-6 text-gray-900">
                                    Event Details
                                </Dialog.Title>
                                <div className="flex flex-col pt-5 w-full gap-10">
                                    <div className="flex flex-grow w-full bg-white rounded-sm gap-1 md:gap-4 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)] group">
                                        <div className="flex gap-10">
                                            <div className="flex flex-col">
                                                <img className="w-28 md:w-96 rounded-sm" src={ selected.image } />
                                            </div>
                                            <div className="flex flex-col items-start gap-4">
                                                <div className="flex font-light text-4xl">
                                                    { selected.name }
                                                </div>
                                                <div className="flex flex-col items-start ml-4 gap-2">
                                                    <div className="flex gap-5 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                                                        <div className="flex flex-col items-start">
                                                            <div className="font-semibold text-sm">
                                                                Organization
                                                            </div> 
                                                            <div>
                                                                { selected.organization }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-6 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512" className="ml-[4px]"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                                        <div className="flex flex-col items-start">
                                                            <div className="font-semibold text-sm">
                                                                Location
                                                            </div> 
                                                            <div>
                                                                { selected.location }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-6 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className="ml-[2px]"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
                                                        <div className="flex flex-col items-start">
                                                            <div className="font-semibold text-sm">
                                                                Begins
                                                            </div> 
                                                            <div>
                                                                { selected.startTime.month } { selected.startTime.day }, { selected.startTime.year } { selected.startTime.starthour }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-6 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className="ml-[2px]"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
                                                        <div className="flex flex-col items-start">
                                                            <div className="font-semibold text-sm">
                                                                Ends
                                                            </div> 
                                                            <div>
                                                                { selected.startTime.month } { selected.startTime.day }, { selected.startTime.year } { selected.startTime.endhour }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-7 items-center w-10/12">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="6" viewBox="0 0 192 512" className="ml-[6px]"><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
                                                        <div className="flex flex-col items-start">
                                                            <div className="font-semibold text-sm">
                                                                Description
                                                            </div> 
                                                            <div className="text-left">
                                                                { selected.description }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row flex-grow justify-end md:justify-normal gap-1 md:gap-4">
                                            <div className="flex md:flex-grow justify-end items-end gap-2">
                                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center" onClick={() => voteSubmitYes()}><CheckIcon /></button>
                                                <button className="flex border-2 border-sky-400 bg-sky-200 hover:bg-sky-400 p-1 md:p-2 rounded-lg w-8 md:w-12 h-8 md:h-12 justify-center items-center" onClick={() => voteSubmitNo()}><XmarkIcon /></button>
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