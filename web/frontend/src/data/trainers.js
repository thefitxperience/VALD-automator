// All branches and trainers for Body Motions and Body Masters.
// whatsapp: "" → fill in with international format e.g. "+966XXXXXXXXX"

const TRAINERS = {
  "Body Motions": {
    "RUH - Al Malaz": ["Hadir Nasr Mohamed","Taif Saad Alahmari","Areej Hajj Abdallah","Zouhaira Al-Omrani","Sarah Shaabane","Taghrid Khaled","Ikram Gueddes","Moroj Samir Abdel Hamid","Nadine Ghaleb"],
    "RUH - Al Sahafa": ["Sara Said","Rania Manita","Shefa Ghazi","Kholoud Khaled","Safaa Karim","Maram Tlili","Malek Belguith","Manel Manasria","Sirine Mohamed Hamdi","Guesmi Kholoud"],
    "RUH - Al Aarid": ["Maryam Al-Qawsari","Shaden Omar","Hidaya Moubarak","Safa Al Saggadi","Malak Al Zahabi","Chaza Ben Miled","Nada Mohamed Khalifa","Warda Al Hajji"],
    "RUH - Al Fayha": ["Feryel Ben Nacer","Al Anoud Saleh Al-Qablan","Khawla Saif","Asmaa Adel","Hind Al Ahmad","Ebtihal Al Kathiri","Walaa Kamel","Asmaa Ahmed"],
    "RUH - Al Uraija": ["Aya Al-Jallouli","Hadiya Al-Mohammad","Khouloud Wanna","Rania Bahloul","Sarah Rasheeq","Sanae Hassel","Basnat Abdel Qawi"],
    "RUH - Badr": ["Seham Hussein","Nawal Akermi","Amal Al-Bjeoui","Rihem Hossam","Hadeer Ibrahim Gamal","Arwa Ahmed Baflah","Shorouq Osama Metwaly Ibrahim"],
    "RUH - Al Badia": ["Rajae Al-Jabouji","Maram Farhawi","Safa Radif","Nermin Hadi Debaya","Hasna AlKayyal","Takwa Abdelly"],
    "JED - Al Basateen": ["Iman Kouisseh","Raghad Al Bir Qaddar","Ranim Brahmi","Sabrine Al Amine","Mouna Farhat","Salwa Mlaiki","Reyouf Saad","Shurooq Amer","Maha Fayez Al Ahmari"],
    "JED - Al Faisaliyah": ["Wiem Dridi","Shourooq Al Jundi","Mariam Baomar","Ines Rezgui","Kholod Khaled","Hajer Jamal Al-Deen Khalifa Ali","Chourouk Sherif","Hala Saied"],
    "JED - Al Naeem": ["Maysem Mohamed","Lamia Al Amer","Shayma Abbes","Asayel Sultan","Sara Mahdi","Asmaa Shehata","Diaa Sobhi","Nahla Al Hajri"],
    "DMM - Al Faisaliyah": ["Sirine Jawadi","Moulouk Al Lawi","Rasha Hamid","Soulaima Hassan","Rahma Qays","Cyrine Ali","Al Bandari Al Harbi","Mirna Mostafa","Nourhan Hosny"],
    "DMM - Al Jalawiah": ["Emna Ben Chalbia","Chaima Gharsalli","Asmaa Ashraf","Aya Maayoufi","Chaima Boutita","Asmaa Mahmoud"],
    "ALQ - Buraidah": ["Mai Mosleh","Chayma Hannachi","Malath Suleiman Alshamasi","Anwar Ben Rhayem","Lulu Alzaaj","Raja Reeba","Aya Mahmoud Abed Al-Wanis","Ines Souissi","Nouran Emad Jad","Nourhan Ehab Amarah","Anfal Nasser Alhusseini","Rawiya Alarousi Mabrouk"],
    "ALQ - Unaizah": ["Samar Lajnef","Asmaa Aalaa Al-Din","Esraa Labib Noomani","Rim Chabi","Yosra Al-Mzoughi","Roua Al-Hashemi Bin Naeimah","Rana Mohammad Hassan Aaref"],
    "Al Ahsaa": ["Samar Mohammed","Mona Maatouq","Afnan Khalid","Marwa Almudyni","Amina Mohammad Mosbeh","Iman Aboushosha"],
    "AlUla": ["Walaa Ahmed","Amal Saleh","Bayan Al-Anzi","Hanin Barrani","Rehab Naji Al-Nasri","Khouloud Suibgui"],
    "Tabuk": ["Amal Saad","Bassant Majed Eid","Marwa Jendoubi","Sahar Mrad Berguiga","Ishraf Mohamed Al-Zaghdoudi","Nada Ahmed Mohamed","Rasha Abu Hassan"],
  },

  "Body Masters": {
    "RUH - Al Malaz": ["Abdallah Kamal Ahmad Sayid","Adnan Abdallah Al Jahni","Adnan Abdallah Aljahny","Chady Taha Abdel Rahman","Hicham Mahboub","Mahmoud Bakry","Mohamed Elshabrawy","Mohaned Ahmad","Omar Ismael","Omar Saoud","Trainer Ismail","Yassine Abbich"],
    "RUH - Al Massif": ["Mohamad Touri","Mahmoud Abdel Rahim Senussi","Ossama Almaslout","Amer Abid","Mohammed Hida","Youssef Lekal","Hamza Said","Oussama Elbaz","Alaa Fathy","Hany Mohamed Yousif Elhadad","Sleiman Al Tayyar","Abed El Hakim Sahou","Asmah Choukeni","Saleh Al Abed","Ahmed Shoeeb","Anouar Aghmour","Mohammad Souud","Ahmed Keshk","Jayson Atlano","Mahmoud Abdel Rahim Senussi Kame"],
    "RUH - Al Aarid": ["Abed Al Menhem Mhamad","Mhamad El Ebri","Chehab Al Dine Al Salihi","Mohamad Rida Irabi","Mahmoud Abed El Rahim","Captain Housein Ali Joumaa","Diyaa Al Jraydan","Mourad Belgacem","Mahmoud Yosri Mahmoud Mahfouz","Amr El Sayed Abdelhamid","Moustafa Nasser Abd Elkader","Khalid Mouazen"],
    "RUH - Al Sahafa": ["Mohamad Fouad G. Amer","Ahmad H. Abed Al Latif","Hisham M. Badih","Diya Y. Aljirdan","Mohamad Zakariah","Rrnniel Villaverde","Magomed Ansarov","Zakaria Jawadi","Renelle Vilaverdi","Badereddine Bouzahar","Safaa Karim","Fawzi Baltaji","Akram M. Hussin","Zakaria Yahia","Youssef Noreddine","Ahmad Fadel","Rachid Sakouti","Hamza Sanbar","Ayman N. Al Chahawi"],
    "RUH - Al Wadi": ["Ahmed Hamid Abdelltif Nogalla","Bander Albalawi","El Kaddioui Adil","Shamsudheen Paramban","Ibrahim Mohamed Fadel Abduljalil Barakat","Abdellatif Zamzim"],
    "RUH - Eshbilia": ["Bilel Azhar Yakoubi","Houssam Ali Elsheshtawy","Marwan Al-Jebali","Mohamed Ibrahim Ibrahim Abouelrous","Ibrahim Mostafa","Mohamd Refai Mohamd","Saud Turki Alqasir"],
    "RUH - Muzahmiyah": ["Khalifa El Nahrawy","Ayoub Benzahra","Abdssamad Aballa","Nabil Essahraoui"],
    "RUH - Rabwa": ["Aref Hebatala","Alaa Eddine Rtili","Abderrazak Sihabi","Mostafa Ashour Elkhouly"],
    "RUH - Salam": ["Hicham Mouhime","Abdellatif Zamzam","Fady Elsayed","Mohamed Kamal"],
    "RUH - Swaidi": ["Nasser Mansour Nasser Alessa","Mohammed Nshbat","Naoufel Jabnouni","Khalid Chatir","Mohammed Korchi"],
    "RUH - Takhasousi": ["Abdenabi Ktraouach","Fikri Acharif","Abdou Wahed Zraidi","Ahmed Abdelrahman","Salman Altayyar","Wasem Seed Alhajree","Khalid Nokracchi","Taib Jadia","Mahmoud Nagib","Saeed Al Adrham"],
    "RUH - Al Badia": ["Abderrazak Sihabi","Adil Elqady","Adil Chahmi","Amine Korchi","El Mehdi Adnani","Mohamed Saeed","Selim Ben Abdelkader","Mahmoud Fotoh","Khalifa Hassan Khalifa Nahrawy","Mohamad Mahdim Alqahtani"],
    "RUH - Al Fayha": ["Faraj Lakaira","Mahmoud Al Mahdi","Ahmad Hamdi Knawi","Kamal Al-Rayes","Asser Al-Sheikh","Hamza Aissaoui","Hicham Mouhime","Hicham Toualbi","Ibrahim Pokoti"],
    "RUH - Al Khaleej": ["Ahmad Ramadan","Chouaib Suilmi","Elsayed Fouad","Karim Hosny Ahmad","Mohamed Hassan Ali Hassan","Mohamed Moustafa Ahmad","Sameh Houssein Ali Abed Al-Wahid","Oussama Ait Hammou Obrahim","Zakaria Elouali"],
    "RUH - Al Kharj": ["Mahmoud Mohamed","Mohamed Hamdan Mohamed","Adel Ali Mohamed","Boujemaa Elakkad","Nabil Essahraoui","Yassine El Barnoussi"],
    "RUH - Al Nahda": ["Achraf Fadlallah","Majid Abdessamad","Mhamed Oulahssine","Ramy Alla Tawfeak Ahmed","Rhey Anthony T. Munez","Youssef Al Habib Trabelsi"],
    "RUH - Badr": ["Adawi Abdelmounnmadawi","Kamel Mohammed Kamel","Khalled Saeed Saeed Alhasany","Mahmoud Farouk Abdel Karim Badawi","Mohammed Bstan Abd Aljwad","Mohammed Mubarak Mohammed Aldawsari"],
    "RUH - Ezdehar": ["Ahmed Maher Ahmed Nasrelden","Hesham Rady Ismail Rady","Mohsen Hadikhamis","Tarik Maarouf","Ibrahim Ali Ismaiel Ibrahim","Wajih Kamal Matoussi"],
    "RUH - Murooj": ["Abdelaziz El Maydy","Amr Ahmed Abdellatif Rabia","Cherif Bin Ahmed Khlifi"],
    "RUH - Shubra": ["Abdessamade Moudakkir","Ahmed Maher Elsayed Abdelaal","Hicham Oulias","Mohammed Abdullah Alquwaya","Mohammed Mahdi Adham Nabhan","Osman Nagi Osman","Rachid Choukhmane","Tariq Abdulrahman Basharahil"],
    "DMM - Al Athir": ["Abdullah Abdulrahman","Abdulrahman Ali","Anas Al-Makenzi","Ibrahim Salama","Mohamed Abdel Moeti","Mohamed Rabhi","Rashid Elbouazizi"],
    "DMM - Al Jameyeen": ["Hesham Adel Almarshoud","Hicham Hassi","Jamal Halabi Assiri","Mohamed Abdellatif Radwan","Mohamed Abdelsalam Deyab","Mohamed Elsayed Elzeftawy","Mohamed Khalid Manni","Nader Maayouf Saleh"],
    "DMM - Hufof": ["Ahmad Abdelgafour Omar Ahmad","Abdelrahman Mohamed","Khalid Karmou","Shehab Ashraf Mohamady Ibrahim"],
    "DMM - Khobar": ["Abbas Okasha","Abd Elrahem Al Ouina","Abed AlWasi","Khalid Mahmoud Saleh","Mahmoud Hassan","Radwan Mohamed Radwan","Shahid Elkhalfy"],
    "JED - Hamadania": ["Abd Elramhan Mokhtar","Mohamed Fathi Abdulsattar","Abdullah Mohammed Alhamdni","Mohamed Ibrahim Mohamed","Musa Eltom Ahmed"],
    "JED - JDR": ["Abdallah Kandaly","Ibrahim Nasr","Khaled Al-Masouri","Sami Serrar","Sofiane Sadiq","Tawfik Jukh"],
    "JED - Al Rawdah": ["Youssef Souayah","Muhmoud Ayman Saad","Ahmed Elsayed Algammal"],
    "JED - Makkah": ["Adel Mohammed Abdullah Al-Daos","Imad Al-Zahrani","Khaled Al Barkawi","Mahmoud Al Bihery","Mohamed Ait Ayad","Mohamed Gamea","Omar Al Shankety"],
    "JED - Obhor": ["Hesham Galal Mahmoud","Karim Abdala Wassal","Mohammed Joharji","Mohammed Mustafa Himsi"],
    "ALQ - Al Rass": ["Yousef Bou Kentar","Hicham Hemsi"],
    "ALQ - Buraidah": ["Oussema Boussaid","Mouad Omir","Orley Garcia","Yasser Mahmoud","Kamis Zamzam"],
    "ALQ - Unaizah": ["Mohamed Jaouat","Mohamed Amzil","Mohamed Othman Gazy","Karim Maarori"],
    "MED - Shouran": ["Abdel Ghafour Bahja","Anas Mohmmed Alshanqiti","Lakhdari Abdellatif","Mohamed Soliman Ragab","Sheref Ashraf Mohamed"],
    "MED - Taiba": ["Abdelaziz Mohi Eldin Elkhouli","Abdulwahab Ahmed Saad Al Ghamdi","Amgad Hussein Abbas Abdulaal","Mostafa Mahmoud Sayed Mohamed","Rabah Salamah Alhujuri","Samer Mohammed Abas Kamber"],
    "Uhud": ["Abdallah Mohamed Ali","Ahmad Al-Dawkhi","Ali Ahmed Alkhadhir","Hassan Ait Hmida","Hamza Berahhou","Khaled Ezzat","Mohammed Abdelhamid","Moulay Al Hussein","Wael Mohammed"],
    "AlUla": ["Ahmed Abdelmaqsoud","Ahmed Elsayed","Ahmed Khaled","Ahmed Khaled El Said","ElHassan Nagub","Hussein Elsayed","Mohamad Amine Azhar","Mohannad Hani","Moamed Ata","Yassin Mbarek"],
    "Al Mubaraz": ["Abdallah Lazam Faisal Al-Asadi","Abdul Raouf Mustafa","Hamza Moustaghfir","Joesel Bodota Casimiro","Mohamed Fouad Amer","Ammar Tarek Fathi Ibrahim Ali Mahmoud","Radi Gamal Osman Hussein","Sabry Ali Abdelmonem Ezzah","Mahmoud El-Sayed Abdelwareth Radwan"],
    "Hafr El Batin": ["Ahmed Saad Elmamlouk","Enrique Jr Ravallo-Macorol","Mohamed Abdel Manaam Yakout","Mohamed Achraf Abed Al-Mawjoud","Mohamed Ibrahim Abdelaal"],
    "Tabuk": ["Miloud Baali","Mohammad Nour Al-Din Awad Mohammad","Mohammad Ismail","Mostafa Hamada","Anas Jouhari","Tamer Sharkas"],
    "Najran": ["Abdaleleh Naser Ahmed","Ibrahim Refat Abdellatif","Wadhah Ahmed Ahmed Mahyub","Ahmed Mohamed Ahmed Fadol","Said Ennasr"],
    "Khamis Mushait": ["Amin Haron","Eslam Rezk","Hamdy Helal","Ali Alkobebi","Ibrahem Zahran","Mustapha Selaoui","Mohammed Ayed"],
    "Hail": ["Abdallah Laghzal","Ahmad Chiboub","Ali Mohamed Ali Mohamed","Bassam Ahmad Al-Salhani","Hatem Kamal Hatiba","Wagih Al-Saadani"],
  },
}

export function getBranches(gym) {
  return Object.keys(TRAINERS[gym] || {})
}

export function getTrainers(gym, branch) {
  return (TRAINERS[gym] || {})[branch] || []
}

export function getAllTrainers(gym) {
  return Object.values(TRAINERS[gym] || {}).flat()
}

export function getBranchForTrainer(gym, trainerName) {
  for (const [branch, trainers] of Object.entries(TRAINERS[gym] || {})) {
    if (trainers.includes(trainerName)) return branch
  }
  return null
}

export default TRAINERS
