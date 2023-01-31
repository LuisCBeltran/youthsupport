const table = [
    {
        Institution: 'Bee Me Kidz',
        Category: 'Education, Food Support',
        Location: 'Saint John <br> North End - Centennial School - 10 Constance Street - E2K 2P8 <br> <br> Saint John <br> East End - Glen Falls School - 10 Princess Court - E2H 1X9 <br><br> Charlotte County – Milltown Elementary School - 434 Milltown Blvd St. Stephen, New Brunswick E3L 1J8',
        Website: '<a href="http://beemekidz.com" target="_blank">http://beemekidz.com</a>',
        Phone: 'Phone: 5063497331',
        Notes: 'Educational program on saturdays. It includes a nutritious brunch and snacks. There is also a parent education component with free childcare for the siblings. Registration must be done in advance by phone. It operates throughout the school year.',
        Price: 'Free',
    },
    {
        Institution: 'bgc Greater Saint John',
        Category: 'Education, After School',
        Location: 'Main Club: 1 Paul Harris Street - P.O. Box 2441 - Saint John, NB E2L 3V9 <br><br> Seaside Park Elementary School - 627 Havelock St, Saint John, NB E2M 2V4 <br><br> St. John the Baptist, King Edward School - 223 St James St, Saint John, NB E2L 1W3 <br><br> St. John the Baptist / King Edward School - 223 St James St, Saint John, NB E2L 1W3 <br><br> Belleisle Elementary School - 1775 ROUTE, Springfield, NB E5T 2K1',
        Website: '<a href="http://sjbgclub.com" target="_blank">http://sjbgclub.com</a>',
        Phone: 'Phone: (506) 634-2011 <br> Fax: (506) 648-0804 <br> Main Office: 634-2011 ext.221',
        Notes: 'Afterschool programs cost aproximately CAD $90/week. They also offer summer camps and early morning programs. There are some youth programs that are free.',
        Price: 'Paid',
    },
    {
        Institution: 'The Teen Resource Centre',
        Category: 'Education',
        Location: '28 Richmond Street, Saint John, NB E2L 3B2',
        Website: '<a href="https://www.trc4youth.ca" target="_blank">https://www.trc4youth.ca</a>',
        Phone: 'Phone: 506-638-2372',
        Notes: 'TRC offers tutoring and mentoring programs for youth between the ages of 12 and 24.',
        Price: 'Free',
    },
    {
        Institution: 'Kids Help Phone',
        Category: 'Support',
        Location: 'Online service, Telephone service',
        Website: '<a href="https://kidshelpphone.ca" target="_blank">https://kidshelpphone.ca</a>',
        Phone: 'Phone: 1-800-688-6868 <br> Text: 686868',
        Notes: 'Offers 24/7 free e-mental health services to young people across Canada.(English and French).',
        Price: 'Free',
    },
    {
        Institution: 'Chimo Help Line',
        Category: 'Support',
        Location: 'Telephone service',
        Website: '<a href="http://www.chimohelpline.ca" target="_blank">http://www.chimohelpline.ca</a>',
        Phone: 'Phone: 1-800-667-5005',
        Notes: 'Helpline that offers helpful information, crisis intervention and resources to affront any mental health issue. ',
        Price: 'Free',
    },
    {
        Institution: 'Family Enrichment and Counseling Service',
        Category: 'Counselling',
        Location: '365 Queen Street, Fredericton, E3B 1B2',
        Website: '<a href="https://www.familyenrichment.ca/" target="_blank">https://www.familyenrichment.ca/</a>',
        Phone: 'Phone: 506-458-8211',
        Notes: 'FECS offers counsellng services to indivituals ages 12 and up. They also offer counselling services to families with family members ages 16 and up. For a first appointment, call 506-458-8211 extension 250 or email info@familyenrichment.ca',
        Price: '',
    },
]

const tableHeader = Object.keys(table[0]);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);

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
            <td>${row.Price}</td>
        </tr>
        `
    });

    temp+=`</table>`;

    output.innerHTML = temp;
}

function filter (e) {
    let results;
    let temp = "";

    results = table.filter(item => 
        item.Institution.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Website.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Notes.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.Price.toLowerCase().includes(e.target.value.toLowerCase())
        );

        if (results.length > 0) {
            temp = `<table> <tr>`;
            tableHeader.forEach(header=> temp+= `<th> ${header.toUpperCase()} </th>`);
            temp+= `<tr>`;
            results.forEach(row => {
                temp +=`
                <tr>
                    <td>${row.Institution}</td>
                    <td>${row.Category}</td>
                    <td>${row.Location}</td>
                    <td>${row.Website}</td>
                    <td>${row.Phone}</td>
                    <td>${row.Notes}</td>
                    <td>${row.Price}</td>
                </tr>
                `
            });

            temp+=`</table>`;
        } else {
            temp = `<div class="no-item">Item not found</div>`
        }

        output.innerHTML = temp;

}