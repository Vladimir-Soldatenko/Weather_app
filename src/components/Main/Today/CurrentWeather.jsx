// @ts-nocheck

import { getWeather } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { BallTriangle } from "react-loader-spinner";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";
import CardsWeather from "../Cards/CardsWeather";
import { useImage } from "../../../hooks/useImage";
import "../../../styles/Today.scss";
import Error from "../../Error";

function TodayWeather() {
    const { cityName: city } = useContext(AppContext);
    const { data, isLoading, isSuccess, isError, error } = useQuery(
        ["weather", city],
        () => getWeather(city)
    );

    const changeImage = useImage();

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    const firstLetterToUppercase = (word) => {
        let res = word.charAt(0).toUpperCase() + word.slice(1);
        return res;
    };

    return (
        <>
            {isLoading ? (
                <BallTriangle
                    className="loader"
                    height={150}
                    width={150}
                    color="#4793ff"
                />
            ) : isSuccess ? (
                <>
                    <section className="today__weather">
                        <div className="wrapper">
                            <div className="today__weather__container">
                                <div className="today__weather__block  city__weather">
                                    <span className="city__weather__temperature">
                                        {Math.ceil(Number(data.list[0].main.temp))} °
                                    </span>
                                    <p className="city__weather__today">Сегодня</p>
                                    <img
                                        className="city__weather__icon"
                                        src={changeImage(data.list[0].weather[0].description)}
                                        alt=""
                                    />
                                    <p className="city__weather__time grey-color">
                                        Время: {`${hour} : ${minutes}`}
                                    </p>
                                    <p className="city__weather__name grey-color">
                                        Город: {data.city.name}
                                    </p>
                                </div>
                                <div className="today__weather__block weather__info">
                                    <img
                                        src="./images/day_info/cloud.png"
                                        alt=""
                                        className="weather__info__background"
                                    />
                                    <div className="weather__info__container">
                                        <div className="weather__info__container__img">
                                            <img
                                                src="./images/day_info/thermometer.svg"
                                                alt=""
                                                className="img "
                                            />
                                        </div>
                                        <span className="weather__info__title">Температура</span>
                                        <p className="weather__info__description">
                                            {Math.ceil(Number(data.list[0].main.temp))} ° - ощущается
                                            как {Math.ceil(Number(data.list[0].main.feels_like))} °
                                        </p>
                                    </div>
                                    <div className="weather__info__container">
                                        <div className="weather__info__container__img">
                                            <img
                                                src="./images/day_info/humidity.svg"
                                                alt=""
                                                className="img"
                                            />
                                        </div>
                                        <span className="weather__info__title">Давление </span>
                                        <p className="weather__info__description">
                                            {data.list[0].main.pressure} мм ртутного столба{" "}
                                        </p>
                                    </div>
                                    <div className="weather__info__container">
                                        <div className="weather__info__container__img">
                                            <img
                                                src="./images/day_info/evaporator.svg"
                                                alt=""
                                                className="img"
                                            />
                                        </div>
                                        <span className="weather__info__title">Описание</span>
                                        <p className="weather__info__description">
                                            {firstLetterToUppercase(
                                                data.list[0].weather[0].description
                                            )}
                                        </p>
                                    </div>
                                    <div className="weather__info__container ">
                                        <div className="weather__info__container__img">
                                            <img
                                                src="./images/day_info/wind.svg"
                                                alt=""
                                                className="img"
                                            />
                                        </div>
                                        <span className="weather__info__title">Ветер</span>
                                        <p className="weather__info__description">
                                            {Math.ceil(Number(data.list[0].wind.speed))} м/с{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CardsWeather data={data} />
                </>
            ) : isError ? (
                <Error error={error} />
            ) : null}
        </>
    );
}

export default TodayWeather;
