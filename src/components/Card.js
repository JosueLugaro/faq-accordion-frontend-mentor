import Header from "./Header";
import Accordion from "./Accordion";
import useFAQS from "../hooks/useFAQS";

const Card = ({ header }) => {
  const FAQS = useFAQS()

  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl">
      <Header text="FAQs"/>
      <div className="mt-6">
        {
          FAQS.map(({ title, content }, index) => {
            return (
              <>
                {index > 0 && <hr className="my-6"/>}
                <Accordion
                  title={title}
                  content={content}
                  key={index}
                />
              </>
            );
          })
        }
      </div>
    </div>
  )
}

export default Card;
