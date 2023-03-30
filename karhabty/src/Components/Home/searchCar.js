import React from "react";
import CustomButton from "../../Atom/Button";
import CustomInput from "../../Atom/Input";
import CustomSelect from "../../Atom/Select";
import { searchForm, atomStyle } from "./../../Style/style";
import { BrandOptions, AdressOptions } from "../../Redux/constante";
import { useCar } from "./../../Hooks/useCar";
function SearchCar() {
  const { setSearchInput, searchInput, handleSubmit } = useCar();

  const HandelNewSearch = (e) => {
    setSearchInput({ ...searchInput, [e.target.name]: e.target.value });
    handleSubmit(searchInput);
  };

  return (
    <div>
      <div style={searchForm}>
        <CustomSelect
          option={BrandOptions}
          name="brand"
          handleChange={HandelNewSearch}
          style={atomStyle}
        />

        <CustomSelect
          option={AdressOptions}
          name="adress"
          handleChange={HandelNewSearch}
          style={atomStyle}
        />

        <CustomInput
          titelFieald="Price"
          type="text"
          placeholder="Min"
          name="min"
          handleChange={HandelNewSearch}
          style={atomStyle}
        />
        <CustomInput
          type="text"
          placeholder="Max"
          name="max"
          handleChange={HandelNewSearch}
          style={atomStyle}
        />

        <CustomButton
          type="submit"
          handleClick={handleSubmit}
          style={atomStyle}
          title="Filter"
          variant="contained"
        />
      </div>
    </div>
  );
}

export default SearchCar;
