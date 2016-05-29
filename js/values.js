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
    },
};
    
var currentDate = new Date();   // Create Date object. More about objects and
                                // Date objects in chapter 5. This object will
                                // be used to build our date

//currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' +  // Set year
                 (currentDate.getMonth() + 1)+ '-' + //Set month
                 currentDate.getDate() + ' at ' +    // Set day of the month
                 currentDate.getHours() + ':' +      // Set hours (military time)
                 currentDate.getMinutes() + ':' +    // Set minutes
                 currentDate.getSeconds();            // Set seconds

kbValues.currentTime = currentTime;