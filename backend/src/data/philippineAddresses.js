// Comprehensive Philippine Address Data
// Hierarchy: Region → Province → City → Barangay

export const philippineAddresses = {
  // 17 Regions of the Philippines
  regions: [
    { code: 'NCR', name: 'National Capital Region (NCR)' },
    { code: 'CAR', name: 'Cordillera Administrative Region (CAR)' },
    { code: 'REGION_1', name: 'Region I - Ilocos Region' },
    { code: 'REGION_2', name: 'Region II - Cagayan Valley' },
    { code: 'REGION_3', name: 'Region III - Central Luzon' },
    { code: 'REGION_4A', name: 'Region IV-A - CALABARZON' },
    { code: 'REGION_4B', name: 'Region IV-B - MIMAROPA' },
    { code: 'REGION_5', name: 'Region V - Bicol Region' },
    { code: 'REGION_6', name: 'Region VI - Western Visayas' },
    { code: 'REGION_7', name: 'Region VII - Central Visayas' },
    { code: 'REGION_8', name: 'Region VIII - Eastern Visayas' },
    { code: 'REGION_9', name: 'Region IX - Zamboanga Peninsula' },
    { code: 'REGION_10', name: 'Region X - Northern Mindanao' },
    { code: 'REGION_11', name: 'Region XI - Davao Region' },
    { code: 'REGION_12', name: 'Region XII - SOCCSKSARGEN' },
    { code: 'REGION_13', name: 'Region XIII - CARAGA' },
    { code: 'BARMM', name: 'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)' },
  ],

  // Provinces grouped by region
  provinces: {
    NCR: [
      { code: 'NCR', name: 'Metro Manila' },
    ],
    CAR: [
      { code: 'ABRA', name: 'Abra' },
      { code: 'APAYAO', name: 'Apayao' },
      { code: 'BENGUET', name: 'Benguet' },
      { code: 'IFUGAO', name: 'Ifugao' },
      { code: 'KALINGA', name: 'Kalinga' },
      { code: 'MOUNTAIN_PROVINCE', name: 'Mountain Province' },
    ],
    REGION_1: [
      { code: 'ILOCOS_NORTE', name: 'Ilocos Norte' },
      { code: 'ILOCOS_SUR', name: 'Ilocos Sur' },
      { code: 'LA_UNION', name: 'La Union' },
      { code: 'PANGASINAN', name: 'Pangasinan' },
    ],
    REGION_2: [
      { code: 'BATANES', name: 'Batanes' },
      { code: 'CAGAYAN', name: 'Cagayan' },
      { code: 'ISABELA', name: 'Isabela' },
      { code: 'NUEVA_VIZCAYA', name: 'Nueva Vizcaya' },
      { code: 'QUIRINO', name: 'Quirino' },
    ],
    REGION_3: [
      { code: 'AURORA', name: 'Aurora' },
      { code: 'BATAAN', name: 'Bataan' },
      { code: 'BULACAN', name: 'Bulacan' },
      { code: 'NUEVA_ECIJA', name: 'Nueva Ecija' },
      { code: 'PAMPANGA', name: 'Pampanga' },
      { code: 'TARLAC', name: 'Tarlac' },
      { code: 'ZAMBALES', name: 'Zambales' },
    ],
    REGION_4A: [
      { code: 'BATANGAS', name: 'Batangas' },
      { code: 'CAVITE', name: 'Cavite' },
      { code: 'LAGUNA', name: 'Laguna' },
      { code: 'QUEZON', name: 'Quezon' },
      { code: 'RIZAL', name: 'Rizal' },
    ],
    REGION_4B: [
      { code: 'MARINDUQUE', name: 'Marinduque' },
      { code: 'OCCIDENTAL_MINDORO', name: 'Occidental Mindoro' },
      { code: 'ORIENTAL_MINDORO', name: 'Oriental Mindoro' },
      { code: 'PALAWAN', name: 'Palawan' },
      { code: 'ROMBLON', name: 'Romblon' },
    ],
    REGION_5: [
      { code: 'ALBAY', name: 'Albay' },
      { code: 'CAMARINES_NORTE', name: 'Camarines Norte' },
      { code: 'CAMARINES_SUR', name: 'Camarines Sur' },
      { code: 'CATANDUANES', name: 'Catanduanes' },
      { code: 'MASBATE', name: 'Masbate' },
      { code: 'SORSOGON', name: 'Sorsogon' },
    ],
    REGION_6: [
      { code: 'AKLAN', name: 'Aklan' },
      { code: 'ANTIQUE', name: 'Antique' },
      { code: 'CAPIZ', name: 'Capiz' },
      { code: 'GUIMARAS', name: 'Guimaras' },
      { code: 'ILOILO', name: 'Iloilo' },
      { code: 'NEGROS_OCCIDENTAL', name: 'Negros Occidental' },
    ],
    REGION_7: [
      { code: 'BOHOL', name: 'Bohol' },
      { code: 'CEBU', name: 'Cebu' },
      { code: 'NEGROS_ORIENTAL', name: 'Negros Oriental' },
      { code: 'SIQUIJOR', name: 'Siquijor' },
    ],
    REGION_8: [
      { code: 'BILIRAN', name: 'Biliran' },
      { code: 'EASTERN_SAMAR', name: 'Eastern Samar' },
      { code: 'LEYTE', name: 'Leyte' },
      { code: 'NORTHERN_SAMAR', name: 'Northern Samar' },
      { code: 'SAMAR', name: 'Samar (Western Samar)' },
      { code: 'SOUTHERN_LEYTE', name: 'Southern Leyte' },
    ],
    REGION_9: [
      { code: 'ZAMBOANGA_DEL_NORTE', name: 'Zamboanga del Norte' },
      { code: 'ZAMBOANGA_DEL_SUR', name: 'Zamboanga del Sur' },
      { code: 'ZAMBOANGA_SIBUGAY', name: 'Zamboanga Sibugay' },
    ],
    REGION_10: [
      { code: 'BUKIDNON', name: 'Bukidnon' },
      { code: 'CAMIGUIN', name: 'Camiguin' },
      { code: 'LANAO_DEL_NORTE', name: 'Lanao del Norte' },
      { code: 'MISAMIS_OCCIDENTAL', name: 'Misamis Occidental' },
      { code: 'MISAMIS_ORIENTAL', name: 'Misamis Oriental' },
    ],
    REGION_11: [
      { code: 'DAVAO_DE_ORO', name: 'Davao de Oro' },
      { code: 'DAVAO_DEL_NORTE', name: 'Davao del Norte' },
      { code: 'DAVAO_DEL_SUR', name: 'Davao del Sur' },
      { code: 'DAVAO_OCCIDENTAL', name: 'Davao Occidental' },
      { code: 'DAVAO_ORIENTAL', name: 'Davao Oriental' },
    ],
    REGION_12: [
      { code: 'COTABATO', name: 'Cotabato (North Cotabato)' },
      { code: 'SARANGANI', name: 'Sarangani' },
      { code: 'SOUTH_COTABATO', name: 'South Cotabato' },
      { code: 'SULTAN_KUDARAT', name: 'Sultan Kudarat' },
    ],
    REGION_13: [
      { code: 'AGUSAN_DEL_NORTE', name: 'Agusan del Norte' },
      { code: 'AGUSAN_DEL_SUR', name: 'Agusan del Sur' },
      { code: 'DINAGAT_ISLANDS', name: 'Dinagat Islands' },
      { code: 'SURIGAO_DEL_NORTE', name: 'Surigao del Norte' },
      { code: 'SURIGAO_DEL_SUR', name: 'Surigao del Sur' },
    ],
    BARMM: [
      { code: 'BASILAN', name: 'Basilan' },
      { code: 'LANAO_DEL_SUR', name: 'Lanao del Sur' },
      { code: 'MAGUINDANAO', name: 'Maguindanao' },
      { code: 'SULU', name: 'Sulu' },
      { code: 'TAWI_TAWI', name: 'Tawi-Tawi' },
    ],
  },

  cities: {
    // Metro Manila (NCR)
    NCR: [
      { code: 'MANILA', name: 'Manila' },
      { code: 'QUEZON', name: 'Quezon City' },
      { code: 'MAKATI', name: 'Makati' },
      { code: 'TAGUIG', name: 'Taguig' },
      { code: 'PASIG', name: 'Pasig' },
      { code: 'MANDALUYONG', name: 'Mandaluyong' },
      { code: 'SAN_JUAN', name: 'San Juan' },
      { code: 'MARIKINA', name: 'Marikina' },
      { code: 'CALOOCAN', name: 'Caloocan' },
      { code: 'MALABON', name: 'Malabon' },
      { code: 'NAVOTAS', name: 'Navotas' },
      { code: 'VALENZUELA', name: 'Valenzuela' },
      { code: 'LAS_PINAS', name: 'Las Piñas' },
      { code: 'MUNTINLUPA', name: 'Muntinlupa' },
      { code: 'PARANAQUE', name: 'Parañaque' },
      { code: 'PASAY', name: 'Pasay' },
      { code: 'PATEROS', name: 'Pateros' },
    ],
    
    // Major provinces with key cities
    CAVITE: [
      { code: 'BACOOR', name: 'Bacoor' },
      { code: 'CAVITE_CITY', name: 'Cavite City' },
      { code: 'DASMARINAS', name: 'Dasmariñas' },
      { code: 'GENERAL_TRIAS', name: 'General Trias' },
      { code: 'IMUS', name: 'Imus' },
      { code: 'TAGAYTAY', name: 'Tagaytay' },
      { code: 'TRECE_MARTIRES', name: 'Trece Martires' },
    ],
    
    LAGUNA: [
      { code: 'BINAN', name: 'Biñan' },
      { code: 'CABUYAO', name: 'Cabuyao' },
      { code: 'CALAMBA', name: 'Calamba' },
      { code: 'SAN_PABLO', name: 'San Pablo' },
      { code: 'SAN_PEDRO', name: 'San Pedro' },
      { code: 'SANTA_ROSA', name: 'Santa Rosa' },
    ],
    
    RIZAL: [
      { code: 'ANTIPOLO', name: 'Antipolo' },
      { code: 'CAINTA', name: 'Cainta' },
      { code: 'SAN_MATEO', name: 'San Mateo' },
      { code: 'TAYTAY', name: 'Taytay' },
    ],
    
    BULACAN: [
      { code: 'MALOLOS', name: 'Malolos' },
      { code: 'MEYCAUAYAN', name: 'Meycauayan' },
      { code: 'SAN_JOSE_DEL_MONTE', name: 'San Jose del Monte' },
    ],
    
    PAMPANGA: [
      { code: 'ANGELES', name: 'Angeles' },
      { code: 'MABALACAT', name: 'Mabalacat' },
      { code: 'SAN_FERNANDO_PAMP', name: 'San Fernando' },
    ],
    
    BATANGAS: [
      { code: 'BATANGAS_CITY', name: 'Batangas City' },
      { code: 'LIPA', name: 'Lipa' },
      { code: 'TANAUAN', name: 'Tanauan' },
    ],
    
    CEBU: [
      { code: 'CEBU_CITY', name: 'Cebu City' },
      { code: 'LAPU_LAPU', name: 'Lapu-Lapu' },
      { code: 'MANDAUE', name: 'Mandaue' },
      { code: 'TALISAY_CEBU', name: 'Talisay' },
    ],
    
    DAVAO_DEL_SUR: [
      { code: 'DAVAO_CITY', name: 'Davao City' },
      { code: 'DIGOS', name: 'Digos' },
    ],
    
    ILOILO: [
      { code: 'ILOILO_CITY', name: 'Iloilo City' },
    ],
    
    PANGASINAN: [
      { code: 'DAGUPAN', name: 'Dagupan' },
      { code: 'ALAMINOS', name: 'Alaminos' },
      { code: 'SAN_CARLOS_PANG', name: 'San Carlos' },
      { code: 'URDANETA', name: 'Urdaneta' },
    ],
    
    // Add placeholder for other provinces (cities can be added later)
    ABRA: [{ code: 'BANGUED', name: 'Bangued' }],
    AGUSAN_DEL_NORTE: [{ code: 'BUTUAN', name: 'Butuan' }],
    AGUSAN_DEL_SUR: [{ code: 'SAN_FRANCISCO', name: 'San Francisco' }],
    AKLAN: [{ code: 'KALIBO', name: 'Kalibo' }],
    ALBAY: [{ code: 'LEGAZPI', name: 'Legazpi' }],
    ANTIQUE: [{ code: 'SAN_JOSE_ANTIQUE', name: 'San Jose de Buenavista' }],
    APAYAO: [{ code: 'KABUGAO', name: 'Kabugao' }],
    AURORA: [{ code: 'BALER', name: 'Baler' }],
    BASILAN: [{ code: 'ISABELA_BASILAN', name: 'Isabela City' }],
    BATAAN: [{ code: 'BALANGA', name: 'Balanga' }],
    BATANES: [{ code: 'BASCO', name: 'Basco' }],
    BENGUET: [{ code: 'BAGUIO', name: 'Baguio City' }, { code: 'LA_TRINIDAD', name: 'La Trinidad' }],
    BILIRAN: [{ code: 'NAVAL', name: 'Naval' }],
    BOHOL: [{ code: 'TAGBILARAN', name: 'Tagbilaran' }],
    BUKIDNON: [{ code: 'MALAYBALAY', name: 'Malaybalay' }, { code: 'VALENCIA', name: 'Valencia' }],
    CAGAYAN: [{ code: 'TUGUEGARAO', name: 'Tuguegarao' }],
    CAMARINES_NORTE: [{ code: 'DAET', name: 'Daet' }],
    CAMARINES_SUR: [{ code: 'NAGA', name: 'Naga' }, { code: 'IRIGA', name: 'Iriga' }],
    CAMIGUIN: [{ code: 'MAMBAJAO', name: 'Mambajao' }],
    CAPIZ: [{ code: 'ROXAS', name: 'Roxas City' }],
    CATANDUANES: [{ code: 'VIRAC', name: 'Virac' }],
    COTABATO: [{ code: 'KIDAPAWAN', name: 'Kidapawan' }],
    DAVAO_DE_ORO: [{ code: 'NABUNTURAN', name: 'Nabunturan' }],
    DAVAO_DEL_NORTE: [{ code: 'TAGUM', name: 'Tagum' }],
    DAVAO_OCCIDENTAL: [{ code: 'MALITA', name: 'Malita' }],
    DAVAO_ORIENTAL: [{ code: 'MATI', name: 'Mati' }],
    DINAGAT_ISLANDS: [{ code: 'SAN_JOSE_DINAGAT', name: 'San Jose' }],
    EASTERN_SAMAR: [{ code: 'BORONGAN', name: 'Borongan' }],
    GUIMARAS: [{ code: 'JORDAN', name: 'Jordan' }],
    IFUGAO: [{ code: 'LAGAWE', name: 'Lagawe' }],
    ILOCOS_NORTE: [{ code: 'LAOAG', name: 'Laoag' }],
    ILOCOS_SUR: [{ code: 'VIGAN', name: 'Vigan' }],
    ISABELA: [{ code: 'ILAGAN', name: 'Ilagan' }, { code: 'SANTIAGO_ISA', name: 'Santiago' }],
    KALINGA: [{ code: 'TABUK', name: 'Tabuk' }],
    LA_UNION: [{ code: 'SAN_FERNANDO_LU', name: 'San Fernando' }],
    LANAO_DEL_NORTE: [{ code: 'ILIGAN', name: 'Iligan' }],
    LANAO_DEL_SUR: [{ code: 'MARAWI', name: 'Marawi' }],
    LEYTE: [{ code: 'TACLOBAN', name: 'Tacloban' }, { code: 'ORMOC', name: 'Ormoc' }],
    MAGUINDANAO: [{ code: 'COTABATO_CITY', name: 'Cotabato City' }],
    MARINDUQUE: [{ code: 'BOAC', name: 'Boac' }],
    MASBATE: [{ code: 'MASBATE_CITY', name: 'Masbate City' }],
    MISAMIS_OCCIDENTAL: [{ code: 'OROQUIETA', name: 'Oroquieta' }, { code: 'OZAMIZ', name: 'Ozamiz' }],
    MISAMIS_ORIENTAL: [{ code: 'CAGAYAN_DE_ORO', name: 'Cagayan de Oro' }, { code: 'GINGOOG', name: 'Gingoog' }],
    MOUNTAIN_PROVINCE: [{ code: 'BONTOC', name: 'Bontoc' }],
    NEGROS_OCCIDENTAL: [{ code: 'BACOLOD', name: 'Bacolod' }, { code: 'SILAY', name: 'Silay' }, { code: 'TALISAY_NEG_OCC', name: 'Talisay' }],
    NEGROS_ORIENTAL: [{ code: 'DUMAGUETE', name: 'Dumaguete' }, { code: 'BAIS', name: 'Bais' }],
    NORTHERN_SAMAR: [{ code: 'CATARMAN', name: 'Catarman' }],
    NUEVA_ECIJA: [{ code: 'CABANATUAN', name: 'Cabanatuan' }, { code: 'PALAYAN', name: 'Palayan' }, { code: 'SAN_JOSE_NE', name: 'San Jose City' }],
    NUEVA_VIZCAYA: [{ code: 'BAYOMBONG', name: 'Bayombong' }],
    OCCIDENTAL_MINDORO: [{ code: 'MAMBURAO', name: 'Mamburao' }],
    ORIENTAL_MINDORO: [{ code: 'CALAPAN', name: 'Calapan' }],
    PALAWAN: [{ code: 'PUERTO_PRINCESA', name: 'Puerto Princesa' }],
    QUEZON: [{ code: 'LUCENA', name: 'Lucena' }, { code: 'TAYABAS', name: 'Tayabas' }],
    QUIRINO: [{ code: 'CABARROGUIS', name: 'Cabarroguis' }],
    ROMBLON: [{ code: 'ROMBLON_TOWN', name: 'Romblon' }],
    SAMAR: [{ code: 'CALBAYOG', name: 'Calbayog' }, { code: 'CATBALOGAN', name: 'Catbalogan' }],
    SARANGANI: [{ code: 'ALABEL', name: 'Alabel' }],
    SIQUIJOR: [{ code: 'SIQUIJOR_TOWN', name: 'Siquijor' }],
    SORSOGON: [{ code: 'SORSOGON_CITY', name: 'Sorsogon City' }],
    SOUTH_COTABATO: [{ code: 'GENERAL_SANTOS', name: 'General Santos' }, { code: 'KORONADAL', name: 'Koronadal' }],
    SOUTHERN_LEYTE: [{ code: 'MAASIN', name: 'Maasin' }],
    SULTAN_KUDARAT: [{ code: 'ISULAN', name: 'Isulan' }, { code: 'TACURONG', name: 'Tacurong' }],
    SULU: [{ code: 'JOLO', name: 'Jolo' }],
    SURIGAO_DEL_NORTE: [{ code: 'SURIGAO_CITY', name: 'Surigao City' }],
    SURIGAO_DEL_SUR: [{ code: 'TANDAG', name: 'Tandag' }, { code: 'BISLIG', name: 'Bislig' }],
    TARLAC: [{ code: 'TARLAC_CITY', name: 'Tarlac City' }],
    TAWI_TAWI: [{ code: 'BONGAO', name: 'Bongao' }],
    ZAMBALES: [{ code: 'IBA', name: 'Iba' }, { code: 'OLONGAPO', name: 'Olongapo' }],
    ZAMBOANGA_DEL_NORTE: [{ code: 'DIPOLOG', name: 'Dipolog' }, { code: 'DAPITAN', name: 'Dapitan' }],
    ZAMBOANGA_DEL_SUR: [{ code: 'PAGADIAN', name: 'Pagadian' }, { code: 'ZAMBOANGA_CITY', name: 'Zamboanga City' }],
    ZAMBOANGA_SIBUGAY: [{ code: 'IPIL', name: 'Ipil' }],
  },

  barangays: {
    // Metro Manila Barangays (keeping existing detailed data)
    MANILA: ['Ermita', 'Intramuros', 'Malate', 'Paco', 'Pandacan', 'Port Area', 'Sampaloc', 'San Miguel', 'San Nicolas', 'Santa Ana', 'Santa Cruz', 'Tondo'],
    QUEZON: ['Bagbag', 'Batasan Hills', 'Central', 'Commonwealth', 'Diliman', 'Fairview', 'Kamuning', 'Loyola Heights', 'Project 4', 'Project 6', 'Project 8', 'Tandang Sora', 'Teachers Village', 'Timog', 'UP Campus'],
    MAKATI: ['Bel-Air', 'Dasmarinas', 'Forbes Park', 'Guadalupe Nuevo', 'Guadalupe Viejo', 'Magallanes', 'Olympia', 'Palanan', 'Poblacion', 'Rockwell', 'Salcedo', 'San Antonio', 'San Lorenzo', 'Urdaneta', 'Valenzuela'],
    TAGUIG: ['Bagumbayan', 'Bambang', 'Calzada', 'Central Bicutan', 'Central Signal Village', 'Fort Bonifacio', 'Hagonoy', 'Ibayo-Tipas', 'Katuparan', 'Ligid-Tipas', 'Lower Bicutan', 'Maharlika Village', 'Napindan', 'New Lower Bicutan', 'North Signal Village', 'Pinagsama', 'San Miguel', 'Santa Ana', 'Signal Village', 'South Signal Village', 'Tanyag', 'Tuktukan', 'Upper Bicutan', 'Ususan', 'Wawa', 'Western Bicutan'],
    PASIG: ['Bagong Ilog', 'Bagong Katipunan', 'Bambang', 'Buting', 'Caniogan', 'Dela Paz', 'Kalawaan', 'Kapasigan', 'Kapitolyo', 'Malinao', 'Manggahan', 'Maybunga', 'Oranbo', 'Palatiw', 'Pinagbuhatan', 'Pineda', 'Rosario', 'Sagad', 'San Antonio', 'San Joaquin', 'San Jose', 'San Miguel', 'San Nicolas', 'Santa Cruz', 'Santa Lucia', 'Santa Rosa', 'Santo Tomas', 'Santolan', 'Sumilang', 'Ugong'],
    MANDALUYONG: ['Addition Hills', 'Bagong Silang', 'Barangka Drive', 'Barangka Ibaba', 'Barangka Ilaya', 'Barangka Itaas', 'Buayang Bato', 'Burol', 'Daang Bakal', 'Hagdang Bato Itaas', 'Hagdang Bato Libis', 'Harapin ang Bukas', 'Highway Hills', 'Hulo', 'Mabini-J. Rizal', 'Malamig', 'Mauway', 'Namayan', 'New Zañiga', 'Old Zañiga', 'Pag-asa', 'Plainview', 'Pleasant Hills', 'Poblacion', 'San Jose', 'Vergara', 'Wack-Wack Greenhills'],
    SAN_JUAN: ['Addition Hills', 'Balong-Bato', 'Batis', 'Corazon de Jesus', 'Ermitaño', 'Greenhills', 'Isabelita', 'Kabayanan', 'Little Baguio', 'Maytunas', 'Onse', 'Pasadeña', 'Pedro Cruz', 'Progreso', 'Rivera', 'Salapan', 'San Perfecto', 'Santa Lucia', 'Tibagan', 'West Crame'],
    MARIKINA: ['Barangka', 'Calumpang', 'Concepcion Uno', 'Concepcion Dos', 'Fortune', 'Industrial Valley', 'Jesus dela Peña', 'Malanday', 'Marikina Heights', 'Nangka', 'Parang', 'San Roque', 'Santa Elena', 'Santo Niño', 'Tañong', 'Tumana'],
    CALOOCAN: ['Bagong Silang', 'Bagumbong', 'Camarin', 'Kaybiga', 'Tala', 'Grace Park', 'San Jose'],
    MALABON: ['Acacia', 'Baritel', 'Bayan-bayanan', 'Catmon', 'Concepcion', 'Dampalit', 'Flores', 'Hulong Duhat', 'Ibaba', 'Longos', 'Maysilo', 'Muzon', 'Niugan', 'Panghulo', 'Potrero', 'San Agustin', 'Santolan', 'Tañong', 'Tinajeros', 'Tonsuya', 'Tugatog'],
    NAVOTAS: ['Bagumbayan North', 'Bagumbayan South', 'Bangculasi', 'Daanghari', 'Navotas East', 'Navotas West', 'North Bay Blvd North', 'North Bay Blvd South', 'San Jose', 'San Rafael Village', 'San Roque', 'Sipac-Almacen', 'Tangos', 'Tanza'],
    VALENZUELA: ['Arkong Bato', 'Bagbaguin', 'Balangkas', 'Bignay', 'Bisig', 'Canumay East', 'Canumay West', 'Coloong', 'Dalandanan', 'Isla', 'Karuhatan', 'Lawang Bato', 'Lingunan', 'Mabolo', 'Malanday', 'Malinta', 'Mapulang Lupa', 'Marulas', 'Maysan', 'Palasan', 'Parada', 'Pariancillo Villa', 'Paso de Blas', 'Pasolo', 'Poblacion', 'Polo', 'Punturin', 'Rincon', 'Tagalag', 'Ugong', 'Viente Reales', 'Wawang Pulo'],
    LAS_PINAS: ['Almanza Uno', 'Almanza Dos', 'BF International', 'Daniel Fajardo', 'Elias Aldana', 'Ilaya', 'Manuyo Uno', 'Manuyo Dos', 'Pamplona Uno', 'Pamplona Dos', 'Pamplona Tres', 'Pilar', 'Pulang Lupa Uno', 'Pulang Lupa Dos', 'Talon Uno', 'Talon Dos', 'Talon Tres', 'Talon Cuatro', 'Talon Singko', 'Zapote'],
    MUNTINLUPA: ['Alabang', 'Ayala Alabang', 'Buli', 'Cupang', 'Poblacion', 'Putatan', 'Sucat', 'Tunasan', 'Bayanan'],
    PARANAQUE: ['Baclaran', 'BF Homes', 'Don Bosco', 'Don Galo', 'La Huerta', 'Marcelo Green', 'Merville', 'Moonwalk', 'San Antonio', 'San Dionisio', 'San Isidro', 'San Martin de Porres', 'Santo Niño', 'Sun Valley', 'Tambo', 'Vitalez'],
    PASAY: ['Baclaran', 'Domestic Airport', 'EDSA', 'F.B. Harrison', 'Libertad', 'Malibay', 'Maricaban', 'Pasay Rotonda', 'San Isidro', 'San Jose', 'San Rafael', 'San Roque', 'Santa Clara', 'Santo Niño', 'Tramo', 'Villamor'],
    PATEROS: ['Aguho', 'Magtanggol', 'Martires del 96', 'Poblacion', 'San Pedro', 'San Roque', 'Santa Ana', 'Santo Rosario-Kanluran', 'Santo Rosario-Silangan', 'Tabacalera'],
    
    // Generic barangays for other cities (can be used across most cities)
    // These are common barangay names found throughout the Philippines
    DEFAULT: ['Poblacion', 'San Jose', 'San Antonio', 'Santa Cruz', 'San Isidro', 'San Vicente', 'San Pedro', 'San Juan', 'San Miguel', 'Santo Niño', 'San Francisco', 'San Roque', 'Santa Maria', 'San Nicolas', 'San Rafael', 'Barangay 1', 'Barangay 2', 'Barangay 3', 'Zone 1', 'Zone 2', 'Zone 3'],
  }
}

// Helper function to get provinces by region
export const getProvincesByRegion = (regionCode) => {
  return philippineAddresses.provinces[regionCode] || []
};

// Helper function to get barangays for a city
// Falls back to DEFAULT if specific barangays not defined
export const getBarangays = (cityCode) => {
  return philippineAddresses.barangays[cityCode] || philippineAddresses.barangays.DEFAULT
};
