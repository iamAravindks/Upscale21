import imgOne from "../../assets/infoOne.svg";
import imgTwo from "../../assets/infoTwo.svg";
import imgThree from "../../assets/infoThree.svg";
import contentOne from '../../assets/contentOne.svg'
import contentTwo from "../../assets/contentTwo.svg";
import contentThree from "../../assets/contentThree.svg";
import qstOne from "../../assets/qstOne.svg";
import qstTwo from "../../assets/qstTwo.svg";
import qstThree from "../../assets/qstThree.svg";

export const data = [
  {
    id: 1,
    qstSrc: qstOne,
    contentSrc: contentOne,
    imgSrc: imgOne,
    alt: "why upscale",
    flexDirection: "row",
    justifyContent: "start",
  },
  {
    id: 2,
    qstSrc: qstTwo,
    contentSrc: contentTwo,
    imgSrc: imgTwo,
    alt: "who can participate",
    flexDirection: "row-reverse",
    justifyContent: "end",
  },
  {
    id: 3,
    qstSrc: qstThree,
    contentSrc: contentThree,
    imgSrc: imgThree,
    alt: "what is upscale",
    flexDirection: "row",
    justifyContent: "start",
  },
];
