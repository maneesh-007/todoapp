import UserHeader from "../layout/UserHeader";
import List from "../blocks/List";
import UserFooter from "../layout/UserFooter";
import { useCallback } from "react";

export default function TodoList() {
    const listHeaders = ["Name", "Status"];
    const data = [
        { id: 1, name: "Learn React", status: "Pending" } // Example row structure
    ];

    const handleDelete = useCallback((row) => {
        console.log("Delete item:", row);
    }, []);

    return (
        <>
            <UserHeader />
            <List 
                ListHeader={listHeaders} 
                ListItems={data} 
                updateUrl="/edit-todo" 
                handleDelete={handleDelete} 
            />
            <UserFooter />
        </>
    );
}