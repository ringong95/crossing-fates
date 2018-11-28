export const FETCH_MATCHES = 'FETCH_MATCHES'

export function FetchMatches(matches) {
    return {
        type: FETCH_MATCHES,
        payload: matches,
    };
}