export interface Notice {
  id?: number;
  title: string;
  content: string;
  authorId: number;
  created?: Date;
  updated?: Date;
}
