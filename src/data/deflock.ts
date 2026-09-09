
export type CameraRecord = {
  id: string;
  vendor: string;
  agency: string;
  agencyVerified: boolean;
  verification: 'confirmed' | 'unknown';
  latitude: number;
  longitude: number;
  source: string;
  locationNote?: string;
  photos?: string[];
};

export const cameraRegistry: CameraRecord[] = [
  { id:'13308629301', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.23992, longitude:-88.89062, source:'deflock.org' },
  { id:'13416857360', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.31308, longitude:-88.70518, source:'deflock.org' },
  { id:'13416857361', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.31343, longitude:-88.70858, source:'deflock.org' },
  { id:'13471676902', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'confirmed', latitude:42.23780, longitude:-88.82040, source:'Physical scout', locationNote:'West of Walmart, facing northbound on Genoa Rd.', photos:['camera-13471676902.jpg'] },
  { id:'13471726801', vendor:'Motorola Solutions', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.24199, longitude:-88.86064, source:'deflock.org' },
  { id:'13471759701', vendor:'Motorola Solutions', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.23871, longitude:-88.86063, source:'deflock.org' },
  { id:'13472173501', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.25147, longitude:-88.81760, source:'deflock.org' },
  { id:'13472200001', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'confirmed', latitude:42.23991, longitude:-88.81563, source:'Physical scout', photos:['camera-13472200001.jpg','camera-13472200001-1.jpg','camera-13472200001-2.jpg'] },
  { id:'13484989001', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.23488, longitude:-88.91028, source:'deflock.org' },
  { id:'13534713801', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.25185, longitude:-88.91979, source:'deflock.org' },
  { id:'13534716001', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.25301, longitude:-88.92592, source:'deflock.org' },
  { id:'13568386001', vendor:'Flock Safety', agency:'Unknown', agencyVerified:false, verification:'confirmed', latitude:42.23797, longitude:-88.82090, source:'Physical scout', locationNote:'West of Walmart, facing southbound on Genoa Rd.', photos:['camera-13568386001.jpg','camera-13568386001-1.jpg'] },
  { id:'13586113692', vendor:'Unknown', agency:'Unknown', agencyVerified:false, verification:'unknown', latitude:42.27580, longitude:-88.86920, source:'deflock.org' },
];

export const belvidereFoiaLocations = [
  { name:'F#001 State @ Van Epps (EB)', status:'Installed', type:'LPR Camera' },
  { name:'F#002 I 90 Alt South of Walmart (SB)', status:'Installed', type:'LPR Camera' },
  { name:'F#003 Route 20 West of Town Hall (EB)', status:'Installed', type:'LPR Camera' },
  { name:'F#004 Gateway Center Exit towards Route 20', status:'Installed', type:'LPR Camera' },
  { name:'Flex#0001', status:'Installed', type:'Flex LPR Camera' },
  { name:'F#005 Newburg Rd @ Shaw Rd (EB)', status:'Installed', type:'Bundle: (1) LPR Camera' },
  { name:'F#008 Irene Road and Hawkey Road', status:'Planning', type:'Bundle: (1) LPR Camera' },
];
