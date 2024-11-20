import FaqItem from './FAQItem';




const FAQ = () => {
  return (
    <div className="text-white shadow-white mx-auto p-10 shadow-lg">
      {FAQ_DATA.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export { FAQ };
