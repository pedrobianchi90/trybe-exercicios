let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log(player.name);
console.log(player.lastName);
console.log(player.age);
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' ' + 'anos de idade')
console.log('A jogadora ' + player.name + ' ' + 'já foi eleita a melhor a melhor jogadora do mundo por ' + [player.bestInTheWorld.length] + ' ' + 'vezes')
console.log('A jogadora ' + player.name + ' ' + 'possui ' + [player.medals.golden] + ' ' + 'medalalhas de ouro e ' + [player.medals.silver] + ' ' + 'medalhas de prata')