import InfoCard from "./info/InfoCard"
import { data } from "./info/data"

const Info = () => {
    return (
      <div className='info-container'>
        {data.map((card) => (
          <InfoCard
            key={card.id}
            qstSrc={card.qstSrc}
            alt={card.alt}
            contentSrc={card.contentSrc}
            imgSrc={card.imgSrc}
            flexDirection={card.flexDirection}
            justifyContent={card.justifyContent}
          />
        ))}
      </div>
    );
}

export default Info
