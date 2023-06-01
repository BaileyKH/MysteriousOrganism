// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory = (specimanNum, dna) => {
    return {
      specimanNum,
      dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna
    },
    compareDNA(otherOrg) {
        const similarities = this.dna.reduce((acc, curr, idx, arr) => {
            if (arr[inx] === otherOrg.dna[idx]) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
        const percentOfDNAShared = (similarities / this.dna.length) * 100;
        const percentageTo2Dec = percentOfDNAShared.toFixed(2);
        console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Dec}% of DNA in common!`);
    },
  },