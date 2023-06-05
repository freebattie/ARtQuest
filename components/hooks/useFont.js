import { useState, useEffect } from "react";
import * as Font from "expo-font";


////////////////////////////////////////////////////////////////////////
// Loading font from assets asynchronously and will load the font
// before the application starts
export default function useFont() {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadFont() {
            try {
                await Font.loadAsync({
                    "backslant": require("../../assets/fonts/Backslant/Desktop/GirottMunch-BoldBackslant.ttf"),
                })
                
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoadingComplete(true);
            }
        }

        loadFont();
    }, [])

    return isLoadingComplete;
}