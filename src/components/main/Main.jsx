import Button from "./ToogleBtn";


const styles = {
    main: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.125)',
        height: '100dvh',
        width: '100%',
        
    },
    header: {
        padding: '7px 12px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid rgba(0, 0, 0, 0.125)'
    }
}

// export default function clickBtn(){
//     Button.addEventListener('click', () => {
//         alert('Button Clicked')
//     })
// }

export default function Main() {
    return (
        <main style={styles.main}>
            <header style={styles.header}>
                <Button/>
            </header>
            <section></section>
        </main>
    )
}