// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];

      let newBase = returnRandBase();

      while (newBase === currentBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;

      return this.dna;
    },
    compareDNA(otherOrganism) {
      let identicalBases = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identicalBases++;
        }
      }

      const percentageIdentical = (identicalBases / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentageIdentical.toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive() {
      const countCG = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentageCG = (countCG / this.dna.length) * 100;
      
      return percentageCG >= 60;
    }
  };
};

const pAequorInstances = [];

for (let i = 1; i <= 30; i++) {
  const organism = pAequorFactory(i, mockUpStrand());
  
  while (!organism.willLikelySurvive()) {
    organism.mutate(); 
  }

  pAequorInstances.push(organism);
}

console.log('pAequor Instances:', pAequorInstances);




