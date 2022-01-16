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

function trackBuilder(name, duration){
  let track = {
    trackName: name,
    duration: duration,
  }
  return track;
}

// console.log('Trackbuilder test:',trackBuilder('Test','Time'));



function showCollection(array) {
  console.log(array.length);
  for ( let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
  }
}


function findByArtist(artist) {
  let artistList = [];
  for (let i of collection) {
    if (i.artist === artist){
      // console.log(i.artist);
      artistList.push(i);
    }
  }
  return artistList;
}

let searchObject0 = {
  artist: 'Ray Charles',
  yearPublished: '1957',
}

let searchObject1 = {
  artist: 'Daft Punk',
  yearPublished: '2001',
  trackName: 'trackname1',
}

function search(sInput){

  let searchArray = [];

  if (sInput == null){
    return collection;
  }

  for (let i of collection){
    let trackMatch = false;
    // console.log(i.tracks);
    for (let ii of i.tracks){
      // console.log(ii);
      if (ii.trackName === sInput.trackName){
        trackMatch = true;
      }
    }
    if (i.artist === sInput.artist || i.yearPublished === sInput.yearPublished ||
    trackMatch) {
      searchArray.push(i);
    }

    }
    return searchArray;
  }





addToCollection('Let it Be','The Beatles','1970');

console.log(collection);

addToCollection('Homework','Daft Punk','2001',trackBuilder('trackname1','t2'),trackBuilder('trackname3','t4'));
// console.log(collection[1]);
// rest parameter test
addToCollection('Bubba','Kaytranada','2019');
addToCollection('Random Access Memories','Daft Punk','2013');
addToCollection('The New Abnormal','The Strokes','2020');
addToCollection('Future Nostalgia','Dua Lipa','2020');

console.log(collection);

console.log(showCollection(collection));

// findByArtistTest
console.log('Looking for anything by Daft Punk', findByArtist('Daft Punk'));
console.log('Looking for anything by Metallica', findByArtist('Metallica'));

console.log('Searching collection for Ray Charles 1957', search(searchObject0));
console.log('Searching collection for Daft Punk 2001',search(searchObject1));
console.log('Searching for nothing in particular',search());
