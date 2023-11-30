import React from 'react';

const event1 = {"guid": 1, "name": "Picnic", "location": "Park", "description": "Awesome Picnic", "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/65/7a/27/filename-temple-of-love.jpg", "startTime": "June 6, 2024", "created": "May 20, 2024", "modified": "May 20, 2024", "deleted": "false"};

const event2 = {"guid": 2, "name": "Six Flags", "location": "Six Flags Theme Park", "description": "Six Flags Trip", "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/VR_Coaster_Train_at_Six_Flags_New_England.jpg", "startTime": "June 24, 2024", "created": "April 20, 2024", "modified": "April 20, 2024", "deleted": "false"};

const events = [event1, event2];

export const Events = () => {
    return (
        <div className="flex flex-grow flex-col items-center max-w-[1200px] bg-wood-pattern border-x-[1px] border-x-amber-800 min-h-100% h-fit">
            <div className="flex flex-col items-center pt-40 w-full gap-10">
                {events && (events.length > 0) && events.map((event, index) =>
                    <div className="flex flex-grow max-w-[1100px] w-full h-[180px] bg-paper-pattern rounded-sm">
                        <div className="flex items-end">
                            { event.startTime }
                        </div>
                        <div>
                            { event.name }
                        </div>
                        <div>
                            { event.location }
                        </div>
                        <div>
                            { event.description}
                        </div>
                        <div className="flex flex-grow justify-end">
                            <img className="h-full w-64 opacity-60 hover:opacity-100 hover:cursor-pointer" src={ event.image } />
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