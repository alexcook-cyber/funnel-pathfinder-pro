import { useState } from 'react';
export interface PathfinderData {
  name: string;
  url: string;
  tradingMonth: string;
  tradingYear: string;
  businessGeneration: string[];
  businessGenerationOther: string;
  monthlyLeads: string;
  hasGMB: string;
  cms: string;
  industry: string;
  postcode: string;
  avgCTR: string;
  trackingConversions: string;
  avgCPC: string;
  costPerAcquisition: string;
  conversionRate: string;
  ctaVisibility: string;
  servicePages: string;
  leadManagementSystem: string;
  responseTime: string;
  clientName: string;
  contractSelected: string;
  recRev: string;
  websiteUsername: string;
  websitePassword: string;
  loginPageUrl: string;
}
export function usePathfinderState() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<PathfinderData>({
    name: '',
    url: '',
    tradingMonth: '',
    tradingYear: '',
    businessGeneration: [],
    businessGenerationOther: '',
    monthlyLeads: '',
    hasGMB: '',
    cms: '',
    industry: '',
    postcode: '',
    avgCTR: '',
    trackingConversions: '',
    avgCPC: '',
    costPerAcquisition: '',
    conversionRate: '',
    ctaVisibility: '',
    servicePages: '',
    leadManagementSystem: '',
    responseTime: '',
    clientName: '',
    contractSelected: '',
    recRev: '',
    websiteUsername: '',
    websitePassword: '',
    loginPageUrl: ''
  });
  const updateData = (updates: Partial<PathfinderData>) => {
    setData(prev => ({
      ...prev,
      ...updates
    }));
  };
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, 11));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  return {
    currentPage,
    data,
    updateData,
    nextPage,
    prevPage
  };
}