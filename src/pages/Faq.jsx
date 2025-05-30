import { ContainerCol } from "../components/Container";
import Header from "../components/Header";
import faq from "../assets/data/faq/faq.json";
import { FaQ } from "react-icons/fa6";

export default function Faq() {
  return (
    <ContainerCol>
      <Header title="Pertanyaan Yang Sering Ditanyakan" />
      <div className="grid grid-cols-2 gap-7 mb-20">
        {faq.map((f, i) => (
          <CardFaq key={i} question={f.question} answer={f.answer} />
        ))}
      </div>
    </ContainerCol>
  );
}

function CardFaq({ question, answer }) {
  return (
    <div id="card-faq" className="max-w-full flex flex-col">
      <div className="bg-primary font-volkhov text-white p-4 text-xl rounded-lg w-fit">
        {question}
      </div>
      <div className="bg-white p-3 items-center py-8 shadow-lg gap-5 flex flex-row rounded-lg ml-25">
        <div className="text-secondary text-4xl">{">"}</div>
        {answer}
      </div>
    </div>
  );
}

function Answer(props) {
  return <div className="faq-answer">{props.a}</div>;
}
