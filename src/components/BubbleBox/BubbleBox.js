import './_BubbleBox.scss';
import BigBubble from '../BigBubble/BigBubble';

const BubbleBox = () => {
  return (
    <div className="bubble-box">
      <section className='banner'>Banner</section>
      Bubble Box!
      <BigBubble /> 
    </div>
  );
}

export default BubbleBox;
