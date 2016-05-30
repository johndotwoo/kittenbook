var kbValues = {
    projectName: 'kittenbook',
    versionNumber: '0.0.1',
    areaCodes: {
        '202': 'Washington, DC',
        '212': 'Manhattan, NYC',
        '213': 'Los Angeles',
        '310': 'Santa Monica',
        '323': 'Los Angeles',
        '408': 'Silicon Valley',
        '415': 'San Francisco',
        '507': 'Rochester, MN',
        '562': 'Long Beach',
        '702': 'Las Vegas',
        '765': 'West Lafayette',
        '801': 'Northern Utah',
        '901': 'Memphis'
    }
};
    
function getAreaCodes() {
    return kbValues.areaCodes;
}
// Get the user's name.
function getUserName() {
    var userName = prompt('Hello, what\'s your name?');

    // If no user name was entered, ask again.
    if (!userName) {
        userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
    }
    return userName;
}

// Get the user's phone number.
function getPhoneNumber(userName) {
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    if (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt('Please enter a valid phone number.');
    }
    return phoneNumber;    
}

// Validate a phone number
function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

// Determine location based on phone number
function getLocation(phoneNumber) {
    // Create the phone number pattern.
    var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
    // Get matches from phoneNumber
    var phoneMatches = phoneNumberPattern.exec(phoneNumber);
    var areaCodes, areaCode, locationName;
    if (phoneMatches) {
        areaCode = phoneMatches[1];
        areaCodes = getAreaCodes();
        locationName = areaCodes[areaCode];
    }

    // Look, it’s a ternary operator.
    // Return the locationName if it exists, else return ‘somewhere’
    return locationName ? locationName : 'somewhere';
}
function getImages() {
    var images = document.querySelectorAll('div.userContentWrapper img');
    return images;    
}
function main() {
    var userName = getUserName();
    var phoneNumber = getPhoneNumber(userName);
    var location = getLocation(phoneNumber);
    var images = getImages();
    
    // setInterval is like setTimeout, except it repeats its code instead of
    // executive it just one. Use setInterval to replace new images that are
    // loaded as you scroll down the page.
    setInterval(function() {
        images = getImages();
        replaceImages(images, location);
    }, 3000);
}

main();