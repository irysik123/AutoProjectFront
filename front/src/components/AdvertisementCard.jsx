import css from './Advertisements.module.css'
import { Link } from 'react-router-dom';

export default function AdvertisementCard({ data }) {
  return (
    <div className={css.card}>
      <div className={css.card_img}>
        <img src='https://www.linearity.io/blog/content/images/size/w1576/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png' alt={data.make} />
      </div>
      <h2 className={css.header}>
        {data.make} <span className={css.headerAccent}>{data.model}</span>, {data.year}
      </h2>
      <div>
        <p className={css.ad_descr}>{data.address} | {data.rentalCompany} | {data.type} | {data.functionalities[0]}</p>
      </div>
      <div>
        <Link to={`/advertisement/${data._id}`}>Load more</Link>
      </div>
    </div>
  );
}
