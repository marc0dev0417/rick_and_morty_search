import { RenderType } from "../Types/RenderType";


const RenderRouter = (prop: RenderType) => {
    return (
        <>
            {prop.element}
        </>
    )
}
export default RenderRouter