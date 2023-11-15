function studentsHogwarts() {
  var privateScore = 0;
  var name = null;
  const changeScoreBy = (points) => {
    privateScore += points;
  }
  return {
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: (x) => {
      for (let i = 0; i < x; i++) {
        changeScoreBy(1)
      }
    },
    penalizeStudents: (x) => {
      for (let i = 0; i < x; i++) {
        changeScoreBy(-1);
      }
    },
    getScore: () => {
      return name + ' ' + privateScore;
    }
  };
}

const Harry = new studentsHogwarts();
Harry.setName('Harry');
Harry.rewardStudent(4);
console.log(Harry.getScore());

const Draco = new studentsHogwarts();
Draco.setName('Draco');
Draco.rewardStudent(1);
Draco.penalizeStudents(3);
console.log(Draco.getScore());
