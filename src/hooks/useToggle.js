import { useState, useCallback } from "react";

const useToggle = (initialBool = false) => {
	const [bool, setBool] = useState(initialBool);

	const toggle = useCallback(() => {
		setBool((oldBool) => !oldBool);
	}, []);

	return [bool, toggle];
};

export default useToggle;
