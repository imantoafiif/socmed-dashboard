import useFetchUser from "../../hooks/useFetchUser"

const User = () => {

    const { data } = useFetchUser()

    return (
        <>
            {
                data.map(item => (
                    <p key={item.id}>{ item.name }</p>
                ))
            }
        </>
    )
}

export default User