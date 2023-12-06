import { useEffect, useContext } from "react";
import styles from "./index.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../configs/firebaseConfig";
import { FormInput } from "../../form";
import User from "../user";
import { UserContext, UserContextType } from "../../../context/userContext";

export type UserData = FormInput & { uid: string };

const UsersList = () => {
	const { allUsersData, setAllUsersData } =
		useContext<UserContextType>(UserContext);

	// Users Collection Reference
	const usersCollectionRef = collection(database, "users");

	useEffect(() => {
		const getAllUsersData = async () => {
			try {
				// Read the users data from database.
				const responseData = await getDocs(usersCollectionRef);
				const filteredUsers: UserData[] = responseData.docs.map((doc) => ({
					...(doc.data() as UserData),
				}));

				// Set the users list.
				setAllUsersData(filteredUsers);
			} catch (error) {
				console.error(error);
			}
		};

		getAllUsersData();
	}, []);

	return (
		<div className={styles.usersContainer}>
			<h2 className={styles.usersHeading}>All Users Industry Data</h2>
			<div className={styles.usersListContainer}>
				{allUsersData?.map((user) => (
					<User key={user.uid} data={user} />
				))}
			</div>
		</div>
	);
};
export default UsersList;
