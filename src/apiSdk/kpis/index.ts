import axios from 'axios';
import queryString from 'query-string';
import { KpiInterface, KpiGetQueryInterface } from 'interfaces/kpi';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getKpis = async (query?: KpiGetQueryInterface): Promise<PaginatedInterface<KpiInterface>> => {
  const response = await axios.get('/api/kpis', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createKpi = async (kpi: KpiInterface) => {
  const response = await axios.post('/api/kpis', kpi);
  return response.data;
};

export const updateKpiById = async (id: string, kpi: KpiInterface) => {
  const response = await axios.put(`/api/kpis/${id}`, kpi);
  return response.data;
};

export const getKpiById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/kpis/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteKpiById = async (id: string) => {
  const response = await axios.delete(`/api/kpis/${id}`);
  return response.data;
};
