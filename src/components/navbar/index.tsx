import { signInWithPopup, signOut } from "firebase/auth";
import styles from "./index.module.scss";
import { auth, googleProvider } from "../../configs/firebaseConfig";
import { useContext, useEffect } from "react";
import {
	UserContext,
	UserContextType,
	AuthUser,
} from "../../context/userContext";

const Navbar = () => {
	const { user, setUser, isLoggedIn, setIsLoggedIn } =
		useContext<UserContextType>(UserContext);

	const logInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			setIsLoggedIn(true);
			if (auth?.currentUser) {
				const userData: AuthUser = {
					displayName: auth.currentUser.displayName,
					email: auth.currentUser.email,
					id: auth.currentUser.uid,
				};
				setUser(userData);
				localStorage.setItem("user", JSON.stringify(userData) ?? "");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setIsLoggedIn(false);
			setUser(undefined);
			localStorage.setItem("user", "");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const storageData = localStorage.getItem("user");
		if (storageData) {
			const user: AuthUser = JSON.parse(storageData);
			if (!user.displayName) {
				setIsLoggedIn(false);
			} else {
				setIsLoggedIn(true);
				setUser(user);
			}
		}
	}, [user?.displayName, setUser, setIsLoggedIn, isLoggedIn]);

	return (
		<nav>
			<div className={styles.navContainer}>
				<h1 className={styles.heading}>User's Industry</h1>

				<div className={styles.authContainer}>
					{isLoggedIn ? (
						<div className={styles.logout}>
							<h4>{user?.displayName}</h4>
							<button onClick={logout}>Logout</button>
						</div>
					) : (
						<div className={styles.login}>
							{" "}
							<button onClick={logInWithGoogle}>Login</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
