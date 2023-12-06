import { useState, createContext, ReactNode } from "react";
import { UserData } from "../components/users/list";

export type AuthUser = {
	displayName: string | null;
	email: string | null;
	id: string;
};

export type UserContextType = {
	user?: AuthUser;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | undefined>>;
	allUsersData?: UserData[];
	setAllUsersData: React.Dispatch<
		React.SetStateAction<UserData[] | undefined>
	>;
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext: UserContextType = {
	user: undefined,
	setUser: () => undefined,
	allUsersData: undefined,
	setAllUsersData: () => undefined,
	isLoggedIn: false,
	setIsLoggedIn: () => undefined,
};

export const UserContext = createContext<UserContextType>(initialContext);
const UserProvider = UserContext.Provider;

export const UserProviderComp: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<AuthUser>();
	const [allUsersData, setAllUsersData] = useState<UserData[]>();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const userContextValue: UserContextType = {
		user,
		setUser,
		allUsersData,
		setAllUsersData,
		isLoggedIn,
		setIsLoggedIn,
	};

	return <UserProvider value={userContextValue}>{children}</UserProvider>;
};
