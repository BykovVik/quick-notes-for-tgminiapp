export interface Note {
    id: string;
    title: string;
    body: string;
    category: string;
}
export interface NoteState {
    notes: Note[];
    categories: string[];
}