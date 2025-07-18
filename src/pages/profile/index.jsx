import { useParams } from "react-router"

export default function Profile() {

    const {sluq} = useParams()

    return (
        <div>
            profile page - {sluq}
        </div>
    )
}