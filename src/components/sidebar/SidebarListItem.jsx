

const styles = {
    _: (isLastChild) => ({
        borderBottom: !isLastChild && '1px solid rgba(0, 0, 0, 0.125)',
        cursor: 'pointer',
        // transition: 'background 0.3s ease',
        // backgroundColor: 'rgba(0, 0, 0, 0.125)',
        
    }),
    link: {
        display: 'block',
        padding: 16,
    }
    
}

export default function SidebarListItem({content, isLastChild}) {
    return (
        <li style={styles._(isLastChild)}>
            <a style={styles.link}>{content}</a>
        </li>
    )
    
}