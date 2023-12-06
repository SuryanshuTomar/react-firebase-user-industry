import { Fragment } from "react";
import { SelectOptions } from "./utils";

interface MultiSelectOptionsProps {
	options: SelectOptions[];
}

const MultiSelectOptions = ({ options }: MultiSelectOptionsProps) => {
	return options.map((option) => (
		<Fragment key={option.value}>
			<option
				value={option.value}
				style={{ marginLeft: `${option.level * 25}px` }}
			>
				{option.label}
			</option>
		</Fragment>
	));
};

export default MultiSelectOptions;
