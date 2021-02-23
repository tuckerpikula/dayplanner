// date under jumbotron
document.getElementById('currentDay').textContent = moment().format('dddd, MMMM, Do YYYY')

let currentHour = new Date()
let hours = currentHour.getHours()
// checking to see what data is in the console
// console.log(currentHour)
// console.log(hours)

// for loop for creating text in input within a 24-hour day for each hour block
for (let i =0; i < 24; i++)

  if (hours > 7) {
    document.getElementById('seven').classList.add('past')
  } else if (hours < 7) {
    document.getElementById('seven').classList.add('future')
  } else if (hours === 7) {
    document.getElementById('seven').classList.add('present')
  }

  if (hours > 8) {
    document.getElementById('eight').classList.add('past')
  } else if (hours < 8) {
    document.getElementById('eight').classList.add('future')
  } else if (hours === 8) {
    document.getElementById('eight').classList.add('present')
  }

if (hours > 9) {
  document.getElementById('nine').classList.add('past')
} else if (hours < 9) {
  document.getElementById('nine').classList.add('future')
} else if ( hours === 9) {
  document.getElementById('nine').classList.add('present')
}

if (hours > 10) {
  document.getElementById('ten').classList.add('past')
} else if (hours < 10) {
  document.getElementById('ten').classList.add('future')
} else if (hours === 10) {
  document.getElementById('ten').classList.add('present')
}

if (hours > 11) {
  document.getElementById('eleven').classList.add('past')
} else if (hours < 11) {
  document.getElementById('eleven').classList.add('future')
} else if (hours === 11) {
  document.getElementById('eleven').classList.add('present')
}

if (hours > 12) {
  document.getElementById('twelve').classList.add('past')
} else if (hours < 12) {
  document.getElementById('twelve').classList.add('future')
} else if (hours === 12) {
  document.getElementById('twelve').classList.add('present')
}

if (hours > 1) {
  document.getElementById('one').classList.add('past')
} else if (hours < 1) {
  document.getElementById('one').classList.add('future')
} else if (hours === 1) {
  document.getElementById('one').classList.add('present')
}
if (hours > 2) {
  document.getElementById('two').classList.add('past')
} else if (hours < 2) {
  document.getElementById('two').classList.add('future')
} else if (hours === 2) {
  document.getElementById('two').classList.add('present')
}
if (hours > 3) {
  document.getElementById('three').classList.add('past')
} else if (hours < 3) {
  document.getElementById('three').classList.add('future')
} else if (hours === 3) {
  document.getElementById('three').classList.add('present')
}
if (hours > 4) {
  document.getElementById('four').classList.add('past')
} else if (hours < 4) {
  document.getElementById('four').classList.add('future')
} else if (hours === 4) {
  document.getElementById('four').classList.add('present')
}
if (hours > 5) {
  document.getElementById('five').classList.add('past')
} else if (hours < 5) {
  document.getElementById('five').classList.add('future')
} else if (hours === 5) {
  document.getElementById('five').classList.add('present')
}

// pulling value from local storage
document.getElementById('seven').value = localStorage.getItem('aSeven')
document.getElementById('eight').value = localStorage.getItem('aEight')
document.getElementById('nine').value = localStorage.getItem('aNine')
document.getElementById('ten').value = localStorage.getItem('aTen')
document.getElementById('eleven').value = localStorage.getItem('aEleven')
document.getElementById('twelve').value = localStorage.getItem('aTwelve')
document.getElementById('one').value = localStorage.getItem('aOne')
document.getElementById('two').value = localStorage.getItem('aTwo')
document.getElementById('three').value = localStorage.getItem('aThree')
document.getElementById('four').value = localStorage.getItem('aFour')
document.getElementById('five').value = localStorage.getItem('aFive')

// save value to local storage
document.addEventListener('click', event => {
  
  if (event.target.classList.contains('save')){
    localStorage.setItem('aSeven', document.getElementById('seven').value)
    localStorage.setItem('aEight', document.getElementById('eight').value)
    localStorage.setItem('aNine', document.getElementById('nine').value)
    localStorage.setItem('aTen', document.getElementById('ten').value)
    localStorage.setItem('aEleven', document.getElementById('eleven').value)
    localStorage.setItem('aTwelve', document.getElementById('twelve').value)
    localStorage.setItem('aOne', document.getElementById('one').value)
    localStorage.setItem('aTwo', document.getElementById('two').value)
    localStorage.setItem('aThree', document.getElementById('three').value)
    localStorage.setItem('aFour', document.getElementById('four').value)
    localStorage.setItem('aFive', document.getElementById('five').value)
  }
})