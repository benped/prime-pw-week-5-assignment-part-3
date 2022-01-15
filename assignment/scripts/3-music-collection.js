console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title1, artist1, yearPublished1) {
  console.log('Inside addToCollection Function');
  let record = {
    title: title1,
    artist: artist1,
    yearPublished: yearPublished1,
  };
  collection += record;
  return record;
}

addToCollection('Let it Be','The Beatles','1969');

console.log
