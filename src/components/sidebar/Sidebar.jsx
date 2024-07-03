import SidebarList from "./SidebarList";

export default function Sidebar({logoName}) {
    return (
        <aside>
            <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(0, 0, 0, 0.125', backgroundColor: '#f8f9fa'}}>
                {logoName}
            </div>
            <SidebarList/>
        </aside>
    )
}