import { useEffect, useState } from 'react';
import './modal.css';

const Input = ({ label, value, updateValue }) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    );
}

export function CreateModal({ closeModal }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useGameDataMutate(); // Certifique-se de que o hook correto está sendo importado

    const submit = () => {
        const gameData = {
            title,
            genre,
            image
        };
        mutate(gameData);
    }

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo jogo</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Gênero" value={genre} updateValue={setGenre} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
        </div>
    );
}
