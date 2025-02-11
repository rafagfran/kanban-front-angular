export type TaskType = {
  id: string;
  title: string;
  description: string;
};
export type ColumnType = {
  title: string;
  tasks: TaskType[];
};

export const MOCK_DATA: ColumnType[] = [];
