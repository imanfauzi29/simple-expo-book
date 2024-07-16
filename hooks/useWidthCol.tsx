import {Dimensions} from "react-native";
import {useMemo} from "react";

export default function useWidthCol(columns: number, margin: number = 23) {
    const {width} = Dimensions.get("window");
    const cardWidth = useMemo(() => (width - margin * columns) / columns, [columns])

    return {columns, cardWidth}
}