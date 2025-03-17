const userData = [
  { id: '21900386', code: 'TN9H-CH4V-S256' },
  { id: '21900644', code: '3V79-9N7N-V599' },
  { id: '22000003', code: 'ZQZW-TQT3-GX7V' },
  { id: '22000084', code: 'JZ65-NMRT-7YFH' },
  { id: '22000416', code: 'TZ5Y-99Y6-6WCN' },
  { id: '22100096', code: 'DDP9-ZMW6-GF77' },
  { id: '22100141', code: 'CFP4-QP5P-DCFN' },
  { id: '22100544', code: 'H2MP-WDCP-WRGM' },
  { id: '22100750', code: '7CPT-759S-VQ9R' },
  { id: '22200054', code: '2NK9-5F9X-HQKV' },
  { id: '22200150', code: '2RRP-SK2P-ZJWM' },
  { id: '22200204', code: '7TNV-D55J-VMVV' },
  { id: '22300362', code: 'D25Q-K65Z-KFJR' },
  { id: '22300598', code: 'D3F6-CJ3C-9W5K' },
  { id: '22400138', code: 'Y37F-Z9ZH-KM5Y' },
  { id: '22400238', code: 'GYV3-PDRS-2JR7' },
  { id: '22400249', code: 'QSS5-SRVV-VGQG' },
  { id: '22400459', code: '4V3S-CJGZ-J347' },
  { id: '22400467', code: 'FNK5-3CH9-C749' },
  { id: '22400530', code: 'HH43-4XRG-SNXY' },
  { id: '22400563', code: 'WHJH-WTZ2-TYPX' },
  { id: '22400742', code: '7NQS-QJRN-MZ5S' },
  { id: '22400758', code: 'MKSQ-QGHG-KXMK' },
  { id: '22400785', code: 'ZD3D-HSD5-4VNW' },
  { id: '22400834', code: '3637-9D6C-2YJN' },
  { id: '22400839', code: 'X6QV-5GNH-NMZW' },
  { id: '22500013', code: '9WRC-NYGF-WKCR' },
  { id: '22500043', code: 'GHYF-37H4-HVRR' },
  { id: '22500052', code: '3SPV-GTPK-3X5D' },
  { id: '22500057', code: 'FZFX-C9FG-NHJV' },
  { id: '22500058', code: 'RJ9Q-VXVK-P3KK' },
  { id: '22500071', code: '4H5P-VP42-2SSZ' },
  { id: '22500072', code: 'P6X7-6TN3-ZQQJ' },
  { id: '22500125', code: 'TT96-T4ZZ-RW74' },
  { id: '22500137', code: 'QQQN-Q9DR-JT7K' },
  { id: '22500164', code: 'T9M6-MKF4-XR57' },
  { id: '22500165', code: '47DY-GNXR-TJ3M' },
  { id: '22500166', code: 'CQ9M-Q7TQ-W9HS' },
  { id: '22500178', code: 'WQPJ-47MQ-WGWK' },
  { id: '22500207', code: '2FJ7-V6D3-K4YN' },
  { id: '22500213', code: '6RSD-R5FK-9N5Y' },
  { id: '22500263', code: 'WZF5-J9KN-2VZ5' },
  { id: '22500286', code: 'X9DW-6KN6-X4N6' },
  { id: '22500294', code: 'ZRSR-SCFP-NGJ9' },
  { id: '22500309', code: 'CX4Q-J4CS-P6FQ' },
  { id: '22500313', code: 'TMKC-HRR9-K4GX' },
  { id: '22500323', code: '99JR-2432-79J2' },
  { id: '22500366', code: 'DDPD-57JP-R596' },
  { id: '22500372', code: 'HG5F-3K6Y-NMDK' },
  { id: '22500400', code: 'ZWCW-KYQH-9H5C' },
  { id: '22500405', code: 'XTDX-CDGX-Z5V5' },
  { id: '22500438', code: '9PJ4-P6KD-VZ2Q' },
  { id: '22500443', code: 'NSPX-ZGMZ-X6N4' },
  { id: '22500480', code: 'QVRR-Y3QT-QWRH' },
  { id: '22500494', code: '679P-7Z65-TJ9Q' },
  { id: '22500506', code: '2SGW-CHJW-CHK2' },
  { id: '22500650', code: 'Q2C6-KJN7-6M73' },
  { id: '22500680', code: '263G-WSKY-4N3P' },
  { id: '22500719', code: 'XGNF-DT46-XTHS' },
  { id: '22500726', code: 'NSPM-Y5K3-VJD5' },
  { id: '22500738', code: 'CD25-K79Z-QPNW' },
  { id: '22500746', code: 'X2H6-G49Q-KVWY' },
  { id: '22500804', code: '5N64-Z37R-3DHC' },
  { id: '22500823', code: 'NX3F-MRG6-7MMX' },
  { id: '22500824', code: 'TSSR-76G4-ZQ3V' }
];

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

exports.handler = async function(event, context) {
  try {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data: userData })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: '데이터를 불러오는 중 오류가 발생했습니다.' })
    };
  }
}; 