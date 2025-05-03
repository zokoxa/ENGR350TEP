import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardData {
  id: number;
  title: string;
  summary: string;
  details: string;
  imageUrl: string;
}

const card1 = "../public/networking.svg";
const card2 = "https://zokoxa.github.io/ENGR350TEP/public/child.svg";
const card3 = "https://zokoxa.github.io/ENGR350TEP/public/you.svg";

const cardData: CardData[] = [
  {
    id: 1,
    title: "How many hops until you reach President Xi Jinping from ByteDance?",
    imageUrl: card1,
    summary: "Hint: Less than 5 hops",
    details:
      "2 hops is all it takes! Perhaps even less when you consider he instituted the agencies between him and ByteDance. +100 social credit points if you got it!",
  },
  {
    id: 2,
    title: "How many minutes a day does a child spend on Douyin on average?",
    imageUrl: card2,
    summary: "Hint: More than 30 minutes, less than 1 hour",
    details:
      "40 minutes MAX! After that, the child is locked out until the next day. Oh! and all the content is educational during those 40 minutes. +300 social credit points if you got it!",
  },
  {
    id: 3,
    title: "Why is Douyin's long format video feature so popular?",
    imageUrl: card3,
    summary: "Hint: Supply and demand!",
    details:
      "YouTube is BANNED in China, although many people break the law and use VPNs to access it anyway. Imagine going to jail for watching a YouTube video! +500 social credit points if you got it!",
  },
];

const ExpandableCards: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="container py-3 my-2">
      <div className="row">
        {cardData.map((card) => {
          const isExpanded = expandedIds.includes(card.id);
          return (
            <div
              key={card.id}
              className="col-12 col-md-6 col-lg-4 mb-5 align-content-center"
            >
              <div className="card bg-secondary text-white">
                <div className="card-header bg-dark border-0 d-flex align-items-center">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="me-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <span>{card.title}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-light">{card.summary}</p>
                  {isExpanded && (
                    <div className="mt-2">
                      <p className="card-text text-light">{card.details}</p>
                    </div>
                  )}
                  <button
                    className="btn btn-outline-light mt-auto"
                    onClick={() => toggleExpand(card.id)}
                  >
                    {isExpanded ? "Hide" : "Show Answer"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableCards;
