const userData = [
  { id: '21600207', code: '4DVR-QTCN-X7DD' },
  { id: '21900633', code: 'Z43Z-5N2H-JYWG' },
  { id: '22000040', code: '4K3M-XW25-3CVY' },
  { id: '22000542', code: 'QDWM-XZJS-HPXY' },
  { id: '22000616', code: 'YQ6G-ZVR9-VXQY' },
  { id: '22000675', code: 'Z2JN-FYX9-DP96' },
  { id: '22000797', code: 'JSJ7-MFNQ-CJ73' },
  { id: '22100032', code: 'F4M2-XQF2-TPHF' },
  { id: '22100613', code: '39T4-SKC5-TFRX' },
  { id: '22100673', code: 'VJZ6-QQS7-MQX3' },
  { id: '22200515', code: '956M-CQZM-TV9D' },
  { id: '22300422', code: '3MXQ-GNG2-HPFH' },
  { id: '22300517', code: '2VM2-2CYW-WXMR' },
  { id: '22300633', code: 'RJJZ-2SMK-TNKJ' },
  { id: '22301003', code: 'PP4M-YCTD-9SZP' },
  { id: '22301011', code: 'QXG3-T5FJ-GZG5' },
  { id: '22400242', code: 'G9VH-GGFK-K76T' },
  { id: '22400435', code: 'XVDT-MZNP-F3T2' },
  { id: '22400635', code: '9ZMP-ZZGX-TKRH' },
  { id: '22400832', code: 'PNC7-XRCS-N7Q4' },
  { id: '22500024', code: 'DKZ3-3Z6W-34HM' },
  { id: '22500026', code: 'C6V7-QV9M-QP7S' },
  { id: '22500037', code: 'R732-D2N2-4ZNY' },
  { id: '22500063', code: '567F-H3JJ-RJ22' },
  { id: '22500067', code: '4C54-J4Y2-XTFG' },
  { id: '22500116', code: 'YNDS-WGZX-Z496' },
  { id: '22500132', code: 'XZPD-CMGH-KHH2' },
  { id: '22500146', code: '5TM3-SSMD-TJY2' },
  { id: '22500149', code: 'TXRP-2NHV-MRV6' },
  { id: '22500231', code: 'J4N6-JJZ4-5H9K' },
  { id: '22500242', code: '97GN-WM5M-P9DC' },
  { id: '22500244', code: 'FDS9-W2P7-2N2W' },
  { id: '22500252', code: '7DHK-TY6D-SMRQ' },
  { id: '22500283', code: 'PTYG-5542-DNX5' },
  { id: '22500289', code: '6X7Y-7D3F-6T6H' },
  { id: '22500317', code: 'Q9JD-49SG-P3M4' },
  { id: '22500376', code: '2W6K-M7ZY-WFHK' },
  { id: '22500399', code: 'NXYN-WS63-H4MH' },
  { id: '22500456', code: 'GSDX-VWHN-VF33' },
  { id: '22500476', code: 'Y5RH-QJ9S-YVMJ' },
  { id: '22500496', code: '9CVR-RZX9-CMCY' },
  { id: '22500504', code: 'FN2K-WYHZ-5SYW' },
  { id: '22500513', code: '3J5Y-YY3N-MGJX' },
  { id: '22500514', code: 'X637-W3VF-K9FX' },
  { id: '22500515', code: 'TNRR-CG9P-RY97' },
  { id: '22500520', code: '526C-RJF7-3JJY' },
  { id: '22500543', code: 'XVW2-KT59-ZKYV' },
  { id: '22500562', code: '5J6M-GFZY-GNRS' },
  { id: '22500588', code: 'D34F-P9ZS-DYNC' },
  { id: '22500619', code: '9VJW-T5QR-J45H' },
  { id: '22500626', code: 'PXQ7-2FCP-W2CD' },
  { id: '22500637', code: 'TNVP-W975-MMCK' },
  { id: '22500665', code: 'CMCZ-X346-F6XK' },
  { id: '22500667', code: 'MZVK-YWSM-SXMQ' },
  { id: '22500670', code: '3YSP-WTP4-NMJS' },
  { id: '22500686', code: 'GVXF-6TZH-7HYW' },
  { id: '22500733', code: 'MWX6-G94R-N3WJ' },
  { id: '22500739', code: 'KJZR-2HCF-VSXV' },
  { id: '22500769', code: 'R3GC-QC5Z-T3X2' }
];

exports.handler = async function(event, context) {
  try {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ data: userData })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: '데이터를 불러오는 중 오류가 발생했습니다.' })
    };
  }
}; 