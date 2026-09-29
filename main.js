/*
 *
 * saved here for archival
 * const links = document.getElementById("links");
const homePage = document.getElementById("main");
const aboutMePage = document.getElementById("about-me");

// we dont want anything else on the homepage
aboutMePage.hidden = true;

links.children[0].addEventListener("click", () => {
	homePage.hidden = false;
	aboutMePage.hidden = true;
});

links.children[1].addEventListener("click", () => {
	homePage.hidden = true;
	aboutMePage.hidden = false;
});
*/

const links = document.getElementById("links").children; // was today years old when i found this out

const pages = [
	document.getElementById("main"),
	document.getElementById("about-me"),
	document.getElementById("guestbook"),
	document.getElementById("blog")
];

for (let i = 1; i < links.length; i++) {
	pages[i].hidden = true;
}

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", (event) => {
		event.preventDefault(); // we don't want the a links to navigate away
		for (const page of pages) {
			page.hidden = true;
		}

		pages[i].hidden = false;
	});
};
