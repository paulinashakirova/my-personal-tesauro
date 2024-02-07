export interface CardType {
  id: string;
  name: string | null;
  pronunciation: string | null;
  definition: string | null;
  dateAdded: Date | string;
}
