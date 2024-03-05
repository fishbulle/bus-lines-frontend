import { messages } from '../utils/messages';
import { BusCard } from './BusCard';

export function BusView() {
  const SL = import.meta.env.VITE_SL_API;

  return (
    <>
      <div className='container mt-5'>
        <h1>{messages.general.header}</h1>
        <h5>{messages.general.subHeader}</h5>
        <p className='fst-italic'>
          {messages.general.text} <a href={SL}>{messages.general.linkText}</a>
        </p>
        <BusCard />
      </div>
    </>
  );
}
