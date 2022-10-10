// @ts-nocheck
import "../../../styles/CardWeather.scss";

function CardsWeather({ data }) {
    return (
        <section className="card">
            <div className="wrapper">
                <div className="card__block__flex">
                    {data &&
                        data.list.map((item) => (
                            <div className="card__block__container card__block" key={item.dt}>
                                <h3 className="card__block__title">
                                    {item.dt_txt.slice(5, 10).split("-").reverse().join("-")}
                                </h3>
                                <span className="card__block__date">
                                    {item.dt_txt.slice(10, 16)}
                                </span>
                                {/* <img
                                        src={imgDesc(item.weather[0].description)}
                                        alt=""
                                        className="card__block__icon"
                                    /> */}
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt="weather-icon"
                                    className="card__block__icon"
                                />
                                <span className="card__block__temperature__day">
                                    {Math.ceil(Number(item.main.temp))}°
                                </span>
                                <span className="card__block__temperature__night gray-text">
                                    {Math.ceil(Number(item.main.temp_min))}°
                                </span>
                                <span className="card__block__state__weather gray-text">
                                    {item.weather[0].description}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default CardsWeather;
