export type TaskType = {
  id: string;
  title: string;
  description: string;
};
export type ColumnType = {
  title: string;
  tasks: TaskType[];
};

export const MOCK_DATA: ColumnType[] = [
  {
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        description:
          'Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1',
      },
      { id: '2', title: 'Task 2', description: 'Description 2' },
      { id: '3', title: 'Task 3', description: 'Description 3' },
    ],
  },
  {
    title: 'Progress',
    tasks: [
      { id: '1', title: 'Task 1', description: 'Description 1' },
      { id: '2', title: 'Task 2', description: 'Description 2' },
      { id: '3', title: 'Task 3', description: 'Description 3' },
    ],
  },
  {
    title: 'Done',
    tasks: [
      { id: '1', title: 'Task 1', description: 'Description 1' },
      { id: '2', title: 'Task 2', description: 'Description 2' },
      { id: '3', title: 'Task 3', description: 'Description 3' },
    ],
  },
];
