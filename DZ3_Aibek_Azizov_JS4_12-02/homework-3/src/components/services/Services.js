


export const Services = (props) => {

    console.log(props.services)

    return (
        <ul>
            {props.services.map((el, key) => {
                return (
                    <li>{el}</li>
                )
            })}

        </ul>
    )
}