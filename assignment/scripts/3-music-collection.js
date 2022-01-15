console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title1, artist1, yearPublished1) {
  // console.log('Inside addToCollection Function');
  let record = {
    title: title1,
    artist: artist1,
    yearPublished: yearPublished1,
  };
  collection.push(record);
  return record;
  // This return doesn't work and i'm not sure why
}
// End addToCollection function

function showCollection(array) {
  let x = array.length;
  console.log(x);
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
}

function search(sInput){
  let searchArray = [];
  if (sInput == null){
    return collection;
  }
  for (let i of collection){
    if (i.artist === sInput.artist || i.yearPublished === sInput.yearPublished) {
      searchArray.push(i);
    }

  }

  return searchArray;
}


addToCollection('Let it Be','The Beatles','1970');

console.log(collection);

addToCollection('Homework','Daft Punk','2001');
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
