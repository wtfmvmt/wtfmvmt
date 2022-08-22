import { default as ReactCountdown } from 'react-countdown';



const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    return <h1 className="center font-heading relative">Days / {days} | Hours / {hours} | Minutes / {minutes} | Seconds / {seconds}</h1>;
  }
};


const Countdown = ({date}) => {

  return (
    <ReactCountdown  date={date} renderer={renderer} />
  )
}

export default Countdown