import homeShowSlides from "./home-show-slides";

export const paperData = [
  {
    id: 1,
    title: "nsectetur, adipisicinipsum dolor sit amet consectetur",
    author: ["M", "H", "D", "G", "X"],
    magazine: "Madipisicinipsum dolor sit am",
    year: 2013,
    url: "#",
  },
  {
    id: 2,
    title: "adipisicinipsum dolor sit am structures",
    author: ["M", "S", "S", "E K", "E"],
    magazine: "adipisicinipsum dolor",
    year: 2018,
    url: "#",
  },
  {
    id: 3,
    title: "adipisicinipsum dolor sit am graphene",
    author: ["M", "T"],
    magazine: "Phyadipisicinipsum dolor sit am9",
    year: 2019,
    url: "#",
  },
];

let year = 0;

for (let i = 0; i < paperData.length; i++) {
  if (paperData[i].year >= year) {
    year = paperData[i].year;
  }
}
export let homepagePaperData = [];
for (let i = 0; i < paperData.length; i++) {
  if (paperData[i].year === year) {
    homepagePaperData.push(paperData[i]);
  }
}
