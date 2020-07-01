exports.plNormal = function() {
    let answers = [ "Tak", "Nie", "Może...", "Zdecydowanie nie!", "Nie wiem", "Chyba tak", "Chyba nie", "Możliwe", "Na pewno TAK!", "Na pewno nie", "Na pewno tak" ];
    let answer = answers[Math.floor(Math.random() * answers.length)];
    return answer;
}

exports.enNormal = function() {
    let answers = [ "Yes", "No", "Maybe ...", "Definitely not!", "I don't know", "I think so", "I think not", "Possible", "Certainly YES!", "Na certainly not","Definitely yes" ];
    let answer = answers[Math.floor(Math.random() * answers.length)];
    return answer;
}

exports.own = function(answers) {
    if (Array.isArray(answers)) {
    return answers[Math.floor(Math.random() * answers.length)];
    } else return console.log(TypeError(`Cannot get \`${answers}\` as an Array.`));
    
  }

