import { default as ReactCountdown } from 'react-countdown';
import type { CountdownProps } from "@typings/Countdown";


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    return <h3 className="center font-heading relative">Days / {days} | Hours / {hours} | Minutes / {minutes} | Seconds / {seconds}</h3>;
  }
};


const Countdown = ({ date, url }: CountdownProps) => {

  return (
    <a className='hover:text-purple-600' href={url ? url : "/"}><ReactCountdown date={date} renderer={renderer} /></a>
  )
}

export default Countdown