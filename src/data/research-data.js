// the shortTitle is shown at the research nav bar, also it is used to scoll between the research component

// when add new data of research pay attention to which shorttitle it belongs to, if there is no shorttitle you need, add a new one
// and do not forget to update the navResearchData which at the bottom.
export const researchData = [
  {
    id: 1,
    shortTitle: "researchshorttitle1-NeuralNetwork",

    title: "researchtitle1",
    img: "img/img-2.jpeg",
    infor: "researchinfo1",
  },
  {
    id: 2,
    shortTitle: "researchshorttitle2-UncertaintyQuantification",
    title: "researchtitle2",
    img: "img/img-1.jpeg",
    infor: "researchinfo2",
  },
  {
    id: 3,
    shortTitle: "researchshorttitle3-MachineLearningMachineLearning",
    title: "researchtitle3",
    img: "img/img-3.jpeg",
    infor: "researchinfo3",
  },
  {
    id: 4,
    shortTitle: "researchshorttitle4-PotentialforGraphene",
    title: "researchtitle4",
    img: "img/img-2.jpeg",
    infor: "researchinfo4",
  },
];

export const navResearchData = [
  "researchshorttitle1-NeuralNetwork",
  "researchshorttitle2-UncertaintyQuantification",
  "researchshorttitle3-MachineLearningMachineLearning",
  "researchshorttitle4-PotentialforGraphene",
];
