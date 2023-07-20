import axios from 'axios';
import queryString from 'query-string';
import { SkillInterface, SkillGetQueryInterface } from 'interfaces/skill';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSkills = async (query?: SkillGetQueryInterface): Promise<PaginatedInterface<SkillInterface>> => {
  const response = await axios.get('/api/skills', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSkill = async (skill: SkillInterface) => {
  const response = await axios.post('/api/skills', skill);
  return response.data;
};

export const updateSkillById = async (id: string, skill: SkillInterface) => {
  const response = await axios.put(`/api/skills/${id}`, skill);
  return response.data;
};

export const getSkillById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/skills/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSkillById = async (id: string) => {
  const response = await axios.delete(`/api/skills/${id}`);
  return response.data;
};
