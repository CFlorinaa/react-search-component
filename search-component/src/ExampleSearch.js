import React, {useEffect, useState} from 'react';
import Search from "./Components/Search";
import {listOfNames} from "./mock-data/dummy-data";

const ExampleSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchFilterList, setSearchFilterList] = useState(listOfNames);

  useEffect(() => {
    const filteredList = listOfNames.filter(elem => elem.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchFilterList(filteredList);
  }, [searchValue]);

  const onSearch = (filterValue) => {
    setSearchValue(filterValue);
  }

  const removeSearch = () => {
    setSearchValue('');
  }

  return (
      <div className={"toolbar"}>
        <Search value={searchValue} onClick={onSearch} clearFunction={removeSearch}/>
        <ul>
          {searchFilterList.map(item => (
              <li key={item}>
                <div>{item}</div>
              </li>
          ))}
        </ul>
      </div>
  )
};

export default ExampleSearch;