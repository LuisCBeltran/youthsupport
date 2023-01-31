const unsortedTable = [
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
    {
        Institution: 'BGC Moncton',
        Category: 'Education, new comers services, child care, entrepreneurial lab',
        Location: '15 Everett St, Moncton, NB E1C 3Z6',
        Website: '<a href="https://www.bgcmoncton.com/en/" target="_blank">https://www.bgcmoncton.com/en/</a>',
        Phone: '(506) 858-0949',
        Notes: 'Programs <br> 1. After School Programs. Offer youth the chance to explore their interest in sports and recreation, arts and crafts, gardening and cooking. Additionally, the meal program offers a hot, healthy meal to all attending members daily, five days a week. <br> 2. Educational support. For individuals aged 6-18. Offer 1:1 and group tutoring sessions for individuals struggling in any study area. <br> 3. Ingenium. Youths ages 13 to 18. Offers two initiatives <br> Job readiness ages 15-30 <br> 1 month, Tue 5-8 Sat 10 -1 <br> 2 months, Tue 5 - 8  <br> - Carrer counselling <br>- Workshops <br>- Networking <br>- Mentorship <br>- Work placement <br>Entrepreneurship program ages 12-18 <br>Beggins March <br>Summer once a week 3 hours <br>-  Bussines models <br>-  Hands on workshops <br>-  Field trips <br>-  Intercultural activities <br>-  Podcasting <br>4. Newcomer Youth Services. Offers entrepreneurship training, job readiness services, and intercultural competencies. <br>5. Child Care Centre. Ages 15 months - 12 years. <br>For registration, contact Rébécca Ethier at 506-858-0949 ext. 301 or at rebecca.ethier@bgcmoncton.com <br> Little Treasures Child Care Centre registration <a href="https://littletreasureschildcare.ca/programs-2/program-registration/" target="_blank">https://littletreasureschildcare.ca/programs-2/program-registration/</a>',
        Price: '',
    },
    {
        Institution: 'YMCA of Greater Moncton',
        Category: 'Education, after school, summer camps',
        Location: 'North End <br>70 Twin Oaks Drive <br>Moncton, NB  E1G 0A1 <br><br>Vaugham Harvey <br>30 War Veterans Avenue <br>Moncton, NB  E1C 0B3',
        Website: '<a href="https://moncton.ymca.ca/" target="_blank">https://moncton.ymca.ca/</a>',
        Phone: 'Vaughan Harvey <br>862-0899 or 857-0606 Ext 2236 <br><br></>North End<br>862-0899 or 857-0606 Ext 3223',
        Notes: '1. After School program. Ages 5 to 12. Monday to Friday, from 1:30 pm until 6:00 pm, with full-day care offered on PD and storm days, March Break and summer months. <br>2. YMCA Licensed Child Care. Ages 2 to 5 years. Monday to Friday, 7:00 am – 6:00 pm. Designated New Brunswick Early Learning Centre. <br>3. Preschool Morning Program. Monday to Thursday, 8:30 am to 12:00 pm.  Ages 3 to 5. <br>4. Summer Camps. Updates Spring 2023. <br>5. March Break Camp <br>6. Child and Youth programs offer a variety of initiatives where children learn skills by engaging in various sports and games.',
        Price: 'Membership and/or program fees. The YMCA offers Financial Assistance',
    },
    {
        Institution: 'Crossroads for Women Inc.',
        Category: 'Education',
        Location: 'PO Box 1247, Moncton, NB, E1C 8P9',
        Website: '<a href="https://crossroadsforwomen.ca/en/programs-services/children-and-youth-support-program" target="_blank">https://crossroadsforwomen.ca/</a>',
        Phone: '506-384-7076',
        Notes: 'The Child and Youth Support Program commits to introducing education and early intervention for children and youth who witness and/or are victims of violence. Includes daily programming of learning experiences through play, sensory and art programs.',
        Price: 'Free',
    },
    {
        Institution: 'Le CAFi',
        Category: 'Education, after school, summer camps, French language',
        Location: '140 Champlain Street (suites 201, 104 and 102) Moncton',
        Website: '<a href="https://cafi-nb.org/wp2021/english/" target="_blank">https://cafi-nb.org/</a>',
        Phone: '(506) 382-7494',
        Notes: 'Progam Youth, family and francization <br>1. Activities for kids and adolescents <br>-  Activities – Ages 0-5 <br>-  Club CAFi – Ages 5-1 <br>- Youth Group –Ages 12 to 18 <br>-  Summer Camps <br>2. Francization and academic support <br>-  Franco-jeunes CAFi – Francization after school program <br>-  School tutories <br>-  Summer Camps <br>3. Intercultural Sensibilitation <br>- Intercultural workshops <br>- Session Tour du monde',
        Price: 'Free with subscription',
    },
    {
        Institution: 'Sylvan Learning',
        Category: 'Education',
        Location: '505B St. George St, Moncton, New Brunswick, E1C 1Y4',
        Website: '<a href="https://www.sylvanlearning.com/" target="_blank">https://www.sylvanlearning.com/</a>',
        Phone: '(506) 801-2268',
        Notes: 'Offers after school tutoring programs.',
        Price: 'Paid',
    },
    {
        Institution: 'Tennis Moncton',
        Category: 'Sport',
        Location: 'Centennial Park, just off St. George Boulevard. Moncton',
        Website: '<a href="https://www.tennismoncton.ca/" target="_blank">https://www.tennismoncton.ca/</a>',
        Phone: '(506) 853-7763',
        Notes: 'Offers the opportunity to play tennis, learn tennis and for those already involved with the sport to improve their tennis skills through lessons and coaches. All age group demographics starting at the age of 4 years old.',
        Price: 'Paid',
    },
    {
        Institution: 'Go Go',
        Category: 'Education, gimnastic classes',
        Location: '80 Two Nations Crossing, Fredericton, NB, E3A 0W7',
        Website: '<a href="https://gogogym.com" target="_blank">https://gogogym.com</a>',
        Phone: '(506) 455-5496',
        Notes: 'After school, Pre school, gimnastic classes and camps.',
        Price: 'Paid',
    },
    {
        Institution: 'Bgc Greater Fredericton',
        Category: 'Education, new comers services, child care, entrepreneurial labs',
        Location: 'SKYLINE ACRES <br>499 Canterbury Drive, Fredericton, NB, E3B 4M4 <br><br></>DEVON AND GIBSON NEILL MEMORIAL <br>Devon: 248 Medley Street, Fredericton, NB, E3A 5G9 <br><br></>Gibson Neill: 67 Wyngate Dr., Fredericton, NB E3A 6G1',
        Website: '<a href="https://bgcfred.com/" target="_blank">https://bgcfred.com/</a>',
        Phone: 'SKYLINE ACRES <br>(506) 454-9237 <br><br> DEVON AND GIBSON NEILL MEMORIAL <br>(506) 472-4528',
        Notes: 'Breakfast program. FREE program offered too school-aged children (5-12). <br>After School Programs <br>Pre-School Program <br>Summer Camp <br>Judo <br>Youth Programs <br>Intensive Support Program',
        Price: 'Free',
    },
    {
        Institution: 'YMCA of Fredericton',
        Category: 'Education, sports, child care',
        Location: '570 York Street, Fredericton, N.B., E3B 3R2',
        Website: '<a href="https://fredericton.ymca.ca/programs/" target="_blank">https://fredericton.ymca.ca/</a>',
        Phone: '(506) 462-3000',
        Notes: '1.Aquatics. Swimming lessons and clubs. Certification courses. <br>2. Early Years. Ages 6 months - 5 years. Programs focus on developing fundamental movement skills and physical literacy through sports, friendships, and games. <br>3. Youth Registered Programs (Grades 1 - 8). Offers badminton, basketball, dance, fencing, gymnastics, karate, racquet sports, tennis, volleyball.  <br>4. UNB S.P.R.I.N.G. program is a two-hour gym and swim initiative for children with special needs aged 3-15. The program pairs up a child with a disability (either physical or mental, or both) with a university student for two hours of one-on-one time. <br>5. Additional Training Courses:  <br>Babysitter Training. Ages 12 - 15 <br>Aquatic Certification Courses <br>Workplace Standard First Aid <br>6. Eary learning and Care. Full-time care for ages 2 – 4, and Morning Preschool for ages 3 & 4. <br>7. After-school program. 190 CAD bi-weekly. To register, call (506) 462 – 3000 ext. 111 or email: schoolagecare@ymcafredericton.org <br>8. Summer and March break Camps.',
        Price: 'Paid',
    },
    {
        Institution: 'Multicultural Asociation of Fredericton',
        Category: 'Education, afterschool, sports',
        Location: '28 Saunders St, Fredericton, NB, E3B 1N1',
        Website: '<a href="https://mcaf.nb.ca/en/child-and-youth-programs/" target="_blank">https://mcaf.nb.ca/en/child-and-youth-programs/</a>',
        Phone: '(506) 454-8292',
        Notes: '1. Care for Newcomer Children. On-site childcare for children between 6 months to 12 years old. <br>2. After-school program. Ages 6 to 12. Include time for free play, snack and outdoor activities. Additional activities: homework club, recreational opportunities, arts and crafts projects, music, drama and dance sessions, STEM activities, literacy & language activities. roc@mcaf.nb.ca. <br>3. Summer camps <br>4. Settlement Workers in Schools (SWIS) <br>5. The MCAF Settlement Workers in Schools (SWIS) program offers settlement services to newcomer students and their families in the Fredericton and surrounding area who choose English or French immersion schools. <br>6. Program Liaison Francophone (PLF). Offers settlement services to newcomer francophone and allophone families who choose to integrate into the francophone community and school system. <br>7. Training and Employment for Newcomer Youth <br>8. The Newcomer Youth Participation in Sports is designed to give youth the knowledge, resources, skills, and confidence to join local sports. Include soccer, skating, tennis and more.',
        Price: 'Free. You must register to access services (online or at the office)',
    },
    {
        Institution: 'Prude Inc.',
        Category: 'Education',
        Location: '"165 Union St 3rd Floor, Saint John, NB E2L 5C7"',
        Website: '<a href="https://www.prudeinc.org/dive-into-ysj/" target="_blank">https://www.prudeinc.org/dive-into-ysj/</a>',
        Phone: '(506) 634-3088',
        Notes: 'Dive Into YSJ. Program for young adults from 16 to 30 years old (permanent residents only). The purpose of this program is to encourage the youth to be active and create a positive impact on the community.',
        Price: 'Free',
    },
    {
        Institution: 'MAGMA',
        Category: 'Education',
        Location: '22 Church St, Suite C170, Moncton, NB, E1C 0P7',
        Website: '<a href="https://magma-amgm.org/programs/" target="_blank">https://magma-amgm.org/programs/</a>',
        Phone: '(506) 857-9430',
        Notes: 'Provides newcomers (permanent residents only) with free English language classes',
        Price: 'Free  (permanent residents only)',
    },
]

const table = unsortedTable.sort((a, b) => {
    let fa = a.Institution.toLowerCase(),
        fb = b.Institution.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

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