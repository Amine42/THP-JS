const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

function seventy(boss) {
    let i = 0;
    let tab = [];

    while (i < boss.length) {
        Object.entries(boss[i]).forEach(function([key, value]) {
            if (key == "year" && (value <= 1979 && value >= 1970)) {
                console.log(boss[i].first);
                tab.push(boss[i].first + " " + boss[i].last);
            }
        });
    i++;
    }
    console.log(tab)
    return name;
}

seventy(entrepreneurs);