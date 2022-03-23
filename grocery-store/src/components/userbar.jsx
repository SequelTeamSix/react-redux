import { useContext } from "react";
import { guestContext } from "../App";

export default function UserBar() {
	const [guest, setGuest] = useContext(guestContext);

	return (
		<h6>
			Logged in as {guest.username} under {guest.email}
		</h6>
	);
}
