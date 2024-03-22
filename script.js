const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Canada',
        capital: 'Ottawa',
        largestCity: 'Toronto',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Ontario',
                capital: 'Toronto',
                largestCity: 'Toronto',
                area: 1076395,
            },
            {
                name: 'Quebec',
                capital: 'Quebec City',
                largestCity: 'Montreal',
                area: 1542056,
            },
            {
                name: 'Alberta',
                capital: 'Edmonton',
                largestCity: 'Calgary',
                area: 661848,
            },
        ],
    },
    {
        country: 'Australia',
        capital: 'Canberra',
        largestCity: 'Sydney',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'New South Wales',
                capital: 'Sydney',
                largestCity: 'Sydney',
                area: 809444,
            },
            {
                name: 'Queensland',
                capital: 'Brisbane',
                largestCity: 'Brisbane',
                area: 1859767,
            },
            {
                name: 'Victoria',
                capital: 'Melbourne',
                largestCity: 'Melbourne',
                area: 227416,
            },
        ],
    },
];

const mainElement = document.querySelector('main');

GEOGRAPHY_LIST.forEach(country => {
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');

    const countryInfo = `
        <h2>${country.country}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Largest City: ${country.largestCity}</p>
        <p>${country.subdivisionName}s:</p>
        <ul>
            ${country.subdivisions.map(subdivision => `
                <li>
                    <strong>${subdivision.name}</strong>
                    <ul>
                        <li>Capital: ${subdivision.capital}</li>
                        <li>Largest City: ${subdivision.largestCity}</li>
                        <li>Area: ${subdivision.area} square km</li>
                    </ul>
                </li>
            `).join('')}
        </ul>
    `;

    countryElement.innerHTML = countryInfo;
    mainElement.appendChild(countryElement);
});
