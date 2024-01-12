import { useEffect } from "react";
import Form from "../../components/Form";
import { HomeContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/reducers/toastMessage";

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addMessage([]))
    }, [])

    return (

        <HomeContainer>
            <Form />
        </HomeContainer>
    )
}