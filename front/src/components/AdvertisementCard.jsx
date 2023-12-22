import css from './Advertisements.module.css'

export default function AdvertisementCard({ data }) {
  return (
    <div className={css.card}>
      <div className={css.card_img}>
        <img src={data.img} alt={data.make} />
      </div>
      <h2 className={css.header}>
        {data.make} <span className={css.headerAccent}>{data.model}</span>, {data.year}
      </h2>
      <div>
        <p className={css.ad_descr}>{data.address} | {data.rentalCompany} | {data.type} | {data.functionalities[0]}</p>
      </div>
    </div>
  );
}
