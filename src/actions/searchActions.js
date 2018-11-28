export const SEARCH_TEXT = 'SEARCH_TEXT'

export function SearchText(text) {
    return {
        type: SEARCH_TEXT,
        payload: text,
    };
}