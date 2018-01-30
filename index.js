const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(() => this.time++, 1000);
  }
};

const censor = (word, string) => {
    debugger
    string.replace(RegExp(word, 'g'), 'BLEEP')
}

const violenceCensor = censor.bind(null, 'violence')

const drugsCensor = censor.bind(null, 'drugs')