import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GoalInterface {
  id?: string;
  name: string;
  value: number;
  developer_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GoalGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  developer_id?: string;
}
