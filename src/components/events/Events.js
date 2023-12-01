import React from 'react';
import CheckIcon from '../svg/checkmarkSVG';
import XmarkIcon from '../svg/xmarkSVG';

const event1 = {"guid": 1, "name": "Church Picnic", "location": "Larz Anderson Park", "description": "Awesome Picnic", "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/65/7a/27/filename-temple-of-love.jpg", "startTime": {"year": "2024", "month": "May", "day": "6"}, "created": "May 20, 2024", "modified": "May 20, 2024", "deleted": "false"};

const event2 = {"guid": 2, "name": "Six Flags Trip", "location": "Six Flags New England", "description": "A trip to Six Flags", "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/VR_Coaster_Train_at_Six_Flags_New_England.jpg", "startTime": {"year": "2024", "month": "June", "day": "24"}, "created": "April 20, 2024", "modified": "April 20, 2024", "deleted": "false"};

const events = [event1, event2];

export const Events = () => {
    return (
        <div className="flex flex-grow flex-col items-center max-w-[1200px] bg-wood-pattern border-x-[1px] border-x-amber-800 min-h-100% h-fit">
            <div className="flex flex-col items-center pt-40 w-full gap-10">
                {events && (events.length > 0) && events.map((event, index) =>
                    <div className="flex flex-grow max-w-[1100px] w-full h-[180px] bg-paper-pattern rounded-sm gap-4">
                        <div className="flex">
                            <img className="h-full w-64 opacity-60 hover:opacity-100 hover:cursor-pointer" src={ event.image } />
                        </div>
                        <div className="flex flex-col justify-end mb-2">
                            <div className="text-xl">
                                { event.startTime.year }
                            </div>
                            <div className="text-7xl">
                                { event.startTime.day }
                            </div>
                            <div className="text-4xl">
                                { event.startTime.month }
                            </div>
                        </div>
                        <div className="flex flex-col justify-end mb-5 ml-2">
                            <div className="text-4xl">
                                { event.name }
                            </div>
                            <div>
                                Location: { event.location }
                            </div>
                            <div>
                                Description: { event.description}
                            </div>
                        </div>
                        <div className="flex flex-grow justify-end items-end mr-4 mb-4 gap-2">
                            <button className="border-2 bg-sky-200 p-2 rounded-lg"><CheckIcon /></button>
                            <button className="border-2 bg-sky-200 p-2 rounded-lg"><XmarkIcon /></button>
                        </div>
                    </div>
                )}
            </div>
            <div className="min-h-[1300px]">Scroll Placeholder</div>
            <div>AHH</div>
            <div>Scroll Placeholder 2</div>
        </div>
    )
}