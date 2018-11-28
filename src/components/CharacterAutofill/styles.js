export default {
    container: {
        position: 'relative'
    },
    input: {
        width: '85%',
        height: 30,
        margin:'10px 20px',
        padding: '0 20px',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        
        border: '0px solid #aaa',
        borderBottom: '1px solid gray'
    },
    inputFocused: {
        outline: 'none'
    },
    inputOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    suggestionsContainer: {
        display: 'none'
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: 51,
        width: 280,
        border: '1px solid #aaa',
        backgroundColor: '#fff',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 2
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    suggestion: {
        cursor: 'pointer',
        padding: '10px 20px'
    },
    suggestionHighlighted: {
        backgroundColor: '#ddd'
    }
};