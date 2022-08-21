import { default as ReactCountdown } from 'react-countdown';



const renderer = ({  days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <></>;
  } else {
    return <h1 className="center font-heading relative">Days / {days} Hours[{hours}]:Minutes[{minutes}]:Seconds[{seconds}]</h1>;
  }
};


const Countdown = () => {

  return (
    <ReactCountdown date={'2022-09-01T01:09:00'} renderer={renderer} />
  )
}

export default Countdown