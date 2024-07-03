import SidebarListItem from "./SidebarListItem";

const listItems = [
  {
    content: "Dashboard",
    path: "/dashboard",
  },
  {
    content: "Shortcuts",
    path: "/shortcuts",
  },
  {
    content: "Overview",
    path: "/overview",
  },
  {
    content: "Events",
    path: "/events",
  },
  {
    content: "Profile",
    path: "/profile",
  },
  {
    content: "Status",
    path: "/status",
  },
];


export default function SidebarList() {
  return (
    <ul>
      {listItems.map(({ content }, index) => (
        <SidebarListItem content={content} isLastChild={index === listItems.length - 1}/>
      ))}
    </ul>
  );
}
