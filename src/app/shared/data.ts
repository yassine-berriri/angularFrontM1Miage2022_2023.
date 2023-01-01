const bdInitialAssignments =
/* =[{"id":40
"nom":"Ilka",
"dateDeRendu":"2022-08-25",
"rendu":true,
"auteur":"yassine",
"note":15,
"remarque":"habatni",
"matiere":"java",
"urlSubjectImage":"assets/subjectImages/developpementWeb.png",
"urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg"
},*/
[

{"id":1,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":2,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":3,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":4,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":5,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":6,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":7,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":8,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":9,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":10,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":11,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":12,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":13,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":14,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":15,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":16,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":17,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":18,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":19,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":20,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":21,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":22,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":23,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":24,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":25,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":26,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":27,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":28,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":29,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":30,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":31,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":32,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":33,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":34,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":35,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":36,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":37,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":38,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":39,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":40,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":41,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":42,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":43,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":44,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":45,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":46,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":47,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":48,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":49,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":50,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":51,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":52,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":53,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":54,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":55,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":56,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":57,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":58,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":59,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":60,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":61,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":62,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":63,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":64,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":65,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":66,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":67,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":68,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":69,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":70,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":71,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":72,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":73,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":74,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":75,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":76,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":77,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":78,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":79,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":80,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":81,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":82,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":83,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":84,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":85,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":86,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":87,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":88,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":89,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":90,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":91,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":92,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":93,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":94,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":95,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":96,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":97,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":98,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":99,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":100,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":101,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":102,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":103,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":104,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":105,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":106,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":107,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":108,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":109,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":110,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":111,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":112,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":113,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":114,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":115,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":116,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":117,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":118,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":119,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":120,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":121,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":122,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":123,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":124,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":125,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":126,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":127,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":128,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":129,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":130,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":131,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":132,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":133,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":134,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":135,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":136,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":137,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":138,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":139,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":140,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":141,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":142,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":143,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":144,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":145,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":146,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":147,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":148,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":149,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":150,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":151,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":152,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":153,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":154,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":155,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":156,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":157,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":158,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":159,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":160,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":161,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":162,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":163,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":164,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":165,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":166,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":167,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":168,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":169,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":170,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":171,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":172,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":173,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":174,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":175,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":176,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":177,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":178,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":179,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":180,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":181,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":182,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":183,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":184,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":185,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":186,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":187,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":188,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":189,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":190,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":191,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":192,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":193,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":194,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":195,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":196,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":197,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":198,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":199,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":200,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":201,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":202,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":203,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":204,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":205,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":206,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":207,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":208,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":209,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":210,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":211,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":212,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":213,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":214,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":215,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":216,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":217,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":218,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":219,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":220,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":221,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":222,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":223,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":224,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":225,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":226,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":227,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":228,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":229,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":230,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":231,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":232,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":233,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":234,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":235,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":236,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":237,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":238,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":239,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":240,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":241,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":242,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":243,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":244,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":245,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":246,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":247,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":248,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":249,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":250,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":251,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":252,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":253,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":254,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":255,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":256,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":257,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":258,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":259,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":260,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":261,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":262,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":263,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":264,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":265,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":266,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":267,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":268,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":269,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":270,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":271,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":272,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":273,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":274,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":275,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":276,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":277,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":278,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":279,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":280,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":281,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":282,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":283,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":284,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":285,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":286,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":287,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":288,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":289,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":290,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":291,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":292,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":293,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":294,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":295,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":296,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":297,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":298,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":299,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":300,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":301,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":302,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":303,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":304,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":305,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":306,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":307,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":308,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":309,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":310,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":311,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":312,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":313,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":314,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":315,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":316,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":317,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":318,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":319,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":320,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":321,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":322,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":323,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":324,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":325,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":326,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":327,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":328,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":329,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":330,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":331,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":332,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":333,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":334,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":335,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":336,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":337,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":338,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":339,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":340,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":341,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":342,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":343,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":344,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":345,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":346,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":347,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":348,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":349,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":350,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":351,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":352,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":353,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":354,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":355,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":356,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":357,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":358,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":359,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":360,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":361,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":362,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":363,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":364,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":365,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":366,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":367,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":368,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":369,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":370,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":371,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":372,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":373,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":374,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":375,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":376,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":377,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":378,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":379,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":380,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":381,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":382,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":383,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":384,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":385,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":386,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":387,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":388,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":389,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":390,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},
{"id":391,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":392,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":393,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":394,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":395,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":396,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":397,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":398,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":399,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":400,"nom":"Verene","auteur":"Mullis","note":18,"remarque":"University of Peloponnese","dateDeRendu":"2022-08-03","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},


{"id":401,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":402,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":403,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":404,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":405,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":406,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":407,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":408,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":409,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":411,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":412,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":413,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":414,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":415,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":416,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":417,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":418,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":419,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":421,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":422,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":423,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":424,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":425,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":426,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":427,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":428,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":429,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":431,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":432,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":433,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":434,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":435,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":436,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":437,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":438,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":439,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":441,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":442,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":443,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":444,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":445,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":446,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":447,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":448,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":449,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":451,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":452,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":453,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":454,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":455,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":456,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":457,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":458,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":459,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":461,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":462,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":463,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":464,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":465,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":466,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":467,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":468,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":469,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":471,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":472,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":473,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":474,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":475,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":476,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":477,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":478,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":479,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":481,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":482,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":483,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":484,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":485,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":486,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":487,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":488,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":489,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":491,"nom":"Trev","auteur":"Broscombe","note":16,"remarque":"Ho Chi Minh City University of Technology","dateDeRendu":"2022-05-17","rendu":true,"urlSubjectImage":"assets/subjectImages/developpementWeb.png","urlTeacherImage":"assets/teacherImages/Michel-Buffa.jpg","matiere":"Developpement web"},

{"id":492,"nom":"Jeannine","auteur":"Toffolo","note":6,"remarque":"Ecole Superieure Robert de Sorbon","dateDeRendu":"2022-08-07","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":493,"nom":"Melantha","auteur":"Mabbitt","note":1,"remarque":"International School of Business Management","dateDeRendu":"2022-01-02","rendu":true,"urlSubjectImage":"assets/subjectImages/java.png","urlTeacherImage":"assets/teacherImages/lahire.jpeg","matiere":"Prog avancé java"},

{"id":494,"nom":"Tristam","auteur":"Quinevan","note":6,"remarque":"Ganja State University ","dateDeRendu":"2022-10-30","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":495,"nom":"Jeremy","auteur":"Edginton","note":15,"remarque":"Universidad de Carabobo","dateDeRendu":"2022-09-05","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":496,"nom":"Gussie","auteur":"Filyushkin","note":7,"remarque":"Kyoritsu Woman's University","dateDeRendu":"2022-03-20","rendu":true,"urlSubjectImage":"assets/subjectImages/planificationDeProjet.svg","urlTeacherImage":"assets/teacherImages/michelWinter.webp","matiere":"planification de projet"},

{"id":497,"nom":"Aeriell","auteur":"Merrywether","note":20,"remarque":"Hogeschool voor de Kunsten Utrecht (HKU)","dateDeRendu":"2022-08-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":498,"nom":"Petronia","auteur":"Roskruge","note":10,"remarque":"Mount Carmel College of Nursing","dateDeRendu":"2022-03-06","rendu":true,"urlSubjectImage":"assets/subjectImages/baseDeDonnees.png","urlTeacherImage":"assets/teacherImages/Galli.jpg","matiere":"base de données"},

{"id":499,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

{"id":500,"nom":"Merrel","auteur":"Gimblet","note":15,"remarque":"Hormozgan University of Medical Sciences","dateDeRendu":"2022-10-12","rendu":true,"urlSubjectImage":"assets/subjectImages/bigData.png","urlTeacherImage":"assets/teacherImages/leoDonati.jpg","matiere":"Big data"},

];


export { bdInitialAssignments };