
const styles = {
    btn: {
        backgroundColor: '#0d6efd',
        color: 'white',
        padding: '9px 18px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
    }
}

export default function Button() {
    return (
        <button style={styles.btn}>Toogle Button</button>
    )
}
