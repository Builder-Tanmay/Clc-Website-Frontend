export const centres = [
  {
    id: 'nerul',
    name: 'Nerul Centre (Head Office)',
    category: 'Navi Mumbai',
    area: 'Navi Mumbai',
    address: 'Shop No. 4 & 5, Beside CSB Bank, Sai Sthan Apt, Sector 29, Nerul East, Navi Mumbai',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre Nerul East, Shop No. 4 & 5 Sai Sthan Apt Sector 29 Navi Mumbai'
  },
  {
    id: 'thane',
    name: 'Thane Centre',
    category: 'Mumbai / Thane',
    area: 'Thane',
    address: 'Near Teen Hath Naka, Thane West, Maharashtra',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre Thane Teen Hath Naka Thane West Maharashtra'
  },
  {
    id: 'chembur',
    name: 'Chembur Centre',
    category: 'Mumbai / Thane',
    area: 'Mumbai',
    address: 'Central Avenue Road, Chembur, Mumbai',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre Chembur Central Avenue Road Mumbai'
  },
  {
    id: 'vashi',
    name: 'Vashi Centre',
    category: 'Navi Mumbai',
    area: 'Navi Mumbai',
    address: 'Sector 17, Vashi, Navi Mumbai',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre Sector 17 Vashi Navi Mumbai'
  },
  {
    id: 'nagpur',
    name: 'Nagpur Centre',
    category: 'Other',
    area: 'Nagpur',
    address: 'Ramdaspeth, Nagpur, Maharashtra',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre Ramdaspeth Nagpur Maharashtra'
  },
  {
    id: 'nashik',
    name: 'Nashik Centre',
    category: 'Other',
    area: 'Nashik',
    address: 'College Road, Nashik, Maharashtra',
    phone: '+91 90044 60650',
    timing: 'Mon – Sat, 9:00 AM – 7:30 PM',
    mapQuery: 'Child Learning Centre College Road Nashik Maharashtra'
  }
];

export function getMapsUrl(centre) {
  return (
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(centre.mapQuery || `Child Learning Centre ${centre.area}, ${centre.address}`)
  );
}

