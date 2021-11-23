import imgOne from "../../assets/infoOne.svg";
import imgTwo from "../../assets/infoTwo.svg";
import imgThree from "../../assets/infoThree.svg";
import contentOne from "../../assets/contentOne.svg";
import contentTwo from "../../assets/contentTwo.svg";
import contentThree from "../../assets/contentThree.svg";
import qstOne from "../../assets/qstOne.svg";
import qstTwo from "../../assets/qstTwo.svg";
import qstThree from "../../assets/qstThree.svg";

export const data = [{
    id: 1,
    qstSrc: qstOne,
    contentSrc: contentOne,
    imgSrc: imgOne,
    alt: "why upscale",
    flexDirection: "row",
    justifyContent: "start",
    question: "Why",
    boldText: "Upscale?",
    description: `
    Are you someone who is dreaming to become an entrepreneur but don't know the basics of entrepreneurship?
If yes, then Upscale is the best solution! 
Upscale helps you develop your ideas from scratch to hatch with its outstanding webinars and competitive environment guided and mentored by the top most entrepreneurs.
    `,
  },
  {
    id: 2,
    qstSrc: qstTwo,
    contentSrc: contentTwo,
    imgSrc: imgTwo,
    alt: "who can participate",
    flexDirection: "row-reverse",
    justifyContent: "end",
    question: "Who can",
    boldText: "Participate?",
    description: `
    Any college students aiming to start an 
enterprise, dreaming of entrepreneurship 
can participate.
    `,
  },
  {
    id: 3,
    qstSrc: qstThree,
    contentSrc: contentThree,
    imgSrc: imgThree,
    alt: "what is upscale",
    flexDirection: "row",
    justifyContent: "start",
    question: "What is",
    boldText: "Upscale?",
    description: `
    Upscale is one of the flagship events of IEEE Student Branch GEC Palakkad, mainly focused on exposing the participants to multi faceted dimensions of entrepreneurship.
The event was officially flagged off in the year 2020, inaugurated by ....
The one week long virtual startup event chisels the participants on improving the skill sets and vision required to develop as an entrepreneur efficiently, ethically and professionally.
    `,
  },
];