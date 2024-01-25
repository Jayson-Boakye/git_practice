let openerArr = ['What do we have here,', 'Hey, it looks like', 'Interesting results,', 'One of the best out there,', 'Great pack pull,', 'Fortune favours you,', 'If your seeing this then,', 'The EA gods have answered your prayers,'];

let middleArr = ['you have packed', 'from this pack you got', 'you may have pulled', 'you have great luck, it\'s', 'drumroll please...it\'s'];

let endingArr = ['Mbappe out of the pool', 'Foden out of the pool', 'Haaland out of the pool', 'Bellingham out of the pool', 'Gullit out of the pool'];

const futMessenger = () => `${openerArr[Math.floor(Math.random() * 8)]} ${middleArr[Math.floor(Math.random() * 5)]} ${endingArr[Math.floor(Math.random() * 5)]}`;
console.log(futMessenger());