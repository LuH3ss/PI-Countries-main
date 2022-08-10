import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountries,
  getByContinent,
  getOrdered,
  getByPopulation,
  getByActivity,
  getActivity,
  getByMorePop,
} from "../../redux/actions/index.js";
import CountryCard from "../country/countryCard";
import Paginator from "../paginado/Paginator.jsx";
import SearchBar from "../SearchBar/searchBar.jsx";
import "./countries.css";

export default function Countries() {
  const continents = [
    "South America",
    "Asia",
    "Africa",
    "Europe",
    "Oceania",
    "North America",
  ];

  const dispatch = useDispatch(); //acceso a dispatch function del store
  const allCountries = useSelector((state) => state.countries); //ahora tengo acceso a un estado global(que viene del store) en este componente local
  const allActivities = useSelector((state) => state.activities);

  const [page, setPage] = useState(1); //en qué pag estoy

  const handleOrdered = (e) => {
    dispatch(getOrdered(e.target.value));
    setIndexFirstCountry(0);
    setIndexLastCountry(nineCountries);
  };

  const handleContinent = (e) => {
    setIndexFirstCountry(0);
    setIndexLastCountry(nineCountries);

    dispatch(getByContinent(e.target.value));
  };

  const handlePoblation = (e) => {
    dispatch(getByPopulation(e.target.value));
    setIndexFirstCountry(0);
    setIndexLastCountry(nineCountries);
  };

  const handleByAct = (e) => {
    dispatch(getByActivity(e.target.value));
    setIndexFirstCountry(0);
    setIndexLastCountry(nineCountries);
  };

  useEffect(() => {
    dispatch(getAllCountries()); // este dispatch está aca por la razon de que queremos que se dispache al cargar el componente

    dispatch(getActivity());
  }, [dispatch]); //asi  digo q se actualice 1 sola vez

  const nineCountries = 9; //cant de paises en primera pag
  const tenCountries = 10; //can de paises en el resto de las pags

  const [indexFirstCountry, setIndexFirstCountry] = useState(0);
  const [indexLastCountry, setIndexLastCountry] = useState(nineCountries);

  const countriesAtPage = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  ); //countrys a renderizar

  const paginator = (e) => {
    setPage(e.target.value);
    setIndexFirstCountry(page === 1 ? 0 : tenCountries * (page - 1) - 1);
    setIndexLastCountry(page === 1 ? nineCountries : tenCountries * page - 1);
  };

  const handleButtonPop = () => {
    dispatch(getByMorePop());
    setIndexFirstCountry(0);
    setIndexLastCountry(nineCountries);
  };

  return (
    <div className="countries_countainer">
      <div className="countries_paginator">
        <Paginator
          allCountries={allCountries.length}
          paginator={paginator}
          nineCountries={nineCountries}
          tenCountries={tenCountries}
        />
      </div>
      <SearchBar />
      <div className="countries_filters">
        <select onChange={handleOrdered} className="filter">
          <option value="ascendente">Orden Ascendente</option>
          <option value="descendente">Orden Descendente</option>
        </select>
        <select className="filter" onChange={handleByAct}>
          <option value="Todos">Todos los paises</option>
          {allActivities?.map((act) => {
            return (
              <option value={act.name} key={act.id}>
                Con {act.name}
              </option>
            );
          })}
        </select>
        <select className="filter" onChange={handleContinent}>
          <option value="Todos">Todos los Continentes</option>
          {continents.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
        <select className="filter" onChange={handlePoblation}>
          <option value="Todos">Ordenenado por población</option>
          <option value="less_population">Por menor población</option>
          <option value="more_population">Por mayor población</option>
        </select>
      </div>
      <div className="countries_cards">
        {countriesAtPage.map(({ id, name, flags, continents, population }) => {
          return (
            <CountryCard
              key={id}
              id={id}
              name={name}
              flags={flags}
              continent={continents}
              population={population}
            />
          );
        })}
      </div>
    </div>
  );
}
