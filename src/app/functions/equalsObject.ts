import { ElementStyles } from "src/app/reducers/element-styles/element-styles.reducer";

export const isEqual = (object1:ElementStyles, object2:ElementStyles) => JSON.stringify(object1) === JSON.stringify(object2);