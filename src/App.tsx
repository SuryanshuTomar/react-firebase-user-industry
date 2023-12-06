import Navbar from "./components/navbar";
import styles from "./App.module.scss";
import Form from "./components/form";
import UsersList from "./components/users/list";

const App = () => {
	return (
		<div className={styles.appContainer}>
			<Navbar />
			<Form />
			<UsersList />
		</div>
	);
};
export default App;
