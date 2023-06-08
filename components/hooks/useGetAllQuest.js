import { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Appcontext } from "../../lib/AppContext";


/**
 * Custom hook to get all quests from server
 * and will update when screen is focused
 * @returns {*[]} array of quests from server
 */
export default function useGetAllQuest() {
    const [quests, setQuests] = useState([]);

    const screenIsFocused = useIsFocused();

    const { getAllQuest } = useContext(Appcontext);

    useEffect(() => {
        const getQuests = async () => {
            const data = await getAllQuest();
            console.log('Getting quests from server', data);
            setQuests(data);
        };

        // Fetch only when current screen is active 
        if (screenIsFocused) {
            getQuests();
        }
    }, [screenIsFocused]);

    return quests;
}
