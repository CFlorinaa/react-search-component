import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../styles/search.scss';

const propTypes = {
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
    onChange: PropTypes.func,
    placeHolderMessage: PropTypes.string,
    clearFunction: PropTypes.func
};


const defaultProps = {
    isVisible: true
};

const Search = (props) => {
    const {onClick, isVisible, onChange, placeHolderMessage, value, clearFunction, clearButtonTitle} = props;
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        value && setInputValue(value);
        !showSearchInput && value && setShowSearchInput(!showSearchInput);
    }, [value]);

    useEffect(() => {
        showSearchInput && document.getElementById("ci_search") && document.getElementById("ci_search").focus();
        showSearchInput && value && setInputValue(value);
    }, [showSearchInput]);

    const onEnterPressed = (event) => {
        if (event.key === "Enter") {
            onClick(inputValue);
        }
    };

    const toggleShowSearchInput = () => {
        inputValue === '' && setShowSearchInput(!showSearchInput);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange && onChange(inputValue);
    };

    const closeHandler = () => {
        setInputValue('');
        clearFunction && clearFunction();
        document.getElementById("ci_search").focus();
    };

    const doSearch = () => {
        onClick(inputValue);
    };

    return (
        isVisible && (showSearchInput ?
            (<div className={"common-search-box"}>
                <input
                    type="text"
                    id="ci_search"
                    className="search-text-input"
                    title={inputValue || placeHolderMessage}
                    placeholder={placeHolderMessage}
                    value={inputValue}
                    onBlur={toggleShowSearchInput}
                    onKeyPress={onEnterPressed}
                    onChange={handleChange}
                    maxLength={150}
                />
                <div className={"search-buttons-box"}>
                    {inputValue && <button className={"search-close-btn"} title={clearButtonTitle} onClick={closeHandler}>
                        <img className={"icon"} src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"/></button>}
                    <button id="search-focus-btn" className={"search-icon-btn"} title={placeHolderMessage} onClick={doSearch}>
                        <img className={"icon"} src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/></button>
                </div>
            </div>)
            :
            (<button id="search-toolbar-button" className={"search-icon-btn"} title={placeHolderMessage} onClick={toggleShowSearchInput}>
                <img className={"icon"} src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/></button>))
    )
};


Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
