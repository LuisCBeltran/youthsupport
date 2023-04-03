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
        Institution: 'BGC Greater Saint John',
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
        Category: 'Education, services for newcomers, child care, entrepreneurial lab',
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
        Notes: 'Progam Youth, family and francization <br>1. Activities for kids and adolescents <br>-  Activities – Ages 0-5 <br>-  Club CAFi – Ages 5-1 <br>- Youth Group Ages 12 to 18 <br>-  Summer Camps <br>2. Francization and academic support <br>-  Franco-jeunes CAFi – Francization after school program <br>-  School tutories <br>-  Summer Camps <br>3. Intercultural Sensibilitation <br>- Intercultural workshops <br>- Session Tour du monde',
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
        Notes: '1.Aquatics. Swimming lessons and clubs. Certification courses. <br>2. Early Years. Ages 6 months - 5 years. Programs focus on developing fundamental movement skills and physical literacy through sports, friendships, and games. <br>3. Youth Registered Programs (Grades 1 - 8). Offers badminton, basketball, dance, fencing, gymnastics, karate, racquet sports, tennis, volleyball.  <br>4. UNB S.P.R.I.N.G. program is a two-hour gym and swim initiative for children with special needs aged 3-15. The program pairs up a child with a disability (either physical or mental, or both) with a university student for two hours of one-on-one time. <br>5. Additional Training Courses:  <br>Babysitter Training. Ages 12 - 15 <br>Aquatic Certification Courses <br>Workplace Standard First Aid <br>6. Eary learning and Care. Full-time care for ages 2 to  4, and Morning Preschool for ages 3 & 4. <br>7. After-school program. 190 CAD bi-weekly. To register, call (506) 462  3000 ext. 111 or email: schoolagecare@ymcafredericton.org <br>8. Summer and March break Camps.',
        Price: 'Paid',
    },
    {
        Institution: 'Multicultural Asociation of Fredericton',
        Category: 'Education, afterschool, sports',
        Location: '28 Saunders St, Fredericton, NB, E3B 1N1',
        Website: '<a href="https://mcaf.nb.ca/en/child-and-youth-programs/" target="_blank">https://mcaf.nb.ca/</a>',
        Phone: '(506) 454-8292',
        Notes: '1. Care for Newcomer Children. On-site childcare for children between 6 months to 12 years old. <br>2. After-school program. Ages 6 to 12. Include time for free play, snack and outdoor activities. Additional activities: homework club, recreational opportunities, arts and crafts projects, music, drama and dance sessions, STEM activities, literacy & language activities. roc@mcaf.nb.ca. <br>3. Summer camps <br>4. Settlement Workers in Schools (SWIS) <br>5. The MCAF Settlement Workers in Schools (SWIS) program offers settlement services to newcomer students and their families in the Fredericton and surrounding area who choose English or French immersion schools. <br>6. Program Liaison Francophone (PLF). Offers settlement services to newcomer francophone and allophone families who choose to integrate into the francophone community and school system. <br>7. Training and Employment for Newcomer Youth <br>8. The Newcomer Youth Participation in Sports is designed to give youth the knowledge, resources, skills, and confidence to join local sports. Include soccer, skating, tennis and more.',
        Price: 'Free. You must register to access services (online or at the office)',
    },
    {
        Institution: 'Prude Inc.',
        Category: 'Education',
        Location: '"165 Union St 3rd Floor, Saint John, NB E2L 5C7"',
        Website: '<a href="https://www.prudeinc.org/dive-into-ysj/" target="_blank">https://www.prudeinc.org/</a>',
        Phone: '(506) 634-3088',
        Notes: 'Dive Into YSJ. Program for young adults from 16 to 30 years old (permanent residents only). The purpose of this program is to encourage the youth to be active and create a positive impact on the community.',
        Price: 'Free',
    },
    {
        Institution: 'Canada Games Aquatic Centre',
        Category: 'Sports',
        Location: '50 Union St, Saint John, NB E2L 1A1',
        Website: '<a href="https://aquatics.nb.ca/aquatics/swimming-lessons/" target="_blank">https://aquatics.nb.ca/</a>',
        Phone: '(506) 658-4715',
        Notes: 'Swimming Lessons',
        Price: 'Paid',
    },
    {
        Institution: 'Sunshine Program',
        Category: 'Recreation',
        Location: 'City Hall, 15 Market Square, Saint John, NB E2L 4L1',
        Website: '<a href="https://saintjohn.ca/en/parks-and-recreation/recreation/sunshine-program" target="_blank">https://saintjohn.ca/</a>',
        Phone: '506-658-4455',
        Notes: 'Outdoor-focused FREE program for children ages 6 to 12. 8-week program hosted at six locations around the city. <br>Daily activities include sports, active games, arts and crafts and off-site adventures during summer.',
        Price: 'Free. Registration may be completed online or in person',
    },
    {
        Institution: 'Interaction',
        Category: 'Music, theatre, dance',
        Location: 'Corner of Queen and Germain, 228 Germain Street. <br>Saint John NB, E2L 2G4',
        Website: '<a href="https://www.iactspa.com/classes" target="_blank">hhttps://www.iactspa.com/classes</a>',
        Phone: '506 674 9192',
        Notes: 'OMusic, theatre, dance classes. March break camps ages 4 -18',
        Price: 'Paid',
    },
    {
        Institution: 'Snappology',
        Category: 'STEM',
        Location: 'nb@snapology.com, Moncton, Fredericton, Saint John',
        Website: '<a href="https://www.snapology.com/location/nb" target="_blank">https://www.snapology.com/</a>',
        Phone: '5069880086',
        Notes: 'Fun themed programs using LEGO® bricks, Robotics, Movie-Making, Drones and Video Game Design. Offers field trips and camps.',
        Price: 'Paid',
    },
    {
        Institution: 'University of New Brunswick',
        Category: 'Summer Camps',
        Location: '100 Tucker Park Road Saint John, NB E2L 4L5',
        Website: '<a href="https://www.unb.ca/initiatives/summer/" target="_blank">https://www.unb.ca/</a>',
        Phone: '506-648-5500',
        Notes: 'Themed camps <br>- Design Works Camps for Kids & Teens: Children, ages 6-12. <br>- Computer Science Summer Camps:  For high school students and new UNB CS/SWE students interested in learning programming. <br>- Music Camps <br>- Worlds Unbound: Hands-on science and engineering summer camps. Themes include Aerospace, Be an Engineer, Wireless World, and the Amazing Human Machine. <br>- Sport Camps',
        Price: 'Paid'
    },
    {
        Institution: 'INside Out',
        Category: 'Summer Camps',
        Location: 'Lily Lake Pavilion, 55 Lake Drive S, Saint John, New Brunswick E2K 5S3',
        Website: '<a href="http://insideoutnaturecentre.com/" target="_blank">http://insideoutnaturecentre.com/</a>',
        Phone: '506-672-0770',
        Notes: 'Summer Camps: Nature-oriented small group camp programs.',
        Price: 'Paid',
    },
    {
        Institution: 'KV Aea Survival Camp',
        Category: 'Survival Camps',
        Location: '1 Paul Harris St., Saint John, NB',
        Website: '<a href="https://www.unb.ca/initiatives/summer/" target="_blank">https://www.unb.ca/</a>',
        Phone: '506-648-5500',
        Notes: 'The goal is to reconnect elementary-aged children with nature, to teach them how to play outside, and to give them the tools to discover things on their own and guidance to keep them safe as they do it.',
        Price: 'Paid',
    },  
    {
        Institution: 'Teen Computer School',
        Category: 'Education',
        Location: '60 Charlotte Street, Saint John NB.',
        Website: '<a href="http://www.thefashionschool.ca/" target="_blank">http://www.thefashionschool.ca/</a>',
        Phone: '800-264-8110',
        Notes: 'Coding for kids and game creation classes. Art classes, Fashion design classes, Web design and development for teens classes, Teens Art Studio course for teens from 13 to 18 years old.',
        Price: 'Paid',
    },  
    {
        Institution: 'Saint John Arts Center',
        Category: 'Education, Art classes',
        Location: '20 Peel Plaza, Saint John, NB E2L 3G6',
        Website: '<a href="https://www.sjartscentre.ca/category/workshops/kids-teens-workshops/" target="_blank">https://www.sjartscentre.ca/</a>',
        Phone: '(506) 633-4870',
        Notes: 'Art workshops',
        Price: 'Paid',
    },  
    {
        Institution: 'UNB',
        Category: 'Youth Sports',
        Location: 'G. Forbes Elliot Athletics Centre 100 Tucker Park Rd. Saint John, NB E2L 4L5',
        Website: '<a href="https://https://www.unb.ca/saintjohn/athletics/community/index.html" target="_blank">https://https://www.unb.ca/</a>',
        Phone: '506-648-5520',
        Notes: 'Volleyball camps and instructional clinics for children and youth in the community. Pickleball and basketball club program.',
        Price: 'Paid',
    },  
    {
        Institution: 'Lancaster Minor Basketball Association',
        Category: 'Sports',
        Location: 'PO Box 27019 Saint John, NB E2M 5S8',
        Website: '<a href="https://www.lancasterhoops.com/" target="_blank">https://www.lancasterhoops.com/</a>',
        Phone: 'lancasterminorbasketball@gmail.com',
        Notes: 'Basketball programs for youths and kids.',
        Price: 'Paid',
    },
    {
        Institution: 'Saint Jhon P.R.O Kids',
        Category: 'Financial Assistance',
        Location: 'City Hall 15 Market Square Saint John NB E2L 4L1',
        Website: '<a href="https://saintjohn.ca/en/parks-and-recreation/pro-kids" target="_blank">https://saintjohn.ca/</a>',
        Phone: '506-642-7529',
        Notes: 'Charitable program operated by the City of Saint John, can pay the registration fees, equipment costs, and transportation costs related to organized, registered recreation. P.R.O. Kids helps cover the costs for sports like hockey, soccer, baseball, swimming and football.',
        Price: 'Financial assistance',
    },
    {
        Institution: 'NBCC College 4 Kids',
        Category: 'Summer Camps',
        Location: '1234 Mountain Rd, Moncton, NB E1C 8H9',
        Website: '<a href="https://www.facebook.com/events/nbcc-moncton-campus/college-4-kids-moncton-campus/222704532592052/" target="_blank">College4kids</a>',
        Phone: '833-658-2577',
        Notes: 'NBCC summer camps are offered for middle school kids (grades 7, 8 and 9) at  Fredericton, Miramichi, Moncton, Saint John, St. Andrews, and Woodstock campuses. Fall 2023.',
        Price: 'Paid',
    },
    {
        Institution: 'Moncton Sports Dome',
        Category: 'Sport camps, afterschool, daycare, sport classes ',
        Location: 'Address: 125 Russ Howard Drive, Moncton, NB, E1C 0L7',
        Website: '<a href="https://www.sportsdome.ca/" target="_blank">https://www.sportsdome.ca/</a>',
        Phone: '506-382-7529',
        Notes: 'Camps, daycare, soccer and baseball courses, offers after-school tutoring programs.',
        Price: 'Paid',
    }, 
    {
        Institution: 'The Autism Resource Centre (ARC)',
        Category: 'Special Needs',
        Location: '555 Gauvin Rd. Dieppe, Greater Moncton, NB E1A1M7',
        Website: '<a href="https://monctonarc.com/OurServices/OurServices.html" target="_blank">https://monctonarc.com/</a>',
        Phone: '855-9032',
        Notes: 'Lending Library and Material Loan Summer Camp Teen programs Family Activities',
        Price: 'Paid',
    },
    {
        Institution: 'Acuatic and sports Centre',
        Category: 'Swimming Classes',
        Location: '111 Aquatique Street, Dieppe NB',
        Website: '<a href="https://www.dieppe.ca/en/explorer-et-samuser/cours-de-natation.aspx" target="_blank">https://www.dieppe.ca/</a>',
        Phone: '(506)8777881',
        Notes: 'Preschool swimming lessons <br>Swim For Life swimming lessons <br> Fitness Swimmer lessons <br>Teen/adult swimming lessons<br>Young lifeguard club<br>Private swimming lessons',
        Price: 'Paid',
    }, 
    {
        Institution: 'La Escuela Riverview',
        Category: 'March Break camp',
        Location: '',
        Website: '<a href="https://m.facebook.com/story.php?story_fbid=pfbid08LgsofW1vp79z5HrtgaJNiADovKFZcwuiqcnzx4em5rJLc6MfhXoLno4j8wPyiURl&id=100088824202781&mibextid=qC1gEa" target="_blank">La Escuela Riverview</a>',
        Phone: '',
        Notes: 'March 6th - 10th Camp',
        Price: 'Paid $180 a week',
    },
    {
        Institution: 'Moncton Hawks',
        Category: 'Sports',
        Location: '96 Norwood Avenue, Suite #301 Moncton, NB E1C 6L9',
        Website: '<a href="https://www.monctonbasketball.ca/" target="_blank">https://www.monctonbasketball.ca/</a>',
        Phone: '506-295-7614',
        Notes: 'Basketball classes, camps',
        Price: 'Paid, starting at $80',
    },
    {
        Institution: 'School of Atlantic Ballet',
        Category: 'SportsBallet/Musical Theater',
        Location: '68 Highfield Street, Suite 200 Moncton NB E1C 5N3',
        Website: '<a href="https://www.schoolofatlanticballet.com/" target="_blank">https://www.schoolofatlanticballet.com/</a>',
        Phone: '506 383 5951 ext.101',
        Notes: 'After-School & Evening and Weekend Programs <br>Dance: Ballet, jazz, acrobatics, contemporary, character dance<br> Musical theatre: Voice/Music, acting, dance for Musical Theatre',
        Price: 'Paid',
    },
    {
        Institution: 'DancEast',
        Category: 'Dance',
        Location: '601 St. George Blvd. Moncton NB',
        Website: '<a href="https://danceast.ca/" target="_blank">https://danceast.ca/</a>',
        Phone: '(506)854-2863',
        Notes: 'Recreational, pre-professional and fitness dance classes: ballet, jazz, lyrical & modern, hip-hop, tap.',
        Price: 'Paid',
    },
    {
        Institution: 'Mariposa Moncton Skating Club',
        Category: 'Sports',
        Location: '55 Russ Howard Drive Moncton, New Brunswick E1C 0L7',
        Website: '<a href="https://www.mariposamoncton.ca/" target="_blank">https://www.mariposamoncton.ca/</a>',
        Phone: '(506) 853-7571',
        Notes: 'Skating courses',
        Price: 'Paid',
    },
    {
        Institution: 'Codiac Soccer',
        Category: 'Sports',
        Location: '55 Russ Howard Dr. Moncton, NB E1C 0L7',
        Website: '<a href="http://monctonminorhockey.ca/" target="_blank">http://monctonminorhockey.ca/</a>',
        Phone: '(506) 382-6642',
        Notes: 'Soccer classes',
        Price: 'Paid',
    },
    {
        Institution: 'Moncton Minor Hockey Association',
        Category: 'Sports',
        Location: '55 Russ Howard Dr, Moncton, NB E1C 0L7',
        Website: '<a href="https://codiacsoccermoncton.com/" target="_blank">https://codiacsoccermoncton.com/</a>',
        Phone: '(506) 382-6642',
        Notes: 'Hockey classes',
        Price: 'Paid',
    },
    {
        Institution: 'Camp Centennial',
        Category: 'Summer camp',
        Location: '125 Rotary Lodge Lane, Moncton NB',
        Website: '<a href="https://www.campcentennial.ca/" target="_blank">https://www.campcentennial.ca/</a>',
        Phone: '(506) 853-3507 ',
        Notes: 'Summer camp',
        Price: 'Paid',
    },
    {
        Institution: 'Capitol Theater Summer Camp',
        Category: 'Camps',
        Location: 'The Capitol Theatre 811 Main Street Moncton, New Brunswick E1C 1G1',
        Website: '<a href="https://capitol.nb.ca/en/summer-season" target="_blank">https://capitol.nb.ca/</a>',
        Phone: '(506)383-6200',
        Notes: 'Themed summer camps:',
        Price: 'Paid',
    },
    {
        Institution: 'Capitol Theater Summer Camp',
        Category: 'Camps',
        Location: 'The Capitol Theatre 811 Main Street Moncton, New Brunswick E1C 1G1',
        Website: '<a href="https://capitol.nb.ca/en/summer-season" target="_blank">https://capitol.nb.ca/</a>',
        Phone: '(506)383-6200',
        Notes: 'Themed summer camps: <br>- Into the Jungle <br>Super Heroes <br>-Musical smash-up <br>-Characters gone wild <br>-Theatre from A to Z <br>-Theatre Lab',
        Price: 'Paid',
    },
    {
        Institution: 'Magnetic Hill Zoo Camp',
        Category: 'Summer Camps',
        Location: '125 Magic Mountain Rd Moncton, NB E1G 4V7',
        Website: '<a href="https://www.zoodemagnetichillzoo.ca/summer-camp" target="_blank">https://www.zoodemagnetichillzoo.ca/</a>',
        Phone: '(506)877-7720',
        Notes: 'Summer camps ages 6-17 ',
        Price: 'Paid',
    },
    {
        Institution: 'Long & McQuade Music Lesson Centre',
        Category: 'Music',
        Location: '245 Carson Drive Moncton, New Brunswick, E1C 0M5',
        Website: '<a href="https://www.long-mcquade.com/lessons/" target="_blank">https://www.long-mcquade.com/</a>',
        Phone: '(506) 853-0888',
        Notes: 'Private and group music lessons, including acoustic & electric guitar, piano, drums, vocals, orchestral strings, brass, woodwinds.',
        Price: 'Paid',
    },
    {
        Institution: 'Sistema New Brunswick',
        Category: 'Music',
        Location: '211 Mill Road, Moncton, NB, E1A 4A7',
        Website: '<a href="https://sistemanb.ca/" target="_blank">https://sistemanb.ca/</a>',
        Phone: '(506) 387-7201',
        Notes: 'Free musical instruments instruction every weekday afternoon and Saturday mornings.',
        Price: 'Free',
    },
    {
        Institution: 'University of Moncton ',
        Category: 'Summer language classes',
        Location: '18 avenue Antonine-Maillet, Moncton NB E1A 3E9, Canada',
        Website: '<a href="https://www.umoncton.ca/learnfrench/immersion" target="_blank">https://www.umoncton.ca/</a>',
        Phone: '506.858.4121',
        Notes: 'French Immersion Programs Ages 11+',
        Price: 'Paid',
    },
    {
        Institution: 'Moncton Judo',
        Category: 'Sports',
        Location: 'Kay Arena-Crossman Community Center, 2nd floor, Smyth room 2nd Floor  Wynwood Drive, Moncton',
        Website: '<a href="https://monctonjudo.wordpress.com/" target="_blank">https://www.umoncton.ca/</a>',
        Phone: '877-7715 (front desk) or 384-4423 ext. 221',
        Notes: 'Judo classes',
        Price: 'Paid',
    },
    {
        Institution: 'Moncton Taekwondo',
        Category: 'Sports',
        Location: '17 Blackstone, Moncton, NB E1G 0P2',
        Website: '<a href="https://www.mktkd.com/" target="_blank">https://www.mktkd.com/</a>',
        Phone: '506 233-4990',
        Notes: 'Taekwondo classes',
        Price: 'Paid',
    },
    {
        Institution: 'Chung Won Institute of Taekwondo',
        Category: 'Sports',
        Location: '417 St. George Street, Moncton, NB E1C 1X5',
        Website: '<a href="https://www.chungwontaekwondo.ca/" target="_blank">https://www.chungwontaekwondo.ca/</a>',
        Phone: '506-855-5450',
        Notes: 'Snoopy Daycare: Martial Arts After School Program <br>Martial Arts Classes: Tai Chi, Taekwondo',
        Price: 'Paid',
    },
    {
        Institution: 'Moncton Youth Recreation Assistance Program MyRAP',
        Category: 'Financial Assistance ',
        Location: 'YMCA Greater Moncton 30 War Veterans Ave.',
        Website: '<a href="https://moncton.ymca.ca/wp-content/uploads/2021/09/MyRap_Application-2021.pdf" target="_blank">https://moncton.ymca.ca/</a>',
        Phone: '506-857-0606',
        Notes: 'Financial assistance to youth ages 4-18, who might not otherwise have the opportunity to enjoy organized sport or social activities.',
        Price: 'Financial assistance',
    },
    {
        Institution: 'Canadian Tire Jump Start Program',
        Category: 'Financial Assistance ',
        Location: 'Canadian Tire Jumpstart Charities',
        Website: '<a href="https://jumpstart.canadiantire.ca/pages/individual-child-grants" target="_blank">https://jumpstart.canadiantire.ca/</a>',
        Phone: '844-937-7529',
        Notes: 'Financial assistance to get kids into a sport or physical activity for families that can not afford it.',
        Price: 'Financial assistance',
    },
    {
        Institution: 'KidSport Fredericton, Moncton, Saint John',
        Category: 'Financial Assistance',
        Location: 'programs@sportnb.com',
        Website: '<a href="https://kidsportcanada.ca/new-brunswick/fredericton-moncton-saint-john/" target="_blank">https://kidsportcanada.ca/</a>',
        Phone: '506-451-1320',
        Notes: 'Provide grants to help cover the costs of registration fees so that all kids aged 18 and under in Miramichi can play a season of sport.',
        Price: 'Financial assistance',
    },
    {
        Institution: 'Estey',
        Category: 'Education, arts',
        Location: 'Fredericton',
        Website: '<a href="https://www.esteyart.com/" target="_blank">https://www.esteyart.com/</a>',
        Phone: '(506) 870 - 8302',
        Notes: 'One4One art program, after-School Art Program',
        Price: 'Paid',
    },
    {
        Institution: 'Learning Disabilities Association of New Brunswick',
        Category: 'Education',
        Location: '403 Regent Street, Suite 203 Fredericton, NB E3B 3X6',
        Website: '<a href="https://www.ldanb-taanb.ca/about/mission-statement/" target="_blank">https://www.ldanb-taanb.ca/</a>',
        Phone: '(506) 459-7852',
        Notes: 'Provide services for children with learning disabilities.',
        Price: 'Paid',
    },
    {
        Institution: 'The Ville',
        Category: 'Summer camps',
        Location: '241 Canada Street Fredericton, NB E3A 4A1',
        Website: '<a href="https://www.theville.ca/summer-camp" target="_blank">https://www.theville.ca/</a>',
        Phone: 'https://www.theville.ca/summer-camp',
        Notes: 'Summer camps Ages 5-12',
        Price: 'Paid',
    },
    {
        Institution: 'Hart Land',
        Category: 'Summer camp',
        Location: '2475 Woodstock Road Fredericton, NB E3C 1P6',
        Website: '<a href="https://www.harttisland.ca/resort-activities/summer-camps/" target="_blank">https://www.harttisland.ca/</a>',
        Phone: '(506)462-9400',
        Notes: ' Summer camps for children ages 6-11. Activities include sailing, canoeing, kayaking, rock climbing.',
        Price: 'Paid',
    },
    {
        Institution: 'Science East',
        Category: 'Science Club/Summer camp',
        Location: '668 Brunswick Street Fredericton, NB E3B 1H6',
        Website: '<a href="https://scienceeast.nb.ca/scienceclub/" target="_blank">https://scienceeast.nb.ca/</a>',
        Phone: '(506) 457-2340',
        Notes: 'After school club, Camps',
        Price: 'Paid',
    },
    {
        Institution: 'Enrich Kids',
        Category: 'Camp/After School Club',
        Location: '138 Dundonald St, Fredericton, NB E3B 1W8',
        Website: '<a href="https://www.enrichkidscentre.com/" target="_blank">https://www.enrichkidscentre.com/</a>',
        Phone: '(506) 455-5663',
        Notes: 'After school club, Camps',
        Price: 'Paid',
    },
    {
        Institution: 'Autism Connections Fredericton',
        Category: 'Special needs',
        Location: '1666 Lincoln Rd, Fredericton, NB E3B 8J6',
        Website: '<a href="https://autismconnectionsfredericton.com/camp-marvel" target="_blank">https://autismconnectionsfredericton.com/</a>',
        Phone: '(506)4506025',
        Notes: 'Aftercare Play Program, camps, support groups for families',
        Price: 'Paid',
    },
    {
        Institution: 'University of NB',
        Category: 'Camps',
        Location: '15 Dineen Drive Fredericton, New Brunswick',
        Website: '<a href="https://www.worldsunbound.ca/camps-on-campus" target="_blank">https://www.worldsunbound.ca/</a>',
        Phone: '506-230-5525',
        Notes: 'STEM Camps Grades 1 - 9',
        Price: 'Paid',
    },
    {
        Institution: 'Cedar Brook',
        Category: 'Early learning center/Camp',
        Location: '3532 Woodstock Rd., Fredericton NB',
        Website: '<a href="https://www.cedarbrookearlylearning.com/summer-camps/" target="_blank">https://www.cedarbrookearlylearning.com/</a>',
        Phone: '(506) 260-6256',
        Notes: 'Summer camps',
        Price: 'Paid',
    },
    {
        Institution: 'Maritime College of Forest Technology',
        Category: 'Summer camps',
        Location: '1350 Regent Street Fredericton New Brunswick',
        Website: '<a href="https://www.mcft.ca/summer-camps/" target="_blank">https://www.mcft.ca/</a>',
        Phone: ' (506) 458-0199',
        Notes: 'Forest Rangers summer camps',
        Price: 'Paid',
    },
    {
        Institution: 'Fredericton Jump Start',
        Category: 'Financial Assistance for sports',
        Location: 'Canadian Tire Jumpstart Charities',
        Website: '<a href="https://www.sportnb.com/jumpstart/" target="_blank">https://www.sportnb.com/</a>',
        Phone: '844-937-7529',
        Notes: 'Jumpstart helps kids overcome financial and accessibility barriers to sport and recreation.',
        Price: 'Financial Assistance for sports',
    },
    {
        Institution: 'Big Brothers Big Sisters/ BGC Miramichi',
        Category: 'Education, recreation, camps',
        Location: '115 Maher St., Miramichi NB, E1N 4B4',
        Website: '<a href="https://www.bbbsmiramichi.com/" target="_blank">https://www.bbbsmiramichi.com/</a>',
        Phone: '506-778-2444',
        Notes: '1. School Breakfast Program. <br>2. In School mentoring ages 5 - 14 <br>3.  Teens mentoring.<br>4.  Mini Police Academy for a full week<br>5. Go Girls! Healthy Bodies, girls ages 12 to 14',
        Price: 'Free',
    },
    {
        Institution: 'Camp Sheldrake',
        Category: 'Summer camps',
        Location: '89 Church Rd. Bartibog Bridge, N.B. (13 min. from Miramichi NB) ',
        Website: '<a href="https://www.campsheldrake.ca/" target="_blank">https://www.campsheldrake.ca/</a>',
        Phone: '(506)622-8907',
        Notes: 'Summer camps for youth between the ages of 6-17 years.',
        Price: 'Paid',
    },
    {
        Institution: 'Timberwolves',
        Category: 'Sports / Camps',
        Location: '487 King George Hwy Miramichi, New Brunswick E1V 1M5',
        Website: '<a href="https://www.miramichitimberwolves.ca/miramichi-timberwolves-2022-summer-hockey-camp" target="_blank">https://www.miramichitimberwolves.ca/</a>',
        Phone: '',
        Notes: 'Hockey courses and camps',
        Price: 'Paid',
    },
    {
        Institution: 'ARMNB',
        Category: 'Special needs',
        Location: '1 Allan St, Suite A, Miramichi, NB, E1V 6A9',
        Website: '<a href="https://armnb.com/our-services" target="_blank">https://armnb.com/</a>',
        Phone: '(506)622-8137',
        Notes: 'Offers a variety of services for families and individuals with an Autism Spectrum Disorder. Camps',
        Price: 'Paid',
    },
    {
        Institution: 'Atlantic Salmon Museum',
        Category: 'Camps',
        Location: '263 Main Street, Doaktown, NB',
        Website: '<a href="http://www.atlanticsalmonmuseum.com/summer-camp/" target="_blank">http://www.atlanticsalmonmuseum.com/</a>',
        Phone: '506-365-7787 ',
        Notes: 'Camps',
        Price: 'Paid',
    },
    {
        Institution: 'Golden Hawk Recreation Center',
        Category: 'Sports, Recreation',
        Location: '8 Pollard Blvd #2, Miramichi, NB E1N 6L6',
        Website: '<a href="http://www.miramichi.org/wp-content/uploads/2022/10/E3-Golden-Hawk-Gym-Schedule-2022-2023.pdf" target="_blank">http://www.miramichi.org/</a>',
        Phone: '(506)623-2300',
        Notes: 'Recreational programs and open community use.',
        Price: 'Free',
    },
    {
        Institution: 'Lindon Recreation Center',
        Category: 'Recreation, camps',
        Location: '487 King George Hwy, Miramichi, NB E1V 1M5',
        Website: '<a href="https://www.miramichi.org/community-centres/" target="_blank">https://www.miramichi.org/</a>',
        Phone: '(506)623-2300 ',
        Notes: 'Recreational programs and open community use.',
        Price: 'Free',
    },
    {
        Institution: 'City of Miramichi, Community Wellness & Recreation Department',
        Category: 'Sports, Recreation',
        Location: '94 General Manson Way Miramichi, N.B. E1N 6K8',
        Website: '<a href="http://www.miramichi.org/wp-content/uploads/2022/10/E2-2022-2023-Program-Listing.pdf" target="_blank">http://www.miramichi.org/</a>',
        Phone: '(506)623-2300',
        Notes: 'Recreation and aquatic programs, public skating',
        Price: 'Free',
    },
    {
        Institution: 'Miramichi Art Core',
        Category: 'Education',
        Location: '',
        Website: '<a href="https://www.miramichiartcore.ca/about/" target="_blank">https://www.miramichiartcore.ca/</a>',
        Phone: 'info@miramichiartcore.ca',
        Notes: 'Art classes',
        Price: 'Paid',
    },
    {
        Institution: 'Miramichi Kids Sports',
        Category: 'Financial assistance ',
        Location: 'programs@sportnb.com',
        Website: '<a href="https://kidsportcanada.ca/new-brunswick/miramichi/" target="_blank">https://kidsportcanada.ca/</a>',
        Phone: '506-451-1320',
        Notes: 'Provide grants to help cover the costs of registration fees so that all kids aged 18 and under in Miramichi can play a season of sport.',
        Price: 'Financial assistance for Sports',
    },
    {
        Institution: 'Multicultural Association of Sussex',
        Category: 'Sports, education',
        Location: '593 Main St. Sussex, NB E4E 7H5',
        Website: '<a href="https://mas-nb.ca/youth" target="_blank">https://mas-nb.ca/youth</a>',
        Phone: '(506) 432 1252',
        Notes: 'Ages 0-10 physical activity programs',
        Price: 'Free',
    },
    {
        Institution: 'Town of Sussex',
        Category: 'Sports',
        Location: '8th Hussars Sports Centre 8 Leonard Drive Sussex, NB E4E 5S1',
        Website: '<a href="https://sussex.ca/events/neon-roller-skating-party-4/" target="_blank">https://sussex.ca/</a>',
        Phone: '5064324573',
        Notes: 'Neon rolling skating party',
        Price: 'Paid',
    },
    {
        Institution: 'Mount Allison University',
        Category: 'Summer camps',
        Location: '62 York St. Sackville, NB E4L 1E2  CANADA',
        Website: '<a href="https://mta.ca/visitors/summer-camps" target="_blank">https://mta.ca/</a>',
        Phone: '(506)364-2251',
        Notes: 'Summer camps for elementary, middle, and high school students',
        Price: 'Paid',
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