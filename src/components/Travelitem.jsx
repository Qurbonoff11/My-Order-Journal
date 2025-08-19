import { IoClose } from "react-icons/io5";

const TravelItem = ({
  name,
  country,
  date,
  description,
  status,
  isSelected,
  onSelect,
  onDelete,
  onStatusChange,
}) => {
  const changeStatusColor = (status) => {
    switch (status) {
      case "Wishlist":
        return "badge-wishlist";
        break;
      case "Planned":
        return "badge-planned";
        break;
      case "Visited":
        return "badge-visited";
        break;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="destination">
        <div className="destination-top">
          <div className="destination-info">
            <input
              className="checkbox"
              type="checkbox"
              onChange={onSelect}
              checked={isSelected}
            />
            <div>
              <h3 className="destination-name">{name}</h3>
              <p className="destination-country">{country}</p>
              <p className="destination-date">{date}</p>
            </div>
          </div>
          <button className="delete-btn" onClick={onDelete}>
            <IoClose />
          </button>
        </div>
        <p className="destination-description">{description}</p>
        <div className="destination-bottom">
          <span className={`badge ${changeStatusColor(status)}`}>{status}</span>

          <select
            className="status-select"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option>Wishlist</option>
            <option>Visited</option>
            <option>Planned</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TravelItem;
