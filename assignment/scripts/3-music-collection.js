console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, ...tracks) {
  // console.log('Inside addToCollection Function');
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(record);
  return record;
  // This return doesn't work and i'm not sure why
}
// End addToCollection function

function trackBuilder(name, duration) {
  let track = {
    trackName: name,
    duration: duration,
  }
  return track;
}

// console.log('Trackbuilder test:',trackBuilder('Test','Time'));

function showCollection(array) {
  console.log(array.length);
  for (let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
    let lead = 1;
    for (let ii of i.tracks){
      console.log(`${lead}. ${ii.trackName} : ${ii.duration}`)
      lead++;
    }
  }
}


function findByArtist(artist) {
  let artistList = [];
  for (let i of collection) {
    if (i.artist === artist) {
      // console.log(i.artist);
      artistList.push(i);
    }
  }
  return artistList;
}



function search(sInput) {

  let searchArray = [];

  if (sInput == null) {
    return collection;
  }

  for (let i of collection) {
    let trackMatch = false;
    // console.log(i.tracks);
    for (let ii of i.tracks) {
      // console.log(ii);
      if (ii.trackName === sInput.trackName) {
        trackMatch = true;
      }
    }
    if (i.artist === sInput.artist || i.yearPublished === sInput.yearPublished ||
      trackMatch) {
      searchArray.push(i);
    }

  }
  return searchArray;
} //end search function



let searchObject0 = {
  artist: 'Ray Charles',
  yearPublished: '1957',
}

let searchObject1 = {
  artist: 'Daft Punk',
  yearPublished: '2001',
  trackName: 'Da Funk',
}

let searchObject2 = {
  trackName: 'Love Again'
}

let searchObject3 = {
  trackName: 'Ode to the Mets',
}



addToCollection('Let it Be', 'The Beatles', '1970');

console.log(collection);

addToCollection('Homework', 'Daft Punk', '2001', trackBuilder('Da Funk', '5:28'),trackBuilder('Around the World', '7:09'));
// console.log(collection[1]);
// rest parameter test
addToCollection('Bubba', 'Kaytranada', '2019');
addToCollection('Random Access Memories', 'Daft Punk', '2013');
addToCollection('The New Abnormal', 'The Strokes', '2020', trackBuilder('Ode to the Mets', '5:51'));
addToCollection('Future Nostalgia', 'Dua Lipa', '2020', trackBuilder("Don't Start Now", '3:03'), trackBuilder('Love Again', '4:18'), trackBuilder('Levitating', '3:23'));

console.log(collection);

showCollection(collection);

// findByArtistTest
console.log('Looking for anything by Daft Punk', findByArtist('Daft Punk'));
console.log('Looking for anything by Metallica', findByArtist('Metallica'));

console.log('Searching collection for Ray Charles 1957', search(searchObject0));
console.log('Searching collection for Daft Punk 2001', search(searchObject1));
console.log('Searching for nothing in particular', search());
console.log("I'm looking for an album with the song Ode to the Mets", search(searchObject3));
console.log("I'm looking for an album with the song Love Again", search(searchObject2));
