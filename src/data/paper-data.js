import homeShowSlides from "./home-show-slides";

export const paperData = [
  {
    id: 1,
    title:
      "Uniaxial ratcheting behavior of Zircaloy-4 tubes at room temperature",
    author: ["M Wen", "H Li", "D Yu", "G Chen", "X Chen"],
    magazine: "Materials & Design 46, 426-434",
    year: 2013,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0261306912007479",
  },
  {
    id: 2,
    title:
      "Dihedral-angle-corrected registry-dependent interlayer potential for multilayer graphene structures",
    author: ["M Wen", "S Carr", "S Fang", "E Kaxiras", "EB Tadmor"],
    magazine: "Physical Review B 98 (23), 235404",
    year: 2018,
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.235404",
  },
  {
    id: 3,
    title: "Hybrid neural network potential for multilayer graphene",
    author: ["M Wen", "EB Tadmor"],
    magazine: "Physical Review B 100 (19), 195419",
    year: 2019,
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.195419",
  },
  {
    id: 4,
    title: "Interpolation effects in tabulated interatomic potentials",
    author: ["M Wen", "SM Whalen", "RS Elliott", "EB Tadmor"],
    magazine:
      "Modelling and Simulation in Materials Science and Engineering 23 (7), 074008",
    year: 2015,
    url: "https://iopscience.iop.org/article/10.1088/0965-0393/23/7/074008/meta",
  },
  {
    id: 5,
    title:
      "A force-matching Stillinger-Weber potential for MoS2: Parameterization and Fisher information theory based sensitivity analysis",
    author: [
      "M Wen",
      "SN Shirodkar",
      "P Plecháč",
      "E Kaxiras",
      "RS Elliott",
      "EB Tadmor",
    ],
    magazine: "Journal of Applied Physics 122 (24), 244301",
    year: 2017,
    url: "https://aip.scitation.org/doi/abs/10.1063/1.5007842",
  },
  {
    id: 6,
    title:
      "BonDNet: a graph neural network for the prediction of bond dissociation energies for charged molecules",
    author: [
      "M Wen",
      "SM Blau",
      "EWC Spotte-Smith",
      "S Dwaraknath",
      "KA Persson",
    ],
    magazine: "Chemical Science 12 (5), 1858-1868",
    year: 2020,
    url: "https://pubs.rsc.org/en/content/articlehtml/2021/sc/d0sc05251e",
  },
  {
    id: 7,
    title:
      "A KIM-compliant potfit for fitting sloppy interatomic potentials: application to the EDIP model for silicon",
    author: [
      "M Wen",
      "J Li",
      "P Brommer",
      "RS Elliott",
      "JP Sethna",
      "EB Tadmor",
    ],
    magazine:
      "Modelling and Simulation in Materials Science and Engineering 25 (1), 014001",
    year: 2016,
    url: "https://iopscience.iop.org/article/10.1088/0965-0393/25/1/014001/meta",
  },
  {
    id: 8,
    title:
      "Constitutive modeling for the anisotropic uniaxial ratcheting behavior of Zircaloy-4 alloy at room temperature",
    author: ["H Li", "M Wen", "G Chen", "W Yu", "X Chen"],
    magazine: "Physical Review B 98 (23), 235404",
    year: 2013,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0022311513008775",
  },
  {
    id: 9,
    title:
      "Uncertainty quantification in molecular simulations with dropout neural network potentials",
    author: ["M Wen", "EB Tadmor"],
    magazine: "npj Computational Materials 6 (1), 124",
    year: 2020,
    url: "https://www.nature.com/articles/s41524-020-00390-8",
  },
  {
    id: 10,
    title:
      "Development of Interatomic Potentials with Uncertainty Quantification: Applications to Two-dimensional Materials",
    author: ["M Wen"],
    magazine: "Physical Review B 98 (23), 235404",
    year: 2019,
    url: "https://www.proquest.com/openview/f690c6d91d65c00c4bbc29120205bbcc/1?pq-origsite=gscholar&cbl=18750&diss=y",
  },
  {
    id: 11,
    title:
      "Quantum Chemical Calculations of Lithium-Ion Battery Electrolyte and Interphase Species",
    author: [
      "Evan Walter Clark Spotte-Smith",
      "Samuel Blau, Xiaowei Xie",
      "Hetal Patel",
      "Mingjian Wen",
      "Brandon Wood",
      "Shyam Dwaraknath",
      "Kristin Persson",
    ],
    magazine: "Physical Review B 98 (23), 235404",
    year: 2021,
    url: "https://chemrxiv.org/engage/chemrxiv/article-details/60c75976f96a000565288fff",
  },
  {
    id: 12,
    title:
      "KLIFF: A framework to develop analytic and machine learning interatomic potentials",
    author: ["M Wen", "Y Afshar", "RS Elliott", "EB Tadmor"],
    magazine: "Physical Review B 98 (23), 235404",
    year: 2021,
    url: "https://arxiv.org/abs/2108.03523",
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
