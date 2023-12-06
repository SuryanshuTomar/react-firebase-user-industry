import { optionsValues } from "../../form/utils";
import { UserData } from "../list";
import styles from "./index.module.scss";

interface UserProps {
	data: UserData;
}

const User = ({ data: user }: UserProps) => {
	const sectorsLabel = optionsValues
		.filter((option) => user.sectors.indexOf(option.value) !== -1)
		.map((option) => <span key={option.value}>{option.label}, </span>);

	return (
		<div className={styles.UserContainer}>
			<h4>Name: {user.name}</h4>
			Sectors : {sectorsLabel}
		</div>
	);
};
export default User;
