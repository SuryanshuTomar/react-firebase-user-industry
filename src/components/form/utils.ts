// export type SelectOptions = {
// 	value: string;
// 	label: string;
// 	children?: SelectOptions[];
// };

// export const optionsValues: SelectOptions[] = [
// 	{ value: "1", label: "Manufacturing" },
// 	{
// 		value: "19",
// 		label: "Construction materials",
// 		children: [
// 			{ value: "18", label: "Electronics and Optics" },
// 			{
// 				value: "6",
// 				label: "Food and Beverage",
// 				children: [
// 					{ value: "342", label: "Bakery & confectionery products" },
// 					{ value: "43", label: "Beverages" },
// 					{ value: "42", label: "Fish & fish products" },
// 					{ value: "40", label: "Meat & meat products" },
// 					{ value: "39", label: "Milk & dairy products" },
// 					{ value: "437", label: "Other" },
// 					{ value: "378", label: "Sweets & snack food" },
// 				],
// 			},
// 			{
// 				value: "13",
// 				label: "Furniture",
// 				children: [
// 					{ value: "389", label: "Bathroom/sauna" },
// 					{ value: "385", label: "Bedroom" },
// 					{ value: "390", label: "Children’s room" },
// 					{ value: "98", label: "Kitchen" },
// 					{ value: "101", label: "Living room" },
// 					{ value: "392", label: "Office" },
// 					{ value: "394", label: "Other (Furniture)" },
// 					{ value: "341", label: "Outdoor" },
// 					{ value: "99", label: "Project furniture" },
// 				],
// 			},
// 			{
// 				value: "12",
// 				label: "Machinery",
// 				children: [
// 					{ value: "94", label: "Machinery components" },
// 					{ value: "91", label: "Machinery equipment/tools" },
// 					{ value: "224", label: "Manufacture of machinery" },
// 					{
// 						value: "97",
// 						label: "Maritime",
// 						children: [
// 							{ value: "271", label: "Aluminium and steel workboats" },
// 							{ value: "269", label: "Boat/Yacht building" },
// 							{ value: "230", label: "Ship repair and conversion" },
// 						],
// 					},
// 					{
// 						value: "93",
// 						label: "Metal structures",
// 						children: [
// 							{ value: "508", label: "Other" },
// 							{ value: "227", label: "Repair and maintenance service" },
// 						],
// 					},
// 					{
// 						value: "11",
// 						label: "Metalworking",
// 						children: [
// 							{ value: "67", label: "Construction of metal structures" },
// 							{ value: "263", label: "Houses and buildings" },
// 							{ value: "267", label: "Metal products" },
// 							{
// 								value: "542",
// 								label: "Metal works",
// 								children: [
// 									{ value: "75", label: "CNC-machining" },
// 									{ value: "62", label: "Forgings, Fasteners" },
// 									{ value: "69", label: "Gas, Plasma, Laser cutting" },
// 									{ value: "66", label: "MIG, TIG, Aluminum welding" },
// 								],
// 							},
// 						],
// 					},
// 					{
// 						value: "9",
// 						label: "Plastic and Rubber",
// 						children: [
// 							{ value: "54", label: "Packaging" },
// 							{ value: "556", label: "Plastic goods" },
// 							{
// 								value: "559",
// 								label: "Plastic processing technology",
// 								children: [
// 									{ value: "55", label: "Blowing" },
// 									{ value: "57", label: "Moulding" },
// 									{
// 										value: "53",
// 										label: "Plastics welding and processing",
// 									},
// 									{ value: "560", label: "Plastic profiles" },
// 								],
// 							},
// 						],
// 					},
// 					{
// 						value: "5",
// 						label: "Printing",
// 						children: [
// 							{ value: "148", label: "Advertising" },
// 							{ value: "150", label: "Book/Periodicals printing" },
// 							{
// 								value: "145",
// 								label: "Labelling and packaging printing",
// 							},
// 						],
// 					},
// 					{
// 						value: "7",
// 						label: "Textile and Clothing",
// 						children: [
// 							{ value: "44", label: "Clothing" },
// 							{ value: "45", label: "Textile" },
// 						],
// 					},
// 					{
// 						value: "8",
// 						label: "Wood",
// 						children: [
// 							{ value: "337", label: "Other (Wood)" },
// 							{ value: "51", label: "Wooden building materials" },
// 							{ value: "47", label: "Wooden houses" },
// 						],
// 					},
// 					{
// 						value: "3",
// 						label: "Other",
// 						children: [
// 							{ value: "37", label: "Creative industries" },
// 							{ value: "29", label: "Energy technology" },
// 							{ value: "33", label: "Environment" },
// 						],
// 					},
// 					{
// 						value: "2",
// 						label: "Service",
// 						children: [
// 							{ value: "25", label: "Business services" },
// 							{ value: "35", label: "Engineering" },
// 							{
// 								value: "28",
// 								label: "Information Technology and Telecommunications",
// 								children: [
// 									{
// 										value: "581",
// 										label: "Data processing, Web portals, E-marketing",
// 									},
// 									{ value: "576", label: "Programming, Consultancy" },
// 									{ value: "121", label: "Software, Hardware" },
// 									{ value: "122", label: "Telecommunications" },
// 								],
// 							},
// 							{
// 								value: "22",
// 								label: "Tourism",
// 								children: [
// 									{ value: "141", label: "Translation services" },
// 								],
// 							},
// 							{
// 								value: "21",
// 								label: "Transport and Logistics",
// 								children: [
// 									{ value: "111", label: "Air" },
// 									{ value: "114", label: "Rail" },
// 									{ value: "112", label: "Road" },
// 									{ value: "113", label: "Water" },
// 								],
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{ value: "3", label: "Other" },
// ];


export type SelectOptions = {
	value: string;
	label: string;
	level: number; // New property indicating the nesting level
};

export const optionsValues: SelectOptions[] = [
	{ value: "1", label: "Manufacturing", level: 0 },
	{ value: "19", label: "Construction materials", level: 0 },
	{ value: "18", label: "Electronics and Optics", level: 1 },
	{ value: "6", label: "Food and Beverage", level: 1 },
	{ value: "342", label: "Bakery & confectionery products", level: 2 },
	{ value: "43", label: "Beverages", level: 2 },
	{ value: "42", label: "Fish & fish products", level: 2 },
	{ value: "40", label: "Meat & meat products", level: 2 },
	{ value: "39", label: "Milk & dairy products", level: 2 },
	{ value: "437", label: "Other", level: 2 },
	{ value: "378", label: "Sweets & snack food", level: 2 },
	{ value: "13", label: "Furniture", level: 1 },
	{ value: "389", label: "Bathroom/sauna", level: 2 },
	{ value: "385", label: "Bedroom", level: 2 },
	{ value: "390", label: "Children’s room", level: 2 },
	{ value: "98", label: "Kitchen", level: 2 },
	{ value: "101", label: "Living room", level: 2 },
	{ value: "392", label: "Office", level: 2 },
	{ value: "394", label: "Other (Furniture)", level: 2 },
	{ value: "341", label: "Outdoor", level: 2 },
	{ value: "99", label: "Project furniture", level: 2 },
	{ value: "12", label: "Machinery", level: 1 },
	{ value: "94", label: "Machinery components", level: 2 },
	{ value: "91", label: "Machinery equipment/tools", level: 2 },
	{ value: "224", label: "Manufacture of machinery", level: 2 },
	{ value: "97", label: "Maritime", level: 2 },
	{ value: "271", label: "Aluminium and steel workboats", level: 3 },
	{ value: "269", label: "Boat/Yacht building", level: 3 },
	{ value: "230", label: "Ship repair and conversion", level: 3 },
	{ value: "93", label: "Metal structures", level: 2 },
	{ value: "508", label: "Other", level: 2 },
	{ value: "227", label: "Repair and maintenance service", level: 2 },
	{ value: "11", label: "Metalworking", level: 1 },
	{ value: "67", label: "Construction of metal structures", level: 2 },
	{ value: "263", label: "Houses and buildings", level: 2 },
	{ value: "267", label: "Metal products", level: 2 },
	{ value: "542", label: "Metal works", level: 2 },
	{ value: "75", label: "CNC-machining", level: 3 },
	{ value: "62", label: "Forgings, Fasteners", level: 3 },
	{ value: "69", label: "Gas, Plasma, Laser cutting", level: 3 },
	{ value: "66", label: "MIG, TIG, Aluminum welding", level: 3 },
	{ value: "9", label: "Plastic and Rubber", level: 1 },
	{ value: "54", label: "Packaging", level: 2 },
	{ value: "556", label: "Plastic goods", level: 2 },
	{ value: "559", label: "Plastic processing technology", level: 2 },
	{ value: "55", label: "Blowing", level: 3 },
	{ value: "57", label: "Moulding", level: 3 },
	{ value: "53", label: "Plastics welding and processing", level: 3 },
	{ value: "560", label: "Plastic profiles", level: 2 },
	{ value: "5", label: "Printing", level: 1 },
	{ value: "148", label: "Advertising", level: 2 },
	{ value: "150", label: "Book/Periodicals printing", level: 2 },
	{ value: "145", label: "Labelling and packaging printing", level: 2 },
	{ value: "7", label: "Textile and Clothing", level: 1 },
	{ value: "44", label: "Clothing", level: 2 },
	{ value: "45", label: "Textile", level: 2 },
	{ value: "8", label: "Wood", level: 1 },
	{ value: "337", label: "Other (Wood)", level: 2 },
	{ value: "51", label: "Wooden building materials", level: 2 },
	{ value: "47", label: "Wooden houses", level: 2 },
	{ value: "3", label: "Other", level: 0 },
	{ value: "37", label: "Creative industries", level: 1 },
	{ value: "29", label: "Energy technology", level: 1 },
	{ value: "33", label: "Environment", level: 1 },
	{ value: "2", label: "Service", level: 0 },
	{ value: "25", label: "Business services", level: 1 },
	{ value: "35", label: "Engineering", level: 1 },
	{
		value: "28",
		label: "Information Technology and Telecommunications",
		level: 1,
	},
	{
		value: "581",
		label: "Data processing, Web portals, E-marketing",
		level: 2,
	},
	{ value: "576", label: "Programming, Consultancy", level: 2 },
	{ value: "121", label: "Software, Hardware", level: 2 },
	{ value: "122", label: "Telecommunications", level: 2 },
	{ value: "22", label: "Tourism", level: 1 },
	{ value: "141", label: "Translation services", level: 2 },
	{ value: "21", label: "Transport and Logistics", level: 1 },
	{ value: "111", label: "Air", level: 2 },
	{ value: "114", label: "Rail", level: 2 },
	{ value: "112", label: "Road", level: 2 },
	{ value: "113", label: "Water", level: 2 },
];
