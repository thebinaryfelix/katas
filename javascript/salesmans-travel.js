// https://www.codewars.com/kata/salesmans-travel

const travel = (r, zipcode) => {
  // Definition of RegEx patterns
  const pattern = {
    streetNumber: /(\d+\s)/g,
    streetAndCityName: /(?!(\d)).+(?=(\w{2}\s\d+))/g,
    zip: /(\w{2}\s\d+)/g
  };
  const splitAddress = r.split(',');
  const streetCityArr = [];
  const streetNumberArr = [];
  splitAddress.forEach((address) => {
    const streetNumber = address.match(pattern.streetNumber)[0].trim();
    const streetAndCityName = address.match(pattern.streetAndCityName)[0].trim();
    const zip = address.match(pattern.zip)[0].trim();
    if (zip === zipcode) {
      streetCityArr.push(streetAndCityName);
      streetNumberArr.push(streetNumber);
    }
  });
  return `${zipcode}:${streetCityArr.join(',')}/${streetNumberArr.join(',')}`;
};

// Test case
const ad = '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,'
+ '54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,'
+ '10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,'
+ '22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,'
+ '45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,'
+ '100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,'
+ '2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,'
+ '45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,'
+ '100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,'
+ '2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,'
+ '2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,'
+ '2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000';

console.log(travel(ad, 'AE 56210')); // => AE 56210:Main Rd. Bern,Main Al. Bern,Main Rd. Bern/3200,320,3
