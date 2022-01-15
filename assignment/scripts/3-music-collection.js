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
  // return true;
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
