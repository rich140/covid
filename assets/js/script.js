var countries = [];
var cases = [];
var newcases = [];
var deaths = [];
var newdeaths = [];
var recoveries = [];
var newrecoveries = [];

var newcasesyesterday = [];
var newdeathsyesterday = [];

var totalcases = 0;
var totaldeaths = 0
var totalrecoveries = 0;

var totalnewcases = 0;
var totalnewcasesyesterday = 0;
var totalnewdeaths = 0;
var totalnewdeathsyesterday = 0;
var totalnewrecoveries = 0;


var dates = ['1/22/20', '1/23/20', '1/24/20', '1/25/20', '1/26/20', '1/27/20',
  '1/28/20', '1/29/20', '1/30/20', '1/31/20', '2/1/20', '2/2/20', '2/3/20', '2/4/20', '2/5/20',
  '2/6/20', '2/7/20', '2/8/20', '2/9/20', '2/10/20', '2/11/20', '2/12/20', '2/13/20', '2/14/20',
  '2/15/20', '2/16/20', '2/17/20', '2/18/20', '2/19/20', '2/20/20', '2/21/20', '2/22/20', '2/23/20',
  '2/24/20', '2/25/20', '2/26/20', '2/27/20', '2/28/20', '2/29/20', '3/1/20', '3/2/20', '3/3/20',
  '3/4/20', '3/5/20', '3/6/20', '3/7/20', '3/8/20', '3/9/20', '3/10/20', '3/11/20', '3/12/20', '3/13/20',
  '3/14/20', '3/15/20', '3/16/20', '3/17/20', '3/18/20', '3/19/20', '3/20/20', '3/21/20', '3/22/20', '3/23/20',
  '3/24/20', '3/25/20', '3/26/20', '3/27/20', '3/28/20', '3/29/20', '3/30/20', '3/31/20', '4/1/20', '4/2/20'
  , '4/3/20', '4/4/20', '4/5/20', '4/6/20', '4/7/20', '4/8/20', '4/9/20', '4/10/20', '4/11/20', '4/12/20'
  , '4/13/20', '4/14/20', '4/15/20', '4/16/20', '4/17/20', '4/18/20', '4/19/20', '4/20/20', '4/21/20'
  , '4/22/20'];

var cdata = [];
var ddata = [];

var populations = {
  "World": 7775125780,
  "US": 331002651, "Italy": 60461826, "Spain": 46754778, "China": 1439323776, "Germany": 83783942,
  "France": 65273511, "United Kingdom": 67886011, "Iran": 83992949, "Switzerland": 8654622, "Turkey": 84339067,
  "India": 1380004385, "Indonesia": 273523615, "Pakistan": 220892340, "Brazil": 212559417, "Nigeria": 206139689,
  "Bangladesh": 164689383, "Russia": 145934462, "Mexico": 128932753, "Japan": 126476461, "Ethiopia": 114963588,
  "Philippines": 109581078, "Egypt": 102334404, "Vietnam": 97338579, "Thailand": 69799978, "Tanzania": 59734218,
  "South Africa": 59308690, "Myanmar": 54409800, "Kenya": 53771296, "South Korea": 51269185, "Colombia": 50882891,
  "Uganda": 45741007, "Argentina": 45195774, "Algeria": 43851044, "Afghanistan": 38928346, "Poland": 37846611,
  "Canada": 37742154, "Saudi Arabia": 34813871, "Peru": 32971854, "Malaysia": 32365999, "Venezuela": 28435940,
  "Australia": 25499884, "Netherlands": 17134872, "Cambodia": 16718965, "Belgium": 11589623, "Cuba": 11326616,
  "Greece": 10423054, "Portugal": 10196709, "Sweden": 10099265, "Hungary": 9660351, "Belarus": 9449323,
  "Israel": 8655535, "Switzerland": 8654622, "Hong Kong": 7496981, "Singapore": 5850342, "Denmark": 5792202,
  "Finland": 5540720, "Norway": 5421241, "Austria": 9006398, "Czechia": 10708981, "Ireland": 4937786,
  "Chile": 19116201, "Ecuador": 17643054, "Syria": 17500658, "Romania": 19237691, "Luxembourg": 625978,
  "Dominican Republic": 10847910, "Iceland": 341243, "Panama": 4314767, "Serbia": 8737371, "Togo": 8278724,
  "Laos": 7275560, "Paraguay": 7132538, "Bulgaria": 6948445, "Libya": 6871292, "Lebanon": 6825445,
  "Nicaragua": 6624554, "Kyrgyzstan": 6524195, "Kuwait": 4270571, "Moldova": 4033963, "Georgia": 3989167,
  "Eritrea": 3546421, "Uruguay": 3473730, "Mongolia": 3278290, "Armenia": 2963243, "Qatar": 2881053,
  "Albania": 2877797, "Puerto Rico": 2860853, "Lithuania": 2722289, "Fiji": 896445, "Cyprus": 1207359,
  "Guam": 168775, "Grenada": 112523, "Jordan": 10203134, "Haiti": 11402528, "Bolivia": 11673021,
  "Tunisia": 11818619, "Benin": 12123200, "Burundi": 11890784, "Croatia": 4105267, "Slovenia": 2078938,
  "United Arab Emirates": 9890402, "Ukraine": 43733762, "Estonia": 1326535, "New Zealand": 4822233,
  "Morocco": 36910560, "Bahrain": 1701575, "Iraq": 4022493, "Bosnia and Herzegovina": 3280819,
  "Latvia": 1886198, "Timor-Leste": 1318445, "Saint Vincent and the Grenadines": 110940,
  "Nepal": 29136808, "Mauritania": 4649658, "Holy See": 801, "Somalia": 15893222, "Bhutan": 771608,
  "Gambia": 2416668, "Botswana": 2351627, "Angola": 32866272, "Yemen": 29825964, "Mozambique": 31255435,
  "Cameroon": 26545863, "Chad": 16425864, "Sudan": 43849260, "Eswatini": 1160164, "Slovakia": 5459642,
  "Oman": 5106626, "Costa Rica": 5094118, "Liberia": 5057681, "Azerbaijan": 10139177, "Burkina Faso": 20903273,
  "Taiwan": 23816775, "North Macedonia": 2083374, "Kazakhstan": 18776707, "Andorra": 77265,
  "San Marino": 33931, "Ghana": 31072940, "Cote d'Ivoire": 26378274, "Senegal": 16743927,
  "Uzbekistan": 33469203, "Mauritius": 1271768, "Brunei": 437479, "Guinea-Bissau": 1956520,
  "West Bank and Gaza": 4685000, "Zimbabwe": 14862924, "Malta": 441543, "Honduras": 9904607,
  "Sri Lanka": 21413249, "Kosovo": 1831000, "Montenegro": 628066, "Congo (Kinshasa)": 11860000,
  "Trinidad and Tobago": 1399488, "Rwanda": 12952218, "Niger": 24206644, "Liechtenstein": 38128,
  "Guatemala": 17915568, "Jamaica": 2961167, "Zambia": 18383955, "Djibouti": 988000, "Guinea": 13132795,
  "Central African Republic": 4829767, "Sierra Leone": 7976983, "Belize": 397628, "Papua New Guinea": 8947024,
  "Cabo Verde": 555987, "Antigua and Barbuda": 97929, "Saint Kitts and Nevis": 53199, "Namibia": 2540905,
  "Seychelles": 98347, "Dominica": 71986, "Suriname": 586632, "Equatorial Guinea": 1402985, "Gabon": 2225734,
  "Maldives": 540544, "Bahamas": 393244, "Congo (Brazzaville)": 1696000, "Barbados": 287375, "El Salvador": 6486205,
  "Mali": 20250833, "Madagascar": 27691018, "Monaco": 39242, "Guyana": 786552, "Saint Lucia": 183627,
  "Burma": 53370000

};


Promise.all([d3.csv("../assets/data/time_series_covid19_confirmed_global.csv"),
d3.csv("../assets/data/time_series_covid19_deaths_global.csv"),
d3.csv("../assets/data/time_series_covid19_recovered_global.csv")])
  .then(function (data) {
    console.log(data);


    function removeDuplicates(array) {
      array.splice(0, array.length, ...(new Set(array)))
    };

    // get indices of duplicate countries
    Array.prototype.getDuplicates = function () {
      var duplicates = {};
      for (var i = 0; i < this.length; i++) {
        if (duplicates.hasOwnProperty(this[i])) {
          duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
          duplicates[this[i]] = [i];
        }
      }
      return duplicates;
    };


    // Combine duplicate countries
    function consolidate(arr) {
      var result = [];
      var len = arr.length;

      //hardcoded
      for (let i = 0; i < 8; i++) {
        result.push(arr[i]);
      }

      let temp = arr[8];

      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 8; i < 16; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      result.push(temp);


      for (let i = 16; i < 35; i++) {
        result.push(arr[i]);
      }
      temp = arr[35];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 35; i < 46; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      for (let j = 0; j < dates.length; j++) {
        temp[dates[j]] += Number(arr[231][dates[j]]);
        temp[dates[j]] += Number(arr[238][dates[j]]);
        temp[dates[j]] += Number(arr[245][dates[j]]);
        temp[dates[j]] += Number(arr[246][dates[j]]);
      }
      result.push(temp);

      for (let i = 46; i < 49; i++) {
        result.push(arr[i]);
      }

      temp = arr[49];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 49; i < 82; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      result.push(temp);

      for (let i = 82; i < 92; i++) {
        result.push(arr[i]);
      }

      temp = arr[92];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 92; i < 95; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      result.push(temp);


      for (let i = 95; i < 107; i++) {
        result.push(arr[i]);
      }

      temp = arr[107];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 107; i < 117; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      result.push(temp);

      for (let i = 117; i < 166; i++) {
        result.push(arr[i]);
      }

      temp = arr[166];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 166; i < 170; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }
      result.push(temp);


      for (let i = 170; i < 217; i++) {
        result.push(arr[i]);
      }

      temp = arr[217];
      for (let i = 0; i < dates.length; i++) {
        temp[dates[i]] = Number(temp[dates[i]]);
      }
      for (let i = 217; i < 224; i++) {
        for (let j = 0; j < dates.length; j++) {
          temp[dates[j]] += Number(arr[i][dates[j]]);
        }
      }

      for (let j = 0; j < dates.length; j++) {
        temp[dates[j]] += Number(arr[249][dates[j]]);
        temp[dates[j]] += Number(arr[250][dates[j]]);
        temp[dates[j]] += Number(arr[251][dates[j]]);
      }

      result.push(temp);

      for (let i = 224; i < len; i++) {
        if (i != 231 && i != 238 && i != 245 && i != 246 && i != 249 && i != 250 && i != 251) {
          result.push(arr[i]);
        }
      }
      return result;

    };

    data[0] = consolidate(data[0]);
    data[1] = consolidate(data[1]);
    //consolidate(data[2]);


    data[0].forEach(d => {
      countries.push(d['Country/Region']);

      totalcases += Number(d[dates[dates.length - 1]]);
      totalnewcases += Number(d[dates[dates.length - 1]] - d[dates[dates.length - 2]]);
      totalnewcasesyesterday += Number(d[dates[dates.length - 2]] - d[dates[dates.length - 3]]);
      cases.push(d[dates[dates.length - 1]]);
      newcases.push(d[dates[dates.length - 1]] - d[dates[dates.length - 2]]);
      newcasesyesterday.push(d[dates[dates.length - 2]] - d[dates[dates.length - 3]]);
    });
    // console.log(newcases);
    data[1].forEach(d => {
      totaldeaths += Number(d[dates[dates.length - 1]]);
      totalnewdeaths += Number(d[dates[dates.length - 1]] - d[dates[dates.length - 2]]);
      totalnewdeathsyesterday += Number(d[dates[dates.length - 2]] - d[dates[dates.length - 3]]);
      deaths.push(d[dates[dates.length - 1]]);
      newdeaths.push(d[dates[dates.length - 1]] - d[dates[dates.length - 2]]);
      newdeathsyesterday.push(d[dates[dates.length - 2]]);
    });

    data[2].forEach(d => {
      totalrecoveries += Number(d[dates[dates.length - 1]]);
      recoveries.push(d[dates[dates.length - 1]]);
      newrecoveries.push(d[dates[dates.length - 1]] - d[dates[dates.length - 2]]);
    });


    removeDuplicates(countries);

    function strToNum(arr) {
      let res = [];
      for (let i = 0; i < arr.length; i++) {
        res[i] = parseInt(arr[i]);
      }
      return res;
    }

    cases = strToNum(cases);
    newcases = strToNum(newcases);
    deaths = strToNum(deaths);
    newdeaths = strToNum(newdeaths);
    recoveries = strToNum(recoveries);
    newrecoveries = strToNum(newrecoveries);
    newcasesyesterday = strToNum(newcasesyesterday);
    newdeathsyesterday = strToNum(newdeathsyesterday);


    data[0].forEach(d => {
      for (let i = 0; i < dates.length; i++) {
        //console.log(d[dates[i]]);
        d[dates[i]] = parseInt(d[dates[i]]);
      }
    });
    data[1].forEach(d => {
      for (let i = 0; i < dates.length; i++) {
        //console.log(d[dates[i]]);
        d[dates[i]] = parseInt(d[dates[i]]);
      }
    });
    data[2].forEach(d => {
      for (let i = 0; i < dates.length; i++) {
        //console.log(d[dates[i]]);
        d[dates[i]] = parseInt(d[dates[i]]);
      }
    });




    //set default ordering to highest --> lowest cases

    //1) combine the arrays:
    var list = [];
    for (var j = 0; j < countries.length; j++) {
      list.push({
        'country': countries[j],
        'case': cases[j],
        'newcase': newcases[j],
        'death': deaths[j],
        'newdeath': newdeaths[j],
        'recovery': recoveries[j],
        'newrecovery': newrecoveries[j],
        'newcaseyesterday': newcasesyesterday[j],
        'newdeathyesterday': newdeathsyesterday[j]
      });
    }

    //2) sort:
    list.sort(function (a, b) {
      return ((a.case > b.case) ? -1 : ((a.case == b.case) ? 0 : 1));
    });

    //3) separate them back out:
    for (var k = 0; k < list.length; k++) {
      countries[k] = list[k].country;
      cases[k] = list[k].case;
      newcases[k] = list[k].newcase;
      deaths[k] = list[k].death;
      newdeaths[k] = list[k].newdeath;
      recoveries[k] = list[k].recovery;
      newrecoveries[k] = list[k].newrecoveries;
      newcasesyesterday[k] = list[k].newcaseyesterday;
      newdeathsyesterday[k] = list[k].newdeathyesterday;
    }


    // Create cdata
    for (let i = 0; i < dates.length; i++) {
      cdata.push({
        'Date': dates[i],
        'Total': 0
      });

      for (let j = 0; j < countries.length; j++) {
        cdata[i][countries[j]] = 0;
        // console.log(cdata[i]);
      }
    }

    data[0].forEach(d => {

      for (let i = 0; i < cdata.length; i++) {
        cdata[i][d['Country/Region']] = d[dates[i]];
      }

    });

    for (let i = 0; i < cdata.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        cdata[i]['Total'] = cdata[i]['Total'] + cdata[i][countries[j]];
      }
    }

    //create ddata
    for (let i = 0; i < dates.length; i++) {
      ddata.push({
        'Date': dates[i],
        'Total': 0
      });

      for (let j = 0; j < countries.length; j++) {
        ddata[i][countries[j]] = 0;
        // console.log(cdata[i]);
      }
    }

    data[1].forEach(d => {

      for (let i = 0; i < ddata.length; i++) {
        ddata[i][d['Country/Region']] = d[dates[i]];
      }

    });

    for (let i = 0; i < ddata.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        ddata[i]['Total'] = ddata[i]['Total'] + ddata[i][countries[j]];
      }
    }


    console.log(countries);
    // Clean up
    for (let i = 0; i < cdata.length; i++) {
      cdata[i]['South Korea'] = cdata[i]['Korea, South'];
      cdata[i]['Taiwan*'] = cdata[i]['Taiwan'];
      delete cdata[i]['Korea, South'];
      delete cdata[i]['Taiwan*'];

    }
    for (let i = 0; i < ddata.length; i++) {
      ddata[i]['South Korea'] = ddata[i]['Korea, South'];
      ddata[i]['Taiwan*'] = ddata[i]['Taiwan'];
      delete ddata[i]['Korea, South'];
      delete ddata[i]['Taiwan*'];
    }

    countries[countries.indexOf('Korea, South')] = 'South Korea';
    countries[countries.indexOf('Taiwan*')] = 'Taiwan';

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    for (let i = 0; i < cases.length; i++) {
      cases[i] = numberWithCommas(cases[i]);
      newcases[i] = numberWithCommas(newcases[i]);
      deaths[i] = numberWithCommas(deaths[i]);
      newdeaths[i] = numberWithCommas(newdeaths[i]);
      newcasesyesterday[i] = numberWithCommas(newcasesyesterday[i]);
      newdeathsyesterday[i] = numberWithCommas(newdeathsyesterday[i]);
    }


    //recoveries dataset different

    const tableValues = [];
    let childElement, appendChildElement, parentElement, attribute;

    // header numbers


    parentElement = document.getElementById("caseheader");
    childElement = document.createElement('p');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "Total Cases";

    childElement = document.createElement('p');
    attribute = document.createAttribute("id");
    attribute.value = "total";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = numberWithCommas(totalcases);

    childElement = document.createElement('p');
    attribute = document.createAttribute("id");
    attribute.value = "deltacases";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "(+" + numberWithCommas(totalnewcases) + ")";

    //death header
    parentElement = document.getElementById("deathheader");
    childElement = document.createElement('p');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "Total Deaths";

    childElement = document.createElement('p');
    attribute = document.createAttribute("id");
    attribute.value = "totaldeaths";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = numberWithCommas(totaldeaths);

    childElement = document.createElement('p');
    attribute = document.createAttribute("id");
    attribute.value = "deltadeaths";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "(+" + numberWithCommas(totalnewdeaths) + ")";




    //  World data first row of table
    parentElement = document.getElementById("tabledata");
    childElement = document.createElement('tr');
    appendChildElement = parentElement.appendChild(childElement);
    parentElement = childElement; // pe = tr

    childElement = document.createElement('td');
    attribute = document.createAttribute("class");
    attribute.value = "country";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);

    //append a to td
    parentElement = childElement;
    childElement = document.createElement('a');
    appendChildElement = parentElement.appendChild(childElement);
    let countryName = "Global";
    appendChildElement.innerHTML = countryName;

    //cases
    parentElement = parentElement.parentElement; // pe is tr
    childElement = document.createElement('td');
    attribute = document.createAttribute("class");
    attribute.value = "cases";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);

    parentElement = childElement;
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "casevalue";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    let caseVal = numberWithCommas(totalcases);
    appendChildElement.innerHTML = caseVal;


    //new cases
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    attribute = document.createAttribute("class");
    attribute.value = "newcases";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);

    parentElement = childElement;
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "newcasevalue";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = numberWithCommas(totalnewcases);


    //%change cases
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    appendChildElement = parentElement.appendChild(childElement);
    parentElement = childElement;
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "percentcases";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "+" + (((totalnewcases - totalnewcasesyesterday) / totalnewdeathsyesterday) * 100).toFixed(2) + "%";

    //per 1m 
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    appendChildElement = parentElement.appendChild(childElement);
    parentElement = childElement;
    childElement = document.createElement('div');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = ((totalcases / populations['World']) * 1000000).toFixed(0);

    //deaths 
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    attribute = document.createAttribute("class");
    attribute.value = "deaths";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);

    parentElement = childElement
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "deathvalue";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    let deathVal = numberWithCommas(totaldeaths);
    appendChildElement.innerHTML = deathVal;

    //new deaths
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    attribute = document.createAttribute("class");
    attribute.value = "newdeaths";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);

    parentElement = childElement;
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "newdeathvalue";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    let newdeathVal = numberWithCommas(totalnewdeaths);
    appendChildElement.innerHTML = newdeathVal;

    //%change deaths global
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    appendChildElement = parentElement.appendChild(childElement);
    parentElement = childElement;
    childElement = document.createElement('div');
    attribute = document.createAttribute("class");
    attribute.value = "percentdeaths";
    childElement.setAttributeNode(attribute);
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = ("+") + (((totalnewdeaths - totalnewdeathsyesterday) / totalnewdeathsyesterday) * 100).toFixed(2) + "%";

    //per 1m
    parentElement = parentElement.parentElement;
    childElement = document.createElement('td');
    appendChildElement = parentElement.appendChild(childElement);
    parentElement = childElement;
    childElement = document.createElement('div');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = ((totaldeaths / populations['World']) * 1000000).toFixed(0);



    for (let i = 0; i < countries.length; i++) {

      parentElement = document.getElementById("tabledata");
      childElement = document.createElement('tr');
      appendChildElement = parentElement.appendChild(childElement);
      parentElement = childElement; // pe = tr

      //country
      //append td to tr
      childElement = document.createElement('td');
      attribute = document.createAttribute("class");
      attribute.value = "country";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);

      //append a to td
      parentElement = childElement;
      childElement = document.createElement('a');
      appendChildElement = parentElement.appendChild(childElement);
      let countryName = countries[i];
      appendChildElement.innerHTML = countryName;

      //cases
      parentElement = parentElement.parentElement; // pe is tr
      childElement = document.createElement('td');
      attribute = document.createAttribute("class");
      attribute.value = "cases";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);

      parentElement = childElement
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "casevalue";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      let caseVal = cases[i];
      appendChildElement.innerHTML = caseVal;


      //new cases
      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      attribute = document.createAttribute("class");
      attribute.value = "newcases";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);

      parentElement = childElement
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "newcasevalue";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      let newcaseVal = newcases[i];
      appendChildElement.innerHTML = newcaseVal;

      //%change new cases
      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      appendChildElement = parentElement.appendChild(childElement);
      parentElement = childElement;
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "percentcases";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML = "+" + ((parseFloat(newcases[i].replace(/,/g, '')) / (parseFloat(cases[i].replace(/,/g, '')) - parseFloat(newcases[i].replace(/,/g, '')))) * 100).toFixed(2) + "%";


      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      appendChildElement = parentElement.appendChild(childElement);
      parentElement = childElement;
      childElement = document.createElement('div');
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML = ((parseFloat(cases[i].replace(/,/g, '')) / populations[countries[i]]) * 1000000).toFixed(0);


      //deaths 
      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      attribute = document.createAttribute("class");
      attribute.value = "deaths";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);

      parentElement = childElement
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "deathvalue";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      let deathVal = deaths[i];
      appendChildElement.innerHTML = deathVal;

      //new deaths
      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      attribute = document.createAttribute("class");
      attribute.value = "newdeaths";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);

      parentElement = childElement;
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "newdeathvalue";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      let newdeathVal = newdeaths[i];
      appendChildElement.innerHTML = newdeathVal;

      //%change new deaths
      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      appendChildElement = parentElement.appendChild(childElement);
      parentElement = childElement;
      childElement = document.createElement('div');
      attribute = document.createAttribute("class");
      attribute.value = "percentdeaths";
      childElement.setAttributeNode(attribute);
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML = "+" + ((parseFloat(newdeaths[i].replace(/,/g, '')) / (parseFloat(deaths[i].replace(/,/g, '')) - parseFloat(newdeaths[i].replace(/,/g, '')))) * 100).toFixed(2) + "%";

      parentElement = parentElement.parentElement;
      childElement = document.createElement('td');
      appendChildElement = parentElement.appendChild(childElement);
      parentElement = childElement;
      childElement = document.createElement('div');
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML = ((parseFloat(deaths[i].replace(/,/g, '')) / populations[countries[i]]) * 1000000).toFixed(0);


    }




    const svg = d3.select("svg#chart");
    document.getElementById('chart').setAttribute("width", document.getElementById("chart").parentElement.clientWidth);
    document.getElementById('chart').setAttribute("height", document.getElementById("chart").parentElement.clientHeight);
    const width = svg.attr("width")
    const height = svg.attr("height")
    console.log(width);
    console.log(height);
    const margin = { top: 10, right: 10, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;


    let annotations = svg.append("g").attr("id", "annotations");
    let chartArea = svg.append("g").attr("id", "points")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


    var time = [];
    const timeParser = d3.timeParse('%m/%d/%y');
    dates.forEach(d => {
      time.push(timeParser(d));
    });

    for (let i = 0; i < cdata.length; i++) {
      cdata[i].Date = timeParser(cdata[i].Date);
    }

    for (let i = 0; i < ddata.length; i++) {
      ddata[i].Date = timeParser(ddata[i].Date);
    }

    const dateExtent = d3.extent(time, t => t);
    const dateScale = d3.scaleTime().domain(dateExtent).range([0, chartWidth]);
    // add .nice() to make xaxis even
    // console.log(d3.scaleTime().range([0, 500])(cdata[10].Date));
    // console.log(dateScale(new Date("2020-02-29 02:00")));

    let bottomAxis = d3.axisBottom(dateScale)
      .tickFormat(d3.utcFormat("%m/%d"))
    // .ticks(d3.utcDay.every(10))

    annotations.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + margin.left + "," + (chartHeight + margin.top + 0) + ")")
      .call(bottomAxis);


    const totalExtent = [0, cdata[cdata.length - 1]['Total']];
    const totalScale = d3.scaleLinear().domain(totalExtent).range([chartHeight, 0]);

    const deathExtent = [0, ddata[ddata.length - 1]['Total']];
    const deathScale = d3.scaleLinear().domain(deathExtent).range([chartHeight, 0]);

    let leftAxis = d3.axisLeft(totalScale)
      .tickFormat(d3.format("~s"));


    annotations.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
      .call(leftAxis)


    var areaGen = d3.area()
      .x(d => dateScale(d['Date']))
      .y0(totalScale(totalExtent[0]))
      .y1(d => totalScale(d['Total']));


    chartArea.append("path")
      .datum(cdata)
      .attr("class", "area")
      .attr("fill", "#829AB1")
      .attr("d", areaGen);

    chartArea.append("path")
      .datum(ddata)
      .attr("class", "area")
      .attr("fill", "#FF5630")
      .attr("d", areaGen);

    let mouseGroup = chartArea.append("g");

    // Add marker lines, circles, and label
    // let xMarker = mouseGroup.append("line")
    //   .attr("id", "xMarker")
    //   .attr("fill", "none")
    //   .attr("stroke", "black")
    //   .attr("stroke-width", 1)
    //   .attr("y1", 0)
    //   .attr("y2", chartHeight)
    //   .attr("opacity", 0);

    let valueMarker = mouseGroup.append("circle")
      .attr("id", "valueMarker")
      .attr("fill", "#222222")
      .attr("stroke", "#F0F4F8")
      .attr("r", 3)
      .attr("opacity", 0);

    let deathMarker = mouseGroup.append("circle")
      .attr("id", "deathMarker")
      .attr("fill", "#222222")
      .attr("stroke", "#F0F4F8")
      .attr("r", 3)
      .attr("opacity", 0);

    let label = mouseGroup.append("text")
      .attr("id", "label")
      .attr("fill", "#F7F7F7")
      .style("font-size", "14px")
      .attr("opacity", 0);

    let deathlabel = mouseGroup.append("text")
      .attr("id", "deathlabel")
      .attr("fill", "#F7F7F7")
      .style("font-size", "14px")
      .attr("opacity", 0);

    let datelabel = mouseGroup.append("text")
      .attr("id", "datelabel")
      .attr("fill", "#F7F7F7")
      .style("font-size", "16px")
      .text("Date:")
      .attr("x", 20).attr("y", 20)
      .attr("opacity", 1);


    let activeRegion = mouseGroup.append("rect")
      .attr("id", "activeRegion")
      .attr("width", chartWidth)
      .attr("height", chartHeight)
      .attr("fill", "none")
      .attr("pointer-events", "all");

    let findDate = d3.bisector(d => d.Date).right;

    // activeRegion is now the top-most item (even if invisible), so it should always catch the mouse events and never clash
    activeRegion.on("mouseover", function () {
      // Show the marker and label when mousing over
      // xMarker.attr("opacity", 1);
      valueMarker.attr("opacity", 1);
      deathMarker.attr("opacity", 1);
      label.attr("opacity", 1);
      deathlabel.attr("opacity", 1);
      datelabel.attr("opacity", 1);
    });
    activeRegion.on("mouseout", function () {
      // Hide them when mousing out of chart
      // xMarker.attr("opacity", 0);
      deathMarker.attr("opacity", 0);
      valueMarker.attr("opacity", 0);
      label.attr("opacity", 0);
      deathlabel.attr("opacity", 0);
      datelabel.attr("opacity", 1);
    });
    activeRegion.on("mousemove", function () {
      // Update the position as you move

      // Get mouse location
      let location = d3.mouse(this);
      let x = location[0];
      // Use "invert" on a scale to go from pixels back to data
      let xDate = dateScale.invert(x);
      // We use the bisector to find the index of the element that's closest to our xDate
      let index = findDate(cdata, xDate);
      // We can then get d, the data point that's closest
      let d = cdata[index];
      let dd = ddata[index];

      // From there, it's just a matter of updating positions using our scales like we've done for a while now
      let xPos = dateScale(d['Date']);
      let yPos = totalScale(d['Total']);

      const deathGraphScale = d3.scaleLinear().domain(deathExtent).range([chartHeight, totalScale(deathExtent[1])]);
      let xPos2 = dateScale(dd['Date']);
      let yPos2 = deathGraphScale(dd['Total']);
      // console.log(yPos2);
      // xMarker.attr("x1", xPos).attr("x2", xPos);
      valueMarker.attr("cx", xPos).attr("cy", yPos);
      deathMarker.attr("cx", xPos2).attr("cy", yPos2);


      let txt = d['Total']
      let txt2 = dd['Total'];

      // We ended the class with the following line, which has lots of overlaps
      // label.attr("x",xPos).attr("y",yPos).text(txt); 

      // Here's a simple way to remove overlaps and deliver a consistent user experience
      label.text(txt);
      deathlabel.text(txt2);

      if (xPos < chartWidth / 4.0) {
        console.log(valueMarker.attr('cy'));
        label.attr("x", xPos + 4).attr("y", valueMarker.attr('cy') - 15).attr("text-anchor", "start");
      }
      else {
        label.attr("x", xPos - 4).attr("y", valueMarker.attr('cy')).attr("text-anchor", "end");
      }

      if (xPos2 < chartWidth / 4.0) {
        deathlabel.attr("x", xPos2 + 4).attr("y", deathMarker.attr('cy') - 5).attr("text-anchor", "start");
      }
      else {
        deathlabel.attr("x", xPos2 - 4).attr("y", deathMarker.attr('cy') - 5).attr("text-anchor", "end");
      }
      var formatDate = d3.timeFormat("%B %d, %Y");
      datelabel.text("Date: " + formatDate(d['Date']));

      datelabel.attr("x", 20).attr("y", 20);

    });

    svg.append("circle").attr("cx", 76).attr("cy", 50).attr("r", 6).style("fill", "#829AB1")
    svg.append("circle").attr("cx", 76).attr("cy", 75).attr("r", 6).style("fill", "#FF5630")
    svg.append("text").attr("x", 86).attr("y", 50).text("Cases").style("font-size", "14px").attr("fill", "#F7F7F7").attr("alignment-baseline", "middle")
    svg.append("text").attr("x", 86).attr("y", 75).text("Deaths").style("font-size", "14px").attr("fill", "#F7F7F7").attr("alignment-baseline", "middle")






  }).catch(function (error) {
    console.log(error);
  });
















