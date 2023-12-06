import { useState, useContext, useEffect } from "react";
import { object, string, literal, array, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext, UserContextType } from "../../context/userContext";
import { optionsValues } from "./utils";
import MultiSelectOptions from "./multiSelectOptions";

import styles from "./index.module.scss";
import { database } from "../../configs/firebaseConfig";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { UserData } from "../users/list";

const formObjectSchema = object({
	name: string().trim().min(1, "Name is required"),
	sectors: array(string()).min(1, "Sectors is/are required"),
	termsAgreed: literal(true, {
		errorMap: () => ({ message: "You must accept Terms and Conditions" }),
	}),
});

export type FormInput = TypeOf<typeof formObjectSchema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		formState: { errors },
	} = useForm<FormInput>({
		resolver: zodResolver(formObjectSchema),
	});

	const { user, allUsersData, setAllUsersData, isLoggedIn } =
		useContext<UserContextType>(UserContext);
	const [saveError, setSaveError] = useState("");
	const [currentUserData, setCurrentUserData] = useState<UserData>();
	const [currentUserDocumentId, setCurrentUserDocumentId] = useState("");

	// Users Collection Reference
	const usersCollectionRef = collection(database, "users");

	// Specify the field and value to match
	const field = "uid";
	const value = user?.id ?? "";

	// Watch the 'sectors' field for changes
	const selectedOptions = optionsValues
		.filter((option) => watch("sectors", []).indexOf(option.value) !== -1)
		.map((option) => [option.value, option.label]);

	const onSubmit = async (values: FormInput) => {
		try {
			if (!isLoggedIn) {
				setSaveError(
					"Log in to the application first in order to save your data."
				);
				return;
			}

			if (currentUserData?.uid === user?.id) {
				const updatedValues = { ...values, uid: user?.id ?? "" };
				const userDoc = doc(database, "users", currentUserDocumentId);
				await updateDoc(userDoc, updatedValues);

				// Optimistic update for the new record of user.
				if (allUsersData !== undefined) {
					const updatedAllUsersData = allUsersData.map((user) => {
						if (user.uid === currentUserData?.uid) {
							return updatedValues;
						} else return user;
					});
					setAllUsersData(updatedAllUsersData);
				}
			} else {
				const updatedValues = { ...values, uid: user?.id ?? "" };
				await addDoc(usersCollectionRef, updatedValues);

				// Optimistic update for the new record of user.
				if (allUsersData !== undefined) {
					const updatedAllUsersData = [
						...allUsersData,
						{ ...updatedValues },
					];
					setAllUsersData(updatedAllUsersData);
				}
			}
		} catch (error: unknown) {
			const message = "Error Occured " + (error as Error).message;
			setSaveError(message);
		} finally {
			reset();
		}
	};

	useEffect(() => {
		const getCurrentUserData = async () => {
			// Create a query to find the document with the specified condition
			const q = query(usersCollectionRef, where(field, "==", value));

			try {
				// Execute the query and await the result
				const querySnapshot = await getDocs(q);

				querySnapshot.forEach((doc) => {
					// Here, 'doc.id' is the document ID
					const documentId = doc.id;
					setCurrentUserDocumentId(documentId);

					// Access other data if needed
					const userData = doc.data() as UserData;
					setCurrentUserData(userData);
				});
			} catch (error) {
				console.error("Error getting documents:", error);
			}
		};
		getCurrentUserData();
	}, [user?.id, value, setValue]);

	useEffect(() => {
		// Fill the form with the user's data
		if (currentUserData && isLoggedIn) {
			Object.entries(currentUserData).forEach(([key, value]) => {
				setValue(key as keyof FormInput, value);
			});
		}
	}, [isLoggedIn, currentUserData, setValue]);

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<h1 className={styles.formHeading}>
				{" "}
				Please enter your name and pick the Sectors you are currently
				involved in.
			</h1>

			<div className={styles.inputContainer}>
				<label htmlFor="name">Name :</label>
				<input
					type="text"
					id="name"
					aria-label="name"
					placeholder="Enter your name"
					{...register("name")}
				/>
				<p style={{ color: "orange", fontSize: "1rem" }}>
					{errors.name?.message?.toString()}
				</p>
				<hr />

				<label htmlFor="sectors">Sectors :</label>
				<select
					id="sectors"
					aria-label="sectors"
					size={5}
					{...register("sectors")}
					multiple
				>
					<MultiSelectOptions options={optionsValues} />
				</select>
				<p style={{ color: "orange", fontSize: "1rem" }}>
					{errors.sectors?.message}
				</p>

				<p>
					Selected :
					{selectedOptions.map((current) => (
						<span key={current[0]}>{current[1]}, </span>
					))}
				</p>

				<hr />

				<div className={styles.termsContainer}>
					<input
						type="checkbox"
						id="terms"
						aria-label="agree to terms"
						{...register("termsAgreed")}
					/>
					<label htmlFor="terms">Agree to terms</label>
					<p style={{ color: "orange", fontSize: "1rem" }}>
						{errors.termsAgreed?.message}
					</p>
				</div>

				<button>Save</button>
			</div>
			<p className={styles.error}>
				<strong>{saveError}</strong>
			</p>
		</form>
	);
};

export default Form;
