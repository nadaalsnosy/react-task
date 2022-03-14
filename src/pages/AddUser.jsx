import { useContext } from "react";
import AddNewUser from "../components/AddNewUser";
import { UsersContext } from "../modules/UsersModule";

const AddUserPage = () => {
	const { addUser } = useContext(UsersContext);

	return <AddNewUser addUser={addUser} />;
};

export default AddUserPage;
