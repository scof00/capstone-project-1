import { useEffect, useState } from "react";
import { getRarities } from "../../services/rarityservice";
import "./filter.css";
import { getTags } from "../../services/tagsService";

export const Filters = ({
  setSearchTerm,
  setItemFilter,
  searchTerm,
  itemFilter,
  setTagFilter
}) => {
  const [rarities, setRarities] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getRarities().then((raritiesArray) => setRarities(raritiesArray));
  }, []);
  useEffect(() => {
    getTags().then((array) => setTags(array));
  }, []);

  return (
    <div className="item-display">
      <div className="filters">
        <select
          className="rarity-filter"
          onChange={(event) => {
            return setItemFilter(parseInt(event.target.value));
          }}
        >
          <option value="0">Sort by Rarity</option>
          {rarities.map((rarity) => {
            return (
              <option key={rarity.id} value={rarity.id}>
                {rarity.name}
              </option>
            );
          })}
        </select>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
          type="text"
          placeholder="Search Items"
          className="item-search"
        />
        <select className="rarity-filter"
        onChange={(event) => {
          return setTagFilter(parseInt(event.target.value))
        }}
        >
          <option value="0">Sort by Tag</option>
          {tags.map((tag) => {
            return(
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  );
};
