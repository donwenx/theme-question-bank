export interface ReqParams {
  limit: number;
  page: number;
}

export interface ResResult {
  id: string;
  name: string;
  password?: string;
  avatar?: string;
}

interface ResInfoListItem {
  id: number;
  num: number;
  time: string;
}

export interface ResInfoList {
  total_num: number;
  children: ResInfoListItem[];
}