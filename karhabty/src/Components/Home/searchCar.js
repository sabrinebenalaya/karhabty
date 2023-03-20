import React from "react";
import CustomButton from "../../Atom/Button";
import CustomInput from "../../Atom/Input";
import CustomSelect from "../../Atom/Select";
import { searchForm, inputStyle, buttonStyle } from "./../../Style/style";
import {
  BrandOptions,
  AdressOptions,
} from "../../Redux/constante";
import { useCar } from "./../../Hooks/useCar";
function SearchCar() {
  const { setSearchInput, searchInput, handleSubmit } = useCar();

  const HandelNewSearch = (e) => {
    setSearchInput({ ...searchInput, [e.target.name]: e.target.value });
    handleSubmit(searchInput)
  };
  return (
    <div>
      <div style={searchForm}>
          
          <CustomSelect
            titelFieald="The brand"
            option={BrandOptions}
            name="brand"
            handleChange={HandelNewSearch}
            style={inputStyle}
          />

          <CustomSelect
          titelFieald="Address"
          option={AdressOptions}
          name="adress"
          handleChange={HandelNewSearch}
          style={inputStyle}
        />
          
        
          <CustomInput
            titelFieald="Price"
            type="text"
            placeholder="Min"
            name="min"
            handleChange={HandelNewSearch}
            style={inputStyle}
          />
          <CustomInput
            type="text"
            placeholder="Max"
            name="max"
            handleChange={HandelNewSearch}
            style={inputStyle}
          />
        

        <CustomButton
          type="submit"
          variant="primary"
          handleClick={handleSubmit}
          style={buttonStyle}
          title="Filter"
        />
      </div>
  </div>
  );
}

export default SearchCar;
