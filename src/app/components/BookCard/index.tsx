import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarAlt, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import Button from "../Button";
import Calendar from "react-calendar";

function BookCard() {

    const [startDate, setStartDate] = useState<Date>(new Date())
    const [returnDate, setReturnDate] = useState<Date>(new Date())
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false)
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false)

    console.log("startDate : ", startDate)

    return (
        <div style={{boxShadow: "0 1px 5px -3px rgba(0,0,0,0.5)", minHeight: "4em"}}
             className={'flex gap-2 justify-center items-center rounded-md bg-white py-1 px-2 pl-4 md:py-2 md:px-4 md:pl-6'}>

            <div className={'flex relative items-center'}>
                <span className={'text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3'}>
                <FontAwesomeIcon icon={faCalendarAlt}/>
                </span>
                <span onClick={() => {
                    setIsStartCalendarOpen(!isStartCalendarOpen)
                    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false)
                }}
                      className={'text-xs text-gray-600 md:text-sm cursor-pointer select-none'}>
                    Pick Up Date
                </span>
                <span className={'text-gray-700 fill-current text-xs m-1'}>
                      <FontAwesomeIcon icon={isStartCalendarOpen ? faChevronUp : faChevronDown}/>
                </span>


                {isStartCalendarOpen &&
                <Calendar className={"absolute top-14 -left-0 md:-left-20 bg-red-500 max-w rounded border-red"} value={startDate}
                          onChange={(p: Date) => setStartDate(p)}/>}
            </div>

            {/*separator*/}
            <span style={{width: "2px", height: "50%"}} className={'bg-gray-300 mx-2 md:mx-5'}/>


            <div className={'flex mr-4 md:mr-6 relative items-center'}>
                <span className={'text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3'}>
                <FontAwesomeIcon icon={faCalendarAlt}/>
                </span>
                <span onClick={() => {
                    setIsReturnCalendarOpen(!isReturnCalendarOpen)
                    if (isStartCalendarOpen) setIsStartCalendarOpen(false)
                }}
                      className={'text-xs text-gray-600 md:text-sm cursor-pointer select-none'}>
                   Return Date
                </span>

                <span className={'text-gray-700 fill-current text-xs m-1'}>
                       <FontAwesomeIcon icon={isReturnCalendarOpen ? faChevronUp : faChevronDown}/>
                </span>

                {isReturnCalendarOpen &&
                <Calendar className={"absolute top-14 -right-36 bg-red-500 max-w"} value={returnDate}
                          onChange={(p: Date) => setReturnDate(p)}/>}
            </div>
            <Button text={"Book Your Ride"}/>
        </div>
    );
}

export default BookCard;