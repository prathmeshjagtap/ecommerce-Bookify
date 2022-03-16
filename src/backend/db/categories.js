import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "newReleases",
		description:
			"Discover the latest books including trending new book releases & best sellers",
	},
	{
		_id: uuid(),
		categoryName: "selfHelp",
		description:
			"From memoirs to mental decluttering guides, here is your go-to list of self-care literature, to help your mind, body and beliefs",
	},
	{
		_id: uuid(),
		categoryName: "fiction",
		description:
			"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
	},
	{
		_id: uuid(),
		categoryName: "childrenBooks",
		description:
			"The best children's books capture imaginations, foster a love of reading, and stay with readers long past childhood.",
	},
	{
		_id: uuid(),
		categoryName: "biographies",
		description:
			"A biography (from the Greek words bios meaning life, and graphos meaning write) is a non-fictional account of a person's life.",
	},
];
