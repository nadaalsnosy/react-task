import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = (props) => {
  const { name, i, id } = props;

  return (
    <tr>
      <td className="align-middle">{i}</td>
      <td className="d-flex justify-content-between align-items-center px-4 py-2">
        {name}
        <div>
          <Link to={`/users/${id}`}>
            <button className="btn btn-primary">More Details</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
};

User.defaultProps = {
  name: "ANONYMOUS USER",
  email: "anonymous@gmail.com",
  phone: "01234567890",
  address: {
    city: "cairo",
    street: "naser.st",
    suite: "10",
  },
};

export default User;
