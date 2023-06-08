import {useContext, useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {Appcontext} from "../../lib/AppContext";


/**
 * Custom hook to get all quests from server
 * and will update when screen is focused
 * @returns {*[]} array of quests from server
 */
export default function useGetAllQuest() {
    const [quests, setQuests] = useState([]);

    const screenIsFocused = useIsFocused();

    const {getAllQuest} = useContext(Appcontext);

    useEffect(() => {
        const getQuests = async () => {
            console.log('Getting quests from server');
            const data = await getAllQuest();
            setQuests(data);
        };

        if (screenIsFocused) {
            getQuests();
        }
    }, [screenIsFocused]);

    return quests;
}