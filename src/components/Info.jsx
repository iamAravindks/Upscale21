import InfoCard from "./info/InfoCard"
import { data } from "./info/data"

const Info = ({infoRef}) => {
    return (
      <div className='info-container' ref={infoRef}>
        {data.map((card) => (
          <InfoCard
            key={card.id}
            qstSrc={card.qstSrc}
            alt={card.alt}
            contentSrc={card.contentSrc}
            imgSrc={card.imgSrc}
            flexDirection={card.flexDirection}
            justifyContent={card.justifyContent}
            question={card.question}
            boldText={card.boldText}
            description={card.description}
          />
        ))}
      </div>
    );
}

export default Info
