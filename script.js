const table = [
    {
        Institution: 'Bee Me Kidz',
        Category: 'Education, Food Support',
        Location: 'Saint John – North End - Centennial School - 10 Constance Street Saint John, New Brunswick E2K 2P8 / Saint John – East End - Glen Falls School - 10 Princess Court - Saint John, New Brunswick E2H 1X9 / Charlotte County – Milltown Elementary School - 434 Milltown Blvd St. Stephen, New Brunswick E3L 1J8',
        Website: 'http://beemekidz.com',
        Phone: 'Phone: 5063497331',
        Notes: 'Educational program on saturdays. It includes a nutritious brunch and snacks. There is also a parent education component with free childcare for the siblings. Registration must be done in advance by phone. It operates throughout the school year.',
        Free: 'Yes',
    },
    {
        Institution: 'bgc Greater Saint John',
        Category: 'Education, After School',
        Location: 'Main Club: 1 Paul Harris Street - P.O. Box 2441 - Saint John, NB E2L 3V9 / Seaside Park Elementary School - 627 Havelock St, Saint John, NB E2M 2V4 / St. John the Baptist, King Edward School - 223 St James St, Saint John, NB E2L 1W3 / St. John the Baptist/King Edward School - 223 St James St, Saint John, NB E2L 1W3 / Belleisle Elementary School - 1775 ROUTE, Springfield, NB E5T 2K1',
        Website: 'http://sjbgclub.com',
        Phone: 'Phone: (506) 634-2011 - Fax: (506) 648-0804 - Main Office: 634-2011 ext.221',
        Notes: 'Afterschool programs cost aproximately CAD $90/week. They also offer summer camps and early morning programs. There are some youth programs that are free.',
        Free: 'No',
    },
    {
        Institution: 'The Teen Resource Centre',
        Category: 'Education',
        Location: '28 Richmond Street, Saint John, NB E2L 3B2',
        Website: 'https://www.trc4youth.ca',
        Phone: 'Phone: 506-638-2372',
        Notes: 'TRC offers tutoring and mentoring programs for youth between the ages of 12 and 24.',
        Free: 'Yes',
    },
]

const tableHeader = Object.keys(table[0]);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
// search.addEventListener('input', filter);

function loadTable () {
    let temp = `<table> <tr>`;
    tableHeader.forEach(header=> temp+= `<th> ${header.toUpperCase()} </th>`);
    temp+= `<tr>`;
    table.forEach(row => {
        temp +=`
        <tr>
            <td>${row.Institution}</td>
            <td>${row.Category}</td>
            <td>${row.Location}</td>
            <td>${row.Website}</td>
            <td>${row.Phone}</td>
            <td>${row.Notes}</td>
            <td>${row.Free}</td>
        </tr>
        `
    });

    temp+=`</table>`;

    output.innerHTML = temp;
}