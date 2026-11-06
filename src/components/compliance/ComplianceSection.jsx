'use client';

import React from 'react';
import GstSection from './GstSection';
import ZatcaSection from './ZatcaSection';

export { GstSection, ZatcaSection };

export default function ComplianceSection({ countryCode = 'IN', data }) {
  if (countryCode === 'SA') {
    return <ZatcaSection zatcaData={data} />;
  }
  return <GstSection gstData={data} />;
}
