import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardData {
  id: number;
  title: string;
  summary: string;
  details: string;
  imageUrl: string;
}

const card1 = "networking.svg";
const card3 = "child.svg";
const card4 = "you.svg";
const card2 = "brain.svg";

const cardData: CardData[] = [
  {
    id: 1,
    title:
      "How many 'hops' until you reach President Xi Jinping from ByteDance?",
    imageUrl: card1,
    summary: "Hint: Less than 5 hops",
    details:
      "2 'hops' is all it takes! Perhaps even less when you consider he instituted the agencies between him and ByteDance....yikes! +100 social credit points if you said more than 2 hops!",
  },
  {
    id: 2,
    title:
      "Yes or no, Douyin is just trying to not infringe on freedoms outside of China?",
    imageUrl: card2,
    summary: "Hint: Watch your words!",
    details:
      "There is no wrong answer here, we were only asking your opinion on this issue, but if you answered yes.... +10000000000000000000000000 social credit to you!",
  },
  {
    id: 3,
    title: "On average, how many minutes a day does a child spend on Douyin?",
    imageUrl: card3,
    summary: "Hint: 30 mins < X < 60 mins",
    details:
      "40 minutes MAX! After that, the child is locked out until the next day. Oh! and all the content is educational during those 40 minutes. +300 social credit points if you got it!",
  },
  {
    id: 4,
    title: "Why is Douyin's long format video feature so popular in China?",
    imageUrl: card4,
    summary: "Hint: Supply and demand!",
    details:
      "YouTube is BANNED in China, although many people break the law and use VPNs to access it anyway. +500 social credit points if you got it and don't use VPNs to access YouTube!",
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
    <div className="container py-3 my-2 align-items-center">
      <div className="row justify-content-center">
        {cardData.map((card) => {
          const isExpanded = expandedIds.includes(card.id);
          return (
            <div
              key={card.id}
              className="col-12 col-md-6 col-lg-4 mb-5 align-content-center"
            >
              <div className="card bg-secondary text-white shadow">
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
